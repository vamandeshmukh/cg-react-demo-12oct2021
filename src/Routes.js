import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                    <div className="container">
                        <Switch>
                            {/* <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route> */}
                            <Route path="/empdata"> <EmpData /> </Route>
                            <Route path="/spring"> <SpringBootData /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            {/* <Route path="/*"> <PageNotFound /> </Route> */}
                        </Switch>
                    </div>
                    {/* <Footer /> */}
                </div>
            </Router>
        </div>
    );
}

export default Routes;