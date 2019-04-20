import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import './App.css';
import Result from "./Result";
const KEY = "2942808c05777907ea909408c8ec4cef";
class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${KEY}&units=metric`;

    fetch(API)
        .then(response => {
          if(response.ok) {
            return response
          } throw Error("nie udalo sie")
        })
        .then(response => response.json())
        .then( data => {
            const time = new Date().toLocaleString()
        this.setState(prevState => ({
          date: time,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        }))
        })
        .catch(error => this.setState({
            err: !false,
            city: this.state.value
            })
        )
  }

  render() {
    return (

      <div className="container">
          <div className="row justify-content-center py-5" >
              <Form value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
              />
          </div>
              <Result
                  weather={this.state}
              />
          <p className="text-center mt-2"> Created by: <a href="https://github.com/SzymonNowak/WeatherReact">Szymon Nowak </a> </p>
      </div>
    );
  }
}

export default App;
