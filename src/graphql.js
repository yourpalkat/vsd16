import { gql } from "@apollo/client";

export const ADD_REGISTRATION_TO_CART = gql`
  mutation AddRegistrationToCart {
    addToCart(input: { productId: 126, quantity: 1 }) {
      cartItem {
        key
        product {
          node {
            name
          }
        }
        quantity
        total
      }
    }
  }
`;

export const RefreshAuthTokenDocument = gql`
  mutation RefreshAuthToken($refreshToken: String!) {
    refreshJwtAuthToken(input: { jwtRefreshToken: $refreshToken }) {
      authToken
    }
  }
`;

export const GET_CURRENT_SESSION_TOKEN = gql`
  query {
    customer {
      sessionToken
    }
  }
`;

export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveFromCart($keys: [ID]) {
    removeItemsFromCart(input: { keys: $keys }) {
      cart {
        contents {
          nodes {
            key
            quantity
          }
        }
        total
      }
    }
  }
`;

export const GET_CART_CONTENTS = gql`
  query GetCart {
    cart {
      contents {
        nodes {
          key
          product {
            node {
              name
              slug
            }
          }
          quantity
          total
        }
      }
      subtotal
      total
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query StorePageContent {
    products {
      nodes {
        id
        name
      }
    }
  }
`;

export const GET_ABOUT_PAGE_CONTENT = gql`
  query AboutContent {
    page(id: "cG9zdDo4NA==") {
      title
      slug
      aboutPageFields {
        sectionOne {
          subheadSectionOne
          contentSectionOne
        }
        sectionTwo {
          subheadSectionTwo
          nameOne
          bioOne
          headshotOne {
            node {
              altText
              sourceUrl
            }
          }
          nameTwo
          bioTwo
          headshotTwo {
            node {
              altText
              sourceUrl
            }
          }
          nameThree
          bioThree
          headshotThree {
            node {
              altText
              sourceUrl
            }
          }
        }
        sectionThree {
          subheadSectionThree
          contentSectionThree
        }
      }
    }
  }
`;

export const GET_HOME_PAGE_CONTENT = gql`
  query HomepageContent {
    page(id: "cG9zdDo2Ng==") {
      title
      slug
      homepageFields {
        headline
        surtitle
        date
        sectionTwo {
          subheadSectionTwo
          introTextSectionTwo
          ctaLink
          ctaText
        }
        sectionThree {
          subheadSectionThree
          introTextSectionThree
          ctaLink
          ctaText
        }
      }
    }
    stores {
      nodes {
        id
        title
        videoStoreFields {
          storeName
          streetAddress
          city
          stateprovince
          country
          videoStoreDayParticipant
          website
          instagram
          facebook
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_STORE_PAGE_CONTENT = gql`
  query StorePageContent {
    page(id: "cG9zdDoxMTA=") {
      title
      slug
      storePageFields {
        sectionOne {
          headingSectionOne
          introTextSectionOne
        }
        sectionTwo {
          subheadSectionTwo
          introTextSectionTwo
        }
      }
    }
    stores {
      nodes {
        id
        title
        videoStoreFields {
          storeName
          streetAddress
          city
          stateprovince
          country
          videoStoreDayParticipant
          website
          instagram
          facebook
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
