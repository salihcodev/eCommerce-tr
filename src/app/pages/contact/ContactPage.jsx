// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";

// COMPONENTS:==>
import HeaderPlaceHolder from "../../components/header/Header.component";

// UTILITIES:==>
import ContactImage from "../imgs/19691.jpg";
import styled from "styled-components";

class ContactPage extends React.Component {
  render() {
    return (
      <AppConsumer>
        {value => {
          return (
            <>
              <HeaderPlaceHolder
                img={ContactImage}
                maxHeight={true}
                title="contact Page"
                link="/"
                linkTitle="read more"
              >
                <p>please contact me if you have any concern</p>
              </HeaderPlaceHolder>
              <ContactingBox
                action="https://formspree.io/mwkbzdwy"
                method="POST"
              >
                <div className="container">
                  <input
                    className="form-control formInput"
                    type="text"
                    name="first name"
                    placeholder="first name"
                  />
                  <input
                    className="form-control formInput"
                    type="text"
                    name="last name"
                    placeholder="last name"
                  />
                  <input
                    className="form-control formInput"
                    type="text"
                    name="email"
                    placeholder="email"
                  />
                  <input
                    className="form-control submitForm btn btn-dark"
                    type="submit"
                    value="mail me"
                  />
                </div>
              </ContactingBox>
            </>
          );
        }}
      </AppConsumer>
    );
  }
}
export default ContactPage;

const ContactingBox = styled.form`
  padding: 20px 0;
  margin-top: 50px;

  .formInput {
    margin-bottom: 20px;
    padding: 22px;
  }

  .submitForm {
  }
`;
