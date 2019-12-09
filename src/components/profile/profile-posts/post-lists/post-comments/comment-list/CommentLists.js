import React, { Component } from 'react';
import * as Icon from 'react-feather';

class CommentLists extends Component {
    render() {
        return (
            <div className="media is-comment">
                <div className="media-left">
                    <div className="image">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/bobby.jpg" data-user-popover={8} alt="" />
                    </div>
                </div>
                <div className="media-content">
                    <a href="#">Bobby Brown</a>
                    <span className="time">1 hour ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                    <div className="controls">
                        <div className="like-count">
                            <Icon.ThumbsUp/>
                            <span>1</span>
                        </div>
                        <div className="reply">
                            <a href="#">Reply</a>
                        </div>
                    </div>
                    <div className="media is-comment">
                        <div className="media-left">
                            <div className="image">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/daniel.jpg" data-user-popover={3} alt="" />
                            </div>
                        </div>
                        <div className="media-content">
                            <a href="#">Daniel Wellington</a>
                            <span className="time">3 minutes ago</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore
                            et dolore magna aliqua.</p>
                            <div className="controls">
                                <div className="like-count">
                                    <Icon.ThumbsUp/>
                                    <span>4</span>
                                </div>
                                <div className="reply">
                                    <a href="#">Reply</a>
                                </div>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                    <div className="button">
                                        <Icon.MoreVertical/>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Icon.X/>
                                                <div className="media-content">
                                                    <h3>Hide</h3>
                                                    <small>Hide this comment.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <Icon.Flag/>
                                                <div className="media-content">
                                                    <h3>Report</h3>
                                                    <small>Report this comment.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                        <div>
                            <div className="button">
                                <Icon.MoreVertical/>
                            </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a className="dropdown-item">
                                    <div className="media">
                                        <Icon.X/>
                                        <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <Icon.Flag/>
                                        <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentLists;
