// BASIC:==>
import React from "react";

// UTILITIES:==>
import "../../Variables.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppConsumer } from "../../context";
// COMPONENT:==>
class Sidebar extends React.Component {
  render() {
    return (
      <AppConsumer>
        {value => {
          const { LinksData, toggleSideBar } = value;
          return (
            <AsideBar toggler={toggleSideBar}>
              <ul>
                {LinksData.map(link => (
                  <li key={link.id}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </AsideBar>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Sidebar;

// STYLING COMPONENTS:==>
const AsideBar = styled.aside`
  background: #3c3c46;
  width: 100%;
  padding: 30px 18px 0 10px;
  position: fixed;
  top: 9.8%;
  z-index: 10;
  left: 0px;
  transition: var(--sudoTrans);
  bottom: 0;
  transform: ${props =>
    props.toggler ? "translateX(0)" : "translateX(-100%)"};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 5px 0 3px 10px;
      border-bottom: 1px dashed #fff3;
      transition: var(--subTrans);
      border-radius: 5px;
      margin: 5px;
      &:hover {
        background: #00000014;
        border-left: 5px solid #fff;
      }

      a {
        color: #fff;
        text-transform: capitalize;
        width: 100%;
        padding: 5px;
        display: block;
      }
    }
  }

  @media (min-width: 576px) {
    width: 15rem;
  }
`;
