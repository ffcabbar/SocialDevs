import React, { Component } from 'react';
import ProfileHeader from '../common/profile-header/ProfileHeader';
import PhotoList from './photo-list/PhotoList';
import * as Icon from 'react-feather';
class ProfilePhotos extends Component {
    render() {
        return (
            <div className="view-wrapper">
                <div className="container is-custom">
                    <div id="profile-photos" className="view-wrap is-headless">
                        <ProfileHeader />
                        <div className="columns">
                            <div className="column">
                                <div className="box-heading">
                                    <div className="dropdown photos-dropdown is-spaced is-neutral dropdown-trigger">
                                        <div>
                                            <div className="button">
                                                <span>All Pictures</span>
                                                <Icon.ChevronDown />
                                            </div>
                                        </div>
                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <i data-feather="tag" />
                                                        <div className="media-content">
                                                            <h3>Tagged Photos</h3>
                                                            <small>Photos whith this user tagged.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Clock />
                                                        <div className="media-content">
                                                            <h3>Recent</h3>
                                                            <small>View most recent photos.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Heart />
                                                        <div className="media-content">
                                                            <h3>Popular</h3>
                                                            <small>View popular photos.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.BookOpen />
                                                        <div className="media-content">
                                                            <h3>Albums</h3>
                                                            <small>See all albums.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr className="dropdown-divider" />
                                                <a className="dropdown-item modal-trigger" data-modal="albums-modal">
                                                    <div className="media">
                                                        <Icon.Plus />
                                                        <div className="media-content">
                                                            <h3>Add Photos</h3>
                                                            <small>Upload pictures.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-wrap">
                                        <button type="button" className="button is-active">Recent</button>
                                        <button type="button" className="button">Albums</button>
                                    </div>
                                </div>
                                <div className="image-grid-wrap">
                                    <div className="image-grid">
                                        <PhotoList />
                                    </div>
                                    <div className=" load-more-wrap has-text-centered">
                                        <a href="#" className="load-more-button">Load More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default ProfilePhotos;
