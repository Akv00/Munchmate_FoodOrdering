import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-18 p-18">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length !== 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button> 
        )}

        {cartItems.length === 0 && (
          <h1> Cart is empty!!! Add items to the cart.</h1>
        )}
        <ItemsList items={cartItems}></ItemsList>
      </div>
    </div>
  );
};

export default Cart;
