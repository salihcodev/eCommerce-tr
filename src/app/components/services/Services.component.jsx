// BASIC:==>
import React from "react";

// UTILITIES:==>
import "../../Variables.css";
import styled from "styled-components";

// ICONS:==>
import { FaServer, FaMixcloud, FaBookReader } from "react-icons/fa";

// COMPONENT:==>
class Services extends React.Component {
  constructor() {
    super();

    this.state = {
      services: [
        {
          id: 1,
          icon: <FaServer />,
          description: "hello from the other side",
          title: "fast connection",
        },
        {
          id: 2,
          icon: <FaMixcloud />,
          description: "hello from the other side ",
          title: "time management",
        },
        {
          id: 3,
          icon: <FaBookReader />,
          description: "hello from the other side",
          title: "packaging",
        },
      ],
    };
  }

  render() {
    return (
      <ServicesWarper>
        <div className="container">
          <div className="row">
            {this.state.services.map((service) => (
              <div key={service.id} className="col col-4">
                <div className="serviceContainer">
                  <h3>{service.title}</h3>
                  <span className="icon">{service.icon}</span>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ServicesWarper>
    );
  }
}

export default Services;

// STYLING COMPONENTS:==>
const ServicesWarper = styled.section`
  padding: 60px 30px;
  background: #ddd9;

  .serviceContainer {
    border: 1px solid #ddd;
    text-align: center;
    background: #fff;
    position: relative;
    padding: 10px;
    min-height: 150px;

    span.icon {
      border: 1px solid #ddd;
      width: 40px;
      height: 40px;
      display: block;
      border-radius: 50%;
      font-size: 20px;
      position: absolute;
      top: 34%;
      left: -19px;
    }
  }
`;
