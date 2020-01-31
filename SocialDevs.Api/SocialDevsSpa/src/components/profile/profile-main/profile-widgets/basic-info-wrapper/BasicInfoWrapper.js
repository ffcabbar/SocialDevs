import React, { Component } from 'react';

class BasicInfoWrapper extends Component {
    render() {
        return (
            <div className="basic-infos-wrapper">
                <div className="card is-profile-info">
                    <div className="info-row">
                        <div>
                            <span>Studied at</span>
                            <a href="/#" className="is-inverted">Georgetown University</a>
                        </div>
                        <i className="mdi mdi-school" />
                    </div>
                    <div className="info-row">
                        <div>
                            <span>Married to</span>
                            <a href="/#" className="is-inverted">Dan Walker</a>
                        </div>
                        <i className="mdi mdi-heart" />
                    </div>
                    <div className="info-row">
                        <div>
                            <span>From</span>
                            <a href="/#" className="is-inverted">Melbourne, AU</a>
                        </div>
                        <i className="mdi mdi-earth" />
                    </div>
                    <div className="info-row">
                        <div>
                            <span>Lives in</span>
                            <a href="/#" className="is-inverted">Los Angeles, CA</a>
                        </div>
                        <i className="mdi mdi-map-marker" />
                    </div>
                    <div className="info-row">
                        <div>
                            <span>Followers</span>
                            <a href="/#" className="is-muted">258 followers</a>
                        </div>
                        <i className="mdi mdi-bell-ring" />
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicInfoWrapper;
