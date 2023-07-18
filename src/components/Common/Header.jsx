import React from "react";
import BackgroundImg from "../../assets/img/background-img.png";
import logo from "../../assets/img/logo-img.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <img class="backgroundimg" src={BackgroundImg} alt="" />
      <p class="text">
        Good food is <br />
        The Foundation of <br />
        <span id="happiness">GENUINE HAPPINESS</span>
      </p>
      <img class="logo" src={logo} onClick={() => dispatch(push("/"))} alt="" />
    </>
  );
};

export default Header;
