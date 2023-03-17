import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Routes/Header/Header";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Routes/Dashboard/Dashboard";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'wallet', element: <Dashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
