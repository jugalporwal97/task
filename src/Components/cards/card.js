import React, {Component} from "react";
import "./card.css";
import Progressbar from "../progressbar/Progressbar";
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">
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
          <div className="inline">
            {this.props.topdata.map((ele) => {
              return (
                <Progressbar key={ele.name} name={ele.name} percentage={ele.margin} color={this.props.color} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
