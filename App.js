import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 id="head1">Namasthe React Heading1 !</h1>;

const Head = () => (
  <h6 style={{ fontFamily: "verdana" }}>Namasthe React Heading JSx !</h6>
);

/* const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
); */

const HeadingComponent = () => {
  return (
    <div>
      {Head()}
      <h1 id="head1">Namasthe React Heading1!</h1>
      <h1 id="head2">Namasthe React Heading2!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingComponent());
// root.render(<HeadingComponent />); or

// root.render(heading2);
