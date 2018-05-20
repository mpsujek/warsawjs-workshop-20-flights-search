import React from "react";
import Flight from './Flight';
import FlightFilter from './FlightFilters';

class FlightsView extends React.Component {
  async componentDidMount(){
    this.setState({
      flightsFetching:true,
    })
    const {
      fromValue, toValue, departValue, returnValue
    } = this.props.flightData;
    const url = 'https://warsawjs-flights-api.herokuapp.com/flights';
    const url2= `${url}/${departValue}/${returnValue}/${fromValue}/${toValue}`
    const flights = await fetch(url2)
    .then((res) => res.json());

    this.setState({
      flights,
      flightsFetching: false
    })

    console.log(flights);
  }

  state ={
    flights:[],
  }

  changeFilterValues = (values) => {
    this.setState(values);
  }

  render() {
    const flightsMaped =
    this.state.flights
    .filter(flight =>
      !this.state.priceToggled ||
      (flight.price < +this.state.priceMax && flight.price > +this.state.priceMin))
    .map( flight => (<Flight key={flight.id} flight={flight} />))

    return(
      <div>
        {this.state.flightsFetching ? <p>Loading...</p> : null}
        <FlightFilter changeFilterValues={this.changeFilterValues} />
        {flightsMaped}
    </div>
    )
  }
}

export default FlightsView;
