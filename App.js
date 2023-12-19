const heading = React.createElement("div", { id: "heading" }, [React.createElement("div", { id: "heading" },[
  React.createElement("h2", {}, "hello from react 2"),
  React.createElement("h3", {}, "hello from react 3")
]),React.createElement("div", { id: "heading" },[
    React.createElement("h2", {}, "hello from react 2"),
    React.createElement("h3", {}, "hello from react 3")
  ])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
