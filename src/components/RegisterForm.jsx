import './registerForm.css';

const RegisterForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    return;
  };

  return (
    <form 
      className="registerForm"
      id="registerForm"
      onSubmit={handleSubmit}
    >
      <div className="twoColumn">
        <label htmlFor="storeName">Name of your store:* 
          <input 
            type="text" 
            name="storeName"
            id="storeName"
            required="true"
          />
        </label>
        <label htmlFor="website">Website:* 
          <input 
            type="text" 
            name="website"
            id="website"
            required="true"
          />
        </label>
      </div>
      <label htmlFor="address">Street address:* 
        <input 
          type="text" 
          name="address"
          id="address"
          required="true"
        />
      </label>
      <div className="threeColumn">
        <label htmlFor="city">City:* 
          <input 
            type="text" 
            name="city"
            id="city"
            required="true"
          />
        </label>
        <label htmlFor="stateProvince">State/Province:* 
          <input 
            type="text" 
            name="stateProvince"
            id="stateProvince"
            required="true"
          />
        </label>
        <label htmlFor="country">Country:* 
          <input 
            type="text" 
            name="country"
            id="country"
            required="true"
          />
        </label>
      </div>
      <label htmlFor="instagram">Instagram: 
        <input 
          type="text" 
          name="instagram"
          id="instagram"
        />
      </label>
      <label htmlFor="facebook">Facebook: 
        <input 
          type="text" 
          name="facebook"
          id="facebook"
        />
      </label>

      <button type="submit" className='cta'>
        Continue
      </button>
    </form>
  );
}

export default RegisterForm;