import { createRoot } from "react-dom/client";
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { onError } from '@apollo/client/link/error';
import { Observable } from '@apollo/client/utilities';
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { GraphQLClient } from 'graphql-request';
import { routeTree } from "./routeTree.gen";
import { GET_CURRENT_SESSION_TOKEN, GET_ADMIN_TOKEN } from "./graphql";
import { StrictMode } from "react";

const router = createRouter({ routeTree });
const endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT;

const httpLink = new HttpLink({
  uri: endpoint,
});

// user: front_end
// pw: sS!uxQ)j1sA4qe(fTQJ7*$ib
// TODO: update pw with app-specific one and see about restricting this users abilities

// const authLink = new SetContextLink(async ({ headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("token");
//   const sessionToken = await getSessionToken();
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });


// Session Token Management
async function fetchSessionToken() {
  let sessionToken;
  try {
    const graphQLClient = new GraphQLClient(endpoint);

    const tokenData = await graphQLClient.request(GET_CURRENT_SESSION_TOKEN);

    // If user doesn't have an account return accountNeeded flag.
    sessionToken = tokenData?.customer?.sessionToken;

    if (!sessionToken) {
      throw new Error('Failed to retrieve a new session token');
    }
  } catch (err) {
    console.error(err);
  }

  return sessionToken;
}

async function fetchAuthToken() {
  let authToken;
  try {
    const graphQLClient = new GraphQLClient(endpoint);
    const tokenData = await graphQLClient.request(GET_ADMIN_TOKEN);
    authToken = tokenData?.login?.authToken;

    if (!authToken) {
      throw new Error('Failed to retrieve a new auth token');
    }
  } catch (err) {
    console.error(err);
  }

  return authToken;
}

function createErrorLink() {
  return onError(({ graphQLErrors, operation, forward }) => {
    const targetErrors = [
      'The iss do not match with this server',
      'invalid-secret-key | Expired token',
      'invalid-secret-key | Signature verification failed',
      'Expired token',
      'Wrong number of segments',
    ];
    let observable;
    if (graphQLErrors?.length) {
      graphQLErrors.map(({ debugMessage, message }) => {
        if (targetErrors.includes(message) || targetErrors.includes(debugMessage)) {
          observable = new Observable((observer) => {
            getSessionToken(true)
              .then((sessionToken) => {
                operation.setContext(({ headers = {} }) => {
                  const nextHeaders = headers;

                  if (sessionToken) {
                    nextHeaders['woocommerce-session'] = `Session ${sessionToken}`;
                  } else {
                    delete nextHeaders['woocommerce-session'];
                  }

                  return {
                    headers: nextHeaders,
                  };
                });
              })
              .then(() => {
                const subscriber = {
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                };
                forward(operation).subscribe(subscriber);
              })
              .catch((error) => {
                observer.error(error);
              });
          });
        }
      });
    }
    return observable;
  });
}

export async function getSessionToken(forceFetch = false) {
  let sessionToken = localStorage.getItem(process.env.VITE_SESSION_TOKEN_LS_KEY);
  if (!sessionToken || forceFetch) {
    sessionToken = await fetchSessionToken();
  }
  return sessionToken;
}

export async function getAuthToken(forceFetch = false) {
  let authToken = localStorage.getItem(process.env.VITE_AUTH_TOKEN_LS_KEY);
  if (!authToken || forceFetch) {
    authToken = await fetchAuthToken();
  }
  return authToken;
}

const consoleLink = new ApolloLink((operation, forward) => {
  operation.setContext(async () => {
    const headers = {};
    const sessionToken = await getSessionToken();
    const authToken = await getAuthToken(true);

    if (sessionToken) {
      headers['woocommerce-session'] = `Session ${sessionToken}`;
    }

    if (authToken) {
      headers['authorization'] = `Bearer ${authToken}`;
    }
    return headers;
  });
  return forward(operation);
});

// function createSessionLink() {
//   return setContext(async (operation) => {
//     const headers = {};
//     const sessionToken = await getSessionToken();

//     if (sessionToken) {
//       headers['woocommerce-session'] = `Session ${sessionToken}`;

//       return { headers };
//     }

//     return {};
//   });
// }

// link: authLink.concat(httpLink),
const client = new ApolloClient({
  link: ApolloLink.from([
    consoleLink,
    createErrorLink(),
    // createUpdateLink(),
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
