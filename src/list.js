import React from "react";
class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <ul>
        <li>Reac Core</li>
        <li>React Router</li>
        <li>React Context</li>
    </ul>;
    }
}
export default List;