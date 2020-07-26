import React, {Component, Fragment} from "react";
import "./tabs3.css";
import Table from "../Table/Table";
import {getRequest} from "../../Services/get";
import InfiniteScroll from "react-infinite-scroller";
class Tabs3 extends Component {
  state = {
    activeindex: 1,
    loading: true,
    error: false,
    data: {},
    total: 0,
    pagenumber: 1,
  };

  handleClick(value) {
    this.setState({activeindex: value});
  }

  componentDidMount() {
    console.log(">>>compdid");
    getRequest(
      `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=${this.state.pagenumber}`
    )
      .then((response) => {
        this.setState((prv) => {
          return {
            total: response.count,
            pagenumber: prv.pagenumber + 1,
            data: response.results.reduce((acc, ele) => {
              acc[ele.id] = ele;
              return acc;
            }, {}),
            loading: false,
          };
        });
      })
      .catch(() => {});
  }

  loadMore = () => {
    console.log(">>>load");
    if (this.state.loading) {
      return;
    }
    this.setState({
      loading: true,
    });
    getRequest(
      `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=${this.state.pagenumber}`
    )
      .then((response) => {
        this.setState((prv) => {
          return {
            total: response.count,
            pagenumber: prv.pagenumber + 1,
            data: {
              ...prv.data,
              ...response.results.reduce((acc, ele) => {
                acc[ele.id] = ele;
                return acc;
              }, {}),
            },
            loading: false,
          };
        });
      })
      .catch(() => {});
  };

  render() {
    const {activeindex} = this.state;
    const values = Object.values(this.state.data);
    const fliteredData =
      activeindex === 1
        ? values
        : activeindex === 2
        ? values.filter((ele) => ele.is_incorrect)
        : activeindex === 3
        ? values.filter((ele) => ele.is_untagged)
        : activeindex === 4
        ? values.filter((ele) => ele.is_disabled)
        : [];
    return (
      <div>
        <div className="tabsinline">
          <div
            className={`tabs parallelogram ${this.state.activeindex == 1 ? "active" : "inactive"}`}
            onClick={() => this.handleClick(1)}
          >
            ALL RECIPE(S)
          </div>
          <div
            className={`tabs parallelogram ${this.state.activeindex == 2 ? "active" : "inactive"}`}
            onClick={() => this.handleClick(2)}
          >
            INCORRECT
          </div>
          <div
            className={`tabs parallelogram ${this.state.activeindex == 3 ? "active" : "inactive"}`}
            onClick={() => this.handleClick(3)}
          >
            UNTAGGED
          </div>
          <div
            className={`tabs parallelogram ${this.state.activeindex == 4 ? "active" : "inactive"}`}
            onClick={() => this.handleClick(4)}
          >
            DISABLED
          </div>
        </div>
        <div className="tbsContainer">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={this.state.total > Object.keys(this.state.data).length}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            <Table data={fliteredData} />
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
export default Tabs3;
