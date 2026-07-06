import { useState } from "react";
import StoreCard from "./StoreCard";
import "./storelist.css";

const StoreList = ({ allStores }) => {
  const storesSorted = allStores.sort(function(a, b) {
   return a.videoStoreFields.storeName.toUpperCase().localeCompare(b.videoStoreFields.storeName.toUpperCase());
  });

  const [selectedSort, setSelectedSort] = useState("ALL");
  const [displayStores, setDisplayStores] = useState(storesSorted);

  const updateSort = (event) => {
    if (event.target.value === "ALL") {
      setSelectedSort("ALL")
      setDisplayStores(storesSorted);
      return;
    }
    if (event.target.value === "CAN") {
      setSelectedSort("CAN");
      setDisplayStores(storesSorted.filter(store => store.videoStoreFields?.country.toLowerCase() === "canada"));
      return;
    }
    if (event.target.value === "USA") {
      setSelectedSort("USA");
      setDisplayStores(storesSorted.filter(store => store.videoStoreFields?.country.toLowerCase() === "usa"));
      return;
    }
    if (event.target.value === "REST") {
      setSelectedSort("REST");
      setDisplayStores(storesSorted.filter(store => store.videoStoreFields?.country.toLowerCase() !== "usa" && store.videoStoreFields?.country.toLowerCase() !== "canada"));
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
      {displayStores.length > 0 && (
        <ul className="storeListContainer">
          {displayStores?.map((store) => (
            <li id={"store_" + store.id} key={store.id}>
              <StoreCard store={store} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StoreList;