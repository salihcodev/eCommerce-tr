// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context/ContextData";
import styled from "styled-components";

// UTILITIES:==>
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// COMPONENT:==>
const ProductTemplate = ({ product }) => (
  <>
    <AppConsumer>
      {(value) => {
        const { setSingleProduct, addToCart } = value;
        return (
          <>
            <ProductPlaceHolder>
              <div className="product-wrapper">
                <div className="product-img">
                  <img src={product.image} alt={product.image} />
                </div>
                <div className="product-info">
                  <h3>{product.title} </h3>
                  <h4>
                    <span>${product.price}</span>
                  </h4>
                </div>

                <div className="product-viewer">
                  <Link to={`/products/${product.id}`}>
                    <FaSearch onClick={() => setSingleProduct(product.id)} />
                  </Link>

                  <Link>
                    <FaCartPlus onClick={() => addToCart(product.id)} />
                  </Link>
                </div>
              </div>
            </ProductPlaceHolder>
          </>
        );
      }}
    </AppConsumer>
  </>
);

export default ProductTemplate;

const ProductPlaceHolder = styled.div`
  .product-wrapper {
    border: 1px solid #ddd;
    position: relative;
    padding: 10px;
    min-height: 380px;
    margin-bottom: 20px;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
      .product-viewer {
        top: 100px;
      }
    }

    .product-img {
      img {
        width: 100%;
        height: 100%;
      }
    }

    .product-viewer {
      position: absolute;
      background: #fff9;
      padding: 40px;
      top: -150px;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease 0.3s;

      a {
        padding: 10px;
        font-size: 25px;
        color: #444;
      }
    }
  }
`;
