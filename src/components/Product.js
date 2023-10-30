import React from "react";
import { cartActions } from "../store/cart-slice";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(cartActions.addToCart({ name, id, price }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
};

export default Product;
