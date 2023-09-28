
import React, { useState, useEffect} from 'react';
import Axios from 'axios';


const cart = "cart"
const FormCart = () => {
  const [ data, setData ] = useState([]);
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ contactno, setContactNo ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ customerlist, setCustomerList ] = useState([]);
  const [ carModel, setCarModel ] = useState("");
  const [ plateNum, setPlateNum ] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");

  //const [ firstnameError, setfnameError ] = useState("");

  const csData = {
    first_name: firstName,
    last_name: lastName,
    email:  email,
    contact_no: contactno,
    address: address

  }

  useEffect(() => {
    const storedData = localStorage.getItem('cart'); 
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/customers").then((response) => {
    setCustomerList(response.data);
    // console.log(response.data);
   })
  },[customerlist])


   const updateDataInLocalStorage = (newData) => {
     localStorage.setItem('cart', JSON.stringify(newData)); // Update 'yourKey' with the key you're using.
     setData(newData);
  };
  const addCustomer = () => {
    Axios.post("http://localhost:3001/customers/add", csData).then(() => {
        console.log("Data added successfuly");
      })};




  return (
    <div className="cart-container">
      <div className="app-form">
        <div className="form-title">
          <a className="info-text">Your Information</a>
        </div>
        <form>
          <div className="user-details">
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='firstName'
                placeholder='First Name (required)'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='lastName'
                placeholder='Last Name (required)'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='email'
                name='email'
                placeholder='Email (required)'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='tel'
                name='contactNumber'
                placeholder='Contact Number (required)'
                value={contactno}
                onChange={(e) => setContactNo(e.target.value)}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='address'
                placeholder='Address (required)'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                className="box-input"
                type="text"
                name="carModel"
                placeholder="Car Year / Model (optional)"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                className="box-input"
                type="text"
                name="plateNum"
                placeholder="Plate Number (optional)"
                value={plateNum}
                onChange={(e) => setPlateNum(e.target.value)}
              />
            </div>
  
          </div>
          <button type="submit" onClick={addCustomer}>Submit</button>
        </form>
      </div>
      <div className='app-cart'>
  <h1 className='cart-title'>Cart Items</h1>
  <div className='item-list'>
    {data.map((item, index) => (
      <div className='cart-item' key={index}>
        <div className="item-details">
          <img className="img-cart" src={item.image} alt={item.name} />
          <div className='cart-data'>
          <div className='cart-product'>Product: {item.name}</div>
          <div className='id'>ID: {item.id}</div>
          <div className='category'>Category: {item.category}</div>
          <div className='price'>Price: {item.price}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



    </div>
    
  );
};

export default FormCart;