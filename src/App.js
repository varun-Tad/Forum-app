import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Body } from "./components/Body";
import HomePage from "./Routes/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
