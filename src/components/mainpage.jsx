import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landingpage from "./landingpage";
import Blog from "./blog";
import Contactus from "./contactus";
import Aboutus from "./aboutus";
import Header from "./header";
import Footer from "./footer";

class Main extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contactus" component={Contactus} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default Main;
