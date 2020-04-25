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
          description: "hello from the other side-",
          title: "HellOo",
        },
        {
          id: 2,
          icon: <FaMixcloud />,
          description: "hello from the other side --",
          title: "HellOo",
        },
        {
          id: 3,
          icon: <FaBookReader />,
          description: "hello from the other side ---",
          title: "HellOo",
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
  padding: 10px 30px;
  background: #ddd9;

  .serviceContainer {
    border: 1px solid #555;
    text-align: center;
    background: #fff;
  }
`;
