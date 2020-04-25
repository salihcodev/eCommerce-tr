// BASIC:==>
import React from "react";

// UTILITIES:==>
import { linksData } from "./LinksData";
import SocialLinks from "./SocialLinks";
import { ProItems } from "./ProductData";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    toggleSideBar: false,
    toggleCart: false,
    moreText: false,
    LinksData: linksData,
    SocialLinks,
    cartList: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storedProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    search: "",
    price: 0,
    minLimit: 0,
    maxLimit: 0,
    company: "all",
    shipping: false,
    loading: true,
  };

  componentDidMount() {
    // Contentful setup.
    this.setProducts(ProItems);
  }

  // Extract the data to deal with it in setState({}).
  setProducts = (products) => {
    let storedProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };

      // return required data.
      return product;
    });

    // return the matched result back of featured products.
    let featuredProducts = storedProducts.filter(
      (item) => item.featured === true
    );

    // get max price all over the stored products.
    let maxPrice = Math.max(...storedProducts.map((product) => product.price));

    // Setting our state.
    this.setState(
      {
        storedProducts,
        filteredProducts: storedProducts,
        featuredProducts,
        cartList: this.getCartStorage(), // local storage.
        singleProduct: this.getSingleProduct(),
        maxLimit: maxPrice,
        company: maxPrice,
        loading: false,
      },
      () => this.addTotal()
    );
  };

  // get the cart storage from local storage.
  getCartStorage = () => {
    let updatedCart; // cart data from local storage.
    let storedCartData = localStorage.getItem("updatedCart");
    if (storedCartData) {
      updatedCart = JSON.parse(storedCartData);
    } else {
      updatedCart = [];
    }

    return updatedCart;
  };

  // get the single product from the local storage.
  getSingleProduct = () => {
    // let updatedSingleProduct; // single product from local storage.
    let storedSingleProduct = localStorage.getItem("singleProduct");
    return storedSingleProduct ? JSON.parse(storedSingleProduct) : {};
  };

  //  get cart information.
  getTotal = () => {
    let storeSubTotal = 0;
    let storeCartItems = 0;

    this.state.cartList.forEach((item) => {
      storeSubTotal += item.totalProductPrice;
      storeCartItems += item.count;
    });

    let tax = storeSubTotal * 0.1;
    let totalCartPrice = storeSubTotal + tax;

    return {
      storeCartItems,
      storeSubTotal,
      tax,
      totalCartPrice,
    };
  };

  // add cart information to AddToCart().
  addTotal = () => {
    // extract the returned data from getTotals() method.
    const finalCartInfo = this.getTotal();

    this.setState({
      cartItems: finalCartInfo.storeCartItems,
      cartSubTotal: finalCartInfo.storeSubTotal,
      cartTax: finalCartInfo.tax,
      cartTotal: finalCartInfo.totalCartPrice,
    });
  };

  // store updated cart list to the local storage.
  syncStorage = () => {
    localStorage.setItem("updatedCart", JSON.stringify(this.state.cartList));
  };

  // Add items to cart.
  addToCart = (id) => {
    let tempCart = [...this.state.cartList];
    let tempStoredProducts = [...this.state.storedProducts];

    let tempProduct = tempCart.find((product) => product.id === id);
    if (!tempProduct) {
      tempProduct = tempStoredProducts.find((product) => product.id === id);
      let totalProductPrice = tempProduct.price;
      let cartProduct = { ...tempProduct, count: 1, totalProductPrice };

      tempCart = [...tempCart, cartProduct];
    } else {
      tempProduct.count++;
      tempProduct.totalProductPrice = tempProduct.price * tempProduct.count;
      tempProduct.totalProductPrice = parseFloat(
        tempProduct.totalProductPrice.toFixed(2)
      );
    }
    this.setState(
      () => {
        return { cartList: tempCart };
      },
      () => {
        this.openCart();
        this.addTotal();
        this.syncStorage();
      }
    );
  };

  // match the single product, and added it to local storage.
  setSingleProduct = (id) => {
    let sProduct = this.state.storedProducts.find(
      (product) => product.id === id
    );
    localStorage.setItem("singleProduct", JSON.stringify(sProduct));
    this.setState({
      singleProduct: { ...sProduct },
      loading: false,
    });
  };

  // THE CONTROLLER METHODS:==>
  // toggle the status of Sidebar.
  toggleSideBarMethod = () =>
    this.setState({ toggleSideBar: !this.state.toggleSideBar });

  // toggle the status of Cart.
  toggleCartMethod = () =>
    this.setState({ toggleCart: !this.state.toggleCart });

  // close the Cart.. no matter what!
  readMore = () => this.setState({ moreText: !this.state.moreText });

  // open the Cart.. no matter what!
  openCart = () => this.setState({ toggleCart: true });

  // add another item of the same product to cart
  inCerementProduct = (id) => {
    let tempCart = [...this.state.cartList];

    let tempProduct = tempCart.find((product) => product.id === id);
    tempProduct.count++;
    tempProduct.totalProductPrice = tempProduct.count * tempProduct.price;
    tempProduct.totalProductPrice = parseFloat(
      tempProduct.totalProductPrice.toFixed(2)
    );

    this.setState(
      () => {
        return {
          cartList: [...tempCart],
        };
      },
      () => {
        this.addTotal();
        this.syncStorage();
      }
    );
  };
  // remove another item of the same product to cart
  deCerementProduct = (id) => {
    let tempCart = [...this.state.cartList];
    const tempProduct = tempCart.find((product) => product.id === id);

    tempProduct.count = tempProduct.count - 1;
    if (tempProduct.count === 0) {
      this.removeProduct(tempProduct.id);
    } else {
      tempProduct.totalProductPrice = tempProduct.count * tempProduct.price;
      tempProduct.totalProductPrice = parseFloat(
        tempProduct.totalProductPrice.toFixed(2)
      );
    }

    this.setState(
      () => {
        return {
          cartList: [...tempCart],
        };
      },
      () => {
        this.addTotal();
        this.syncStorage();
      }
    );
  };

  removeProduct = (id) => {
    let tempCart = [...this.state.cartList];
    tempCart = tempCart.filter((product) => product.id !== id);

    this.setState(
      () => {
        return {
          cartList: [...tempCart],
        };
      },
      () => {
        this.addTotal();
        this.syncStorage();
      }
    );
  };

  wipeCart = () => {
    this.setState(
      {
        cartList: [],
      },
      () => {
        this.addTotal();
        this.syncStorage();
      }
    );
  };

  // watch input field change.
  watchFieldChange = (event) => {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value, // [name] here being like ( <if the target name> = <search>, create a setState({search: <value> => of the same of <name> target}) )
      },
      this.sortingData()
    );
    // if (name === "search") {
    //   this.setState({
    //     search: value,
    //   });
    // }
    // console.log(name, value);
  };

  sortingData = () => {
    const { storedProducts, company, price, shipping, search } = this.state;
    let tempPrice = parseInt(price);
    let tempProducts = [...storedProducts];

    tempProducts = tempProducts.filter((product) => product.price <= tempPrice);

    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.freeShipping === true
      );
      console.log(tempProducts);
    }

    if (search.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = product.title.toLowerCase().slice(0, tempSearch.length);

        if (tempSearch === tempTitle) {
          return product;
        }
      });
    }

    this.setState({
      filteredProducts: tempProducts,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          toggleSideBarMethod: this.toggleSideBarMethod,
          toggleCartMethod: this.toggleCartMethod,
          readMore: this.readMore,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          inCerementProduct: this.inCerementProduct,
          deCerementProduct: this.deCerementProduct,
          wipeCart: this.wipeCart,
          removeProduct: this.removeProduct,
          watchFieldChange: this.watchFieldChange,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
