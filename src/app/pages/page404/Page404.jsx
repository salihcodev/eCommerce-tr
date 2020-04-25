// BASIC:==>
import React from "react";
import Page404BG from "../imgs/page404.svg";

// COMPONENTS:==>

// UTILITIES:==>
import styled from "styled-components";
import { Link } from "react-router-dom";

class Page404 extends React.Component {
  render() {
    return (
      <>
        <Messing>
          <div className="not-found-container">
            <span className="flag404">404</span>
            <p>this page was not found !!</p>
            <button className="btn btn-primary">
              <Link to="/">return to home</Link>
            </button>
          </div>
        </Messing>
      </>
    );
  }
}

export default Page404;

const Messing = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  height: 70vh;
  background: var(--subGrdOverlay), url(${Page404BG}) center/cover;

  .not-found-container {
    margin: auto;

    .flag404 {
      font-size: 150px;
      font-weight: bolder;
      color: var(--sub6Clr);
      border: 1px solid;
      border-radius: 50%;
      width: 300px;
      height: 300px;
      display: block;
      background: #f0ffff33;
    }

    p {
      margin-bottom: 60px;
      margin-top: -100px;
    }

    button {
      a {
        color: var(--sub7Clr);
        text-transform: uppercase;
      }
    }
  }
`;
