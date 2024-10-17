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
    navigator.clipboard.writeText(text);
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
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            id="my-box"
            rows="8"
            onChange={handleonChange}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpclick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handlelowerclick}
          disabled={text.length === 0}

        >
          Convert to lowerCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleclearclick}
          disabled={text.length === 0}

        >
          Clear text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          disabled={text.length === 0}

        >
          Copy text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraspace}
          disabled={text.length === 0}

        >
          Remove extra space
        </button>

       
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <div>
          <p>{text.split(/\s+/).filter((element) => {return element.length !==0}).length} words and {text.length} characters</p>
        </div>

        <p>{ 0.08 * text.split(" ").filter((element) => {return element.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}




