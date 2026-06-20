import "./storecard.css";

const StoreCard = ({ store }) => {
  return (
    <div className="storeCard">
      <img src={store?.featuredImage?.node?.sourceUrl} alt={store?.videoStoreFields?.storeName} lazy="true" />
      <h2>
        <a href={store?.videoStoreFields?.website} target="_blank">
          {store?.videoStoreFields?.storeName}
        </a>
      </h2>
      <p>{store?.videoStoreFields?.streetAddress}</p>
      <p>{store?.videoStoreFields?.city}, {store?.videoStoreFields?.stateprovince}, {store?.videoStoreFields?.country}</p>
    </div>
  );
}

export default StoreCard;