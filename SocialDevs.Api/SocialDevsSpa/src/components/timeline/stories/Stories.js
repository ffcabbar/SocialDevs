import React, { Component } from 'react'

class Stories extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-heading is-bordered">
                    <h4>Stories</h4>
                    <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                        <div>
                            <div className="button">
                                <i data-feather="more-vertical" />
                            </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="tv" />
                                        <div className="media-content">
                                            <h3>Browse stories</h3>
                                            <small>View all recent stories.</small>
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
                <div className="card-body no-padding">
                    {/* Story block */}
                    <div className="story-block">
                        <a id="add-story-button" href="#" className="add-story">
                            <i data-feather="plus" />
                        </a>
                        <div className="story-meta">
                            <span>Add a new Story</span>
                            <span>Share an image, a video or some text</span>
                        </div>
                    </div>
                    {/* Story block */}
                    <div className="story-block">
                        <div className="img-wrapper">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" data-user-popover={1} alt="" />
                        </div>
                        <div className="story-meta">
                            <span>Dan Walker</span>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    {/* Story block */}
                    <div className="story-block">
                        <div className="img-wrapper">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/bobby.jpg" data-user-popover={8} alt="" />
                        </div>
                        <div className="story-meta">
                            <span>Bobby Brown</span>
                            <span>3 days ago</span>
                        </div>
                    </div>
                    {/* Story block */}
                    <div className="story-block">
                        <div className="img-wrapper">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                        </div>
                        <div className="story-meta">
                            <span>Elise Walker</span>
                            <span>Last week</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stories;
