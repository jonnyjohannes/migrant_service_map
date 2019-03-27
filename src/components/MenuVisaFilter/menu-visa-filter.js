import React, { Component } from "react";

class MenuVisaFilter extends Component {
  render() {
    return (
      <ul>
        visa filters:
        {this.props.visas.map((visa, i) => (
          <li key={i}>
            <div>
              <input
                type="radio"
                name="visa"
                id={visa}
                value={visa}
                onChange={() => this.props.changeVisaFilter(visa)}
                checked={this.props.filters.visa === visa}
              />
              <label htmlFor={visa}>
                {visa}
              </label>
            </div>
          </li>
        ))}
        <button onClick={this.props.clearVisaFilter}>Clear visa filter</button>
      </ul>
    );
  }
}

export default MenuVisaFilter;
