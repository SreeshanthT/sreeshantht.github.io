import React from "react";

export default function Fact({props, gridClass}) {
  return (
    <div className={gridClass+" mt-5 mt-md-0"} key={props.id}>
      <div className="count-box">
        <i className={props.icon}></i>
        <span
          data-purecounter-start="0"
          data-purecounter-end={props.val}
          data-purecounter-duration="1"
          className="purecounter"
        >{props.val}</span>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
