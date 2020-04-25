import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const SocialLinks = [
  {
    id: 1,
    name: "facebook",
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com"
  },
  {
    id: 2,
    name: "twitter",
    icon: <FaTwitterSquare />,
    url: "https://www.twitter.com"
  },
  {
    id: 3,
    name: "linked in",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com"
  }
];

export default SocialLinks;
