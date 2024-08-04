import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
  <div>
    <h1 id="heading">Hello from React using JSX 🚀</h1>
  </div>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1>This is my Functional Component</h1>
      <Heading />
      {Heading()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
