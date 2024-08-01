import React, { Component } from 'react'
import news from './news.png'

export default class Newsitem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div>
        <div className="card">
        <img src={imageUrl ? imageUrl : news} className="card-img-top" alt="news" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <a rel = "noreferrer" href={newsUrl} target = "_blank"className="btn btn-sm btn-danger">Read More</a>
                <p className="card-text text-warning"><small className="text-body-secondary">{author} | {new Date(date).toGMTString()}</small></p>
            </div>
        </div>
      </div>
    )
  }
}
