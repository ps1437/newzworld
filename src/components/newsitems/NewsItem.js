import React from "react";
const NewsItem = props => {
  const { article, index } = props;
  if (article) {
    return (
      <div
        className="col-sm-6 col-md-3 card"
        key={index}
        style={{ maxHeight: "450px" }}
      >
        <img className="card-img-top" src={article.urlToImage} alt="" />
        <div className="card-body card-body-item">
          <div className="card-title-cust">{article.title}</div>

          <span className="text text-muted card-publish-date">
            Published at: {article.publishedAt}
          </span>
        </div>{" "}
        <div
          class="card-read-more"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => props.description(article)}
        >
          <span  class="btn btn-link btn-block">
            Read More
          </span>
        </div>
      </div>
    );
  }
  return null;
};
export default NewsItem;
