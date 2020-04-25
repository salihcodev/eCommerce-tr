// BASIC:==>
import React from "react";
import DefaultImg from "../../pages/imgs/mainBcg.jpg";

// UTILITIES:==>
import "../../Variables.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ICONS:==>
// ----------

// COMPONENT:==>
const HeaderPlaceHolder = ({
  img,
  link,
  linkTitle,
  maxHeight,
  title,
  children,
}) => (
  <>
    <Header img={img} maxHeight={maxHeight}>
      <div className="header-instances">
        <h1>
          {title}
          <span className="hd-style"></span>
        </h1>
        {children}
        <button className="btn btn-warning">
          <Link to={link}>{linkTitle}</Link>
        </button>
      </div>
    </Header>
  </>
);

export default HeaderPlaceHolder;

HeaderPlaceHolder.defaultProps = {
  img: DefaultImg,
};

// STYLING COMPONENTS:==>
const Header = styled.header`
  background: var(--subGrdOverlay), url(${(props) => props.img}) center/cover;
  min-height: ${(props) => (props.maxHeight ? "70vh" : "90vh")};
  justify-content: center;
  align-items: center;
  display: flex;
  color: var(--sub7Clr);

  h1 {
    margin-bottom: 35px;
  }

  button {
    text-transform: uppercase;
    word-spacing: 4px;

    a {
      color: var(--sub4Clr);
    }
  }
`;
