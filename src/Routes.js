import {Route, Router /*, Switch */ } from "react-router-dom";
import { Switch } from "react-switch";
import EmpData from "./components/EmpData";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import SpringBootData from "./components/SpringBootData";

const Routes = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            {/* <Route path='/home' element={<Home/>} /> */}
                            {/* <Route path="home"> <Home /> </Route> */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/empdata" element={<EmpData />} />
                            <Route path="/spring" element={<SpringBootData />} />
                        </ Switch>
                    </div>
                </div>
            </Router>
        </div>
    );

}

export default Routes;