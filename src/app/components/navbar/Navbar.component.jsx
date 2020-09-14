// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";

// UTILITIES:==>
import "../../Variables.css";
import logo from "../../App.logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ICONS:==>
import { AiOutlineMenu } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

// COMPONENT:==>
class Navbar extends React.Component {
  render() {
    return (
      <AppConsumer>
        {(value) => {
          const { cartItems, toggleSideBarMethod, toggleCartMethod } = value;

          return (
            <Nav className="navbar">
              <div className="container">
                <SideToggler className="">
                  <AiOutlineMenu onClick={toggleSideBarMethod} />
                </SideToggler>
                <Link to="/" className="navbar-brand">
                  <LogoBox className="logo"></LogoBox>
                </Link>
                <CartIcon className="">
                  <TiShoppingCart onClick={toggleCartMethod} />
                  <ItemsFlag onClick={toggleCartMethod}>{cartItems}</ItemsFlag>
                </CartIcon>
              </div>
            </Nav>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Navbar;

// STYLING COMPONENTS:==>
const Nav = styled.nav`
  background: var(--sub7Clr);
  padding: 2px 30px;
  border-bottom: var(--sub4Bd);
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
  top: 0;
`;

const SideToggler = styled.i`
  font-size: 25px;
  margin-top: 0;
  cursor: pointer;
`;
const CartIcon = styled.i`
  font-size: 25px;
  margin-top: 0;
  position: relative;
  cursor: pointer;
`;

const LogoBox = styled.main`
  background: url('${logo}') center/cover;
  width: 120px;
  height: 35px;
`;

const ItemsFlag = styled.span`
  position: absolute;
  top: 0;
  right: -10px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: var(--sub00Clr);
  font-size: 13px;
  text-align: center;
  padding: 2px 2px 0 0;
  font-weight: bolder;
`;
