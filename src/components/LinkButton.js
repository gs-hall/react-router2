import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default function LinkButton({ text, link, className, onClick }) {
  return (
    <button className={ classnames("button", className)} onClick={onClick} >
      {<Link to={ link } >{ text }</Link>}
    </button>
  );
};