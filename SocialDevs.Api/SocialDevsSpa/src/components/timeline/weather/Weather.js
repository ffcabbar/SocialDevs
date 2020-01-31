import React, { Component } from 'react'
import Clock from 'react-live-clock';

const API_key="873510ede29b47c8f9eed3e8212d8d9e";
let date = new Date();


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          city: "",
          country: "",
          weather: [],
          celcius: "",
          feelslike: "",
          humidity: "",
          wind: ""
        };

        this.calCelsius = this.calCelsius.bind(this);
    } 
    

    calCelsius(temp) {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Istanbul,tr&appid=${API_key}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
 
           this.setState({
               city: data.name,
               country: data.sys.country,
               weather: data.weather,
               celcius: this.calCelsius(data.main.temp),
               feelslike: this.calCelsius(data.main.feels_like),
               humidity: data.main.humidity,
               wind: data.wind.speed
           })

        })

    }
    

    render() {
        let ICON_url= `https://openweathermap.org/img/wn/${this.state.weather.map(item => item.icon)}@2x.png`;
    
        return (
            <div className="card is-weather-card has-background-image" data-background="../../assets/images/illustrations/cards/weather-bg.svg">
                <div className="card-heading">
                    <div className="dropdown is-spaced is-accent is-right dropdown-trigger is-light">
                        <div>
                            <div className="button">
                                <i data-feather="more-vertical" />
                            </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="map-pin" />
                                        <div className="media-content">
                                            <h3>Change City</h3>
                                            <small>Change the displayed city.</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="rotate-ccw" />
                                        <div className="media-content">
                                            <h3>Synchronize</h3>
                                            <small>Synchronize with a weather source.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="settings" />
                                        <div className="media-content">
                                            <h3>Settings</h3>
                                            <small>Access widget settings.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="trash-2" />
                                        <div className="media-content">
                                            <h3>Remove</h3>
                                            <small>Removes this widget from your feed.</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="temperature">
                        <span>{this.state.celcius}</span>
                    </div>
                    <div className="weather-icon">
                        <div>
                            {/* <i data-feather="sun" /> */}
                            <img src={ICON_url} />
                            <h4>{this.state.weather.map(item => item.main)}</h4>
                            <div className="details" style={{marginTop:"5px"}}>
                                <span>Real Feel {this.state.feelslike}° </span>
                                <span>Humidity {this.state.humidity}%</span>
                                <span>Wind Speed {this.state.wind}</span>
                            </div>
                        </div>
                    </div>
                    <div className="previsions">
                        <div className="day">
                            <span>Mon</span>
                            <i data-feather="sun" />
                            <span>12°</span>
                        </div>
                        <div className="day">
                            <span>Tue</span>
                            <i data-feather="cloud" />
                            <span>11°</span>
                        </div>
                        <div className="day">
                            <span>Wed</span>
                            <i data-feather="cloud-lightning" />
                            <span>14°</span>
                        </div>
                        <div className="day">
                            <span>Thu</span>
                            <i data-feather="cloud-rain" />
                            <span>9°</span>
                        </div>
                        <div className="day">
                            <span>Fri</span>
                            <i data-feather="cloud-drizzle" />
                            <span>9°</span>
                        </div>
                        <div className="day">
                            <span>Sat</span>
                            <i data-feather="sun" />
                            <span>10°</span>
                        </div>
                        <div className="day">
                            <span>Sun</span>
                            <i data-feather="sun" />
                            <span>10°</span>
                        </div>
                    </div>
                    <div className="current-date-location has-text-centered">
                        <span className="date" style={{display: "inline-block",marginRight:"50px"}}><Clock format={'HH:mm:ss'} ticking={true}/></span>
                        <span className="date" style={{display: "inline-block"}}>{date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</span>
                        <span className="location" style={{marginTop: "5px"}}> <i data-feather="map-pin" /> {this.state.city} {this.state.country}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;
