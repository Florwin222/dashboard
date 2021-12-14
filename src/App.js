import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Userlist from "./pages/userList/Userlist";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Item from "./pages/item/Item";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./components/login/Login";
import { useState } from "react";
import useToken from "./components/app/useToken";


function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}


function getToken(){
   const tokenString = sessionStorage.getItem('token');
   const userToken = JSON.parse(tokenString);
   return userToken?.token
}

function App() {
    const { token, setToken } = useToken();

      if (!token) {
        return <Login setToken={setToken}/>
      }

  return (

    <Router> 
                <Navbar/><div className="container">
                <Sidebar/>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/userlist"><Userlist/></Route>
              <Route path="/user/:userId"><User/> </Route>
              <Route path="/newUser"><NewUser/> </Route>
              <Route path="/products"><Products/> </Route>
              <Route path="/product/:productId"><Item/> </Route>
              <Route path="/newItem"><NewProduct/> </Route> 
   
            </Switch>
          </div>     
    </Router>);
             }
export default App;