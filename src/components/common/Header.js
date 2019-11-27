import React from 'react';


function Header() {
    return (

        <div id="main-navbar" className="navbar is-inline-flex is-transparent no-shadow is-hidden-mobile">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item">
                        <img src="assets/images/logo/friendkit.svg" width={112} height={28} alt="" />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        {/* Navbar Search */}
                        <div className="navbar-item is-icon drop-trigger">
                            <a className="icon-link is-primary is-friends" href="javascript:void(0);">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                <span className="indicator" />
                            </a>
                            <div className="nav-drop">
                                <div className="inner">
                                    <div className="nav-drop-header">
                                        <span>Friend requests</span>
                                        <a href="#">Find Friends</a>
                                    </div>
                                    <div className="nav-drop-body is-friend-requests">
                                        {/* Friend request */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/bobby.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Bobby Brown</a>
                                                <span>Najeel verwick is a common friend</span>
                                            </div>
                                            <div className="media-right">
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={20} y1={8} x2={20} y2={14} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                                </button>
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        {/* Friend request */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/dan.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Dan Walker</a>
                                                <span>You have 4 common friends</span>
                                            </div>
                                            <div className="media-right">
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={20} y1={8} x2={20} y2={14} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                                </button>
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        {/* Friend request */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/nelly.png" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span>You are now friends with <a href="#">Nelly Schwartz</a>. Check her <a href="#">profile</a>.</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2="7.01" y2={7} /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Friend request */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/milly.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Milly Augustine</a>
                                                <span>You have 8 common friends</span>
                                            </div>
                                            <div className="media-right">
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={20} y1={8} x2={20} y2={14} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                                </button>
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        {/* Friend request */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/elise.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span>You are now friends with <a href="#">Elise Walker</a>. Check her <a href="#">profile</a>.</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2="7.01" y2={7} /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Friend request */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/edward.jpeg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span>You are now friends with <a href="#">Edward Mayers</a>. Check his <a href="#">profile</a>.</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2="7.01" y2={7} /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-drop-footer">
                                        <a href="#">Clear All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-item is-icon drop-trigger">
                            <a className="icon-link" href="javascript:void(0);">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                <span className="indicator" />
                            </a>
                            <div className="nav-drop">
                                <div className="inner">
                                    <div className="nav-drop-header">
                                        <span>Notifications</span>
                                        <a href="#">View All</a>
                                    </div>
                                    <div className="nav-drop-body is-notifications">
                                        {/* Notification */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/david.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">David Kim</a> commented on <a href="#">your post</a>.</span>
                                                <span className="time">30 minutes ago</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Notification */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/daniel.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">Daniel Wellington</a> liked your <a href="#">profile.</a></span>
                                                <span className="time">43 minutes ago</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Notification */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/stella.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">Stella Bergmann</a> shared a <a href="#">New video</a> on your wall.</span>
                                                <span className="time">Yesterday</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Notification */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/elise.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">Elise Walker</a> shared an <a href="#">Image</a> with you an 2 other people.</span>
                                                <span className="time">2 days ago</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-drop-footer">
                                        <a href="#">Clear All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-item is-icon drop-trigger">
                            <a className="icon-link is-active" href="javascript:void(0);">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                <span className="indicator" />
                            </a>
                            <div className="nav-drop">
                                <div className="inner">
                                    <div className="nav-drop-header">
                                        <span>Messages</span>
                                        <a href="messages-inbox.html">Inbox</a>
                                    </div>
                                    <div className="nav-drop-body is-friend-requests">
                                        {/* Message */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/150x150" data-demo-src="assets/images/avatars/nelly.png" data-user-popover={9} alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Nelly Schwartz</a>
                                                <span>I think we should meet near the Starbucks so we can get...</span>
                                                <span className="time">Yesterday</span>
                                            </div>
                                            <div className="media-right is-centered">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Message */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/150x150" data-demo-src="assets/images/avatars/edward.jpeg" data-user-popover={5} alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Edward Mayers</a>
                                                <span>That was a real pleasure seeing you last time we really should...</span>
                                                <span className="time">last week</span>
                                            </div>
                                            <div className="media-right is-centered">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Message */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img src="https://via.placeholder.com/150x150" data-demo-src="assets/images/avatars/dan.jpg" data-user-popover={1} alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Dan Walker</a>
                                                <span>Hey there, would it be possible to borrow your bicycle, i really need...</span>
                                                <span className="time">Jun 03 2018</span>
                                            </div>
                                            <div className="media-right is-centered">
                                                <div className="added-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-drop-footer">
                                        <a href="#">Clear All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-item is-icon open-chat">
                            <a className="icon-link is-primary" href="javascript:void(0);">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                <span className="indicator" />
                            </a>
                        </div>
                        <div id="explorer-trigger" className="navbar-item is-icon">
                            <a className="icon-link is-primary">
                                <i className="mdi mdi-apps" />
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div id="global-search" className="control">
                                <input id="tipue_drop_input" className="input is-rounded" type="text" placeholder="Search" required />
                                <span id="clear-search" className="reset-search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                </span>
                                <span className="search-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                                </span>
                                <span className="drop-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                                </span>
                                {/* Search Dropdown */}
                                <div className="search-options">
                                    <ul className="options-list">
                                        {/* Search Option */}
                                        <li className="is-selected">
                                            {/*label class="material-radio">
                                            <input type="radio" name="search-type" checked>
                                            <span class="radio-label"></span>
                                        </label*/}
                                            <span className="option-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                                            </span>
                                            <span className="option-description">
                                                <span>Search All</span>
                                                <span>Search everything </span>
                                            </span>
                                        </li>
                                        {/* Search Option */}
                                        <li>
                                            <span className="option-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                            </span>
                                            <span className="option-description">
                                                <span>Search People</span>
                                                <span>Search accross people and friends</span>
                                            </span>
                                        </li>
                                        {/* Search Option */}
                                        <li>
                                            <span className="option-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                                            </span>
                                            <span className="option-description">
                                                <span>Search Pages</span>
                                                <span>Search all Posts and news feeds</span>
                                            </span>
                                        </li>
                                    </ul>
                                    {/* Close */}
                                    <div className="is-close">
                                        <button id="close-search-options" type="button" className="button is-solid grey-button">Close</button>
                                    </div>
                                </div>
                                <div id="tipue_drop_content" />
                            </div>
                        </div>
                        <div id="account-dropdown" className="navbar-item is-account drop-trigger has-caret">
                            <div className="user-image">
                                <img src="https://via.placeholder.com/400x400" data-demo-src="assets/images/avatars/jenna.png" alt="" />
                                <span className="indicator" />
                            </div>
                            <div className="nav-drop is-account-dropdown">
                                <div className="inner">
                                    <div className="nav-drop-header">
                                        <span className="username">Jenna Davis</span>
                                        <a href="profile-main.html">Profile</a>
                                    </div>
                                    <div className="nav-drop-body account-items">
                                        <a id="profile-link" href="/profile-main.html" className="account-item">
                                            <div className="media">
                                                <div className="media-left">
                                                    <div className="image">
                                                        <img src="https://via.placeholder.com/400x400" data-demo-src="assets/images/avatars/jenna.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="media-content">
                                                    <h3>Jenna Davis</h3>
                                                    <small>Main account</small>
                                                </div>
                                                <div className="media-right">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="account-divider" />
                                        <a href="/pages-main.html" className="account-item">
                                            <div className="media">
                                                <div className="media-left">
                                                    <div className="image">
                                                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/hanzo.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="media-content">
                                                    <h3>Css Ninja</h3>
                                                    <small>Company page</small>
                                                </div>
                                                <div className="media-right is-hidden">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/pages-main.html" className="account-item">
                                            <div className="media">
                                                <div className="media-left">
                                                    <div className="image">
                                                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/icons/logos/fastpizza.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="media-content">
                                                    <h3>Fast Pizza</h3>
                                                    <small>Company page</small>
                                                </div>
                                                <div className="media-right is-hidden">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/pages-main.html" className="account-item">
                                            <div className="media">
                                                <div className="media-left">
                                                    <div className="image">
                                                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/icons/logos/slicer.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="media-content">
                                                    <h3>Slicer</h3>
                                                    <small>Company page</small>
                                                </div>
                                                <div className="media-right is-hidden">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="account-divider" />
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
                        <div className="navbar-item is-plus-menu">
                            <a id="plus-menu" className="button action-button is-solid primary-button raised">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
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








