import React, { Component } from 'react';
import * as Icon from 'react-feather';

class ProfileFriends extends Component {
    render() {
        return (
            <div className="box-heading">
                <h4>Friends</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                    <div>
                        <div className="button">
                            <Icon.MoreVertical />
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a className="dropdown-item">
                                <div className="media">
                                    <Icon.Users />
                                    <div className="media-content">
                                        <h3>All Friends</h3>
                                        <small>View all friends.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Heart />
                                    <div className="media-content">
                                        <h3>Family</h3>
                                        <small>View family members.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Briefcase />
                                    <div className="media-content">
                                        <h3>Work Relations</h3>
                                        <small>View work related friends.</small>
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

export default ProfileFriends;
