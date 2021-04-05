import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");
ReactDOM.render(
  <Badge
    firstName="Nay"
    lastName="Rojas"
    jobTitle="Frontend Engineer"
    twitter="@nayrojas_"
    avatar="https://www.gravatar.com/avatar?d=identicon"
  />,
  container
);
