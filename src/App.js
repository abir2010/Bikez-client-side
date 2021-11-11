import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Products from "./components/Products/Products/Products";
import Login from "./components/Registration/Login/Login";
import Register from "./components/Registration/Register/Register";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/bikes">
              <Products></Products>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
