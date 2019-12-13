import React, { Component } from 'react';
import * as Icon from 'react-feather';

class PostHeader extends Component {
    render() {
        return (
            <div className="card-heading">
                <div className="user-block">
                    <div className="image">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/jenna.png" data-user-popover={0} alt="" />
                    </div>
                    <div className="user-info">
                        <a href="#">Jenna Davis</a>
                        <span className="time">October 17 2018, 11:03am</span>
                    </div>
                </div>
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                    <div>
                        <div className="button">
                            <Icon.MoreVertical />
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Bookmark />
                                    <div className="media-content">
                                        <h3>Bookmark</h3>
                                        <small>Add this post to your bookmarks.</small>
                                    </div>
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="media">
                                    <Icon.Bell />
                                    <div className="media-content">
                                        <h3>Notify me</h3>
                                        <small>Send me the updates.</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Flag />
                                    <div className="media-content">
                                        <h3>Flag</h3>
                                        <small>In case of inappropriate content.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostHeader;
