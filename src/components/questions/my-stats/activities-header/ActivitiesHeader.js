import React, { Component } from 'react';
import * as Icon from 'react-feather';

class ActivitiesHeader extends Component {
    render() {
        return (
            <div className="stats-header">
                <div className="avatar-wrapper">
                    <img
                        className="avatar"
                        src="https://via.placeholder.com/150x150"
                        data-demo-src="assets/images/avatars/jenna.png"
                        data-user-popover={0}
                        alt=""
                    />
                    <div className="badge">
                        <Icon.Check />
                    </div>
                </div>
                <div className="user-info">
                    <h4>Jenna Davis</h4>
                    <p>From Melbourne</p>
                    <a className="button is-follow">Follow</a>
                </div>
                <div className="main-stats">
                    <div className="stat-block">
                        <h4>Questions</h4>
                        <p>1337</p>
                    </div>
                    <div className="stat-block is-centered">
                        <h4>Followers</h4>
                        <p>618</p>
                    </div>
                    <div className="stat-block">
                        <h4>Following</h4>
                        <p>72</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivitiesHeader;
