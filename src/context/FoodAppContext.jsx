import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/data";

export const FoodAppContext = createContext();

export const FoodAppProvider = ({ children }) => {
  const [foodApp, setFoodApp] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const [handleCouponBtn, setHandleCouponBtn] = useState(false);
  const [filters, setFilters] = useState({
    searchInput: "",
    checkBoxInput: [],
    radioButtonInput: ""
  });

  const extractFakeFetch = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/menu");
      setFoodApp(res.data.menu);
      setFoodItems(res.data.menu);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    extractFakeFetch();
  }, []);

  const handleCart = (item) => {
    if (cart.includes(item)) {
      return cart;
    } else {
      setCartPrice((cartPrice) => cartPrice + item.price);
      setCart((cart) => [...cart, item]);
    }
  };

  const handleCoupon = () => {
    setHandleCouponBtn(true);
    setCartPrice(cartPrice - 5);
  };

  const handleSearchInput = (e) => {
    setFilters((filters) => ({
      ...filters,
      searchInput: e.target.value
    }));
  };

  const handleCheckBoxInput = (checkBoxType) => {
    setFilters((filters) => ({
      ...filters,
      checkBoxInput: filters.checkBoxInput.includes(checkBoxType)
        ? filters.checkBoxInput.filter((filter) => filter !== checkBoxType)
        : [...filters.checkBoxInput, checkBoxType]
    }));
  };

  const handleRadioButtonInput = (e) => {
    setFilters((filters) => ({
      ...filters,
      radioBoxInput: e.target.value
    }));
  };

  const checkBoxMenu =
    filters.checkBoxInput.length > 0
      ? foodItems.filter(
          (item) =>
            filters.checkBoxInput.filter((value) => item[value]).length > 0
        )
      : foodItems;

  const searchMenu =
    filters.searchInput.length > 0
      ? checkBoxMenu.filter((item) =>
          item.name.toLowerCase().includes(filters.searchInput.toLowerCase())
        )
      : checkBoxMenu;

  const sortByPriceMenu =
    filters.radioBoxInput === "asc"
      ? [...searchMenu].sort((a, b) => a.price - b.price)
      : filters.radioBoxInput === "desc"
      ? [...searchMenu].sort((a, b) => b.price - a.price)
      : searchMenu;

  return (
    <FoodAppContext.Provider
      value={{
        foodApp,
        foodItems,
        handleCart,
        cart,
        cartPrice,
        handleCouponBtn,
        handleCoupon,
        sortByPriceMenu,
        handleCheckBoxInput,
        handleSearchInput,
        handleRadioButtonInput
      }}
    >
      {children}
    </FoodAppContext.Provider>
  );
};
