// BASIC:==>
import React from "react";
import "./App.css";

// UTILITIES:==>
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES:==>
import LandingPage from "./pages/home/LandingPage";
import AboutPage from "./pages/about/AboutPage";
import ProductsPage from "./pages/products/ProductsPage";
import SingleProductPage from "./pages/single-product/SingleProductsPage";
import CartPage from "./pages/cart/CartPage";
import ContactPage from "./pages/contact/ContactPage";
import Page404 from "./pages/page404/Page404";

// COMPONENTS:==>
import Navbar from "./components/navbar/Navbar.component";
import Sidebar from "./components/sidebar/Sidebar.component";
import Footer from "./components/footer/Footer.component";
import SideCart from "./components/sidecart/SideCart.component";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" component={SingleProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
