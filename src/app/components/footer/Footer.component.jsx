// BASIC:==>
import React from "react";
import { AppConsumer } from "../../context";

// UTILITIES:==>
import { FaExternalLinkAlt } from "react-icons/fa";
import "../../Variables.css";
import styled from "styled-components";

// STYLING COMPONENTS:==>
const Foot = styled.footer`
  padding: 20px;
  background: var(--sub0Clr);
  color: var(--sub1Clr);

  .socialLinksContainer {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        &:hover {
          span.itemIcon {
            opacity: 1 !important;
          }
        }

        a.itemLink {
          color: var(--sub1Clr);

          p.itemText {
            display: flex;
            align-items: center;
          }

          span.itemIcon {
            margin-left: 5px;
            margin-top: -4px;
            opacity: 0;
            transition: var(--subTrans);
          }
        }
      }
    }
  }
`;

const LinkFlag = styled.i`
  font-size: 10px;
  margin-right: 10px;
  color: #ffffff36;
`;

// COMPONENT:==>
class Footer extends React.Component {
  render() {
    return (
      <AppConsumer>
        {(value) => {
          const { SocialLinks } = value;
          return (
            <>
              <Foot>
                <div className="container">
                  <div className="row">
                    <div className="col col-6">
                      @copyrights {new Date().getFullYear()} - all rights
                      reserved to ahmedsalih
                    </div>
                    <div className="col col-6">
                      <div className="socialLinksContainer">
                        <ul>
                          {value.SocialLinks.map((socialItem) => (
                            <li key={socialItem.id}>
                              <a href={socialItem.url} className="itemLink">
                                <p className="itemText">
                                  <LinkFlag>
                                    <FaExternalLinkAlt />
                                  </LinkFlag>
                                  {socialItem.name}
                                  <span className="itemIcon">
                                    {socialItem.icon}
                                  </span>
                                </p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Foot>
            </>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Footer;
