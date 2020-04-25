// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";
// COMPONENTS:==>
import ProductTemplate from "../../components/product/Product.component";
import ProductFilter from "../../components/filter/ProductFilter.component";

// UTILITIES:==>
import styled from "styled-components";

class ProductsPage extends React.Component {
  render() {
    return (
      <>
        <Heading className="heading">All Products</Heading>
        <ProductFilter />
        <AppConsumer>
          {(value) => {
            const { filteredProducts } = value;
            if (filteredProducts.length === 0) {
              return (
                <NoMatchWarning>
                  you specified a non excited item till yet!
                </NoMatchWarning>
              );
            } else {
              return (
                <>
                  <AllProducts>
                    <div className="container">
                      <div className="row">
                        {filteredProducts.map((product) => (
                          <div className="col col-md-3 col-sm-6 col-xs-12">
                            <ProductTemplate
                              key={product.id}
                              product={product}
                            ></ProductTemplate>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AllProducts>
                </>
              );
            }
          }}
        </AppConsumer>
      </>
    );
  }
}

export default ProductsPage;

const Heading = styled.h1`
  text-align: center;
  padding: 70px 10px 30px;
`;
const AllProducts = styled.section`
  .pro {
    height: 380px;
  }
`;

const NoMatchWarning = styled.h3`
  text-align: center;
  letter-spacing: 2px;
`;
