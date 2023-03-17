import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Routes/Header/Header";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Routes/Dashboard/Dashboard";
import Wallet from "./Components/Routes/Wallet/Wallet";
import Energy from "./Components/Routes/Energy/Energy";
import Water from "./Components/Routes/Water/Water";
import FuelMonitoring from "./Components/Routes/FuelMonitoring/FuelMonitoring";
import Chat from "./Components/Routes/Chat/Chat";
import Request from "./Components/Routes/Request/Request";
import Settings from "./Components/Routes/Settings/Settings";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "wallet", element: <Wallet /> },
        { path: "energy", element: <Energy /> },
        { path: "water", element: <Water /> },
        { path: "fuel", element: <FuelMonitoring /> },
        { path: "chat", element: <Chat /> },
        { path: "request", element: <Request /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
