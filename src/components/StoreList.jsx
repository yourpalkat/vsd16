import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
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

const StoreList = () => {
  const { loading, error, data } = useQuery(GET_ALL_STORES);

  if (loading) {
    return <p>Loading…</p>

  };

  if (error) {
    console.log("Error fetching content: ", error.message);
    return;
  };

  // setAllStores(...data?.stores?.nodes);
  const allStores = [...data?.stores?.nodes].sort(function(a, b) {
   return a.videoStoreFields.storeName.toUpperCase().localeCompare(b.videoStoreFields.storeName.toUpperCase());
  });
  const [displayStores, setDisplayStores] = useState(allStores);
  const [selectedSort, setSelectedSort] = useState("ALL");

  const updateSort = (event) => {
    if (event.target.value === "ALL") {
      setSelectedSort("ALL")
      setDisplayStores(allStores);
      return;
    }
    if (event.target.value === "CAN") {
      setSelectedSort("CAN");
      setDisplayStores(allStores.filter(store => store.videoStoreFields?.country.toLowerCase() === "canada"));
      return;
    }
    if (event.target.value === "USA") {
      setSelectedSort("USA");
      setDisplayStores(allStores.filter(store => store.videoStoreFields?.country.toLowerCase() === "usa"));
      return;
    }
    if (event.target.value === "REST") {
      setSelectedSort("REST");
      setDisplayStores(allStores.filter(store => store.videoStoreFields?.country.toLowerCase() !== "usa" && store.videoStoreFields?.country.toLowerCase() !== "canada"));
      return;
    }
  }

  return (
    <div>
      <div className="switcherContainer">
        <h3 className="bold">Show stores from region:</h3>
        <div className="segmented">
          <label className="segmentedButton small">
            <input 
              type="radio" 
              name="countrySwitcher" 
              value="ALL" 
              checked={selectedSort === 'ALL'} 
              onChange={updateSort}
            />
            All
          </label>
          <label className="segmentedButton small">
            <input 
              type="radio" 
              name="countrySwitcher" 
              value="CAN" 
              checked={selectedSort === 'CAN'} 
              onChange={updateSort}
            />
            Canada
          </label>
          <label className="segmentedButton small">
            <input 
              type="radio" 
              name="countrySwitcher" 
              value="USA" 
              checked={selectedSort === 'USA'} 
              onChange={updateSort}
            />
            USA
          </label>
          <label className="segmentedButton small">
            <input 
              type="radio" 
              name="countrySwitcher" 
              value="REST" 
              checked={selectedSort === 'REST'} 
              onChange={updateSort}
            />
            Everywhere else!
          </label>
        </div>
      </div>
      <ul className="storeListContainer">
        {displayStores?.map((store) => (
          <li id={store.id}>
            <StoreCard store={store} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;