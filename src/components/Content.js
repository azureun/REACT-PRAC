import React, {Component} from "react"


class Content extends Component {
    render() {
        return (
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
                {this.props}
            </article>
        );
    }
}   

export default Content;
