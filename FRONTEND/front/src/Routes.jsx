import React from "react";
import { createBrowserRouter,useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Myorder from "pages/Myorder";
import Payment from "pages/Payment";
import HomePageOrder from "pages/HomePageOrder";
import OrderManagementPage from "pages/OrderManagementPage";
import Signup from "components/Signup";
import ManagePurchases from "pages/ManagePurchases";
import OrderPaymentManaging from  "pages/OrderPaymentManaging"
import ContactForm from "pages/ContactForm.jsx";
import MainDashboard from "pages/MainDashboard"

const ProjectRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "myorder",
      element: <Myorder />
    },
    {
      path: "payment",
      element: <Payment />
    },
    {
      path: "Orderpaymentmanaging",
      element: <OrderPaymentManaging />
    },
    {
      path: "homepageorder",
      element: <HomePageOrder />
    },
    {
      path: "ordermanagementpage",
      element: <OrderManagementPage />
    },
    {
      path: "managepurchases",
      element: <ManagePurchases />
    },
    {
      path: "contactform",
      element: <ContactForm />
    },
    {
      path: "maindashboard",
      element: <MainDashboard/>
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return element;
};

export default ProjectRoutes;

/*
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Myorder from "./pages/Myorder";
import Payment from "./pages/Payment";
import ItemOrder from "./pages/ItemOrder";
import HomePageOrder from "./pages/HomePageOrder";
import OrderManagementPage from "./pages/OrderManagementPage";
import Signup from "./components/Signup"; // Adjusted import path for Signup component

const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myorder" element={<Myorder />} />
        <Route path="payment" element={<Payment />} />
        <Route path="itemorder" element={<ItemOrder />} />
        <Route path="homepageorder" element={<HomePageOrder />} />
        <Route path="ordermanagementpage" element={<OrderManagementPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
*/
/*import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";
import Myorder from "./pages/Myorder";
import Payment from "./pages/Payment";
import ItemOrder from "./pages/ItemOrder";
import HomePageOrder from "./pages/HomePageOrder";
import OrderManagementPage from "./pages/OrderManagementPage";
import Signup from "components/Signup";

const router=createBrowserRouter([
[
  {
    path: "/",
    element: <Home />
  },
  {
    path: "myorder",
    element: <Myorder />
  },
  {
    path: "payment",
    element: <Payment />
  },
  {
    path: "itemorder",
    element: <ItemOrder />
  },
  {
    path: "homepageorder",
    element: <HomePageOrder />
  },
  {
    path: "ordermanagementpage",
    element: <OrderManagementPage />
  },
],
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
export default router;*/
