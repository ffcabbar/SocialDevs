import React, { Component } from 'react';
import * as Icon from 'react-feather';
import FriendList from './friend-list/FriendList';
import PhotoList from './photo-list/PhotoList';
import VideoList from './video-list/VideoList';
class AboutPersonal extends Component {
    render() {
        return (

            <div id="personal-content" className="content-section">
                <div className="about-card">
                    <div className="header">
                        <div className="icon-title">
                            <i className="mdi mdi-account-group" />
                            <h3>Friends</h3>
                        </div>
                        <div className="actions">
                            <div className="button-wrapper">
                                <a className="button">Invitations</a>
                                <div className="indicator">
                                    <span>8</span>
                                </div>
                            </div>
                            <div className="dropdown is-spaced is-accent is-right dropdown-trigger">
                                <div>
                                    <div className="button">
                                        <Icon.MoreVertical />
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <Icon.Smile />
                                                <div className="media-content">
                                                    <h3>Manage</h3>
                                                    <small>Manage your friend list.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Icon.Search />
                                                <div className="media-content">
                                                    <h3>Find friends</h3>
                                                    <small>Search for new friends.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <Icon.Eye />
                                                <div className="media-content">
                                                    <h3>View all</h3>
                                                    <small>View all friends.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="columns friends-columns is-multiline">
                            <FriendList />
                        </div>
                    </div>
                </div>

                <div className="about-card">
                    <div className="header">
                        <div className="icon-title">
                            <i className="mdi mdi-camera" />
                            <h3>Photos</h3>
                        </div>
                        <div className="actions">
                            <div className="button-wrapper">
                                <a className="button">Albums</a>
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
                                                    <h3>Of Me</h3>
                                                    <small>View pictures of me.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Icon.Users/>
                                                <div className="media-content">
                                                    <h3>With Me</h3>
                                                    <small>View pictures with me.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Icon.UploadCloud/>
                                                <div className="media-content">
                                                    <h3>Upload</h3>
                                                    <small>Upload pictures from computer.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Icon.Plus/>
                                                <div className="media-content">
                                                    <h3>Create Album</h3>
                                                    <small>Create a new album.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <Icon.Image/>
                                                <div className="media-content">
                                                    <h3>View all</h3>
                                                    <small>View all photos.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body has-flex-list">
                        <PhotoList />
                    </div>
                </div>

                <div className="about-card">
                    <div className="header">
                        <div className="icon-title">
                            <i className="mdi mdi-video" />
                            <h3>Videos</h3>
                        </div>
                        <div className="actions">
                            <div className="button-wrapper">
                                <a className="button">All Videos</a>
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
                                                <Icon.Edit3/>
                                                <div className="media-content">
                                                    <h3>Manage</h3>
                                                    <small>Manage your videos.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Icon.Plus/>
                                                <div className="media-content">
                                                    <h3>Upload</h3>
                                                    <small>Upload a new video.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <Icon.Settings/>
                                                <div className="media-content">
                                                    <h3>Settings</h3>
                                                    <small>Open video settings.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body has-flex-list">
                        <div className="video-list">
                            <VideoList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPersonal;
