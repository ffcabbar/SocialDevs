import React, { Component } from 'react'

class Weather extends Component {
    render() {
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
                        <span>71</span>
                    </div>
                    <div className="weather-icon">
                        <div>
                            <i data-feather="sun" />
                            <h4>Sunny</h4>
                            <div className="details">
                                <span>Real Feel: 78° </span>
                                <span>Rain Chance: 5%</span>
                            </div>
                        </div>
                    </div>
                    <div className="previsions">
                        <div className="day">
                            <span>Mon</span>
                            <i data-feather="sun" />
                            <span>69°</span>
                        </div>
                        <div className="day">
                            <span>Tue</span>
                            <i data-feather="cloud-lightning" />
                            <span>74°</span>
                        </div>
                        <div className="day">
                            <span>Wed</span>
                            <i data-feather="cloud-lightning" />
                            <span>73°</span>
                        </div>
                        <div className="day">
                            <span>Thu</span>
                            <i data-feather="sun" />
                            <span>68°</span>
                        </div>
                        <div className="day">
                            <span>Fri</span>
                            <i data-feather="cloud-drizzle" />
                            <span>55°</span>
                        </div>
                        <div className="day">
                            <span>Sat</span>
                            <i data-feather="cloud-rain" />
                            <span>58°</span>
                        </div>
                        <div className="day">
                            <span>Sun</span>
                            <i data-feather="sun" />
                            <span>64°</span>
                        </div>
                    </div>
                    <div className="current-date-location has-text-centered">
                        <span className="date">Sunday, 18th 2018</span>
                        <span className="location"> <i data-feather="map-pin" /> Los Angeles, CA</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;
