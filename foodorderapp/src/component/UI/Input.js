import React from "react";
import "./Input.css";

export default function Input(props) {
  console.log("Input called")
  return (
    <>
      <label>{props.label}:</label>
      <input {...props.input}></input>
    </>
  );
}
