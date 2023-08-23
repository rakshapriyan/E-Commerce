import { useContext, useEffect } from "react"
import { DataContainer } from "../App"
import { Col, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';
const ButComp = {  
  backgroundColor:"rgb(12, 12, 119)",
  width:100,
  height:50,
  color:"white"
}  

const Cart = () => {
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteProduct} =useContext(DataContainer);
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  useEffect(()=> {
    window.scrollTo(0,0);
    if(CartItem.length ===0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  },[])
  return (
      <section className='cart-items'>
        <Container>
          <Row className="justify-content-center">
              <Col md={8}>
                {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
                {CartItem.map((item) => {
                  const productQty = item.price * item.qty
                  return (
                    <div className='cart-list' key={item.id}>
                      <Row>
                        <Col className="image-holder" sm={4} md={3}>
                          <img src={item.imgUrl} alt='' />
                        </Col>
                        <Col sm={8} md={9}>
                          <Row className="cart-content justify-content-center">
                            <Col xs={12} sm={9} className="cart-details">
                              <h3>{item.productName}</h3>
                              <h4>
                                ${item.price}.00 * {item.qty}
                                <span>${productQty}.00</span>
                              </h4>
                            </Col>
                            <Col xs={12} sm={3} className='cartControl'>
                              <button className='incCart' onClick={() => addToCart(item)}>
                                <i className='fa-solid fa-plus'></i>
                              </button>
                              <button className='desCart' onClick={() => decreaseQty(item)}>
                                <i className='fa-solid fa-minus'></i>
                              </button>
                            </Col>
                          </Row>
                        </Col>
                        <button className="delete" onClick={()=> deleteProduct(item)}>
                            <ion-icon name="close"></ion-icon>
                        </button>
                      </Row>
                    </div>
                  )
                })}
              </Col>
              <Col md={4}>
                <div className='cart-total'>
                  <h2>Cart Summary</h2>
                  <div className=' d_flex'>
                    <h4>Total Price :</h4>
                    <h3>${totalPrice}.00</h3>
                  </div>
                </div>
              </Col>
              
              <Link to="/pay"><button style={ButComp}>Order now</button></Link>
              
          </Row>
        </Container>
      </section>
  )
}

export default Cart

// import { useContext, useEffect, useState } from "react";
// import { DataContainer } from "../App";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import axios from "axios";

// const ButComp = {
//   backgroundColor: "rgb(12, 12, 119)",
//   width: 100,
//   height: 50,
//   color: "white"
// };

// const Cart = () => {
//   const { CartItem, setCartItem, addToCart, decreaseQty, deleteProduct } = useContext(DataContainer);
//   const [cartData, setCartData] = useState([]);
//   const totalPrice = cartData.reduce((price, item) => price + item.qty * item.price, 0);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     if (CartItem.length === 0) {
//       const storedCart = localStorage.getItem("cartItem");
//       setCartItem(JSON.parse(storedCart));
//     }
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       // Replace "http://localhost:8080/getcart" with your actual API endpoint for fetching cart items
//       const response = await axios.get("http://localhost:8080/getcart");
//       setCartData(response.data); // Assuming the response data is an array of cart items with product names and prices
//     } catch (error) {
//       console.error(error);
//       // Handle error (if needed)
//     }
//   };

//   return (
//     <section className='cart-items'>
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
//             {cartData.map((item) => {
//               const productQty = item.price * item.qty;
//               return (
//                 <div className='cart-list' key={item.cartid}>
//                   <Row>
//                     <Col className="image-holder" sm={4} md={3}>
//                       <img src={item.imageUrl} alt='' />
//                     </Col>
//                     <Col sm={8} md={9}>
//                       <Row className="cart-content justify-content-center">
//                         <Col xs={12} sm={9} className="cart-details">
//                           <h3>{item.cartname}</h3>
//                           <h4>
//                             ${item.price}.00 * {item.qty}
//                             <span>${productQty}.00</span>
//                           </h4>
//                         </Col>
//                         <Col xs={12} sm={3} className='cartControl'>
//                           <button className='incCart' onClick={() => addToCart(item)}>
//                             <i className='fa-solid fa-plus'></i>
//                           </button>
//                           <button className='desCart' onClick={() => decreaseQty(item)}>
//                             <i className='fa-solid fa-minus'></i>
//                           </button>
//                         </Col>
//                       </Row>
//                     </Col>
//                     <button className="delete" onClick={() => deleteProduct(item)}>
//                       <ion-icon name="close"></ion-icon>
//                     </button>
//                   </Row>
//                 </div>
//               );
//             })}
//           </Col>
//           <Col md={4}>
//             <div className='cart-total'>
//               <h2>Cart Summary</h2>
//               <div className=' d_flex'>
//                 <h4>Total Price :</h4>
//                 <h3>${totalPrice}.00</h3>
//               </div>
//             </div>
//           </Col>

//           <Link to="/pay"><button style={ButComp}>Order now</button></Link>

//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Cart;
