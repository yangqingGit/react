/**
 * Created by YIZHI-SHIXI on 2019/5/29.
 */
import React,{Component} from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

import about from "./about"
import home from "./home"


export default class RouteCp extends Component{
    render(){
        return(
            <div>
                <p>router</p>
                <Router>
                    <ul>
                        <li><Link to="/about">about></Link></li>
                        <li><Link to="/home">home></Link></li>
                    </ul>
                    <indexRoute component={home}></indexRoute>
                    <Route path="/about" component={about}></Route>
                    <Route path="/home" component={home}></Route>
                </Router>
            </div>
        )
    }
}