import React, { Component } from 'react'

export class Newsitem extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card text-white bg-dark">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: '80%', zIndex: 1, color:'#D08202'}}>
                        {source}
                    </span>
                    <img src={!imageUrl ? "https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29ycnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body border-top">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark border-radius">Read me</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
