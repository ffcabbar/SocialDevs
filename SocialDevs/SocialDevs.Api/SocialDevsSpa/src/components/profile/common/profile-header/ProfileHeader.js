import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";

class ProfileHeader extends Component {
    render() {
        return (
            <div className="columns is-multiline no-margin">
                <div className="column is-paddingless">
                    <div className="cover-bg">
                        <img className="cover-image" src="https://via.placeholder.com/1600x460" data-demo-src="assets/images/demo/bg/4.png" alt="" />
                        <div className="avatar">
                            <img id="user-avatar" className="avatar-image" src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/jenna.png" alt="" />
                            <div className="avatar-button">
                                <Icon.Plus />
                            </div>
                            <div className="pop-button is-far-left has-tooltip modal-trigger" data-modal="change-profile-pic-modal" data-placement="right" data-title="Change profile picture">
                                <a className="inner">
                                    <Icon.Camera />
                                </a>
                            </div>
                            <div id="follow-pop" className="pop-button pop-shift is-left has-tooltip" data-placement="top" data-title="Subscription">
                                <a className="inner">
                                    <Icon.Bell className="inactive-icon" />
                                    <Icon.BellOff className="active-icon" />
                                </a>
                            </div>
                            <div id="invite-pop" className="pop-button pop-shift is-center has-tooltip" data-placement="top" data-title="Relationship">
                                <a href="#" className="inner">
                                    <Icon.Plus className="inactive-icon" />
                                    <Icon.Minus className="active-icon" />
                                </a>
                            </div>
                            <div id="chat-pop" className="pop-button is-right has-tooltip" data-placement="top" data-title="Chat">
                                <a className="inner">
                                    <Icon.MessageCircle />
                                </a>
                            </div>
                            <div className="pop-button is-far-right has-tooltip" data-placement="right" data-title="Send message">
                                <a href="messages-inbox.html" className="inner">
                                    <Icon.Mail />
                                </a>
                            </div>
                        </div>
                        <div className="cover-overlay" />
                        <div className="cover-edit modal-trigger" data-modal="change-cover-modal">
                            <i className="mdi mdi-camera" />
                            <span>Edit cover image</span>
                        </div>
                        <div className="dropdown is-spaced is-right is-accent dropdown-trigger timeline-mobile-dropdown is-hidden-desktop">
                            <div>
                                <div className="button">
                                    <Icon.MoreVertical />
                                </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">

                                    <Link to={"/profile"} className="dropdown-item">
                                        <div className="media">
                                            <Icon.Activity />
                                            <div className="media-content">
                                                <h3>Timeline</h3>
                                                <small>Open Timeline.</small>
                                            </div>
                                        </div>
                                    </Link>


                                    <Link to={"/profile/about"} className="dropdown-item">
                                        <div className="media">
                                            <Icon.AlignRight />
                                            <div className="media-content">
                                                <h3>About</h3>
                                                <small>See about info.</small>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={"/profile/friends"} className="dropdown-item">
                                        <div className="media">
                                            <Icon.Heart />
                                            <div className="media-content">
                                                <h3>Friends</h3>
                                                <small>See friends.</small>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={"/profile/photos"} className="dropdown-item">
                                        <div className="media">
                                            <Icon.Image />
                                            <div className="media-content">
                                                <h3>Photos</h3>
                                                <small>See all photos.</small>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div></div>
                    <div className="profile-menu is-hidden-mobile">
                        <div className="menu-start">
                            <Link to={"/profile/"} className="button has-min-width">Timeline</Link>
                            <Link to={"/profile/about"} className="button has-min-width">About</Link>
                        </div>
                        <div className="menu-end">
                            <Link id="profile-friends-link" to={"/profile/friends"} className="button has-min-width">Friends</Link>
                            <Link to={"/profile/photos"} className="button has-min-width">Photos</Link>
                        </div>
                    </div>
                    <div className="profile-subheader">
                        <div className="subheader-start is-hidden-mobile">
                            <span>3.4K</span>
                            <span>Friends</span>
                        </div>
                        <div className="subheader-middle">
                            <h2>Jenna Davis</h2>
                            <span>Media Influencer</span>
                        </div>
                        <div className="subheader-end is-hidden-mobile">
                            <a className="button has-icon is-bold">
                                <Icon.Clock />
                                History
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileHeader;
