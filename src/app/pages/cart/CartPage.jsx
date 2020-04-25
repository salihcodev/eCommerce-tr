// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";
// COMPONENTS:==>

// UTILITIES:==>
import EmptyCartImg from "../imgs/empy-cart.svg";

import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";

import { TiTrash } from "react-icons/ti";

class CartPage extends React.Component {
  render() {
    return (
      <AppConsumer>
        {(value) => {
          const {
            cartList,
            cartSubTotal,
            cartTax,
            cartTotal,
            inCerementProduct,
            deCerementProduct,
            removeProduct,
            wipeCart,
          } = value;

          if (cartList.length === 0) {
            return (
              <EmptyCart className="empty-cart-container">
                <h2>you haven't added items to cart yet 🙄</h2>
                <div className="empty-cart-img"></div>
              </EmptyCart>
            );
          } else {
            return (
              <>
                <CartPageWrapper className="container">
                  <div className="cart-header">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="item-column item-img">img</div>
                      </div>
                      <div className="col-md-3">
                        <div className="item-column item-name">name</div>
                      </div>
                      <div className="col-md-2">
                        <div className="item-column item-price">price</div>
                      </div>
                      <div className="col-md-2">
                        <div className="item-column item-total">total</div>
                      </div>
                      <div className="col-md-2">
                        <div className="item-column item-quantity">
                          quantity
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="item-column item-remove">
                          remove <TiTrash />
                        </div>
                      </div>
                    </div>
                  </div>
                  {cartList.map((cartItem) => {
                    const {
                      id,
                      image,
                      title,
                      price,
                      totalProductPrice,
                      count,
                    } = cartItem;
                    return (
                      <section key={id} className="item-indexing">
                        <div className="row">
                          <div className="col-lg-2 col-sm-12">
                            <div className="item-column item-image">
                              <img src={image} alt="" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-12">
                            <div className="item-column item-title">
                              <h4>name: {title}</h4>
                            </div>
                          </div>
                          <div className="col-lg-2 col-sm-12">
                            <div className="item-column item-price">
                              price: ${price}
                            </div>
                          </div>
                          <div className="col-lg-2 col-sm-12">
                            <div className="item-column item-total">
                              total: ${totalProductPrice}
                            </div>
                          </div>
                          <div className="col-lg-2 col-sm-12">
                            <div className="item-column item-quantity">
                              <span className="q-flag">quantity: </span>
                              <FiPlusSquare
                                className="remove-another item-controller"
                                onClick={() => inCerementProduct(id)}
                              />
                              <span className="quantity-num">{count}</span>
                              <FiMinusSquare
                                className="add-another item-controller"
                                onClick={() => deCerementProduct(id)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-1 col-sm-12">
                            <div className="item-column item-remove item-controller">
                              <BsTrashFill onClick={() => removeProduct(id)} />
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  })}
                  <div className="wipe-cart">
                    <button
                      className="item-controller"
                      onClick={() => wipeCart()}
                      className="clear-cart btn btn-outline-danger btn-block"
                    >
                      wipe all cart
                    </button>
                  </div>

                  <section className="cart-information">
                    <h5>
                      <p className="info-flag">
                        cart subtotal:
                        <span className="flag-num"> ${cartSubTotal}</span>
                      </p>
                    </h5>
                    <h5>
                      <p className="info-flag">
                        cart tax:
                        <span className="flag-num"> {cartTax} </span>
                      </p>
                    </h5>
                    <h5>
                      <p className="info-flag">
                        cart total:
                        <span className="flag-num">{cartTotal}</span>
                      </p>
                    </h5>
                  </section>
                </CartPageWrapper>
              </>
            );
          }
        }}
      </AppConsumer>
    );
  }
}

export default CartPage;

const EmptyCart = styled.section`
  h2 {
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
  }

  .empty-cart-img {
    background-image: url(${EmptyCartImg});
    height: 500px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CartPageWrapper = styled.section`
  @media (max-width: 990px) {
    .cart-header {
      display: none;
    }
  }
  .cart-header {
    .item-column {
      border-left: 1px solid #ddd;
      padding: 10px;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    margin-bottom: 20px;
    border: 1px solid #ddd;
    text-align: center;
  }

  .item-indexing {
    border: 1px solid #ddd;
    margin-bottom: 3px;
    text-align: center;

    &:hover {
      background: #ccc8;

      .item-column {
        border-left: 1px solid #ccc;
        color: #444;
      }

      .item-remove {
        color: #ce5648;
      }
    }

    .item-image {
      width: 100%;
      height: 100%;

      img {
        width: 50px;
        height: 50px;
      }
    }

    .item-column {
      border-left: 1px solid #ddd;
      padding: 10px;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .item-quantity {
      .q-flag {
        padding: 0 4px;
      }
      .quantity-num {
        padding: 5px;
      }

      .item-controller {
        cursor: pointer;
      }
    }
    .item-remove {
      font-size: 30px;
      color: #edc84e;
    }
  }
  .wipe-cart {
    text-align: center;
    padding: 80px 0;

    button.clear-cart {
      font-size: 21px;
      color: #555;
      font-weight: bolder;
      text-transform: capitalize;

      &:hover {
        color: #eee;
      }
    }
  }

  .cart-information {
    text-align: center;

    .info-flag {
      .flag-num {
        color: #999;
      }
    }
  }
`;
