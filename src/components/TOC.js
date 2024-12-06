import React, {Component} from "react"

//TOC(Table of Content) : 목차
class TOC extends Component {
    render() {
        console.log('TOC render')
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            /* TOC 컴포넌트는 내부적으로 this.props.data 가짐. > 이 값을 가지고 글 목록을 생성함. */
            lists.push (
                <li key={data[i].id}>
                    <a
                     href = {"/content/"+data[i].id}
                     data-id={data[i].id}   //onChangePage() 호출 시, 클릭한 항목의 id 값을 인자로 전달.
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>{data[i].title}</a>
                </li>
            );
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}           
                </ul>
            </nav>
        );
    }
}

export default TOC;
