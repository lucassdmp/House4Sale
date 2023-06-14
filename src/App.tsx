import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  return (
    <div className="container">
      <h1>Welcome to My Bootstrap App</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
};


export default App;
