import React, { Component } from "react";
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from "./components/Subject";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

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

    getReadContent(){
        var i = 0;
        while(i<this.state.contents.length){
            var data = this.state.contents[i];
            if(data.id === this.state.selected_content_id) {
                return data;
            }
            i++;
        }
    }

    getContent() {
        var _title, _desc = null, _article = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
            var _content = this.getReadContent();
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        }
        else if(this.state.mode === 'create'){
            _article = <CreateContent onSubmit={function(_title, _desc){
                this.max_content_id = this.max_content_id + 1;
                //this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc});
                var _contents = Array.from(this.state.contents);
                _contents.push({id:this.max_content_id, title:_title, desc:_desc});
                this.setState({
                    contents: _contents,
                    mode:'read',
                    selected_content_id:this.max_content_id
                });
                console.log(_title, _desc);
            }.bind(this)}></CreateContent>
        }
        else if(this.state.mode === 'update'){
            _content = this.getReadContent();
            _article = <UpdateContent 
                data={_content} 
                onSubmit={function(_id, _title, _desc){  // 중첩된 function 선언 제거
                    var _contents = Array.from(this.state.contents);
                    var i = 0;
                    while(i < _contents.length){  // _content를 _contents로 수정
                        if(_contents[i].id === _id){
                            _contents[i] = {id: _id, title: _title, desc: _desc};
                            break;
                        }
                        i++;
                    }
                    this.setState({
                        contents: _contents,
                        mode:'read'
                    });
                }.bind(this)}
            ></UpdateContent>
        }
        return _article;
    }
    

    render() {
        console.log('App render');
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
                    if(_mode === 'delete'){
                        if(window.confirm('really?')){
                            var _contents = Array.from(this.state.contents);
                            var i = 0;
                            while(i<_contents.length){
                                if(_contents[i].id === this.selected_content_id){
                                    _contents.splice(i,1);
                                    break;
                                }
                                i++;
                            }
                            this.setState({
                                mode:'welcome',
                                contents:_contents
                            });
                            alert('deleted!'); 
                        }
                    }
                    else{
                        this.setState({
                            mode:_mode
                        });
                    }
                }.bind(this)}></Control>
                {this.getContent()}
            </div>
        );
    }
}

export default App;
