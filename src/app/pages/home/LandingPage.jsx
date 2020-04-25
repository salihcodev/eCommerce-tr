// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";
import LandingPageImg from "../imgs/mainBcg.jpg";

// COMPONENTS:==>
import HeaderPlaceHolder from "../../components/header/Header.component";
import Services from "../../components/services/Services.component";
import FeaturedProducts from "../../components/featured/FeaturedProducts.components";

// UTILITIES:==>
import { Link } from "react-router-dom";
import styled from "styled-components";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <AppConsumer>
          {(value) => {
            return (
              <>
                <HeaderPlaceHolder
                  img={LandingPageImg}
                  maxHeight={true}
                  title="Landing Page"
                  link="/products"
                  linkTitle="browse products"
                >
                  <p>the para right here</p>
                </HeaderPlaceHolder>
              </>
            );
          }}
        </AppConsumer>

        <Services />
        <FeaturedProducts />

        <Redirecting>
          <ProductsRedi className="btn btn-dark">
            <Link to="/products">go to products</Link>
          </ProductsRedi>
        </Redirecting>
      </>
    );
  }
}

export default LandingPage;

const Redirecting = styled.div`
  text-align: center;
  padding: 50px;
`;

const ProductsRedi = styled.button`
  padding: 5px;
  color: #333;
`;
