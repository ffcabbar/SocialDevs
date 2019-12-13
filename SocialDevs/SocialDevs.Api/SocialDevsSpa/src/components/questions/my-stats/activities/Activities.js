import React, { Component } from 'react';
import * as Icon from 'react-feather';

class Activities extends Component {
    render() {
        return (
            <div className="quick-activity">
                <div className="header">
                    <h3>Activity</h3>
                </div>
                <div className="activity-list">
                    <div className="activity-item is-best">
                        <div className="avatar-wrap">
                            <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/images/avatars/elise.jpg"
                                data-user-popover={6}
                                alt=""
                            />
                            <div className="badge">
                                <Icon.Check />
                            </div>
                        </div>
                        <div className="meta">
                            <span>Elise Walker</span>
                            <span>
                                Just asked
                                <a>
                                    Is there a way to quickly convert a project from
                                    Angular to React?
                                </a>
                            </span>
                            <small>42 minutes ago</small>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="avatar-wrap">
                            <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/images/avatars/dan.jpg"
                                data-user-popover={1}
                                alt=""
                            />
                            <div className="badge">
                                <Icon.Check />
                            </div>
                        </div>
                        <div className="meta">
                            <span>Dan Walker</span>
                            <span>
                                Marked <a>your answer</a> as the best answer to his
                                question.
                            </span>
                            <small>1 hour ago</small>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="avatar-wrap">
                            <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/images/avatars/daniel.jpg"
                                data-user-popover={3}
                                alt=""
                            />
                            <div className="badge">
                                <Icon.Check />
                            </div>
                        </div>
                        <div className="meta">
                            <span>Daniel Wellington</span>
                            <span>
                                Replied to{" "}
                                <a>
                                    Is there a cheatsheet listing all available
                                    browser polyfills?
                                </a>
                            </span>
                            <small>3 hours ago</small>
                        </div>
                    </div>
                    <div className="activity-item is-best">
                        <div className="avatar-wrap">
                            <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/images/avatars/lana.jpeg"
                                data-user-popover={10}
                                alt=""
                            />
                            <div className="badge">
                                <Icon.Check />
                            </div>
                        </div>
                        <div className="meta">
                            <span>Lana Henrikssen</span>
                            <span>
                                Marked <a>your answer</a> as the best answer to her
                                question.
                            </span>
                            <small>5 hours ago</small>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="avatar-wrap">
                            <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/images/avatars/placeholder-m.jpg"
                                alt=""
                            />
                            <div className="badge">
                                <Icon.Check />
                            </div>
                        </div>
                        <div className="meta">
                            <span>Hank Robson</span>
                            <span>
                                Replied to
                                <a>
                                    Is there a cheatsheet listing all available
                                    browser polyfills?
                                </a>
                            </span>
                            <small>5 hours ago</small>
                        </div>
                    </div>
                </div>
                <div className=" load-more-wrap has-text-centered">
                    <a href="#" className="load-more-button">
                        Load More
                    </a>
                </div>
            </div>
        )
    }
}

export default Activities;
