import React, { Component } from "react";
import NewsItem from "../newsitems/NewsItem";
import { Model } from "../newsitems/Model";
import { NoDataFound } from "../ui/NoDataFound";
import { Footer } from "../ui/Footer";

import { Error } from "../ui/Error";
import { withRouter } from "react-router-dom";
import { getHeadLines, searchNews } from "../../service/NewsService";

const routerInfoConfig = {
  sports: "Sports",
  tech: "Technology",
  politics: "Politics",
  headlines: "Headlines"
};
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLineArticles: null,
      searchVale: null,
      article: null,
      isLoading: true,
      errorMsg: "",
      path: null
    };
  }
  async componentDidMount() {
    await this.fetchNewz();
  }

  UNSAFE_componentWillReceiveProps(nxtProps) {
    const searchId = routerInfoConfig[nxtProps.match.params.id];
    const params = nxtProps.match.params.id;
    if (params === "headlines") {
      this.setState({ path: searchId });
      this.fetchNewz();
    } else if (this.state.path !== params) {
      this.setState({ path: searchId });
      this.searchNews(searchId);
    }
  }

  fetchNewz = async () => {
    this.setState({
      isLoading: true,
    });
    await getHeadLines()
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            headLineArticles: resp.data.articles,
            isLoading: false,
            errorMsg:""
          });
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          errorMsg: "Ops Something Went Wrong"
        });
      });
  };

  searchNews = async searchVal => {
    this.setState({
      isLoading: true,
    });
   
    await searchNews(searchVal)
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            headLineArticles: resp.data.articles,
            isLoading: false,
            errorMsg:""
          });
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          errorMsg: "Ops Something Went Wrong"
        });
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
    const {
      headLineArticles,
      article,
      isLoading,
      searchVale,
      errorMsg
    } = this.state;

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
        <div className="container fade-in">

        {isLoading ? <div className="loader"></div> : null}
        <div className="row">
          <div className="container ">
            {" "}
            <div className="row">
              <div className="col news-category">{this.state.path} News</div>
              <div className="col">
                <form style={{ float: "right" }}>
                  <div class="input-group search">
                    <input required
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
                        onClick={() => this.searchNews(this.state.searchVale)}
                      >
                        {" "}
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>{" "}
                </form>
              </div>
            </div>
          </div>
          {newzs}
          <NoDataFound data={headLineArticles} />
          <Error errorMsg={errorMsg} />

         
          </div>
        </div>
        <Footer isSticky={headLineArticles && headLineArticles.length>0 ? false :true}/>
      </>
    );
  }
}

export default withRouter(MainPage);
