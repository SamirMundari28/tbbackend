import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

const routes = createBrowserRouter([
  {
    path: "/home",
    element:  <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={routes} />; 
}


export default App;
