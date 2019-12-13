import React, { Component } from 'react';
import * as Icon from 'react-feather';

class ProfileVideos extends Component {
    render() {
        return (
            <div className="box-heading">
                <h4>Videos</h4>
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
                                    <Icon.Video />
                                    <div className="media-content">
                                        <h3>View Videos</h3>
                                        <small>View all your videos</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Tag />
                                    <div className="media-content">
                                        <h3>Tagged</h3>
                                        <small>View videos you are tagged in.</small>
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

export default ProfileVideos;
