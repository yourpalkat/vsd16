// import { gql } from "@apollo/client";
// import { useQuery } from "@apollo/client/react";
import StoreCard from "./StoreCard";
import "./storelist.css";
import tempStoreData from "./tempStoreData";

// const GET_ALL_STORES = gql`
//   query GetAllStores {
//     stores {
//       nodes {
//         id
//         title
//         videoStoreFields {
//           storeName
//           streetAddress
//           city
//           stateprovince
//           country
//           videoStoreDayParticipant
//           website
//           instagram
//           facebook
//         }
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `;

// TODO: replace mocked data, restore commented-out Apollo GQL query 

const StoreList = () => {
  // const { loading, error, data } = useQuery(GET_ALL_STORES);

  // if (loading) return <p>Loading…</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <p>Show stores from:</p>
        <label htmlFor="CountryCanada">Canada</label>
        <input type="radio" name="countrySwitcher" id="countryCanada" value="canada" />
        <label htmlFor="CountryUsa">USA</label>
        <input type="radio" name="countrySwitcher" id="countryUsa" value="usa" />
        <label htmlFor="CountryRest">Everywhere else!</label>
        <input type="radio" name="countrySwitcher" id="countryRest" value="restofworld" />
      </div>
      <ul className="storeListContainer">
        {/* {data.stores?.nodes?.map((store) => ( */}
        {tempStoreData.map((store) => (
          <li id={store.id}>
            <StoreCard store={store} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;