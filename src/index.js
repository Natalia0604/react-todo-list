import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import List from "./list.js";
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <>
            <h3>React Project DEMO</h3>
            <List/>
        </>;
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));