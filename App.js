import React from 'react';
import  ReactDOM  from 'react-dom/client';


const heading = React.createElement("h1", {}, "Hello from React");

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "red",
    },
    className: "title",
  },
  "heading"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1,heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react elment to inside the toot to render the app
root.render(container);
