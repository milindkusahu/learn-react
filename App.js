import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <div>
    <h1 id="heading">Hello from React using JSX 🚀</h1>
  </div>
);

// React Functional Component
const HeadingComponent = () => {
  return <h1>This is my Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
