import React, {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import "./App.css";

const API_KEY = "9076aa38e40273c5f37923ce36d7ee68";
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=9076aa38e40273c5f37923ce36d7ee68


class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api.json();

    console.log(data);

    if (city && country) {
      this.setState({
        tempreature: data.main.temp - 273.15,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Form getWeather={this.getWeather} />
          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
 
export default App;
