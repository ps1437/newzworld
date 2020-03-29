import React, { Component } from "react";
import axios from "axios"; // '../../utils/axios';
import NewsItem from "../newsitems/NewsItem";
import { Model } from "../newsitems/Model";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLineArticles: [],
      searchVale: null,
      article: null
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=96160821c5194fed9dc50a562bbed555"
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
  searchNews = event => {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=" +
          this.state.searchVale +
          "&apiKey=96160821c5194fed9dc50a562bbed555"
      )
      .then(resp => {
        if (resp.status === 200) {
          console.log(resp);

          this.setState({
            headLineArticles: resp.data.articles
          });
        }
      });
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      searchVale: value
    });
  };

  description = article => {
    this.setState({
      article: article
    });
  };
  render() {
    var newzs = this.state.headLineArticles
      ? this.state.headLineArticles.map((article, index) => {
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
        <Model article={this.state.article} />

        <div className="row">
          <div className="container">
            {" "}
            <form style={{ float: "right" }}>
              <div class="input-group search">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search news"
                  value={this.state.searchVale}
                  onChange={this.handleChange}
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    onClick={this.searchNews}
                  >
                    {" "}
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>{" "}
            </form>
          </div>
          {newzs}
        </div>
      </>
    );
  }
}

export default MainPage;
