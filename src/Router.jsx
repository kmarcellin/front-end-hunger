import React from "react";
import { Route, Switch } from "react-router";
import Addtocart from "./containers/Addtocart";
import Home from "./containers/Home";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/addtocart"} component={Addtocart} />
      </Switch>
    </>
  );
};
export default Router;
