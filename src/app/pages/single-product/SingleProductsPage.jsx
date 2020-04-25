// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";

// COMPONENTS:==>

// UTILITIES:==>
import styled from "styled-components";

class SingleProductsPage extends React.Component {
  render() {
    return (
      <>
        <AppConsumer>
          {(value) => {
            const { singleProduct } = value;
            const {
              id,
              image,
              company,
              description,
              featured,
              price,
              title,
            } = singleProduct;
            return (
              <singleProduct>
                <div className="container">
                  <div className="row">
                    <div className="col col-md-4">
                      <div className="product-image">
                        <img src={`../${image}`} alt="hi" />
                      </div>
                    </div>
                    <div className="col col-md-8">
                      <div className="product-information">
                        <h1>product name:{title}</h1>

                        <p>{company}</p>
                        <p>{description}</p>
                        <p>{featured}</p>
                        <p>{price}</p>
                        <span>product ser: {id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </singleProduct>
            );
          }}
        </AppConsumer>
      </>
    );
  }
}

export default SingleProductsPage;

const singleProduct = styled.section`
  padding: 100px 10px 50px;

  .product-image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .product-information {
    width: 100%;
    height: 100%;
  }
`;
