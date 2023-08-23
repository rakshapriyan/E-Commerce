import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import "./product.css"
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";
import { toast } from "react-toastify";

const Product = ({title,productItem,addToCart}) => {
    const {setSelectedProduct} =useContext(DataContainer);
    const router =useNavigate();
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(1)
    }
    const handelClick =()=> {
        setSelectedProduct(productItem);
        localStorage.setItem(`selectedProduct-${productItem.id}`,JSON.stringify(productItem));
        router(`/shop/${productItem.id}`);
    }
    const handelAdd =(productItem)=> {
        addToCart(productItem);
        toast.success("Product has been added to cart!");
    }
    return (
    <Col md={3} sm={5} xs={10} className="product mtop">
        {title ==="Big Discount"? <span className="discount">{productItem.discount}% Off</span>:null}
        <img loading="lazy" onClick={()=>handelClick()} src={productItem.imgUrl} alt=""/>
        <div className="product-like">
            <label>{count}</label> <br />
            <ion-icon name="heart-outline" onClick={increment}></ion-icon>
        </div>
        <div className="product-details">
            <h3 onClick={()=>handelClick()}>
                {productItem.productName}
            </h3>
            <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            </div>
        <div className="price">
            <h4>{productItem.price}</h4>
            <button aria-label="Add" type="submit" className="add" onClick={() => handelAdd(productItem)}>
                <ion-icon name="add"></ion-icon>
            </button>
        </div>
    </div>
    </Col>
    );
};

export default Product;



// import { useContext, useState, useEffect } from "react";
// import { Col } from "react-bootstrap";
// import "./product.css";
// import { useNavigate } from "react-router-dom";
// import { DataContainer } from "../../App";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Product = ({ title, addToCart }) => {
//   const { setSelectedProduct } = useContext(DataContainer);
//   const router = useNavigate();
//   const [count, setCount] = useState(0);
//   const [produ, setProdu] = useState([]);

//   useEffect(() => {
//     // Fetch the product items when the component mounts
//     fetchProductItems();
//   }, []);

//   const fetchProductItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/getpro"); // Replace with your actual API endpoint for fetching products
//       setProdu(response.data); // Assuming the response data is an array of products
//     } catch (error) {
//       console.error(error);
//       // Handle error (if needed)
//     }
//   };

//   const increment = () => {
//     setCount(1);
//   };

//   const handelClick = (productItem) => {
//     setSelectedProduct(productItem);
//     localStorage.setItem(
//       `selectedProduct-${productItem.prdid}`,
//       JSON.stringify(productItem)
//     );
//     router(`/shop/${productItem.prdid}`);
//   };

//   const addToCartInDB = async (item) => {
//     const newItem = {
//       cartid: item.prdid,
//       cartname: item.prdname,
//       price: item.price,
//       imageurl: item.imageurl,
//     };
//     try {
//       // Replace "http://localhost:8080/addcart" with your actual API endpoint for adding to the cart
//       const response = await axios.post("http://localhost:8080/addcart", newItem);
//       console.log(response.data); // If you want to see the response from the server (optional)
//     } catch (error) {
//       console.error(error);
//       // Handle error (if needed)
//     }
//   };

//   const handelAdd = (productItem) => {
//     addToCart(productItem);
//     toast.success("Product has been added to cart!");
    
//     // Call the function to add to the cart in the database
//     addToCartInDB(productItem);
//   };

//   return (
//     <>
//       {produ.map((productItem) => (
//         <Col
//           key={productItem.prdid}
//           md={3}
//           sm={5}
//           xs={10}
//           className="product mtop"
//         >
//           {title === "Big Discount" ? (
//             <span className="discount">{productItem.dis}% Off</span>
//           ) : null}
//           <img
//             loading="lazy"
//             src={productItem.imageurl}
//             alt=""
//             onClick={() => handelClick(productItem)} // Add onClick handler for image to redirect to product details page
//           />
//           <div className="product-like">
//             <label>{count}</label> <br />
//             <ion-icon
//               name="heart-outline"
//               onClick={increment}
//             ></ion-icon>
//           </div>
//           <div className="product-details">
//             <h3 onClick={() => handelClick(productItem)}>
//               {productItem.prdname}
//             </h3>
//             <div className="rate">
//               <i className="fa fa-star"></i>
//               <i className="fa fa-star"></i>
//               <i className="fa fa-star"></i>
//               <i className="fa fa-star"></i>
//               <i className="fa fa-star"></i>
//             </div>
//             <div className="price">
//               <h4>{productItem.price}</h4>
//               <button
//                 aria-label="Add"
//                 type="submit"
//                 className="add"
//                 onClick={() => handelAdd(productItem)}
//               >
//                 <ion-icon name="add"></ion-icon>
//               </button>
//             </div>
//           </div>
//         </Col>
//       ))}
//     </>
//   );
// };

// export default Product;


