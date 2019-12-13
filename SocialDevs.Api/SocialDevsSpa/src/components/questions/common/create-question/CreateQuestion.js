import React, { Component } from 'react';
import * as Icon from 'react-feather';

class CreateQuestion extends Component {
    render() {
        return (
            <div id="compose-card" className="card is-new-content">
                <div className="tabs-wrapper">
                    <div className="tabs is-boxed is-fullwidth">
                        <ul>
                            <li className="is-active">
                                <a>
                                    <span className="icon is-small">
                                        <Icon.Edit3 />
                                    </span>
                                    <span>Publish</span>
                                </a>
                            </li>
                            <li>
                                <a className="modal-trigger" data-modal="albums-help-modal">
                                    <span className="icon is-small">
                                        <Icon.Image />
                                    </span>
                                    <span>Albums</span>
                                </a>
                            </li>
                            <li>
                                <a className="modal-trigger" data-modal="videos-help-modal">
                                    <span className="icon is-small">
                                        <Icon.Video />
                                    </span>
                                    <span>Video</span>
                                </a>
                            </li>
                            <li className="close-wrap">
                                <span className="close-publish">
                                    <Icon.X />
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="compose">
                            <div className="compose-form">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" alt="" />
                                <div className="control">
                                    <textarea id="publish" className="textarea" rows={3} placeholder="Write something about you..." defaultValue={""} />
                                </div>
                            </div>
                            <div id="options-summary" className="options-summary" />
                            <div id="tag-suboption" className="is-autocomplete is-suboption is-hidden">
                                <div id="tag-list" className="tag-list" />
                                <div className="control">
                                    <input id="users-autocpl" type="text" className="input" placeholder="Who are you with?" />
                                    <div className="icon">
                                        <Icon.Search />
                                    </div>
                                    <div className="close-icon is-main">
                                        <Icon.X />
                                    </div>
                                </div>
                            </div>
                            <div id="activities-suboption" className="is-autocomplete is-suboption is-hidden">
                                <div id="activities-autocpl-wrapper" className="control has-margin">
                                    <input id="activities-autocpl" type="text" className="input" placeholder="What are you doing right now?" />
                                    <div className="icon">
                                        <Icon.Search />
                                    </div>
                                    <div className="close-icon is-main">
                                        <Icon.X />
                                    </div>
                                </div>
                                <div id="mood-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                                    <div className="control has-margin">
                                        <input id="mood-autocpl" type="text" className="input is-subactivity" placeholder="How do you feel?" />
                                        <div className="input-block">
                                            Feels
                                        </div>
                                        <div className="close-icon is-subactivity">
                                            <Icon.X />
                                        </div>
                                    </div>
                                </div>
                                <div id="drinking-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                                    <div className="control has-margin">
                                        <input id="drinking-autocpl" type="text" className="input is-subactivity" placeholder="What are you drinking?" />
                                        <div className="input-block">
                                            Drinks
                                         </div>
                                        <div className="close-icon is-subactivity">
                                            <Icon.X />
                                        </div>
                                    </div>
                                </div>
                                <div id="eating-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                                    <div className="control has-margin">
                                        <input id="eating-autocpl" type="text" className="input is-subactivity" placeholder="What are you eating?" />
                                        <div className="input-block">
                                            Eats
                                        </div>
                                        <div className="close-icon is-subactivity">
                                            <Icon.X />
                                        </div>
                                    </div>
                                </div>
                                <div id="reading-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                                    <div className="control has-margin">
                                        <input id="reading-autocpl" type="text" className="input is-subactivity" placeholder="What are you reading?" />
                                        <div className="input-block">
                                            Reads
                                         </div>
                                        <div className="close-icon is-subactivity">
                                            <Icon.X />
                                        </div>
                                    </div>
                                </div>
                                <div id="watching-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                                    <div className="control has-margin">
                                        <input id="watching-autocpl" type="text" className="input is-subactivity" placeholder="What are you watching?" />
                                        <div className="input-block">
                                            Watches
                                         </div>
                                        <div className="close-icon is-subactivity">
                                            <Icon.X />
                                        </div>
                                    </div>
                                </div>
                                <div id="travel-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                                    <div className="control has-margin">
                                        <input id="travel-autocpl" type="text" className="input is-subactivity" placeholder="Where are you going?" />
                                        <div className="input-block">
                                            Travels
                                        </div>
                                        <div className="close-icon is-subactivity">
                                            <Icon.X />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="location-suboption" className="is-autocomplete is-suboption is-hidden">
                                <div id="location-autocpl-wrapper" className="control is-location-wrapper has-margin">
                                    <input id="location-autocpl" type="text" className="input" placeholder="Where are you now?" />
                                    <div className="icon">
                                        <Icon.MapPin />
                                    </div>
                                    <div className="close-icon is-main">
                                        <Icon.X />
                                    </div>
                                </div>
                            </div>
                            <div id="link-suboption" className="is-autocomplete is-suboption is-hidden">
                                <div id="link-autocpl-wrapper" className="control is-location-wrapper has-margin">
                                    <input id="link-autocpl" type="text" className="input" placeholder="Enter the link URL" />
                                    <div className="icon">
                                        <Icon.Link2 />
                                    </div>
                                    <div className="close-icon is-main">
                                        <Icon.X />
                                    </div>
                                </div>
                            </div>
                            <div id="gif-suboption" className="is-autocomplete is-suboption is-hidden">
                                <div id="gif-autocpl-wrapper" className="control is-gif-wrapper has-margin">
                                    <input id="gif-autocpl" type="text" className="input" placeholder="Search a GIF to add" />
                                    <div className="icon">
                                        <Icon.Search />
                                    </div>
                                    <div className="close-icon is-main">
                                        <Icon.X />
                                    </div>
                                    <div className="gif-dropdown">
                                        <div className="inner">
                                            <div className="gif-block">
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/1.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/2.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/3.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/4.gif" alt="" />
                                            </div>
                                            <div className="gif-block">
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/5.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/6.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/7.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/8.gif" alt="" />
                                            </div>
                                            <div className="gif-block">
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/9.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/10.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/11.gif" alt="" />
                                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/demo/gif/12.gif" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="extended-options" className="compose-options is-hidden">
                            <div className="columns is-multiline is-full">
                                <div className="column is-6 is-narrower">
                                    <div className="compose-option is-centered">
                                        <Icon.Camera />
                                        <span>Photo/Video</span>
                                        <input type="file" />
                                    </div>
                                </div>
                                <div className="column is-6 is-narrower">
                                    <div id="extended-show-activities" className="compose-option is-centered">
                                        <img src="../../assets/images/icons/emoji/emoji-1.svg" alt="" />
                                        <span>Mood/Activity</span>
                                    </div>
                                </div>
                                <div className="column is-6 is-narrower">
                                    <div id="open-tag-suboption" className="compose-option is-centered">
                                        <Icon.Tag />
                                        <span>Tag friends</span>
                                    </div>
                                </div>
                                <div className="column is-6 is-narrower">
                                    <div id="open-location-suboption" className="compose-option is-centered">
                                        <i data-feather="map-pin" />
                                        <span>Post location</span>
                                    </div>
                                </div>
                                <div className="column is-6 is-narrower">
                                    <div id="open-link-suboption" className="compose-option is-centered">
                                        <Icon.Link2 />
                                        <span>Share link</span>
                                    </div>
                                </div>
                                <div className="column is-6 is-narrower">
                                    <div id="open-gif-suboption" className="compose-option is-centered">
                                        <Icon.Image />
                                        <span>Post GIF</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="basic-options" className="compose-options">
                            <div className="compose-option">
                                <Icon.Camera />
                                <span>Media</span>
                                <input type="file" />
                            </div>

                            <div id="show-activities" className="compose-option">
                                <img src="../../assets/images/icons/emoji/emoji-1.svg" alt="" />
                                <span>Activity</span>
                            </div>
                            <div id="open-extended-options" className="compose-option">
                                <Icon.MoreHorizontal />
                            </div>
                        </div>
                        <div className="hidden-options">
                            <div className="target-channels">
                                <div className="channel">
                                    <div className="round-checkbox is-small">
                                        <div>
                                            <input type="checkbox" id="checkbox-1" defaultChecked />
                                            <label htmlFor="checkbox-1" />
                                        </div>
                                    </div>
                                    <div className="channel-icon">
                                        <Icon.Bell />
                                    </div>
                                    <div className="channel-name">Activity Feed</div>
                                    <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
                                        <div>
                                            <button className="button" aria-haspopup="true">
                                                <Icon.Smile className="main-icon" />
                                                <Icon.ChevronDown className="caret" />
                                                <span>Friends</span>
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Globe />
                                                        <div className="media-content">
                                                            <h3>Public</h3>
                                                            <small>Anyone can see this publication.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Users />
                                                        <div className="media-content">
                                                            <h3>Friends</h3>
                                                            <small>only friends can see this publication.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.User />
                                                        <div className="media-content">
                                                            <h3>Specific friends</h3>
                                                            <small>Don't show it to some friends.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr className="dropdown-divider" />
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Lock />
                                                        <div className="media-content">
                                                            <h3>Only me</h3>
                                                            <small>Only me can see this publication.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="channel">
                                    <div className="round-checkbox is-small">
                                        <div>
                                            <input type="checkbox" id="checkbox-2" />
                                            <label htmlFor="checkbox-2" />
                                        </div>
                                    </div>
                                    <div className="story-icon">
                                        <div className="plus-icon">
                                            <Icon.Plus />
                                        </div>
                                    </div>
                                    <div className="channel-name">My Story</div>
                                    <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
                                        <div>
                                            <button className="button" aria-haspopup="true">
                                                <Icon.Smile className="main-icon" />
                                                <span>Friends</span>
                                                <Icon.ChevronsDown className="caret" />
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Globe />
                                                        <div className="media-content">
                                                            <h3>Public</h3>
                                                            <small>Anyone can see this publication.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Users />
                                                        <div className="media-content">
                                                            <h3>Friends</h3>
                                                            <small>only friends can see this publication.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item">
                                                    <div className="media">
                                                        <Icon.Users />
                                                        <div className="media-content">
                                                            <h3>Friends and contacts</h3>
                                                            <small>Your friends and contacts.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="friends-list is-hidden">
                                <div className="list-header">
                                    <span>Send in a message</span>
                                    <div className="actions">
                                        <a id="open-compose-search" href="javascript:void(0);" className="search-trigger">
                                            <Icon.Search />
                                        </a>
                                        <div id="compose-search" className="control is-hidden">
                                            <input type="text" className="input" placeholder="Search People" />
                                            <span>
                                                <Icon.Search />
                                            </span>
                                        </div>
                                        <a href="javascript:void(0);" className="is-inverted modal-trigger" data-modal="create-group-modal">Create group</a>
                                    </div>
                                </div>

                                <div className="list-body">
                                    <div className="friend-block">
                                        <div className="round-checkbox is-small">
                                            <div>
                                                <input type="checkbox" id="checkbox-3" />
                                                <label htmlFor="checkbox-3" />
                                            </div>
                                        </div>
                                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" alt="" />
                                        <div className="friend-name">Dan Walker</div>
                                    </div>

                                    <div className="friend-block">
                                        <div className="round-checkbox is-small">
                                            <div>
                                                <input type="checkbox" id="checkbox-4" />
                                                <label htmlFor="checkbox-4" />
                                            </div>
                                        </div>
                                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" alt="" />
                                        <div className="friend-name">Daniel Wellington</div>
                                    </div>

                                    <div className="friend-block">
                                        <div className="round-checkbox is-small">
                                            <div>
                                                <input type="checkbox" id="checkbox-5" />
                                                <label htmlFor="checkbox-5" />
                                            </div>
                                        </div>
                                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/stella.jpg" alt="" />
                                        <div className="friend-name">Stella Bergmann</div>
                                    </div>

                                    <div className="friend-block">
                                        <div className="round-checkbox is-small">
                                            <div>
                                                <input type="checkbox" id="checkbox-6" />
                                                <label htmlFor="checkbox-6" />
                                            </div>
                                        </div>
                                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" alt="" />
                                        <div className="friend-name">David Kim</div>
                                    </div>

                                    <div className="friend-block">
                                        <div className="round-checkbox is-small">
                                            <div>
                                                <input type="checkbox" id="checkbox-7" />
                                                <label htmlFor="checkbox-7" />
                                            </div>
                                        </div>
                                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/nelly.png" alt="" />
                                        <div className="friend-name">Nelly Schwartz</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-wrap">
                            <button id="show-compose-friends" type="button" className="button is-more" aria-haspopup="true">
                                <Icon.MoreVertical />
                                <span>View More</span>
                            </button>
                            <button id="publish-button" type="button" className="button is-solid accent-button is-fullwidth is-disabled">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CreateQuestion;
