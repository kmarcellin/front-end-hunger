import React, { useEffect, useState } from "react";
import Reaction0 from "../../assets/img/notgood.png";
import Reaction1 from "../../assets/img/goodimg.png";
import Reaction2 from "../../assets/img/verygood.png";
import Reaction3 from "../../assets/img/excellent.png";
import Cross from "../../assets/img/cross1.svg";
import API from "../../API";

const api = new API();

const Reviews = ({ selectedItemId, setSelectedItemId, setShowReviews }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getReviews(selectedItemId).then((reviews) => {
      setSelectedItemId(null);
      setReviews(reviews);
    });
  }, []);

  const getImgReaction = (like_count) => {
    switch (like_count) {
      case 1:
        return Reaction1;
      case 2:
        return Reaction2;
      case 3:
        return Reaction3;
      default:
        return Reaction0;
    }
  };

  return (
    <section class="popup1">
      <div class="innter">
        <div class="popup-content">
          <div class="innter">
            <img
              src={Cross}
              onClick={() => setShowReviews(false)}
              class="cross"
              alt=""
            />
            <h2>Reviews</h2>
            <ul class="reviews">
              {reviews &&
                reviews.map((review) => (
                  <li>
                    <img src={getImgReaction(review.like_count)} alt="" />
                    <div class="name">{review.name}</div>
                    <div class="body">{review.body}</div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
