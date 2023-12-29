import React from "react";

export default function About() {
  return (
    <div className="container my-3">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>About text Utils</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                This is a simple web app build for text utilization.
              </strong>{" "}
              It is shown by default text, until users add the texts paragraphs
              that we use to style each word and character. These buttons
              control the overall text data, as well as the showing and hiding
              via CSS transitions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>About Operation on text</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This web app use dynamic operation on text.</strong> It is
              built for analyzing text or a basic operation on text. Such as
              convert to uppercase, convert to lower case, copy text to
              clipboard,etc. As well as this functionality we build a download
              choice for our users. For user download there data easily from our
              site.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Contact us</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                If you have any issue or suggestion about Textutilsvplease
                contact us on.
              </strong>
              Email - ommhaisane341@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
