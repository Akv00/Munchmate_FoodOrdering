import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "Abhishek"
    }
    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value = {{loggedInUser: userName}}>
      <div className="app">
      <Header></Header>
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/grocery",
        element: <Suspense><Grocery /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
