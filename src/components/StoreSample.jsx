import StoreCard from "./StoreCard";
import "./storelist.css";

// Displays a random selection of four video stores, as a teaser sample
const StoreSample = ({ allStores}) => {
  const displayStores = [...allStores].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <>
      {displayStores.length > 0 &&(
        <ul className="storeSampleContainer">
          {displayStores?.map((store) => (
            <li id={"store_" + store.id} key={store.id}>
              <StoreCard store={store} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default StoreSample;