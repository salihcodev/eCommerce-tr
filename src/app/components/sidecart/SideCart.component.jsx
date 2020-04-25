// BASIC:==>
import React from "react";

// UTILITIES:==>
import "../../Variables.css";
import { AppConsumer } from "../../context";

import styled from "styled-components";

// COMPONENT:==>
class SideCart extends React.Component {
  render() {
    return (
      <>
        <AppConsumer>
          {(value) => {
            const { toggleCart, readMore, cartList, moreText } = value;

            return (
              <AsideCart toggler={toggleCart}>
                <section className="cart-list-container">
                  <ul>
                    {cartList.map((cartItem) => (
                      <section key={cartItem.id} className="cart-item">
                        <div className="item-headers">
                          <div className="item-image">
                            <img
                              src={`../${cartItem.image}`}
                              alt={`../${cartItem.image}`}
                            />
                          </div>
                          <h4 className="item-name">{cartItem.title}</h4>
                        </div>

                        <div className="item-context-info">
                          <p className="item-source">
                            this product provided by
                            <span className="company">{cartItem.company}</span>
                          </p>

                          <div className="description-container">
                            <button
                              className="item-description-toggler"
                              onClick={readMore}
                            >
                              {moreText
                                ? "- hide description"
                                : "+ view description"}
                            </button>
                            <p className="item-description">
                              {moreText ? cartItem.description : null}
                            </p>
                          </div>
                        </div>

                        <p className="item-numeric-info">
                          <span className="item-price">
                            price: ${cartItem.totalProductPrice}
                          </span>
                          <span className="item-count">
                            items: {cartItem.count}
                          </span>
                        </p>
                      </section>
                    ))}
                  </ul>
                </section>
              </AsideCart>
            );
          }}
        </AppConsumer>
      </>
    );
  }
}

// STYLING COMPONENTS:==>
const AsideCart = styled.aside`
  background: var(--sub6Clr);
  width: 100%;
  padding: 20px 7px 0 10px;
  position: fixed;
  top: 9.8%;
  z-index: 10;
  overflow-y: scroll;
  right: 0;
  transition: var(--sudoTrans);
  border-left: var(--subBd);
  border-top: 4px solid var(--subClr);
  bottom: 0;
  transform: ${(props) =>
    props.toggler ? "translateX(0)" : "translateX(100%)"};

  @media (min-width: 576px) {
    width: 18rem;
  }

  .cart-list-container {
    ul {
      padding: 0;
      margin: 0;
    }
    .cart-item {
      border: 1px solid #ddd;
      background: #fff;
      padding: 10px;
      margin-bottom: 3px;

      .item-headers {
        display: flex;

        .item-image {
          width: 60px;
          height: 50px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .item-context-info {
        .item-source {
          span.company {
            font-weight: bolder;
            font-size: 19px;
            text-transform: capitalize;
            margin-left: 3px;
          }
        }
        .description-container {
          button.item-description-toggler {
            border: 0;
            outline: 0;
            min-width: 100%;
          }

          .item-description {
            margin-top: 10px;
            &::first-letter {
              text-transform: uppercase;
            }
          }
        }
      }

      .item-numeric-info {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 0;

        .item-price {
          width: 50px;
          background: #f0cf64;
          flex-grow: 2;
          padding: 2px 13px;
        }

        .item-count {
          width: 50px;
          background: #528bff;
          padding: 2px 13px;
          flex-grow: 1;
        }
      }
    }
  }
`;
export default SideCart;
