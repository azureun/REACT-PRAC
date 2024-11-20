import React, {Component} from "react"

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {/* this.props.sub */}
                {/* title의 값과 sub의 값이 Subject라는 컴포넌트의 입력값이 되어 그에 따라 달라치는 출력 값을 화면에 표시함. */}
                {this.props.sub}  {/*Content 컴포넌트의 <article>에 고정적으로 들어있던 텍스트 부분을 sub라는 props로 지정*/}
            </header>
        );
    }
}

export default Subject;
