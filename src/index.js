import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from "react-router-dom"
/*//APP组件，大写字母开头
// import TodoList from './todoList';
// import App from "../src/component/app/app"*/
// import MostStar from "../src/component/axios/index"
// import RouteCp from "../src/component/route/index"
import  './style.css'


import App from "./component/redux-test/counter/index"
import store from "./component/redux-test/redux/store"

render();
store.subscribe(render) //订阅监听store 的状态变化
function render() {
    ReactDOM.render(<App store={store}/> ,
    document.getElementById('root'));//挂载dom
}