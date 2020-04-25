// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";
import LandingPageImg from "../imgs/aboutBcg.svg";

// COMPONENTS:==>
import HeaderPlaceHolder from "../../components/header/Header.component";

// UTILITIES:==>
import styled from "styled-components";

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <AppConsumer>
          {value => {
            return (
              <>
                <HeaderPlaceHolder
                  img={LandingPageImg}
                  maxHeight={true}
                  title="About Page"
                  link="/"
                  linkTitle="read more"
                >
                  <p>
                    the para right herethe para right herethe para right here
                  </p>
                </HeaderPlaceHolder>

                <AboutBody>
                  <div className="container">
                    <div className="row">
                      <div className="col col-6">
                        <div className="aboutCoverContainer">
                          <img src={LandingPageImg} alt={LandingPageImg} />
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="text">
                          <div className="textContainer">
                            <p>hello from the other side</p>
                            <button className="btn btn-info">read more >></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AboutBody>
              </>
            );
          }}
        </AppConsumer>
      </>
    );
  }
}

export default AboutPage;

const AboutBody = styled.section`
  background: #eee;
  height: 400px;
  margin-top: 50px;

  .col {
    height: 400px;

    .aboutCoverContainer {
      background-size: cover;
      height: 100%;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .text {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`;
