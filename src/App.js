import React, {Component} from "react";

import "./App.css";
import "../src/Components/cards/card.css";
import Card from "./Components/cards/card";
import FCard from "./Components/flucationCard/flucationCard";
import Tabs3 from "./Components/tabs3/tabs3";
import {getRequest} from "./Services/get";
class App extends Component {
  state = {
    loading: true,
    error: false,
    topdata: {},
    bottomdata: {},
    fluctuatingdata: {},
  };

  componentDidMount() {
    getRequest(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top"
    )
      .then((response) => {
        this.setState(() => {
          return {
            topdata: response.results.reduce((acc, ele) => {
              acc[ele.name] = ele;
              return acc;
            }, {}),
            loading: false,
          };
        });
      })
      .catch(() => {});
    getRequest(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom"
    )
      .then((response) => {
        this.setState(() => {
          return {
            bottomdata: response.results.reduce((acc, ele) => {
              acc[ele.name] = ele;
              return acc;
            }, {}),
            loading: false,
          };
        });
      })
      .catch(() => {});
    getRequest(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=bottom"
    )
      .then((response) => {
        this.setState(() => {
          return {
            fluctuatingdata: response.results.reduce((acc, ele) => {
              acc[ele.name] = ele;
              return acc;
            }, {}),
            loading: false,
          };
        });
      })
      .catch(() => {});
  }
  render() {
    return (
      <React.Fragment>
        <div className="inline ">
          <Card title={"Higher Margin Recipes"} topdata={Object.values(this.state.topdata)} />
          <Card
            title={"Lower Margin Recipes"}
            color={"red"}
            topdata={Object.values(this.state.bottomdata)}
          />
          <FCard
            title={"Top Fluctuating Recipes"}
            topdata={Object.values(this.state.fluctuatingdata)}
          />
        </div>

        <Tabs3 />
      </React.Fragment>
    );
  }
}

export default App;
