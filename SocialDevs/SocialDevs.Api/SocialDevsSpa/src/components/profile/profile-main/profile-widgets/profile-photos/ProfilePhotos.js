import React, { Component } from 'react';
import * as Icon from 'react-feather';

class ProfilePhotos extends Component {
    render() {
        return (
            <div className="box-heading">
                <h4>Photos</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                    <div>
                        <div className="button">
                            <Icon.MoreVertical/>
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a className="dropdown-item">
                                <div className="media">
                                    <Icon.Image/>
                                    <div className="media-content">
                                        <h3>View Photos</h3>
                                        <small>View all your photos</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Tag/>
                                    <div className="media-content">
                                        <h3>Tagged</h3>
                                        <small>View photos you are tagged in.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Folder/>
                                    <div className="media-content">
                                        <h3>Albums</h3>
                                        <small>Open my albums.</small>
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

export default ProfilePhotos;
