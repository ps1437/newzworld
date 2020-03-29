import React, { Component } from "react";
import axios from "axios"; // '../../utils/axios';
import NewsItem from "../newsitems/NewsItem";
import { Model } from "../newsitems/Model";
import {NoDataFound} from '../ui/NoDataFound';

class SportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLineArticles: null,
      searchVale: null,
      isLoading: true,
      article: null
    };
  }
  componentDidMount() {
    this.fetchNewz();
  }

  fetchNewz = () => {
    setTimeout(() => {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=sports&apiKey=96160821c5194fed9dc50a562bbed555"
        )
        .then(resp => {
          if (resp.status === 200) {
            this.setState({
              headLineArticles: resp.data.articles,
              isLoading: false
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            isLoading: false
          });
        });
    }, 7000);
  };
  description = article => {
    this.setState({
      article: article
    });
  };
  render() {
    const { headLineArticles, article, isLoading } = this.state;

    var newzs = headLineArticles
      ? headLineArticles.map((article, index) => {
          return (
            <NewsItem
              article={article}
              index={index}
              description={this.description}
            />
          );
        })
      : null;
    return (
      <>
        <Model article={article} />
        <div className="container">
          <div className="float-right" style={{ marginleft: "16rem" }}>
            {isLoading ? <div className="loader"></div> : null}
          </div>
          <div class="panel panel-default">
            <div class="panel-body text-center text-muted newz-header">
              Sports News
            </div>
          </div>

          <div className="row">{newzs}</div>

<NoDataFound data ={headLineArticles}/>
        
        </div>
      </>
    );
  }
}

export default SportPage;
