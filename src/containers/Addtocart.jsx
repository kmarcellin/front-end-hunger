import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../components/Common/Item";
import { getItems } from "../reducks/items/selectors";
import { getCarts } from "../reducks/carts/selectors";
import { fetchItems } from "../reducks/items/operations";
import { fetchFromLocalStorage } from "../reducks/carts/operations";
import CartItem from "../components/Common/CartItem";

const Addtocart = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);
  const carts = getCarts(selector);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchFromLocalStorage());
  }, []);
  console.log("carts", carts);

  return (
    <section class="order">
      <ul class="items">
        <li class="carts">
          {carts.items && carts.length
            ? carts.map((cart) => (
                <CartItem
                  cart={cart.item}
                  cartId={cart.id}
                  key={cart.item.id}
                  quantity={cart.quantity}
                />
              ))
            : "Not An Array"}
        </li>
      </ul>
    </section>
  );
};

export default Addtocart;
