import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage";
import Products from "./Products";
import Blog from "./blog";
import Contactus from "./contactus";
import Aboutus from "./aboutus";
import Careers from "./careers";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/Products" component={Products} />
          <Route path="/blog" component={Blog} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/careers" component={Careers} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
