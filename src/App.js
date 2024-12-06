import React, { Component } from "react";
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from "./components/Subject";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";

import './App.css';

class App extends Component {       
    constructor(props){         
        super(props);
        this.max_content_id = 3;
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
        var _title, _desc = null, _article = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
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
        else if(this.state.mode === 'create'){
            _article=<CreateContent onSubmit={function(_title, _desc){
                this.max_content_id = this.max_content_id + 1;

                //this.state.contents.push({});     //원본을 변경한다.
                //this.state.contents.concat({});   //원본을 변경하지 않는다.

                //this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc});
                //var _contents = this.state.contents.concat({id:this.max_content_id, title:this._title, desc:_desc});
                var newContents = Array.from(this.state.contents);
                newContents.push({id:this.max_content_id, title:_title, desc:_desc});
                this.setState({
                    contents:newContents
                });
                console.log(_title, _desc);
            }.bind(this)}></CreateContent>
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

                <TOC
                onChangePage = {function (id){  //실제로 클릭한 값이 n인지 확인
                    debugger;
                    this.setState({
                        mode:"read",
                        selected_content_id:Number(id)
                    });
                }.bind(this)}                
                data={this.state.contents}></TOC>

                <Control onChangeMode={function (_mode) {
                    this.setState({
                        mode:_mode
                    });
                }.bind(this)}></Control>

                {_article}
                <ReadContent title={_title} desc={_desc}></ReadContent>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
