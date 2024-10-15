import React, { useState } from "react";

export default function TexthtmlForm(props) {
  const [text, setText] = useState("Enter Text here");

  const handleonChange = (event) => {
    // console.log("on Change")
    setText(event.target.value);
  };

  const handleUpclick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handlelowerclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleclearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };

 
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-box"
            rows="8"
            onChange={handleonChange}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpclick}
        >
          Convert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handlelowerclick}
        >
          Convert to lowerCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleclearclick}
        >
          Clear text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleExtraspace}
        >
          Remove extra space
        </button>

       
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
