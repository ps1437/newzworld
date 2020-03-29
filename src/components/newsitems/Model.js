
import React from 'react';
export const Model =(props) =>{
const {article} = props;
if (article) {
    return(
        <div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title">
           <img
           style={{
            margin: "0rem 4rem",
            width: "75%"
           }}
            className="card-img-top"
            src={article.urlToImage}
            alt=""
          />
          {article.title}</h5>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      <div className="modal-body">
        {article.description}
      </div>

      <div className="modal-footer">
       <a href={article.url} target="_blank">Read Full</a>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    )
}
return null;
}