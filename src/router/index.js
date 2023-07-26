import {createBrowserRouter, Outlet} from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import LoginPage from "../pages/customer/Login";
import RegisterPage from "../pages/customer/Register";
import DashboardPage from "../pages/admin/Dashboard";
import Home from "../pages/customer/Home";
import Products from "../pages/customer/Products";
import ProductDetail from "../pages/customer/ProductDetail";
import ProductModal from "../modal/ProductModal";
import AppProvider from "../context/AppProvider";

const AuthLayout = () => {
    return <AuthProvider>
        <Outlet/>
    </AuthProvider>
}
const AppLayout = () => {
    return <AppProvider>
        <Outlet/>
        <ProductModal/>
    </AppProvider>
}

export default createBrowserRouter([
    {
      element: <AppLayout/>,
      children: [
          {
              element: <Home/>,
              path: '/'
          },
          {
              element: <Products/>,
              path: '/products'
          },
          {
              element: <ProductDetail/>,
              path: '/products/:id'
          },
          {
              element: <RegisterPage/>,
              path: '/register'
          },
          {
              element: <LoginPage/>,
              path: '/login'
          }
      ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                element: <DashboardPage/>,
                path: '/dashboard'
            }
        ]
    },
])
