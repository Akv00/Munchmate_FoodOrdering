import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";






const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);
