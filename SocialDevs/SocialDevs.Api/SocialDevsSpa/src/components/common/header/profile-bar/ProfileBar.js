import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProfileBar extends Component {
    render() {
        return (
            <div id="account-dropdown" className="navbar-item is-account drop-trigger has-caret">
                <div className="user-image">
                    <img src="https://via.placeholder.com/400x400" data-demo-src="assets/images/avatars/jenna.png" alt="" />
                    <span className="indicator" />
                </div>
                <div className="nav-drop is-account-dropdown">
                    <div className="inner">
                        <div className="nav-drop-header">
                            <span className="username">Furkan Cabbar</span>
                            <Link to={"/profile"}>
                                Profile
                            </Link>
                        </div>
                        
                        <div className="nav-drop-body account-items">

                            <Link to={"/profile"} className="account-item" id="profile-link">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/400x400" data-demo-src="assets/images/avatars/jenna.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <h3>Furkan Cabbar</h3>
                                        <small>Main account</small>
                                    </div>
                                    <div className="media-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                </div>
                            </Link>
                            <hr className="account-divider"/>
                            <a className="account-item">
                                <div className="media">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                                    </div>
                                    <div className="media-content">
                                        <h3>Settings</h3>
                                        <small>Access widget settings.</small>
                                    </div>
                                </div>
                            </a>
                            <a className="account-item">
                                <div className="media">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-life-buoy"><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={4} /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="14.83" y1="9.17" x2="18.36" y2="5.64" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>
                                    </div>
                                    <div className="media-content">
                                        <h3>Help</h3>
                                        <small>Contact our support.</small>
                                    </div>
                                </div>
                            </a>
                            <a className="account-item">
                                <div className="media">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1={12} y1={2} x2={12} y2={12} /></svg>
                                    </div>
                                    <div className="media-content">
                                        <h3>Log out</h3>
                                        <small>Log out from your account.</small>
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

export default ProfileBar;