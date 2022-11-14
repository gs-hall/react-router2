import React from "react";
import classnames from "classnames";

export default function Actions({text, link, className, children}) {
  return (
    <div className={ classnames("actions", className) }>
      {children}
    </div>
  );
};