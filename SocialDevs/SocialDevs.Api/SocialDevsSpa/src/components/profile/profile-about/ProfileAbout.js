import React, { Component } from 'react'
import AboutOverview from './about-overview/AboutOverview'
import AboutPersonal from './about-personal/AboutPersonal'
import ProfileHeader from '../common/profile-header/ProfileHeader'

class ProfileAbout extends Component {
    render() {
        return (
            <div className="view-wrapper">
                <div className="container is-custom">
                    <div id="profile-about" className="view-wrap is-headless">
                        <ProfileHeader />
                        <div className="column">
                            <div className="profile-about side-menu">
                                <div className="left-menu">
                                    <div className="left-menu-inner">
                                        <div className="menu-item is-active" data-content="overview-content">
                                            <div className="menu-icon">
                                                <i className="mdi mdi-progress-check" />
                                                <span>Overview</span>
                                            </div>
                                        </div>
                                        <div className="menu-item" data-content="personal-content">
                                            <div className="menu-icon">
                                                <i className="mdi mdi-apps" />
                                                <span>Personal Info</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <AboutOverview />
                                    <AboutPersonal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileAbout;
