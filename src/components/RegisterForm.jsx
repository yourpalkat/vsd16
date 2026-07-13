import { useState, useRef } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_STORE } from "../graphql";
import "./registerForm.css";

const RegisterForm = () => {
  const [addStore, { data, loading, error }] = useMutation(CREATE_STORE);
  const [formStage, setFormStage] = useState(1);
  const [payload, setPayload] = useState({
    storeName: "",
    contact: "",
    email: "",
    website: "", 
    phone: "",
    streetAddress: "", 
    city: "", 
    stateprovince: "", 
    country: "",
    instagram: "",
    facebook: "",
    rent: false,
    sales: false,
    videoStoreDayParticipant: false,
  });
  const storeNameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const websiteRef = useRef();
  const phoneRef = useRef();
  const storeTypeRentalRef = useRef();
  const storeTypeSalesRef = useRef();
  const streetAddressRef = useRef();
  const cityRef = useRef();
  const stateProvinceRef = useRef();
  const countryRef = useRef();
  const instagramRef = useRef();
  const facebookRef = useRef();

  const handleDataSubmit = (event) => {
    event.preventDefault();
    if (!storeNameRef.current.value) {
      storeNameRef.current.classList.add("error");
    }
    if (!contactRef.current.value) {
      contactRef.current.classList.add("error");
    }
    if (!emailRef.current.value) {
      emailRef.current.classList.add("error");
    }
    if (!websiteRef.current.value) {
      websiteRef.current.classList.add("error");
    }
    if (!streetAddressRef.current.value) {
      streetAddressRef.current.classList.add("error");
    }
    if (!cityRef.current.value) {
      cityRef.current.classList.add("error");
    }
    if (!stateProvinceRef.current.value) {
      stateProvinceRef.current.classList.add("error");
    }
    if (!countryRef.current.value) {
      countryRef.current.classList.add("error");
    }
    if (storeNameRef.current.value && contactRef.current.value && emailRef.current.value && websiteRef.current.value && streetAddressRef.current.value && cityRef.current.value && stateProvinceRef.current.value && countryRef.current.value) {
      setPayload({
        storeName: storeNameRef.current.value,
        contact: contactRef.current.value,
        email: emailRef.current.value,
        website: websiteRef.current.value,
        phone: phoneRef.current.value,
        streetAddress: streetAddressRef.current.value,
        city: cityRef.current.value,
        stateprovince: stateProvinceRef.current.value,
        country: countryRef.current.value,
        instagram: instagramRef.current.value,
        facebook: facebookRef.current.value,
        rent: storeTypeRentalRef.current.checked ? "Y" : "N",
        sales: storeTypeSalesRef.current.checked ? "Y" : "N",
        videoStoreDayParticipant: false,
      });
      postStoreRecord();
      changePage(2);
    }
    return;
  };

  const postStoreRecord = () => {
    addStore({ variables: { title: payload.storeName, storedata: payload }});
  }

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
  }

  const changePage = (number) => {
    setFormStage(number);
  }

  const clearError = (event) => {
    if (event.target.value) {
      event.target.classList.remove("error");
    }
  }

  if (loading) {
    return (
      <p>loading...</p>
    );
  }

  if (error) {
    return(
      <p>Something went wrong creating the store record.</p>
    );
  }

  if (formStage === 2) {
    return (
      <form
        className="registerForm"
        id="paymentForm"
        onSubmit={handlePaymentSubmit}
      >
        <div className="spacer">
          <button type="button" className="ctaOutline" onClick={() => changePage(1)}>
            Go Back
          </button>
          <button type="button" className="cta" onClick={handlePaymentSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }

  return (
    <form 
      className="registerForm"
      id="registerForm"
      onSubmit={handleDataSubmit}
    >
      <div className="twoColumn">
        <label htmlFor="storeName">Name of your store:* 
          <input 
            type="text" 
            name="storeName"
            id="storeName"
            required={true}
            ref={storeNameRef}
            onChange={clearError}
          />
        </label>
        <label htmlFor="contact">Contact Name:* 
          <input 
            type="text" 
            name="contact"
            id="contact"
            required={true}
            ref={contactRef}
            onChange={clearError}
          />
        </label>
      </div>
      <div className="twoColumn">
        <label htmlFor="email">Email address:* 
          <input 
            type="email" 
            name="email"
            id="email"
            required={true}
            ref={emailRef}
            onChange={clearError}
          />
        </label>
        <label htmlFor="website">Website:* 
          <input 
            type="text" 
            name="website"
            id="website"
            required={true}
            ref={websiteRef}
            onChange={clearError}
          />
        </label>
      </div>
      <div className="twoColumn">
        <label htmlFor="phone">Phone number: 
          <input 
            type="phone" 
            name="phone"
            id="phone"
            ref={phoneRef}
          />
        </label>
        <div>
          <label htmlFor="storeTypeRental">
            <input type="checkbox" name="storeTypeRental" id="storeTypeRental" ref={storeTypeRentalRef} />
            Check this box if you <span className="bold">rent</span> physical media
          </label>
          <label htmlFor="storeTypeSales">
            <input type="checkbox" name="storeTypeSales" id="storeTypeSales" ref={storeTypeSalesRef} />
            Check this box if you <span className="bold">sell</span> physical media 
          </label>
        </div>
      </div>
      <label htmlFor="address">Street address:* 
        <input 
          type="text" 
          name="address"
          id="address"
          required={true}
          ref={streetAddressRef}
          onChange={clearError}
        />
      </label>
      <div className="threeColumn">
        <label htmlFor="city">City:* 
          <input 
            type="text" 
            name="city"
            id="city"
            required={true}
            ref={cityRef}
            onChange={clearError}
          />
        </label>
        <label htmlFor="stateProvince">State/Province:* 
          <input 
            type="text" 
            name="stateProvince"
            id="stateProvince"
            required={true}
            ref={stateProvinceRef}
            onChange={clearError}
          />
        </label>
        <label htmlFor="country">Country:* 
          <input 
            type="text" 
            name="country"
            id="country"
            required={true}
            ref={countryRef}
            onChange={clearError}
          />
        </label>
      </div>
      <label htmlFor="instagram">Instagram: 
        <input 
          type="text" 
          name="instagram"
          id="instagram"
          ref={instagramRef}
        />
      </label>
      <label htmlFor="facebook">Facebook: 
        <input 
          type="text" 
          name="facebook"
          id="facebook"
          ref={facebookRef}
        />
      </label>

      <button type="button" className="cta" onClick={handleDataSubmit}>
        Continue
      </button>
    </form>
  );
}

export default RegisterForm;