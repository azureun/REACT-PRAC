import React, { Component } from "react";
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';


//class Subject을 src/components/Subject.js안에 넣어 관리

//TOC(Table of Content) : 목차
//여기 있던 class TOC를 src/components/TOC.js안에 넣어 관리


// Content 컴포넌트는 <article> 부분을 컴포넌트로 변환 한 것
//class Content를 src/components/Content.js안에 넣어 관리

class App extends Component {
    constructor(props){
        super(props);
        this.state = {  /* 가장 먼저 컴포넌트 초기화 */
            subject:{title:'WEB', sub:'World Wide Web!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
            ]
        }
    }
    render() {
        return (
            <div className="App" style={{textAlign: 'left'}}>
                <Subject 
                title = { this.state.subject.title }
                sub = { this.state.subject.sub }></Subject>

                <TOC data={this.state.contents}></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;
