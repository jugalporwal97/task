import React, {Component} from "react";
import $ from "jquery";
import "./Table.css";
import {IconContext} from "react-icons";
import {BsChevronExpand} from "react-icons/bs";
import {getRequest} from "../../Services/get";
import moment from "moment";
class Table extends Component {
  render() {
    return (
      <table id="customers">
        <tr>
          <th>
            <input type="checkbox" id="selectAll" />
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
        {this.props.data.map((ele) => {
          return (
            <tr>
              <td>
                <input type="checkbox" className="selectRow" />
              </td>
              <td>{ele.name}</td>
              <td>{moment(ele.last_updated.date).format("MMM Do YYYY")}</td>
              <td>{ele.cogs}</td>
              <td>{ele.cost_price.toFixed(2)}</td>
              <td>{ele.sale_price.toFixed(2)}</td>
              <td>{ele.gross_margin.toFixed(2)}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}
export default Table;
