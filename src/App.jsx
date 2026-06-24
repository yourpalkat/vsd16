import { createRoot } from "react-dom/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8888/wordpress/graphql" }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
