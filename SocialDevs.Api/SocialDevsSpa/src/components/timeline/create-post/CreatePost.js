import React, { Component } from "react";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      comingValue: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    fetch("api/post/createpost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Text: data
      })
    })
    .then(res => res.json())
        .then((data) => {
          console.log(data.result);
          this.setState({
            comingValue: data.result
          }, console.log(this.state.comingValue))
        })
        .catch(console.log)
      }
  

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Gönderilen değer: " + this.state.value);
    this.sendData(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="compose-card" className="card is-new-content">
        <form onSubmit={this.handleSubmit}>
          {/* Top tabs */}
          <div className="tabs-wrapper">
            <div className="tabs is-boxed is-fullwidth">
              <ul>
                <li className="is-active">
                  <a>
                    <span className="icon is-small">
                      <i data-feather="edit-3" />
                    </span>
                    <span>Publish</span>
                  </a>
                </li>
                <li>
                  <a className="modal-trigger" data-modal="albums-help-modal">
                    <span className="icon is-small">
                      <i data-feather="image" />
                    </span>
                    <span>Albums</span>
                  </a>
                </li>
                <li>
                  <a className="modal-trigger" data-modal="videos-help-modal">
                    <span className="icon is-small">
                      <i data-feather="video" />
                    </span>
                    <span>Video</span>
                  </a>
                </li>
                {/* Close X button */}
                <li className="close-wrap">
                  <span className="close-publish">
                    <i data-feather="x" />
                  </span>
                </li>
              </ul>
            </div>
            {/* Tab content */}
            <div className="tab-content">
              {/* Compose form */}
              <div className="compose">
                <div className="compose-form">
                  <img
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="../../assets/images/avatars/jenna.png"
                    alt=""
                  />
                  <div className="control">
                    <textarea
                      value={this.state.value}
                      onChange={this.handleChange}
                      id="publish"
                      className="textarea"
                      rows={3}
                      placeholder="Write something about you..."
                    />
                  </div>
                </div>
                <div id="options-summary" className="options-summary" />
                <div
                  id="tag-suboption"
                  className="is-autocomplete is-suboption is-hidden"
                >
                  {/* Tag friends suboption */}
                  <div id="tag-list" className="tag-list" />
                  <div className="control">
                    <input
                      id="users-autocpl"
                      type="text"
                      className="input"
                      placeholder="Who are you with?"
                    />
                    <div className="icon">
                      <i data-feather="search" />
                    </div>
                    <div className="close-icon is-main">
                      <i data-feather="x" />
                    </div>
                  </div>
                </div>
                {/* /Tag friends suboption */}
                {/* Activities suboption */}
                <div
                  id="activities-suboption"
                  className="is-autocomplete is-suboption is-hidden"
                >
                  <div
                    id="activities-autocpl-wrapper"
                    className="control has-margin"
                  >
                    <input
                      id="activities-autocpl"
                      type="text"
                      className="input"
                      placeholder="What are you doing right now?"
                    />
                    <div className="icon">
                      <i data-feather="search" />
                    </div>
                    <div className="close-icon is-main">
                      <i data-feather="x" />
                    </div>
                  </div>
                  {/* Mood suboption */}
                  <div
                    id="mood-autocpl-wrapper"
                    className="is-autocomplete is-activity is-hidden"
                  >
                    <div className="control has-margin">
                      <input
                        id="mood-autocpl"
                        type="text"
                        className="input is-subactivity"
                        placeholder="How do you feel?"
                      />
                      <div className="input-block">Feels</div>
                      <div className="close-icon is-subactivity">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                  {/* Drinking suboption child */}
                  <div
                    id="drinking-autocpl-wrapper"
                    className="is-autocomplete is-activity is-hidden"
                  >
                    <div className="control has-margin">
                      <input
                        id="drinking-autocpl"
                        type="text"
                        className="input is-subactivity"
                        placeholder="What are you drinking?"
                      />
                      <div className="input-block">Drinks</div>
                      <div className="close-icon is-subactivity">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                  {/* Eating suboption child */}
                  <div
                    id="eating-autocpl-wrapper"
                    className="is-autocomplete is-activity is-hidden"
                  >
                    <div className="control has-margin">
                      <input
                        id="eating-autocpl"
                        type="text"
                        className="input is-subactivity"
                        placeholder="What are you eating?"
                      />
                      <div className="input-block">Eats</div>
                      <div className="close-icon is-subactivity">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                  {/* Reading suboption child */}
                  <div
                    id="reading-autocpl-wrapper"
                    className="is-autocomplete is-activity is-hidden"
                  >
                    <div className="control has-margin">
                      <input
                        id="reading-autocpl"
                        type="text"
                        className="input is-subactivity"
                        placeholder="What are you reading?"
                      />
                      <div className="input-block">Reads</div>
                      <div className="close-icon is-subactivity">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                  {/* Watching suboption child */}
                  <div
                    id="watching-autocpl-wrapper"
                    className="is-autocomplete is-activity is-hidden"
                  >
                    <div className="control has-margin">
                      <input
                        id="watching-autocpl"
                        type="text"
                        className="input is-subactivity"
                        placeholder="What are you watching?"
                      />
                      <div className="input-block">Watches</div>
                      <div className="close-icon is-subactivity">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                  {/* Travel suboption child */}
                  <div
                    id="travel-autocpl-wrapper"
                    className="is-autocomplete is-activity is-hidden"
                  >
                    <div className="control has-margin">
                      <input
                        id="travel-autocpl"
                        type="text"
                        className="input is-subactivity"
                        placeholder="Where are you going?"
                      />
                      <div className="input-block">Travels</div>
                      <div className="close-icon is-subactivity">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Activities suboption */}
                {/* Location suboption */}
                <div
                  id="location-suboption"
                  className="is-autocomplete is-suboption is-hidden"
                >
                  <div
                    id="location-autocpl-wrapper"
                    className="control is-location-wrapper has-margin"
                  >
                    <input
                      id="location-autocpl"
                      type="text"
                      className="input"
                      placeholder="Where are you now?"
                    />
                    <div className="icon">
                      <i data-feather="map-pin" />
                    </div>
                    <div className="close-icon is-main">
                      <i data-feather="x" />
                    </div>
                  </div>
                </div>
                {/* Link suboption */}
                <div
                  id="link-suboption"
                  className="is-autocomplete is-suboption is-hidden"
                >
                  <div
                    id="link-autocpl-wrapper"
                    className="control is-location-wrapper has-margin"
                  >
                    <input
                      id="link-autocpl"
                      type="text"
                      className="input"
                      placeholder="Enter the link URL"
                    />
                    <div className="icon">
                      <i data-feather="link-2" />
                    </div>
                    <div className="close-icon is-main">
                      <i data-feather="x" />
                    </div>
                  </div>
                </div>
                {/* GIF suboption */}
                <div
                  id="gif-suboption"
                  className="is-autocomplete is-suboption is-hidden"
                >
                  <div
                    id="gif-autocpl-wrapper"
                    className="control is-gif-wrapper has-margin"
                  >
                    <input
                      id="gif-autocpl"
                      type="text"
                      className="input"
                      placeholder="Search a GIF to add"
                    />
                    <div className="icon">
                      <i data-feather="search" />
                    </div>
                    <div className="close-icon is-main">
                      <i data-feather="x" />
                    </div>
                    <div className="gif-dropdown">
                      <div className="inner">
                        <div className="gif-block">
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/1.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/2.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/3.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/4.gif"
                            alt=""
                          />
                        </div>
                        <div className="gif-block">
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/5.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/6.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/7.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/8.gif"
                            alt=""
                          />
                        </div>
                        <div className="gif-block">
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/9.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/10.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/11.gif"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/478x344"
                            data-demo-src="../../assets/images/demo/gif/12.gif"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Compose form */}
              {/* General extended options */}
              <div id="extended-options" className="compose-options is-hidden">
                <div className="columns is-multiline is-full">
                  {/* Upload action */}
                  <div className="column is-6 is-narrower">
                    <div className="compose-option is-centered">
                      <i data-feather="camera" />
                      <span>Photo/Video</span>
                      <input type="file" />
                    </div>
                  </div>
                  {/* Mood action */}
                  <div className="column is-6 is-narrower">
                    <div
                      id="extended-show-activities"
                      className="compose-option is-centered"
                    >
                      <img
                        src="../../assets/images/icons/emoji/emoji-1.svg"
                        alt=""
                      />
                      <span>Mood/Activity</span>
                    </div>
                  </div>
                  {/* Tag friends action */}
                  <div className="column is-6 is-narrower">
                    <div
                      id="open-tag-suboption"
                      className="compose-option is-centered"
                    >
                      <i data-feather="tag" />
                      <span>Tag friends</span>
                    </div>
                  </div>
                  {/* Post location action */}
                  <div className="column is-6 is-narrower">
                    <div
                      id="open-location-suboption"
                      className="compose-option is-centered"
                    >
                      <i data-feather="map-pin" />
                      <span>Post location</span>
                    </div>
                  </div>
                  {/* Share link action */}
                  <div className="column is-6 is-narrower">
                    <div
                      id="open-link-suboption"
                      className="compose-option is-centered"
                    >
                      <i data-feather="link-2" />
                      <span>Share link</span>
                    </div>
                  </div>
                  {/* Post GIF action */}
                  <div className="column is-6 is-narrower">
                    <div
                      id="open-gif-suboption"
                      className="compose-option is-centered"
                    >
                      <i data-feather="image" />
                      <span>Post GIF</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /General extended options */}
              {/* General basic options */}
              <div id="basic-options" className="compose-options">
                {/* Upload action */}
                <div className="compose-option">
                  <i data-feather="camera" />
                  <span>Media</span>
                  <input type="file" />
                </div>
                {/* Mood action */}
                <div id="show-activities" className="compose-option">
                  <img
                    src="../../assets/images/icons/emoji/emoji-1.svg"
                    alt=""
                  />
                  <span>Activity</span>
                </div>
                {/* Expand action */}
                <div id="open-extended-options" className="compose-option">
                  <i data-feather="more-horizontal" />
                </div>
              </div>
              {/* /General basic options */}
              {/* Hidden Options */}
              <div className="hidden-options">
                <div className="target-channels">
                  {/* Publication Channel */}
                  <div className="channel">
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-1" defaultChecked />
                        <label htmlFor="checkbox-1" />
                      </div>
                    </div>
                    <div className="channel-icon">
                      <i data-feather="bell" />
                    </div>
                    <div className="channel-name">Activity Feed</div>
                    {/* Dropdown menu */}
                    <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
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
                                <small>
                                  only friends can see this publication.
                                </small>
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
                  {/* Publication Channel */}
                  <div className="channel">
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-2" />
                        <label htmlFor="checkbox-2" />
                      </div>
                    </div>
                    <div className="story-icon">
                      <div className="plus-icon">
                        <i data-feather="plus" />
                      </div>
                    </div>
                    <div className="channel-name">My Story</div>
                    {/* Dropdown menu */}
                    <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
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
                                <small>
                                  only friends can see this publication.
                                </small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="users" />
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
                {/* Friends list */}
                <div className="friends-list is-hidden">
                  {/* Header */}
                  <div className="list-header">
                    <span>Send in a message</span>
                    <div className="actions">
                      <a
                        id="open-compose-search"
                        href="#!"
                        className="search-trigger"
                      >
                        <i data-feather="search" />
                      </a>
                      {/* Hidden filter input */}
                      <div id="compose-search" className="control is-hidden">
                        <input
                          type="text"
                          className="input"
                          placeholder="Search People"
                        />
                        <span>
                          <i data-feather="search" />
                        </span>
                      </div>
                      <a
                        href="#!"
                        className="is-inverted modal-trigger"
                        data-modal="create-group-modal"
                      >
                        Create group
                      </a>
                    </div>
                  </div>
                  {/* List body */}
                  <div className="list-body">
                    {/* Friend */}
                    <div className="friend-block">
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-3" />
                          <label htmlFor="checkbox-3" />
                        </div>
                      </div>
                      <img
                        className="friend-avatar"
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="../../assets/images/avatars/dan.jpg"
                        alt=""
                      />
                      <div className="friend-name">Dan Walker</div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block">
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-4" />
                          <label htmlFor="checkbox-4" />
                        </div>
                      </div>
                      <img
                        className="friend-avatar"
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="../../assets/images/avatars/daniel.jpg"
                        alt=""
                      />
                      <div className="friend-name">Daniel Wellington</div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block">
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-5" />
                          <label htmlFor="checkbox-5" />
                        </div>
                      </div>
                      <img
                        className="friend-avatar"
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="../../assets/images/avatars/stella.jpg"
                        alt=""
                      />
                      <div className="friend-name">Stella Bergmann</div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block">
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-6" />
                          <label htmlFor="checkbox-6" />
                        </div>
                      </div>
                      <img
                        className="friend-avatar"
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="../../assets/images/avatars/david.jpg"
                        alt=""
                      />
                      <div className="friend-name">David Kim</div>
                    </div>
                    {/* Friend */}
                    <div className="friend-block">
                      <div className="round-checkbox is-small">
                        <div>
                          <input type="checkbox" id="checkbox-7" />
                          <label htmlFor="checkbox-7" />
                        </div>
                      </div>
                      <img
                        className="friend-avatar"
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="../../assets/images/avatars/nelly.png"
                        alt=""
                      />
                      <div className="friend-name">Nelly Schwartz</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer buttons */}
              <div className="more-wrap">
                {/* View more button */}
                <button
                  id="show-compose-friends"
                  type="button"
                  className="button is-more"
                  aria-haspopup="true"
                >
                  <i data-feather="more-vertical" />
                  <span>View More</span>
                </button>
                {/* Publish button */}
                <button
                  id="publish-button"
                  type="submit"
                  className="button is-solid accent-button is-fullwidth is-disabled"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
