import "./Componant.css";
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleESpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    //text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    console.log("Clear text was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const downloadTxt = () => {
    console.log("Download text was clicked" + text);
    // text content
    const texts = [text];
    // file object
    const file = new Blob(texts, { type: "text/plain" });
    // anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "TextUtils.txt";
    // simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState();

  return (
    <>
      <div>
        <div className="container mb-3">
          <label for="mybox" className="form-label">
            <h2>Enter text here for analyze</h2>
          </label>
          <textarea
            placeholder="Enter text here"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>

          <button
            id="up"
            className="btn btn-primary my-3 mx-1"
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>
          <button
            id="lp"
            className="btn btn-primary my-3 mx-1"
            onClick={handleLoClick}
          >
            Convert To Lovercase
          </button>

          <button
            id="rs"
            className="btn btn-primary my-3 mx-1"
            onClick={handleESpaces}
          >
            Remove Extra Spaces
          </button>

          <button
            id="dt"
            className="btn btn-primary my-3 mx-1"
            onClick={downloadTxt}
          >
            Download Text
          </button>

          <button
            id="ct"
            className="btn btn-primary my-3 mx-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>

          <button
            id="clrt"
            className="btn btn-primary my-3 mx-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      {/* <div id="prtext" className="container my-3">
        <h4>Your Text summary</h4>
        <p>Words- {text.split(" ").length}</p>
        <p>Characters- {text.length}</p>
        <p>Time to read- {Math.round(0.8 * text.split(" ").length)} seconds</p>
        <h5>Preview Text - </h5>
        <p id="ptext">{text}</p>
      </div> */}

      <div id="about" className="mx-2">
        <h2>About Text Utils</h2>
      </div>
    </>
  );
}
