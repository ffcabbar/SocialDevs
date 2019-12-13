import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
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
        )
    }
}

export default Search;