import React, { Component } from "react";
import axios from "axios"; // '../../utils/axios';
import NewsItem from "../newsitems/NewsItem";
import { CountyData } from "./country-data";
import { Model } from "../newsitems/Model";
import {NoDataFound} from '../ui/NoDataFound';

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLineArticles: null,
      countryCode: "IN",
      countryName: "INDIA",
      article: null,

      isLoading: true,
      errorMsg: ""
    };
  }

  componentDidMount() {
    this.fetchNewz();
  }

  fetchNewz = () => {
    setTimeout(() => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=96160821c5194fed9dc50a562bbed555"
        )
        .then(resp => {
          console.log(resp);
          if (resp.status === 200) {
            this.setState({
              headLineArticles: resp.data.articles,
              isLoading: false
            });
          }
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            errorMsg: "Ops Something Went Wrong"
          });
        });
    }, 10000);
  };

  description = article => {
    this.setState({
      article: article
    });
  };
  countrySearch = async event => {
    const countyCode = event.target.value;

    const countryName = CountyData.map(country => {
      return country.code === countyCode ? country.name : null;
    });
    this.setState({
      isLoading: true,
      countryName: countryName
    });
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=" +
          countyCode +
          "&apiKey=96160821c5194fed9dc50a562bbed555"
      )
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            headLineArticles: resp.data.articles,
            countryCode: countyCode,
            isLoading: false
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
          errorMsg: "Ops Something Went Wrong"
        });
      });
  };

  render() {
    var countryList = CountyData.map(country => {
      return <option value={country.code}> {country.name}</option>;
    });

    const {headLineArticles,article,isLoading,countryName,errorMsg,countryCode} = this.state;


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
        <div className="container">
          <div className="panel panel-default">
            <div className="row">
              <div>
                Select Country :{" "}
                <select
                  name="country"
                  value={countryCode}
                  onChange={this.countrySearch}
                >
                  {countryList}
                </select>
              </div>
             
            </div>

            <div className=" text-center text-muted newz-header">
              <u>HeadLines</u> - {countryName}
            </div>
          </div>
          <NoDataFound data ={headLineArticles}/>


          <div className="row">{newzs}</div>
          {errorMsg ? (
            <div class="alert alert-danger">{errorMsg}</div>
          ) : null}
        </div>
      </>
    );
  }
}

export default Country;
