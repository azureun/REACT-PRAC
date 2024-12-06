import React, { Component } from "react";
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from "./components/Subject";
import './App.css';


//class Subject을 src/components/Subject.js안에 넣어 관리

//TOC(Table of Content) : 목차
//여기 있던 class TOC를 src/components/TOC.js안에 넣어 관리

// Content 컴포넌트는 <article> 부분을 컴포넌트로 변환 한 것
//class Content를 src/components/Content.js안에 넣어 관리

class App extends Component {
    constructor(props){
        super(props);
        this.state = {  //가장 먼저 컴포넌트 초기화
            mode:'read',
            selected_content_id: 2,     //contents 리스트의 2번째 내용이 선택돼 있게 함.
            subject:{title:'WEB', sub:'World Wide Web!'},
            welcome:{title:'Welcome', desc:'Hello, React!!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
            ]
        }
    }
    render() {
        console.log('App render');
        var _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            var i =0;
            while(i < this.state.contents.length){
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
        }
        console.log("render", this);

        return (
            <div className="App" style={{textAlign: 'left'}}>
                {
                <Subject 
                    title = { this.state.subject.title }
                    sub = { this.state.subject.sub }
                    onChangePage = {function() {
                        this.setState({mode:'welcome'})
                 }.bind(this)}
                ></Subject> 
                }
                {/*<header>
                    <h1><a href="/" onClick={function(e){
                        console.log(e);
                        e.preventDefault();
                        this.setState({mode: "welcome"});   
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header> */}
            
                {/*state값을 변경하려면 
                1. 함수 뒤에 .bind(this) 추가, 
                2. this.setState 함수 호출해서 state 값 변경*/}

                <TOC
                onChangePage = {function (id){  //실제로 클릭한 값이 n인지 확인
                    debugger;
                    //alert("hi");
                    this.setState({
                        mode:"read",
                        selected_content_id:Number(id)
                    });
                }.bind(this)}                
                data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
