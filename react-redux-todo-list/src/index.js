import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/reducers";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Counter from "./Counter"
import "./styles.css";



let persistor = persistStore(store);

function App() {
    return ( <
        Provider store = { store } >
        <
        PersistGate persistor = { persistor } >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-10 mx-auto col-md-8 mt-4" > { /* <h1 className="text-capitalize text-center">Kelvin Todo List</h1> */ } <
        TodoInput / >
        <
        TodoList / >
        <
        Counter / >
        <
        /div>  <
        /div>  <
        /div>  <
        /PersistGate> <
        /Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render( < App / > , rootElement);