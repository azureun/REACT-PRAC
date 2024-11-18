import React, { Component } from "react";
import './App.css';


class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {/*this.props.sub*/}
                {/*title의 값과 sub의 값이 Subject라는 컴포넌트의 입력값이 되어 그에 따라 달라치는 출력 값을 화면에 표시함.*/}
                {this.props.desc}  {/*Content 컴포넌트의 <article>에 고정적으로 들어있던 텍스트 부분을 desc라는 props로 지정*/}
            </header>
        );
    }
}

//TOC(Table of Content) : 목차
class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.HTML">HTML</a></li>
                    <li><a href="2.HTML">CSS</a></li>
                    <li><a href="3.HTML">JavaScript</a></li>               
                </ul>
            </nav>
        )
    }
}

// Content 컴포넌트는 <article> 부분을 컴포넌트로 변환 한 것
class Content extends Component {
    render() {
        return (
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
            </article>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App" style={{textAlign: 'left'}}>
                {/*Subject 컴포넌트의 title이라는 속성에 "WEB"이라는 값 지정하면 그 값을 Subject 컴포넌트 내의 <h1> 태그에 넣음.*/}
                <Subject title="WEB" sub="world wid web!"></Subject>
                {/*<Subject title="React" sub="For UI"></Subject>*/}
                <TOC></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;
