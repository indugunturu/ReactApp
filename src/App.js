import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const Title = () => <h1>React App</h1>;
const number = 10000;
// react functional componet
const HeadingComponet = () => (
  <div id="container">
    <Title />
    {number}
    <h1>My heading</h1>
  </div>
);

const heading = React.createElement("h1", {}, "This is react");
const root = ReactDOM.createRoot(document.getElementById("root"));

// header

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
