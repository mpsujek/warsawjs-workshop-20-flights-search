import React from "react";

export default class FlightFilters extends React.Component {
  state ={
    priceToggled: false,
    priceMin: 0,
    priceMax : 700
  }
  onChangeCheckbox = property => e => {
      const newState = {};

      newState[property] = e.target.checked;

      this.setState(newState, () => {
        this.props.changeFilterValues({...this.state})
      });


  }
  onChange = property => e => {
      const newState = {};

      newState[property] = e.target.value;

      this.setState(newState, () => {
        this.props.changeFilterValues({...this.state})
      });
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked = {this.state.priceToggled}
          onChange= {this.onChangeCheckbox("priceToggled")}
        />
      <input
        type="number"
        value={this.state.priceMin}
        onChange={this.onChange("priceMin")}
      />
      <input
        type="number"
        value={this.state.priceMax}
        onChange={this.onChange("priceMax")}
      />
      </div>
    )
  }
}
