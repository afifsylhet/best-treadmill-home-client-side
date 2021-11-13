
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './pages/shared/Navigation/Navigation';
import About from './pages/About/About';
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import MotherHome from './pages/home/MohterHome/MotherHome';
import Contact from './pages/Contact/Contact';
import SingleProduct from './pages/home/SingleProduct/SingleProduct';
import AllProducts from './pages/AllProducts/AllProducts';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './utilities/AuthProvider';
import PrivateRoute from './utilities/PrivateRoute';
import Pay from './pages/dashboard/Pay/Pay';
import MyOrders from './pages/dashboard/MyOrders/MyOrders';
import ReviewD from './pages/dashboard/ReviewD/ReviewD';
import ManageOrders from './pages/dashboard/ManageOrders/ManageOrders';
import AddProduct from './pages/dashboard/AddProduct/AddProduct';
import MakeAdmin from './pages/dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/dashboard/ManageProducts/ManageProducts';
import AdminRoute from './utilities/AdminRoute';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <MotherHome></MotherHome>
          </Route>
          <Route path="/home">
            <MotherHome></MotherHome>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>


          <PrivateRoute path="/payment">
            <Pay></Pay>
          </PrivateRoute>


          <PrivateRoute path="/myorder">
            <MyOrders></MyOrders>
          </PrivateRoute>


          <PrivateRoute path="/reviewd">
            <ReviewD></ReviewD>
          </PrivateRoute>


          <AdminRoute path="/manageOrder">
            <ManageOrders></ManageOrders>
          </AdminRoute>


          <AdminRoute path="/addProduct">
            <AddProduct></AddProduct>
          </AdminRoute>


          <AdminRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>


          <AdminRoute path="/manageProduct">
            <ManageProducts></ManageProducts>
          </AdminRoute>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/products">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path="/product/:id">
            <SingleProduct></SingleProduct>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
