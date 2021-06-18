import React from "react";
import ReactDOM from "react-dom";
import "./HomePage.css";
import HomePage from "./HomePage.js";
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <>
            <div class="content"></div>
            <HomePage/>
        </>;
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));