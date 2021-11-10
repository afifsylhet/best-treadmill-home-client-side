
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
import Product from './pages/Product/Product';
import Error from './pages/Error/Error';
import MotherHome from './pages/home/MohterHome/MotherHome';
import Contact from './pages/Contact/Contact';
import SingleProduct from './pages/home/SingleProduct/SingleProduct';
import Products from './pages/home/Products/Products';
import AllProducts from './pages/AllProducts/AllProducts';


function App() {

  return (
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
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/products">
          <AllProducts></AllProducts>
        </Route>
        <Route path="/product/:id">
          <SingleProduct></SingleProduct>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
