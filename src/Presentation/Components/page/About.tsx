import React from "react";
import { LinkButton } from "../atoms";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <LinkButton to="/" text="Home" color="secondary" />
      <LinkButton to="/service" text="Service" />
    </div>
  );
};

export default About;
