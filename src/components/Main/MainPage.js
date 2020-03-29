import React, { Component } from "react";
import axios from "axios"; // '../../utils/axios';
import NewsItem from "../newsitems/NewsItem";
import { Model } from "../newsitems/Model";
import {NoDataFound} from '../ui/NoDataFound';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLineArticles: null,
      searchVale: null,
      article: null,
      isLoading: true,
      errorMsg:""
    };
  }
  componentDidMount() {
  

      this.fetchNewz();
  }

  fetchNewz =()=>{
  

    setTimeout(() => { 

      axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=96160821c5194fed9dc50a562bbed555"
      )
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            headLineArticles: resp.data.articles,
            isLoading: false,

          });
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          errorMsg:"Ops Something Went Wrong"
        });
      } );
    },8000)
  }
  searchNews = event => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          this.state.searchVale +
          "&apiKey=96160821c5194fed9dc50a562bbed555"
      )
      .then(resp => {
        if (resp.status === 200) {
          console.log(resp);

          this.setState({
            headLineArticles: resp.data.articles,
            isLoading: false,
          });
        }
      }).catch(err => {
        this.setState({
          isLoading: false,
          errorMsg:"Ops Something Went Wrong"
        });
      } );
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

    const {headLineArticles,article,isLoading,searchVale,errorMsg} = this.state;

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
        <div className="float-right" style={{ marginleft: "16rem" }}>
              {isLoading ? <div className="loader"></div> : null}
              
            </div>
        <div className="row">
          <div className="container">
            {" "}
            <form style={{ float: "right" }}>
              <div class="input-group search">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search news"
                  value={searchVale}
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
          <NoDataFound data ={headLineArticles}/>

          {errorMsg ? 
        <div class="alert alert-danger">
            {errorMsg}
        </div> :null
        }
        </div>
      </>
    );
  }
}

export default MainPage;
