import React, {Component} from "react";

import "./Table.css";
import {IconContext} from "react-icons";
import {BsChevronExpand} from "react-icons/bs";

import moment from "moment";
class Table extends Component {
  handleCheckBox = (ele) => {
    this.props.setCheck(ele.id, !ele.checked);
  };
  handleAllPress = (value) => {
    console.log("value", value);
    this.props.selectAll(!value);
  };
  render() {
    const areAllSelected = this.props.data.every((ele) => {
      return ele.checked;
    });
    return (
      <table id="customers">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={areAllSelected}
                onChange={() => this.handleAllPress(areAllSelected)}
              />
            </th>
            <th>
              <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
                <div
                  style={{
                    display: "inline-flex",

                    flexDirection: "row",
                    margin: "2%",
                  }}
                >
                  Name <BsChevronExpand style={{marginTop: "1px"}} />
                </div>
              </IconContext.Provider>
            </th>

            <th>
              <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
                <div
                  style={{
                    display: "inline-flex",

                    flexDirection: "row",
                    margin: "2%",
                  }}
                >
                  Last Updated <BsChevronExpand style={{marginTop: "1px"}} />
                </div>
              </IconContext.Provider>
            </th>

            <th>
              <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
                <div
                  style={{
                    display: "inline-flex",

                    flexDirection: "row",
                    margin: "2%",
                  }}
                >
                  COGS% <BsChevronExpand style={{marginTop: "1px"}} />
                </div>
              </IconContext.Provider>
            </th>
            <th>
              <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
                <div
                  style={{
                    display: "inline-flex",

                    flexDirection: "row",
                    margin: "2%",
                  }}
                >
                  COST PRICE(`) <BsChevronExpand style={{marginTop: "3px"}} />
                </div>
              </IconContext.Provider>
            </th>
            <th>
              <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
                <div
                  style={{
                    display: "inline-flex",

                    flexDirection: "row",
                    margin: "2%",
                  }}
                >
                  SALE PRICE <BsChevronExpand style={{marginTop: "1px"}} />
                </div>
              </IconContext.Provider>
            </th>
            <th>
              <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
                <div
                  style={{
                    display: "inline-flex",

                    flexDirection: "row",
                    margin: "2%",
                  }}
                >
                  GROSS MARGIN <BsChevronExpand style={{marginTop: "1px"}} />
                </div>
              </IconContext.Provider>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.length >= 1 ? (
            this.props.data.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={ele.checked}
                      onChange={() => {
                        this.handleCheckBox(ele);
                      }}
                    />
                  </td>
                  <td>{ele.name}</td>
                  <td>{moment(ele.last_updated.date).format("MMM Do YYYY")}</td>
                  <td>{ele.cogs}</td>
                  <td>{ele.cost_price.toFixed(2)}</td>
                  <td>{ele.sale_price.toFixed(2)}</td>
                  <td>{ele.gross_margin.toFixed(2)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>NO Records to show!</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
export default Table;
