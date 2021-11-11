
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
