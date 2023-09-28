
import React,{ useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Tire1 from "./assests/Portrait/SUV/CP661 4PR.jpg";
import Tire2 from "./assests/Portrait/SUV/ASSURANCE DURAPLUS 2 4PR.jpg";
import Tire3 from "./assests/Portrait/SUV/ASSURANCE MAXGUARD SUV 4PR.jpg";
import Tire4 from "./assests/Portrait/SUV/ASSURANCE TRIPLEMAX 2 4PR.jpg";
import Tire5 from "./assests/Portrait/SUV/BLUEARTH ES ES32 4PR.jpg";
import Tire6 from "./assests/Portrait/SUV/DUELER HT 684 4PR.jpg";
import Tire7 from "./assests/Portrait/SUV/ECOPIA EP150 4PR.jpg";
import Tire8 from "./assests/Portrait/SUV/ENERGY XM2 + 4PR.jpg";
import Tire9 from "./assests/Portrait/SUV/N BLUE HD PLUS 4PR.jpg";
import Tire10 from "./assests/Portrait/SUV/N PRIZ SH9I 4PR.jpg";
import Tire11 from "./assests/Portrait/SUV/ROADIAN AT PRO RA8 4PR.jpg";
import Tire12 from "./assests/Portrait/Sedan/ASSURANCE DURAPLUS 2 4PR.jpg";
import Tire13 from "./assests/Portrait/Sedan/ECOPIA EP150 4PR.jpg";
import Tire14 from "./assests/Portrait/Sedan/ENASAVE EC300 4PR.jpg";
import Tire15 from "./assests/Portrait/Sedan/ENERGY XM2 + 4PR.jpg";
import Tire16 from "./assests/Portrait/Sedan/N FERA SU1 4PR.jpg";
import Tire17 from "./assests/Portrait/Sedan/PILOT SPORT 4 4PR.jpg";
import Tire18 from "./assests/Portrait/Sedan/SP SPORT 2030 4PR.jpg";
import Tire19 from "./assests/Portrait/Sedan/SP SPORT LM705 4PR.jpg";
import Tire20 from "./assests/Portrait/Sedan/SP TOURING R1 4PR.jpg";




const PAGE_PRODUCT = 'products';
const PAGE_CART = 'cart';
const All = "products"
const SEDAN = "sedan";
const SUV = "suv";
const HATCHBACK = "hatchback";

function Addtocart (){
        const [ cart, setCart ] = useState([])
        const [ page, setPage ] = useState(PAGE_PRODUCT);
        const [ category, setCategory ] = useState(All)

        useEffect(()=> {
          localStorage.setItem("cart", JSON.stringify(cart));
        })

        
        const [ products] = useState([
           {name:'CP661 4PR', price:'4.180', image:`${Tire1}`, size: '185/70 R14', category: 'sedan',id:"T001"} ,
           { name: 'ASSURANCE DURAPLUS 2', price:'3.070', image:`${Tire2}`, size: '185/70 R14', category: 'sedan', id:"T002" },
           { name: 'ASSURANCE MAXGUARD', price:'5.740', image:`${Tire3}`, size: '265/65 R17', category: 'suv',id:"T003" },
           { name: 'ASSURANCE TRIPLEMAX 2', price:'4.500', image:`${Tire4}`, size: '215/55 R17', category: 'suv', id:"T004" },
           { name: 'BLUEARTH ES ES32 4PR', price:'4.820',  image:`${Tire5}`, size: '185/60 R15', category: 'suv', id:"T005" },
           { name: 'DUELER H/T 684 4PR', price:'12.857', image:`${Tire6}`, size: '265/65 R17', category: 'suv', id:"T006" },
           { name: 'ECOPIA EP150 4PR', price:'3.790', image:`${Tire7}`, size: '85/70 R14', category: 'suv', id:"T007" },
           { name: 'ENERGY XM2 + 4PR', price:'5.110', image:`${Tire8}`, size: '185/70 R14', category: 'suv', id:"T008" },
           { name: 'N BLUE HD PLUS 4PR', price:'4.030', image:`${Tire9}`, size: '195/60 R15', category: 'suv', id:"T009" },
           { name: 'N PRIZ SH9I 4PR', price:'4.500', image:`${Tire10}`, size: '195/55 R16', category: 'suv', id:"T010" },
           { name: 'ROADIAN AT PRO RA8 4PR', price:'2.500', image:`${Tire11}`, size: '265/65 R17', category: 'suv', id:"T011" },
           { name: 'ASSURANCE DURAPLUS 2', price:'2.500', image:`${Tire12}`, size: '165/65 R14', category: 'sedan', id:"T012" },
           { name: 'ECOPIA EP150 4PR', price:'2.500', image:`${Tire13}`, size: '165/65 R14', category: 'sedan', id:"T013" },
           { name: 'ENASAVE EC300 4PR', price:'2.500',  image:`${Tire14}`, size: '165/65 R14', category: 'hatchback', id:"T014" },
           { name: 'ENERGY XM2 + 4PR', price:'2.500', image:`${Tire15}`, size: '185/55 R16', category: 'sedan', id:"T015" },
           { name: 'N FERA SU1 4PR', price:'2.500', image:`${Tire16}`, size: '185/55 R16', category: 'hatchback', id:"T016" },
           { name: 'PILOT SPORT 4 4PR', price:'2.500', image:`${Tire17}`, size: '205/45 ZR17', category: 'sedan', id:"T017" },
           { name: 'SP SPORT 2030 4PR', price:'2.500', image:`${Tire18}`, size: '175/55 R15', category: 'hatchback', id:"T018" },
           { name: 'SP SPORT LM705 4PR', price:'2.500', image:`${Tire19}`, size: '205/45 R17', category: 'sedan', id:"T019" },
           { name: 'SP TOURING R1 4PR', price:'2.500', image:`${Tire20}`, size: '175/65 R15', category: 'hatchback', id:"T020" },
          
        ]);

        const addtocart = (product) =>{
          let newCart = [...cart];
          let itemInCart = newCart.find(
            (item) => product.name === item.name
          );
          if (itemInCart) {
            itemInCart.quantity++;
          } else {
            itemInCart = {
              ...product, quantity:1
            };
            newCart.push(itemInCart);
          }
            setCart(newCart);
        };

        const removeFromCart = (productToRemove) =>{
            setCart(cart.filter((product) => product !== productToRemove));
        }

        const navigateTo = (nextPage) =>{
            setPage(nextPage);
        }

        const clearCart = ()=>{
          setCart([]);
        };

        const getTotalSum = () => {
          return cart.reduce((sum, { price, quantity }) => sum + parseFloat(price * quantity), 0);
        };

        const getCartTotal = () => {
          return cart.reduce((sum, { quantity }) => sum + parseInt(quantity, 10), 0)
        }
        
        const getProductInCategory = () => {
          if (category === All) {
            return products; // Display all products if "All" is selected.
          } else {
            return products.filter((product) => product.category === category);
          }
        };
        const renderProduct = () =>(
            <>
<h1>Products</h1>
    <div className="filter_buttons">
      
      <button className="opt-button" onClick={() => setCategory(All)}>
        {All}
      </button>
      <button className="opt-button" onClick={() => setCategory(SEDAN)}>
        {SEDAN}
      </button>
      <button className="opt-button" onClick={() => setCategory(SUV)}>
        {SUV}
      </button>
      <button className="opt-button" onClick={() => setCategory(HATCHBACK)}>
        {HATCHBACK}
      </button>
    </div>
            <div className="products">
             {getProductInCategory().map(product =>(
                    <div className="product">
                    <img className="tire-img" src={product.image} alt=""/>
                    <h4>{product.name}</h4>
                    <h4>{product.size}</h4>
                    <h4>{product.id}</h4>
                    <h4>₱{product.price}</h4>
                    <button className="btn-atc" onClick={() => addtocart(product)}>Add To Cart</button>
                    </div>
              ))}
           </div>
          </>
        );
     
        const renderCart = () =>(
            <>
            <h1>Cart</h1>
            {cart.length > 0 && (
            <button onClick={clearCart}>Clear Cart</button>)}
            <div className="products">
             {cart.map(product =>(
               <div className="product">
                  <h3>{product.name}</h3>
                  <h4>{product.size}</h4>
                  <h4>{product.id}</h4>
                  <h4>₱{product.price}</h4>
                  <h4>Quantity:{product.quantity}</h4>
                  <img className="tire-img" src={product.image} alt=""/>
                  <button className="btn-atc" onClick={() =>removeFromCart(product)}>Remove To Cart</button>
               </div>
              ))}
           </div>
           <div className="cost-text" >Total Cost:₱{getTotalSum().toFixed(3)}</div>
           <div>
           <Link reloadDocument to={`/form-cart`} className="checkout-button">
             Checkout
            </Link>
           </div>
          </>
        )

    return(
       <>
       <div className="tires">
        <div className="product-container">
            <headder className="cart-header">
                <button className="btn-gtc" onClick={() => navigateTo(PAGE_CART)}>Go to Cart({getCartTotal()})</button>
                <button className="btn-gtc" onClick={() => navigateTo(PAGE_PRODUCT)}>View Products</button>
                
            </headder>
            {page === PAGE_PRODUCT && renderProduct()}
            {page === PAGE_CART && renderCart()}
           
           
          </div>
        </div>
        </>
    )
}

export default Addtocart;