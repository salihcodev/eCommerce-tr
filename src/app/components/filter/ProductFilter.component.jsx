// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";

// COMPONENTS:==>

// UTILITIES:==>
import styled from "styled-components";

export class ProductFilter extends React.Component {
  render() {
    return (
      <AppConsumer>
        {(value) => {
          const {
            filteredProducts,
            search,
            price,
            minLimit,
            maxLimit,
            company,
            shipping,
            watchFieldChange,
          } = value;
          return (
            <>
              <FilterContainer className="container">
                <div className="filter-factory">
                  <div className="row">
                    <div className="col">
                      <div className="search-filter-layer">
                        <label htmlFor="searchFilter"></label>
                        <input
                          type="text"
                          name="search"
                          id="searchFilter"
                          onChange={watchFieldChange}
                          value={search}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="compony-filter-layer">
                        <label htmlFor="componyFilter">company</label>

                        <select
                          name="company"
                          id="componyFilter"
                          onChange={watchFieldChange}
                        >
                          <option value="all">all</option>
                          <option value="htc">htc</option>
                          <option value="coy2">fuji</option>
                          <option value="coy3">coy3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="search-filter-range">
                        <label htmlFor="rangeFilter">max price: ${price}</label>
                        <input
                          type="range"
                          name="price"
                          id="rangeFilter"
                          min={minLimit}
                          max={maxLimit}
                          value={price}
                          onChange={watchFieldChange}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="shipping-filter-layer">
                        <label htmlFor="shippingFilter">free shipping</label>
                        <input
                          type="checkbox"
                          name="shipping"
                          id="shippingFilter"
                          onChange={watchFieldChange}
                          checked={shipping && true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="matched-products">
                  <p>matched products: {filteredProducts.length}</p>
                </div>
              </FilterContainer>
            </>
          );
        }}
      </AppConsumer>
    );
  }
}

export default ProductFilter;

const FilterContainer = styled.section`
  padding: 40px 10px;
  border-bottom: 2px dashed #7777;
  margin-bottom: 50px;

  /* .filter-factory {
    align-items: center;
    display: flex;
    height: 130px;
  } */

  .matched-products {
    padding: 5px;
    background: #008acd;
    color: #e9ecef;
    width: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 50px;

    p {
      margin: 0;
      padding: 0;
    }
  }
`;
