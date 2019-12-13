import React, { Component } from 'react';
import ProfileHeader from '../common/profile-header/ProfileHeader';
import FriendList from './friend-list/FriendList';
import * as Icon from 'react-feather';

class ProfileFriends extends Component {
    render() {
        return (
            <div className="view-wrapper">
                <div className="container is-custom">
                    <div id="profile-friends" className="view-wrap is-headless">
                        <ProfileHeader/>
                        <div className="columns">
                            <div className="column">
                                <div className="box-heading">
                                    <div className="dropdown friends-dropdown is-spaced is-neutral dropdown-trigger">
                                        <div>
                                            <div className="button">
                                                <span>All Friends</span>
                                                <Icon.ChevronDown/>
                                            </div>
                                        </div>
                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Heart/>
                                                        <div className="media-content">
                                                            <h3>Close Friends</h3>
                                                            <small>Your closest friends list.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Bell/>
                                                        <div className="media-content">
                                                            <h3>Followed</h3>
                                                            <small>Friends you are following.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Coffee/>
                                                        <div className="media-content">
                                                            <h3>Work relations</h3>
                                                            <small>Your work relations.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr className="dropdown-divider" />
                                                <a className="dropdown-item modal-trigger" data-modal="albums-modal">
                                                    <div className="media">
                                                        <Icon.Mail/>
                                                        <div className="media-content">
                                                            <h3>Friend Requests</h3>
                                                            <small>Your pending friend requests.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="control heading-search">
                                        <input type="text" className="input is-rounded" placeholder="Search Friends..." />
                                        <div className="search-icon">
                                            <Icon.Search/>
                                        </div>
                                    </div>
                                </div>

                                <div className="friends-grid">
                                    <div className="columns is-multiline">
                                        <FriendList/>                                  
                                    </div>
                                </div>
                                <div className=" load-more-wrap has-text-centered">
                                    <a href="#" className="load-more-button">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ProfileFriends;
