import React from 'react';
import Search from './header/search/Search';
import Notifications from './header/notifications/Notifications';
import ProfileBar from './header/profile-bar/ProfileBar';
import * as Icon from 'react-feather';

function Header() {
    return (

        <div id="main-navbar" className="navbar is-inline-flex is-transparent no-shadow is-hidden-mobile">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item">
                        <img src={require('../../assets/images/logo/friendkit.svg')} width={112} height={28} alt="" />
                    </a>
                </div>
                <div className="navbar-menu">
                    <Notifications />
                    <div className="navbar-end">
                        <Search />
                        <ProfileBar />
                        <div className="navbar-item is-plus-menu">
                            <a id="plus-menu" className="button action-button is-solid primary-button raised">
                                <Icon.Plus size={24} />
                            </a>
                            <div className="plus-drop">
                                <div className="drop-content">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                        <div className="meta">
                                            <span>Guides</span>
                                            <span>Learn everything fast</span>
                                        </div>
                                    </a>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1={12} y1={17} x2="12.01" y2={17} /></svg>
                                        <div className="meta">
                                            <span>FAQ</span>
                                            <span>Most asked questions</span>
                                        </div>
                                    </a>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-life-buoy"><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={4} /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="14.83" y1="9.17" x2="18.36" y2="5.64" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>
                                        <div className="meta">
                                            <span>Assistance</span>
                                            <span>Get in touch with support</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;








