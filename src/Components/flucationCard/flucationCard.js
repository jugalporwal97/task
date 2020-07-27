import React, {Component} from "react";
import "./flucationCard.css";
import Flucationbar from "../fluctuationBar/fluctuationBar";
class FCard extends Component {
  render() {
    return (
      <div className="Fcard">
        <div className="Fcontainer">
          <h2
            style={{
              textAlign: "center",
              backgroundColor: "#f5ecec",
              margin: "0px",
              height: "40px",
              fontWeight: "400",
            }}
          >
            {this.props.title}
          </h2>
          <div className="Finline">
            {this.props.topdata.map((ele) => {
              return (
                <Flucationbar
                  key={ele.name}
                  name={ele.name}
                  percentage={ele.fluctuation}
                  color={this.props.color}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default FCard;
