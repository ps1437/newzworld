import React, { Component } from "react";
import axios from "axios"; // '../../utils/axios';
import NewsItem from "../newsitems/NewsItem";
import { CountyData } from "./country-data";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLineArticles: [],
      countryCode: "IN",
      countryName: "INDIA",

      isLoading: true,
      errorMsg:""
    };
  }

  componentDidMount() {
  
      axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=96160821c5194fed9dc50a562bbed555"
      )
      .then(resp => {
        console.log(resp);
        if (resp.status === 200) {
          this.setState({
            headLineArticles: resp.data.articles,
            isLoading: false          });
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({
          isLoading: false,
          errorMsg:"Ops Something Went Wrong"
        });
      } );
  }

  countrySearch = async event => {
    const countyCode = event.target.value;

   const countryName =  CountyData.map(country => {
      return country.code === countyCode  ? country.name :null

    })
    this.setState({
      isLoading: true,
      countryName: countryName
    });
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country="+countyCode+"&apiKey=96160821c5194fed9dc50a562bbed555"
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
        console.log(err)
        this.setState({
          isLoading: false,
          errorMsg:"Ops Something Went Wrong"
        });
      } );
  };

  render() {
    var countryList = CountyData.map(country => {
      return <option value={country.code}> {country.name}</option>;
    });

    var newzs = this.state.headLineArticles
      ? this.state.headLineArticles.map((article, index) => {
          return <NewsItem article={article} index={index} />;
        })
      : null;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="row">
            <div>
              Select Country :{" "}
              <select
                name="country"
                value={this.state.countryCode}
                onChange={this.countrySearch}
              >
                {countryList}
              </select>
            </div>
            <div className="float-right" style={{ marginleft: "16rem" }}>
              {this.state.isLoading ? <div className="loader"></div> : null}
            </div>
          </div>

          <div className=" text-center text-muted newz-header">
            <u>HeadLines</u>{" "} - {this.state.countryName}
          </div>
        </div>

        <div className="row">{newzs}</div>
        {this.state.errorMsg ? 
        <div class="alert alert-danger">
            {this.state.errorMsg}
        </div> :null
        }
      </div>
    );
  }
}

export default Country;
