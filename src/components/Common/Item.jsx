import React from "react";
import { useDispatch } from "react-redux";
import ImgIconHeart from "../../assets/img/heart-icon.png";
import carticon from "../../assets/img/carticon.png";

import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";

const Item = ({
  item,
  selected_count,
  setShowWriteReview,
  setShowReviews,
  setSelectedItemId,
}) => {
  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item));
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
  };
  const clickCheckReviews = () => {
    setSelectedItemId(item.id);
    setShowReviews(true);
  };
  const clickWriteReview = () => {
    setSelectedItemId(item.id);
    setShowWriteReview(true);
  };
  return (
    <>
      <ul class="container">
        <li class="menu">
          <img class="img1" src={item.image} alt="image" />
          <div class="likes">
            <img class="hearticon" src={ImgIconHeart} alt="" />
            <p class="likescount">{item.total_like_count}</p>
          </div>
          <div className="reviewbox">
            <b>{item.name}</b>
            <div class="review-div">
              <p class="review" onClick={() => clickWriteReview()}>
                Write Reviews{" "}
              </p>
              <p class="review" onClick={() => clickCheckReviews()}>
                Read Reviews
              </p>
            </div>
          </div>
          {selected_count == 0 ? (
            <div class="cartbuttonall">
              <button class="cartbutton" onClick={clickAddCart}>
                Add to cart
              </button>
              <img class="carticon" src={carticon} alt="" />
            </div>
          ) : (
            <div class="number-1">
              <div class="number">
                <span class="minus" onClick={clickMinusCart}>
                  －
                </span>
                <span class="count">{selected_count}</span>
                <span class="plus" onClick={clickPlusCart}>
                  +
                </span>
              </div>
            </div>
          )}
          <p class="price">{item.price}</p>
        </li>
      </ul>

      {/* <img src={item.image} class="item-image" alt="" />
      <div class="info">
        <div class="name">{item.name}</div>
        <div class="name-bottom">
          <img src={ImgIconHeart} class="icon-heart" alt="" />
          <div class="count">({item.total_like_count})</div>
          <button class="link-button" onClick={() => clickCheckReviews()}>
            Check Reviews
          </button>
          <button class="link-button" onClick={() => clickWriteReview()}>
            Write Review
          </button>
        </div>
        <div class="info-bottom">
          <div class="price">${item.price}</div>
          {selected_count == 0 ? (
            <div class="add" onClick={clickAddCart}>
              Add +
            </div>
          ) : (
            <div class="number">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{selected_count}</span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          )}
        </div>           
      </div> */}
    </>
  );
};

export default Item;
