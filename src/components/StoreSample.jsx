import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import StoreCard from "./StoreCard";
import "./storelist.css";

const GET_ALL_STORES = gql`
  query GetAllStores {
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


// Displays a random selection of four video stores, as a teaser sample
const StoreSample = () => {
  const { loading, error, data } = useQuery(GET_ALL_STORES);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;

  const allStores = [...data?.stores?.nodes];
  const displayStores = [...allStores].sort(() => 0.5 - Math.random()).slice(0, 4);
  

  return (
    <ul className="storeSampleContainer">
      {displayStores?.map((store) => (
        <li id={store.id}>
          <StoreCard store={store} />
        </li>
      ))}
    </ul>
  );
};

export default StoreSample;