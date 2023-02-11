import {BrowserRouter, Routes, Route} from "react-router-dom"

//components:
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductListPage from "./pages/ProductListPage";

//Protected User pages:
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDeatilsPage";
import UserOrdersPage from "./pages/user/UserOrderPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

//Protected admin pages:
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrderPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUserPage from "./pages/admin/AdminUserPage";

function App() {
  return (
        <BrowserRouter>

        <HeaderComponent />
        
        <Routes>
          <Route path = "/" element = {<HomePage />}/>
          <Route path = "/productDeatils/:id" element = {<ProductDetailsPage />}/>
          <Route path = "/cart" element = {<CartPage />}/>
          <Route path = "/login" element = {<LoginPage />}/>
          <Route path = "/register" element = {<RegisterPage />}/>
          <Route path = "/productList" element = {<ProductListPage />}/>
          <Route path = "*" element = "Page doesn't exsists 404"/>

          {/* user protected routes: */}

          <Route element = {<ProtectedRoutesComponent/>}>
          <Route path = "/user/cart-details" element = {<UserCartDetailsPage />}/>
          <Route path = "/user/my-orders" element = {<UserOrderDetailsPage />}/>
          <Route path = "/user/order-details" element = {<UserOrdersPage />}/>
          <Route path = "/user" element = {<UserProfilePage />}/>
          </Route>

                    {/* admin protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>

        </Routes>

        <FooterComponent />
        </BrowserRouter>

  );
}

export default App;
