import { gql } from "@apollo/client";

export const CREATE_STORE = gql`
  input CreateStoreInput {
    storeName: String!
    contact: String!
    email: String!
    website: String!
    phone: String
    streetAddress: String!
    city: String!
    stateprovince: String!
    country: String!
    instagram: String
    facebook: String
    rent: Boolean
    sales: Boolean
    videoStoreDayParticipant: Boolean!
  }

  mutation CreateStore($title: String!, $storedata: CreateStoreInput!) {
    createStore(title: $title, videoStoreDayFields: $storedata) {
      store {
        id
        title
      }
    }
  }
`;

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
    pages(where: { title: "about" }) {
      nodes {
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
  }
`;

export const GET_HOME_PAGE_CONTENT = gql`
  query HomepageContent {
    pages(where: { title: "home" }) {
      nodes {
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
    pages(where: { title: "stores" }) {
      nodes {
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
