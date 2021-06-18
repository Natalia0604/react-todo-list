import React from "react";
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <> 
        <div class="container">
            <div class="title">React 練習專案</div>
            <div class="welcome">歡迎光臨我的頁面</div>
            <button onClick={start} class="start_btn">點此開始</button>
        </div>;
        </>
    }
}
export default HomePage;