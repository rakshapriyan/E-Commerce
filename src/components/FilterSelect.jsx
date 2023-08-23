import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "sofa", label: "Sofa" },
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "mobile", label: "Mobile" },
    { value: "wireless", label: "Wireless" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(products.filter(item => item.category ===selectedOption.value))
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;


// import { useContext, useState } from "react";
// import { Col } from "react-bootstrap";
// import "./product.css"
// import { useNavigate } from "react-router-dom";
// import { DataContainer } from "../../App";
// import { toast } from "react-toastify";

// const Product = ({title,productItem,addToCart}) => {
//     const {setSelectedProduct} =useContext(DataContainer);
//     const router =useNavigate();
//     const [count, setCount] = useState(0);
//     const increment = () => {
//         setCount(1)
//     }
//     const handelClick =()=> {
//         setSelectedProduct(productItem);
//         localStorage.setItem(`selectedProduct-${productItem.id}`,JSON.stringify(productItem));
//         router(`/shop/${productItem.id}`);
//     }
//     const handelAdd =(productItem)=> {
//         addToCart(productItem);
//         toast.success("Product has been added to cart!");
//     }
//     return (
//     <Col md={3} sm={5} xs={10} className="product mtop">
//         {title ==="Big Discount"? <span className="discount">{productItem.discount}% Off</span>:null}
//         <img loading="lazy" onClick={()=>handelClick()} src={productItem.imgUrl} alt=""/>
//         <div className="product-like">
//             <label>{count}</label> <br />
//             <ion-icon name="heart-outline" onClick={increment}></ion-icon>
//         </div>
//         <div className="product-details">
//             <h3 onClick={()=>handelClick()}>
//                 {productItem.productName}
//             </h3>
//             <div className="rate">
//             <i className="fa fa-star"></i>
//             <i className="fa fa-star"></i>
//             <i className="fa fa-star"></i>
//             <i className="fa fa-star"></i>
//             <i className="fa fa-star"></i>
//             </div>
//         <div className="price">
//             <h4>{productItem.price}</h4>
//             <button aria-label="Add" type="submit" className="add" onClick={() => handelAdd(productItem)}>
//                 <ion-icon name="add"></ion-icon>
//             </button>
//         </div>
//     </div>
//     </Col>
//     );
// };

// export default Product;