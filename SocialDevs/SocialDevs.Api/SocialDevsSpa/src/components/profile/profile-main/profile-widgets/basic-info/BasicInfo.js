import React, { Component } from 'react';
import * as Icon from 'react-feather';

class BasicInfo extends Component {
    render() {
        return (
            <div className="box-heading">
                <h4>Basic Infos</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                    <div>
                        <div className="button">
                            <Icon.MoreVertical/>
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="profile-about.html" className="dropdown-item">
                                <div className="media">
                                    <Icon.Eye/>
                                    <div className="media-content">
                                        <h3>View</h3>
                                        <small>View user details.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Icon.Search/>
                                    <div className="media-content">
                                        <h3>Related</h3>
                                        <small>Search for related users.</small>
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

export default BasicInfo;
