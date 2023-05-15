import { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodAppContext } from "../context/FoodAppContext";
import "../styles.css";

export const MenuPage = () => {
  const {
    sortByPriceMenu,
    handleCart,
    cart,
    handleCheckBoxInput,
    handleSearchInput,
    handleRadioButtonInput
  } = useContext(FoodAppContext);

  return (
    <>
      <h3>Filters:</h3>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => handleSearchInput(e)}
      />
      <input
        type="checkbox"
        name="veg"
        id="vegFilter"
        value="is_vegetarian"
        onChange={(e) => handleCheckBoxInput(e.target.value)}
      />
      <label htmlFor="veg">Veg</label>
      <input
        type="checkbox"
        name="spicy"
        id="spicyFilter"
        value="is_spicy"
        onClick={(e) => handleCheckBoxInput(e.target.value)}
      />
      <label htmlFor="spicy">Spicy</label>
      <input
        type="radio"
        name="priceLowHigh"
        id="priceLowToHigh"
        value="asc"
        onChange={(e) => handleRadioButtonInput(e)}
      />
      <label htmlFor="priceLowHigh">Low to High</label>
      <input
        type="radio"
        name="priceLowHigh"
        id="priceHighToLow"
        value="desc"
        onChange={(e) => handleRadioButtonInput(e)}
      />
      <label htmlFor="priceLowHigh">High to Low</label>

      {/* Menu */}
      <h3>Menu</h3>
      <ul type="none" className="listContainer">
        {sortByPriceMenu.map((item) => (
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
            <button onClick={() => handleCart(item)}>
              {cart.includes(item) ? (
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Go To Cart
                </Link>
              ) : (
                "Add to Cart"
              )}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
