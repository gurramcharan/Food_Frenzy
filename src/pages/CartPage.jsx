import { useContext, useState } from "react";
import { FoodAppContext } from "../context/FoodAppContext";

export const CartPage = () => {
  const { cart, cartPrice, handleCouponBtn, handleCoupon } = useContext(
    FoodAppContext
  );

  return (
    <>
      <h3>Cart</h3>
      <h4>
        Total Delivery Time:{" "}
        {cart.reduce((acc, curr) => acc + curr.delivery_time, 0)} minutes
      </h4>
      <h4>Total Price: {cartPrice}</h4>

      <button onClick={handleCoupon} disabled={handleCouponBtn}>
        Apply Coupon
      </button>
      <ul type="none" className="listContainer">
        {cart.map((item) => (
          <li key={item.id} className="listItems">
            <img
              src={item.image}
              alt="pizzaImages"
              width="200px"
              height="150px"
            />
            <p>Name: {item.name}</p>
            <p>
              <b>Description: </b>
              {item.price}
            </p>
            <p>Price: {item.price}</p>
            <p>Delivery Time: {item.delivery_time}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
