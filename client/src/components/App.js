import React, { useState, useEffect } from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Home from "../routes/home/";
import Login from "../routes/login/";
import Farm from "../routes/farm/";
import { PropTypes } from "prop-types";
import NavBar from "./navBar";

const App = props => {
  const { location, match } = props;
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Authenticates user and set state variables
   * @function authUser
   */
  const authUser = async () => {
    try {
      await isAuthenticated();
      setLogged(true);
      setLoading(false);
    } catch (err) {
      setLogged(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    authUser();
  }, []);

  if (loading) return null;

  const isRoot =
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname === "/app" ||
    location.pathname === "/app/";

  if (!logged && location.pathname.indexOf("login") === -1) {
    return <Redirect to="/login" />;
  }

  if (isRoot) {
    return <Redirect to="/app/home" />;
  }
  const rowStyle = {
    padding: "0 0 0 0"
  };

  return (
    <div className="App">
      <div className="row" style={rowStyle}>
        <NavBar />
      </div>
      <Switch>
        <Route path={`${match.url}app/home`} component={Home} />
        <Route path={`${match.url}login`} component={Login} />
        <Route path={`${match.url}app/farm`} component={Farm} />
        <Redirect from="/" to={`${match.url}app/home`} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(App);
