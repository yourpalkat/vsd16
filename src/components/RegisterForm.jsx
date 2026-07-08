import { useState, useRef } from "react";
import "./registerForm.css";

const RegisterForm = () => {
  const [formStage, setFormStage] = useState(1);
  const [payload, setPayload] = useState({
    storeName: "",
    website: "", 
    streetAddress: "", 
    city: "", 
    stateProvince: "", 
    country: "",
    instagram: "",
    facebook: ""
  });
  const storeNameRef = useRef();
  const websiteRef = useRef();
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
    if (storeNameRef.current.value && websiteRef.current.value && streetAddressRef.current.value && cityRef.current.value && stateProvinceRef.current.value && countryRef.current.value) {
      setPayload({
        storeName: storeNameRef.current.value,
        website: websiteRef.current.value,
        streetAddress: streetAddressRef.current.value,
        city: cityRef.current.value,
        country: countryRef.current.value,
        instagram: instagramRef.current.value,
        facebook: facebookRef.current.value,
        vsd_id: Date.now().toString(36) + Math.random().toString(36).substring(4, 12).padStart(10, 0),
      });
      changePage(2);
    }
    return;
  };

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