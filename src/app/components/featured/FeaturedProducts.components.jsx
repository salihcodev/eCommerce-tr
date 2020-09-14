// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";
import styled from "styled-components";

// UTILITIES:==>

// COMPONENTS:==>
import ProductTemplate from "../../components/product/Product.component";

// COMPONENT:==>
class FeaturedProducts extends React.Component {
  render() {
    return (
      <>
        <AppConsumer>
          {(value) => {
            const { featuredProducts } = value;
            return (
              <>
                <FeaturedProductsWarper>
                  <h1>featured products</h1>
                  <div className="container">
                    <div className="row">
                      {featuredProducts.map((product) => (
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <ProductTemplate
                            key={product.id}
                            product={product}
                          ></ProductTemplate>
                        </div>
                      ))}
                    </div>
                  </div>
                </FeaturedProductsWarper>
              </>
            );
          }}
        </AppConsumer>
      </>
    );
  }
}

export default FeaturedProducts;
const FeaturedProductsWarper = styled.section`

  h1 {
    text-align: center;
    padding: 70px 10px 30px;
  }
`;
