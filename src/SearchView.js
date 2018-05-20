import React from "react";

class SearchView extends React.Component {
  state = {
    fromValue: "WAW",
    toValue: "",
    departValue: "",
    returnValue: ""
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(1);

    if(this.state.fromValue ===''){
      return;
    }

    if(this.state.toValue ===''){
      return;
    }

    if(this.state.departValue ===''){
      return;
    }

    if(this.state.returnValue ===''){
      return;
    }
    this.props.onAppSubmit({...this.state})
  }

  onFromChange = (e) => {
    console.log(e.target.value);
    this.setState({fromValue: e.target.value})
  }

  onToChange = (e) => {
    console.log(e.target.value);
    this.setState({toValue: e.target.value})
  }

  onDepartChange = (e) => {
    console.log(e.target.value);
    this.setState({departValue: e.target.value})
  }

  onReturnChange = (e) => {
    console.log(e.target.value);
    this.setState({returnValue: e.target.value})
  }

  render() {
    return (
    <form onSubmit={this.onSubmit}>
      <label>
        <strong>From</strong>
      <select value={this.state.fromValue} onChange={this.onFromChange}>
          <option value="ATL">ATL</option>
          <option value="WAW">WAW</option>
        </select>
      </label>
      <label>
        <strong>To</strong>
      <select value={this.state.toValue} onChange={this.onToChange}>
          <option value="ATL">ATL</option>
          <option value="WAW">WAW</option>
        </select>
      </label>
      <label>
        <strong >Depart</strong>
        <input value={this.state.departValue} onChange={this.onDepartChange} type="date"/>
      </label>
      <label>
        <strong >Return</strong>
        <input value={this.state.returnValue} onChange={this.onReturnChange} type="date"/>
      </label>
      <input type="submit" value="Submit"></input>
    </form>)

    
  }
}

export default SearchView;
