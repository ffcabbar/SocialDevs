import React from 'react'
import Stories from './stories/Stories'
import SuggestFriends from './suggest-friends/SuggestFriends'
import Weather from './weather/Weather'
import Posts from './posts/Posts'
import CreatePost from './create-post/CreatePost'

function Timeline() {
  return (
    <div className="view-wrapper">
      {/* Container */}
      <div id="main-feed" className="container">
        {/* Content placeholders at page load */}
        {/* this holds the animated content placeholders that show up before content */}

        {/* Feed page main wrapper */}
        <div id="activity-feed" className="view-wrap is-open">
          <div className="columns">
            {/* Left side column */}
            <div className="column is-3 is-hidden-mobile">
              <Weather />
            </div>
            {/* /Left side column */}
            {/* Middle column */}
            <div className="column is-6">
              <CreatePost />
              <Posts />
              {/* Load more posts */}
              <div className=" load-more-wrap narrow-top has-text-centered">
                <a href="#" className="load-more-button">Load More</a>
              </div>
              {/* /Load more posts */}
            </div>
            {/* /Middle column */}
            {/* Right side column */}
            <div className="column is-3">
              <Stories />
              <SuggestFriends />
            </div>
            {/* /Right side column */}
          </div>
        </div>
        {/* /Feed page main wrapper */}
      </div>
      {/* /Container */}

      <div id="create-group-modal" className="modal create-group-modal is-light-bg">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Create group</h3>
              {/* Close X button */}
              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            {/* Modal subheading */}
            <div className="subheading">
              {/* Group avatar */}
              <div className="group-avatar">
                <input id="group-avatar-upload" type="file" />
                <div className="add-photo">
                  <i data-feather="plus" />
                </div>
              </div>
              {/* Group name */}
              <div className="control">
                <input type="text" className="input" placeholder="Give the group a name" />
              </div>
            </div>
            <div className="card-body">
              <div className="inner">
                <div className="left-section">
                  <div className="search-subheader">
                    <div className="control">
                      <input type="text" className="input" placeholder="Search for friends to add" />
                      <span className="icon">
                        <i data-feather="search" />
                      </span>
                    </div>
                  </div>
                  <div id="new-group-list" className="user-list has-slimscroll">
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-1">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" alt="" />
                      <div className="friend-name">Dan Walker</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-1" />
                          <label htmlFor="checkbox-group-1" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-2">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" alt="" />
                      <div className="friend-name">Daniel Wellington</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-2" />
                          <label htmlFor="checkbox-group-2" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-3">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/stella.jpg" alt="" />
                      <div className="friend-name">Stella Bergmann</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-3" />
                          <label htmlFor="checkbox-group-3" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-4">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" alt="" />
                      <div className="friend-name">David Kim</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-4" />
                          <label htmlFor="checkbox-group-4" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-5">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/nelly.png" alt="" />
                      <div className="friend-name">Nelly Schwartz</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-5" />
                          <label htmlFor="checkbox-group-5" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-6">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" alt="" />
                      <div className="friend-name">Elise Walker</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-6" />
                          <label htmlFor="checkbox-group-6" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-7">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/bobby.jpg" alt="" />
                      <div className="friend-name">Bobby Brown</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-7" />
                          <label htmlFor="checkbox-group-7" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-8">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/lana.jpeg" alt="" />
                      <div className="friend-name">Lana Henrikssen</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-8" />
                          <label htmlFor="checkbox-group-8" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-9">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/gaelle.jpeg" alt="" />
                      <div className="friend-name">Gaelle Morris</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-9" />
                          <label htmlFor="checkbox-group-9" />
                        </div>
                      </div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block" data-ref="ref-10">
                      <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/mike.jpg" alt="" />
                      <div className="friend-name">Mike Lasalle</div>
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-group-10" />
                          <label htmlFor="checkbox-group-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-section has-slimscroll">
                  <div className="selected-count">
                    <span>Selected</span>
                    <span id="selected-friends-count">0</span>
                  </div>
                  <div id="selected-list" className="selected-list" />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="button" className="button is-solid grey-button close-modal">Cancel</button>
              <button type="button" className="button is-solid accent-button close-modal">Create a Group</button>
            </div>
          </div>
        </div>
      </div>
      {/* Albums onboarding modal */}
      {/* /includes/pages/feed/modals/albums-help-modal.html */}
      <div id="albums-help-modal" className="modal albums-help-modal is-xsmall has-light-bg">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Add Photos</h3>
              {/* Close X button */}
              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="content-block is-active">
                <img src="../../assets/images/illustrations/cards/albums.svg" alt="" />
                <div className="help-text">
                  <h3>Manage your photos</h3>
                  <p>Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry.</p>
                </div>
              </div>
              <div className="content-block">
                <img src="../../assets/images/illustrations/cards/upload.svg" alt="" />
                <div className="help-text">
                  <h3>Upload your photos</h3>
                  <p>Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry.</p>
                </div>
              </div>
              <div className="slide-dots">
                <div className="dot is-active" />
                <div className="dot" />
              </div>
              <div className="action">
                <button type="button" className="button is-solid accent-button next-modal raised" data-modal="albums-modal">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Album upload modal */}
      {/* /includes/pages/feed/modals/albums-modal.html */}
      <div id="albums-modal" className="modal albums-modal is-xxl has-light-bg">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>New album</h3>
              <div className="button is-solid accent-button fileinput-button">
                <i className="mdi mdi-plus" />
                Add pictures/videos
          </div>
              {/* Close X button */}
              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="left-section">
                <div className="album-form">
                  <div className="control">
                    <input type="text" className="input is-sm no-radius is-fade" placeholder="Album name" />
                    <div className="icon">
                      <i data-feather="camera" />
                    </div>
                  </div>
                  <div className="control">
                    <textarea className="textarea is-fade no-radius is-sm" rows={3} placeholder="describe your album ..." defaultValue={""} />
                  </div>
                  <div className="control">
                    <input type="text" className="input is-sm no-radius is-fade" placeholder="Place" />
                    <div className="icon">
                      <i data-feather="map-pin" />
                    </div>
                  </div>
                </div>
                <div id="album-date" className="album-date">
                  <div className="head">
                    <h4>Change the date</h4>
                    <button type="button" className="button is-solid dark-grey-button icon-button">
                      <i data-feather="plus" />
                    </button>
                  </div>
                  <p>Set a date for your album. You can always change it later.</p>
                  <div className="control is-hidden">
                    <input id="album-datepicker" type="text" className="input is-sm is-fade" placeholder="Select a date" />
                    <div className="icon">
                      <i data-feather="calendar" />
                    </div>
                  </div>
                </div>
                <div id="tagged-in-album" className="tagged-in-album">
                  <div className="head">
                    <h4>Tag friends in this album</h4>
                    <button type="button" className="button is-solid dark-grey-button icon-button">
                      <i data-feather="plus" />
                    </button>
                  </div>
                  <p>You can tag friends in this album. Tagged friends can only see the photos they are tagged in.</p>
                  <div className="field is-autocomplete is-hidden">
                    <div className="control">
                      <input id="create-album-friends-autocpl" type="text" className="input is-sm is-fade" placeholder="Search for friends" />
                      <div className="icon">
                        <i data-feather="search" />
                      </div>
                    </div>
                  </div>
                  <div id="album-tag-list" className="album-tag-list" />
                </div>
                <div className="shared-album">
                  <div className="head">
                    <h4>Allow friends to add photos</h4>
                    <div className="basic-checkbox">
                      <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" defaultValue="value1" />
                      <label htmlFor="styled-checkbox-1" />
                    </div>
                  </div>
                  <p>If you enable this feature, your tagged friends will be able to share content inside this album.</p>
                </div>
              </div>
              <div className="right-section has-slimscroll">
                <div className="modal-uploader">
                  <div id="actions" className="columns is-multiline no-mb">
                    <div className="column is-12">
                      <span className="button has-icon is-solid grey-button fileinput-button">
                        <i data-feather="plus" />
                      </span>
                      <button type="submit" className="button start is-hidden">
                        <span>Upload</span>
                      </button>
                      <button type="reset" className="button is-solid grey-button cancel">
                        <span>Clear all</span>
                      </button>
                      <span className="file-count">
                        <span id="modal-uploader-file-count">0</span> file(s) selected
                  </span>
                    </div>
                    <div className="column is-12 is-hidden">
                      {/* The global file processing state */}
                      <div className="fileupload-process">
                        <div id="total-progress" className="progress progress-striped active" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                          <div className="progress-bar progress-bar-success" style={{ width: '0%' }} data-dz-uploadprogress />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns is-multiline" id="previews">
                    <div id="template" className="column is-4 is-template">
                      <div className="preview-box">
                        {/* This is used as the file preview template */}
                        <div className="remove-button" data-dz-remove>
                          <i className="mdi mdi-close" />
                        </div>
                        <div>
                          <span className="preview"><img src="https://via.placeholder.com/120x120" data-dz-thumbnail alt="" /></span>
                        </div>
                        <div className="preview-body">
                          <div className="item-meta">
                            <div>
                              <p className="name" data-dz-name />
                              <strong className="error text-danger" data-dz-errormessage />
                            </div>
                            <small className="size" data-dz-size />
                          </div>
                          <div className="upload-item-progress">
                            <div className="progress active" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                              <div className="progress-bar progress-bar-success" data-dz-uploadprogress />
                            </div>
                          </div>
                          <div className="upload-item-description">
                            <div className="control">
                              <textarea className="textarea is-small is-fade no-radius" rows={4} placeholder="Describe this photo ..." defaultValue={""} />
                            </div>
                          </div>
                          <div className="upload-item-actions is-hidden">
                            <button className="button start is-hidden">
                              <span>Start</span>
                            </button>
                            <button data-dz-remove className="button cancel is-hidden">
                              <span>Cancel</span>
                            </button>
                            <button data-dz-remove className="button delete is-hidden">
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              {/* Dropdown menu */}
              <div className="dropdown is-up is-spaced is-modern is-neutral is-right dropdown-trigger">
                <div>
                  <button className="button" aria-haspopup="true">
                    <i className="main-icon" data-feather="smile" />
                    <span>Friends</span>
                    <i className="caret" data-feather="chevron-down" />
                  </button>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="globe" />
                        <div className="media-content">
                          <h3>Public</h3>
                          <small>Anyone can see this publication.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="users" />
                        <div className="media-content">
                          <h3>Friends</h3>
                          <small>only friends can see this publication.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="user" />
                        <div className="media-content">
                          <h3>Specific friends</h3>
                          <small>Don't show it to some friends.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="lock" />
                        <div className="media-content">
                          <h3>Only me</h3>
                          <small>Only me can see this publication.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <button type="button" className="button is-solid accent-button close-modal">Create album</button>
            </div>
          </div>
        </div>
      </div>
      {/* Live video onboarding modal */}
      {/* /includes/pages/feed/modals/videos-help-modal.html */}
      <div id="videos-help-modal" className="modal videos-help-modal is-xsmall has-light-bg">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Add Photos</h3>
              {/* Close X button */}
              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="content-block is-active">
                <img src="../../assets/images/illustrations/cards/videotrip.svg" alt="" />
                <div className="help-text">
                  <h3>Share live videos</h3>
                  <p>Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry.</p>
                </div>
              </div>
              <div className="content-block">
                <img src="../../assets/images/illustrations/cards/videocall.svg" alt="" />
                <div className="help-text">
                  <h3>To build your audience</h3>
                  <p>Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry.</p>
                </div>
              </div>
              <div className="slide-dots">
                <div className="dot is-active" />
                <div className="dot" />
              </div>
              <div className="action">
                <button type="button" className="button is-solid accent-button next-modal raised" data-modal="videos-modal">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Live video modal */}
      {/* /includes/pages/feed/modals/videos-modal.html */}
      <div id="videos-modal" className="modal videos-modal is-xxl has-light-bg">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Go live</h3>
              <div id="stop-stream" className="button is-solid accent-button is-hidden">
                <i className="mdi mdi-video-off" />
                Stop stream
          </div>
              <div id="start-stream" className="button is-solid accent-button">
                <i className="mdi mdi-video" />
                Start stream
          </div>
              {/* Close X button */}
              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="inner">
                <div className="left-section">
                  <div className="video-wrapper">
                    <div className="video-wrap">
                      <div id="live-indicator" className="live is-vhidden">Live</div>
                      <video id="video" width={400} height={240} controls autoPlay />
                    </div>
                  </div>
                </div>
                <div className="right-section">
                  <div className="header">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" alt="" />
                    <div className="user-meta">
                      <span>Jenna Davis <small>is live</small></span>
                      <span><small>right now</small></span>
                    </div>
                    <button type="button" className="button">Follow</button>
                    <div className="dropdown is-spaced is-right dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <div className="dropdown-item is-title">
                            Who can see this ?
                      </div>
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="globe" />
                              <div className="media-content">
                                <h3>Public</h3>
                                <small>Anyone can see this publication.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="users" />
                              <div className="media-content">
                                <h3>Friends</h3>
                                <small>only friends can see this publication.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="user" />
                              <div className="media-content">
                                <h3>Specific friends</h3>
                                <small>Don't show it to some friends.</small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="lock" />
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
                  <div className="inner-content">
                    <div className="control">
                      <input type="text" className="input is-sm is-fade" placeholder="What is this live about?" />
                      <div className="icon">
                        <i data-feather="activity" />
                      </div>
                    </div>
                    <div className="live-stats">
                      <div className="social-count">
                        <div className="likes-count">
                          <i data-feather="heart" />
                          <span>0</span>
                        </div>
                        <div className="shares-count">
                          <i data-feather="link-2" />
                          <span>0</span>
                        </div>
                        <div className="comments-count">
                          <i data-feather="message-circle" />
                          <span>0</span>
                        </div>
                      </div>
                      <div className="social-count ml-auto">
                        <div className="views-count">
                          <i data-feather="eye" />
                          <span>0</span>
                          <span className="views"><small>views</small></span>
                        </div>
                      </div>
                    </div>
                    <div className="actions">
                      <div className="action">
                        <i data-feather="thumbs-up" />
                        <span>Like</span>
                      </div>
                      <div className="action">
                        <i data-feather="message-circle" />
                        <span>Comment</span>
                      </div>
                      <div className="action">
                        <i data-feather="link-2" />
                        <span>Share</span>
                      </div>
                      <div className="dropdown is-spaced is-right dropdown-trigger">
                        <div>
                          <div className="avatar-button">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" alt="" />
                            <i data-feather="triangle" />
                          </div>
                        </div>
                        <div className="dropdown-menu has-margin" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item is-selected">
                              <div className="media">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" alt="" />
                                <div className="media-content">
                                  <h3>Jenna Davis</h3>
                                  <small>Interact as Jenna Davis.</small>
                                </div>
                                <div className="checkmark">
                                  <i data-feather="check" />
                                </div>
                              </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <img src="https://via.placeholder.com/478x344" data-demo-src="../../assets/images/avatars/hanzo.svg" alt="" />
                                <div className="media-content">
                                  <h3>Css Ninja</h3>
                                  <small>Interact as Css Ninja.</small>
                                </div>
                                <div className="checkmark">
                                  <i data-feather="check" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabs-wrapper">
                    <div className="tabs is-fullwidth">
                      <ul>
                        <li className="is-active">
                          <a>Comments</a>
                        </li>
                        <li>
                          <a>Upcoming</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content has-slimscroll">
                      <div className="media is-comment">
                        <figure className="media-left">
                          <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" alt="" data-user-popover={1} />
                          </p>
                        </figure>
                        <div className="media-content">
                          <div className="username">Dan Walker</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                        eros.</p>
                          <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>3h</span>
                          </div>
                        </div>
                      </div>
                      <div className="media is-comment">
                        <figure className="media-left">
                          <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" alt="" data-user-popover={4} />
                          </p>
                        </figure>
                        <div className="media-content">
                          <div className="username">David Kim</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                          <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>4h</span>
                          </div>
                        </div>
                      </div>
                      <div className="media is-comment">
                        <figure className="media-left">
                          <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/rolf.jpg" alt="" data-user-popover={17} />
                          </p>
                        </figure>
                        <div className="media-content">
                          <div className="username">Rolf Krupp</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                        eros. Consectetur adipiscing elit. Proin ornare magna eros.</p>
                          <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>4h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-controls">
                    <div className="controls-inner">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" alt="" />
                      <div className="control">
                        <textarea className="textarea comment-textarea is-rounded" rows={1} defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Share from feed modal */}
      {/* /includes/pages/feed/modals/share-modal.html */}
      <div id="share-modal" className="modal share-modal is-xsmall has-light-bg">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <div className="dropdown is-accent share-dropdown">
                <div>
                  <div className="button">
                    <i className="mdi mdi-format-float-left" /> <span>Share in your feed</span> <i data-feather="chevron-down" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item" data-target-channel="feed">
                      <div className="media">
                        <i className="mdi mdi-format-float-left" />
                        <div className="media-content">
                          <h3>Share in your feed</h3>
                          <small>Share this publication on your feed.</small>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item" data-target-channel="friend">
                      <div className="media">
                        <i className="mdi mdi-account-heart" />
                        <div className="media-content">
                          <h3>Share in a friend's feed</h3>
                          <small>Share this publication on a friend's feed.</small>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item" data-target-channel="group">
                      <div className="media">
                        <i className="mdi mdi-account-group" />
                        <div className="media-content">
                          <h3>Share in a group</h3>
                          <small>Share this publication in a group.</small>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item" data-target-channel="page">
                      <div className="media">
                        <i className="mdi mdi-file-document-box" />
                        <div className="media-content">
                          <h3>Share in a page</h3>
                          <small>Share this publication in a page.</small>
                        </div>
                      </div>
                    </div>
                    <hr className="dropdown-divider" />
                    <div className="dropdown-item" data-target-channel="private-message">
                      <div className="media">
                        <i className="mdi mdi-email-plus" />
                        <div className="media-content">
                          <h3>Share in message</h3>
                          <small>Share this publication in a private message.</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Close X button */}
              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            <div className="share-inputs">
              <div className="field is-autocomplete">
                <div id="share-to-friend" className="control share-channel-control is-hidden">
                  <input id="share-with-friend" type="text" className="input is-sm no-radius share-input simple-users-autocpl" placeholder="Your friend's name" />
                  <div className="input-heading">
                    Friend :
              </div>
                </div>
              </div>
              <div className="field is-autocomplete">
                <div id="share-to-group" className="control share-channel-control is-hidden">
                  <input id="share-with-group" type="text" className="input is-sm no-radius share-input simple-groups-autocpl" placeholder="Your group's name" />
                  <div className="input-heading">
                    Group :
              </div>
                </div>
              </div>
              <div id="share-to-page" className="control share-channel-control no-border is-hidden">
                <div className="page-controls">
                  <div className="page-selection">
                    <div className="dropdown is-accent page-dropdown">
                      <div>
                        <div className="button page-selector">
                          <img src="https://via.placeholder.com/150x150" data-demo-src="../../assets/images/avatars/hanzo.svg" alt="" /> <span>Css Ninja</span> <i data-feather="chevron-down" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <div className="dropdown-item">
                            <div className="media">
                              <img src="https://via.placeholder.com/150x150" data-demo-src="../../assets/images/avatars/hanzo.svg" alt="" />
                              <div className="media-content">
                                <h3>Css Ninja</h3>
                                <small>Share on Css Ninja.</small>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-item">
                            <div className="media">
                              <img src="https://via.placeholder.com/150x150" data-demo-src="../../assets/images/icons/logos/nuclearjs.svg" alt="" />
                              <div className="media-content">
                                <h3>NuclearJs</h3>
                                <small>Share on NuclearJs.</small>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-item">
                            <div className="media">
                              <img src="https://via.placeholder.com/150x150" data-demo-src="../../assets/images/icons/logos/slicer.svg" alt="" />
                              <div className="media-content">
                                <h3>Slicer</h3>
                                <small>Share on Slicer.</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="alias">
                    <img src="https://via.placeholder.com/150x150" data-demo-src="../../assets/images/avatars/jenna.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="field is-autocomplete">
                <div id="share-to-private-message" className="control share-channel-control is-hidden">
                  <input id="share-with-private-message" type="text" className="input is-sm no-radius share-input simple-users-autocpl" placeholder="Message a friend" />
                  <div className="input-heading">
                    To :
              </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="control">
                <textarea className="textarea comment-textarea" rows={1} placeholder="Say something about this ..." defaultValue={""} />
              </div>
              <div className="shared-publication">
                <div className="featured-image">
                  <img id="share-modal-image" src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/1.jpg" alt="" />
                </div>
                <div className="publication-meta">
                  <div className="inner-flex">
                    <img id="share-modal-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" data-user-popover={1} alt="" />
                    <p id="share-modal-text">Yesterday with <a href="#">@Karen Miller</a> and <a href="#">@Marvin Stemperd</a> at the
                  <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally fantastic! People were really
                  excited about this one!</p>
                  </div>
                  <div className="publication-footer">
                    <div className="stats">
                      <div className="stat-block">
                        <i className="mdi mdi-earth" />
                        <small>Public</small>
                      </div>
                      <div className="stat-block">
                        <i className="mdi mdi-eye" />
                        <small>163 views</small>
                      </div>
                    </div>
                    <div className="publication-origin">
                      <small>Friendkit.io</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-share-inputs">
              <div id="action-place" className="field is-autocomplete is-dropup is-hidden">
                <div id="share-place" className="control share-bottom-channel-control">
                  <input type="text" className="input is-sm no-radius share-input simple-locations-autocpl" placeholder="Where are you?" />
                  <div className="input-heading">
                    Location :
              </div>
                </div>
              </div>
              <div id="action-tag" className="field is-autocomplete is-dropup is-hidden">
                <div id="share-tags" className="control share-bottom-channel-control">
                  <input id="share-friend-tags-autocpl" type="text" className="input is-sm no-radius share-input" placeholder="Who are you with" />
                  <div className="input-heading">
                    Friends :
              </div>
                </div>
                <div id="share-modal-tag-list" className="tag-list no-margin" />
              </div>
            </div>
            <div className="card-footer">
              <div className="action-wrap">
                <div className="footer-action" data-target-action="tag">
                  <i className="mdi mdi-account-plus" />
                </div>
                <div className="footer-action" data-target-action="place">
                  <i className="mdi mdi-map-marker" />
                </div>
                <div className="footer-action dropdown is-spaced is-neutral dropdown-trigger is-up" data-target-action="permissions">
                  <div>
                    <i className="mdi mdi-lock-clock" />
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="globe" />
                          <div className="media-content">
                            <h3>Public</h3>
                            <small>Anyone can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="users" />
                          <div className="media-content">
                            <h3>Friends</h3>
                            <small>only friends can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="user" />
                          <div className="media-content">
                            <h3>Specific friends</h3>
                            <small>Don't show it to some friends.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="lock" />
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
              <div className="button-wrap">
                <button type="button" className="button is-solid dark-grey-button close-modal">Cancel</button>
                <button type="button" className="button is-solid accent-button close-modal">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* No Stream modal */}
      {/* /includes/pages/feed/modals/no-stream-modal.html */}
      <div id="no-stream-modal" className="modal no-stream-modal is-xsmall has-light-bg">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3 />
              {/* Close X button */}
              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            <div className="card-body has-text-centered">
              <div className="image-wrap">
                <img src="../../assets/images/illustrations/characters/no-stream.svg" alt="" />
              </div>
              <h3>Streaming Disabled</h3>
              <p>Streaming is not allowed from mobile web. Please use our mobile apps for mobile streaming.</p>
              <div className="action">
                <a href="/#demos-section" className="button is-solid accent-button raised is-fullwidth">Got It</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Timeline;