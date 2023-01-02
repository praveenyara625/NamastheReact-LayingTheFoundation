const heading1 = React.createElement("h1", {
    id: "heading1"
}, "Namasthe React heading1 !");
const heading2 = React.createElement("h3", {
    id: "heading2"
}, "Namasthe React heading2 !");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
//   console.log(heading); //it is an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
