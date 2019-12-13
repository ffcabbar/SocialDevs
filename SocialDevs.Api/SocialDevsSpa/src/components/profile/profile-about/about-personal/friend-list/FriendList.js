import React, { Component } from 'react';
import * as Icon from 'react-feather';

class FriendList extends Component {
    render() {
        return (
            <div className="column is-6">
                <div className="friend-small-card">
                    <img src="https://via.placeholder.com/150x150" data-user-popover={9} alt="" />
                    <div className="meta">
                        <span>Nelly Schwartz</span>
                        <span>182 Friends</span>
                    </div>
                    <div className="dropdown is-spaced is-accent is-right dropdown-trigger">
                        <div>
                            <div className="button">
                                <Icon.MoreVertical/>
                            </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <Icon.User/>
                                        <div className="media-content">
                                            <h3>View Profile</h3>
                                            <small>Open this user profile.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <Icon.MessageSquare/>
                                        <div className="media-content">
                                            <h3>Message</h3>
                                            <small>Send a message to this user.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <Icon.Delete/>
                                        <div className="media-content">
                                            <h3>Unfriend</h3>
                                            <small>Remove from friend list.</small>
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

export default FriendList;
