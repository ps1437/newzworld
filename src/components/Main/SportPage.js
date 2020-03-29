import React, { Component } from "react";
import axios from "axios"; // '../../utils/axios';
import NewsItem from "../newsitems/NewsItem";

class SportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLineArticles: [],
      searchVale: null
    };
  }
  componentDidMount() {
  this.fetchNewz();
  }

  fetchNewz =() =>{

    setTimeout(() => {
      axios
      .get(
        "https://newsapi.org/v2/everything?q=sports&apiKey=96160821c5194fed9dc50a562bbed555"
      )
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            headLineArticles: resp.data.articles
          });
        }
      })
      .catch(err => console.log(err));
    }
    ,7000);

  }

  render() {
    var newzs = this.state.headLineArticles
      ? this.state.headLineArticles.map((article, index) => {
          return <NewsItem article={article} index={index} />;
        })
      : null;
    return(
    
    <div className='container'>
      
      <div class="panel panel-default">
        <div class="panel-body text-center text-muted newz-header">
           Sports News
        </div>
      </div>
      
      <div className="row">{newzs}</div>
      </div>
    );
  }
}

export default SportPage;
