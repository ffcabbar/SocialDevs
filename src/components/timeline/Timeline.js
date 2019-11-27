import React from 'react'

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
          {/* Weather widget */}
          {/* /includes/widgets/weather-widget.html */}
          <div className="card is-weather-card has-background-image" data-background="../../assets/images/illustrations/cards/weather-bg.svg">
            <div className="card-heading">
              <div className="dropdown is-spaced is-accent is-right dropdown-trigger is-light">
                <div>
                  <div className="button">
                    <i data-feather="more-vertical" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="map-pin" />
                        <div className="media-content">
                          <h3>Change City</h3>
                          <small>Change the displayed city.</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="rotate-ccw" />
                        <div className="media-content">
                          <h3>Synchronize</h3>
                          <small>Synchronize with a weather source.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="settings" />
                        <div className="media-content">
                          <h3>Settings</h3>
                          <small>Access widget settings.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="trash-2" />
                        <div className="media-content">
                          <h3>Remove</h3>
                          <small>Removes this widget from your feed.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="temperature">
                <span>71</span>
              </div>
              <div className="weather-icon">
                <div>
                  <i data-feather="sun" />
                  <h4>Sunny</h4>
                  <div className="details">
                    <span>Real Feel: 78° </span>
                    <span>Rain Chance: 5%</span>
                  </div>
                </div>
              </div>
              <div className="previsions">
                <div className="day">
                  <span>Mon</span>
                  <i data-feather="sun" />
                  <span>69°</span>
                </div>
                <div className="day">
                  <span>Tue</span>
                  <i data-feather="cloud-lightning" />
                  <span>74°</span>
                </div>
                <div className="day">
                  <span>Wed</span>
                  <i data-feather="cloud-lightning" />
                  <span>73°</span>
                </div>
                <div className="day">
                  <span>Thu</span>
                  <i data-feather="sun" />
                  <span>68°</span>
                </div>
                <div className="day">
                  <span>Fri</span>
                  <i data-feather="cloud-drizzle" />
                  <span>55°</span>
                </div>
                <div className="day">
                  <span>Sat</span>
                  <i data-feather="cloud-rain" />
                  <span>58°</span>
                </div>
                <div className="day">
                  <span>Sun</span>
                  <i data-feather="sun" />
                  <span>64°</span>
                </div>
              </div>
              <div className="current-date-location has-text-centered"> 
                <span className="date">Sunday, 18th 2018</span>
                <span className="location"> <i data-feather="map-pin" /> Los Angeles, CA</span>
              </div>
            </div>
          </div>
          {/* Pages widget */}
          {/* /includes/widgets/recommended-pages-1-widget.html */}
          <div className="card">
            <div className="card-heading is-bordered">
              <h4>Recommended Pages</h4>
              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                <div>
                  <div className="button">
                    <i data-feather="more-vertical" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="file-text" />
                        <div className="media-content">
                          <h3>All Recommandations</h3>
                          <small>View all recommandations.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="settings" />
                        <div className="media-content">
                          <h3>Settings</h3>
                          <small>Access widget settings.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="trash-2" />
                        <div className="media-content">
                          <h3>Remove</h3>
                          <small>Removes this widget from your feed.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body no-padding">
              {/* Recommended Page */}
              <div className="page-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/icons/logos/fastpizza.svg" data-page-popover={0} alt="" />
                <div className="page-meta">
                  <span>Fast Pizza</span>
                  <span>Pizza &amp; Fast Food</span>
                </div>
                <div className="add-page add-transition">
                  <i data-feather="bookmark" />
                </div>
              </div>
              {/* Recommended Page */}
              <div className="page-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/icons/logos/lonelydroid.svg" data-page-popover={1} alt="" />
                <div className="page-meta">
                  <span>Lonely Droid</span>
                  <span>Technology</span>
                </div>
                <div className="add-page add-transition">
                  <i data-feather="bookmark" />
                </div>
              </div>
              {/* Recommended Page */}
              <div className="page-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/icons/logos/metamovies.svg" data-page-popover={2} alt="" />
                <div className="page-meta">
                  <span>Meta Movies</span>
                  <span>Movies / Entertainment</span>
                </div>
                <div className="add-page add-transition">
                  <i data-feather="bookmark" />
                </div>
              </div>
              {/* Recommended Page */}
              <div className="page-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/icons/logos/nuclearjs.svg" data-page-popover={3} alt="" />
                <div className="page-meta">
                  <span>Nuclearjs</span>
                  <span>Technology</span>
                </div>
                <div className="add-page add-transition">
                  <i data-feather="bookmark" />
                </div>
              </div>
              {/* Recommended Page */}
              <div className="page-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/icons/logos/slicer.svg" data-page-popover={4} alt="" />
                <div className="page-meta">
                  <span>Slicer</span>
                  <span>Web / Design</span>
                </div>
                <div className="add-page add-transition">
                  <i data-feather="bookmark" />
                </div>
              </div>
            </div>
          </div>
          {/* Fake Ad */}
          {/* /includes/widgets/fake-add-widget.html */}
          <div className="card is-ad">
            <div className="card-body">
              {/* <img src="../../assets/images/ads/ninja-ad.svg" alt="" /> */}
              <div className="ad-text">
                Simple, pleasant, and productive.
              </div>
              <div className="ad-brand">
                Ads via Ninja
              </div>
            </div>
          </div>
          {/* Latest activities widget */}
          {/* /includes/widgets/latest-activity-1-widget.html */}
          <div id="latest-activity-1" className="card">
            <div className="card-heading is-bordered">
              <h4>Latest activity</h4>
              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                <div>
                  <div className="button">
                    <i data-feather="more-vertical" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="list" />
                        <div className="media-content">
                          <h3>All updates</h3>
                          <small>View my network's activity.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="settings" />
                        <div className="media-content">
                          <h3>Settings</h3>
                          <small>Access widget settings.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="trash-2" />
                        <div className="media-content">
                          <h3>Remove</h3>
                          <small>Removes this widget from your feed.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body no-padding">
              {/* Recommended Page */}
              <div className="page-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/hanzo.svg" data-page-popover={5} alt="" />
                <div className="page-meta">
                  <span>Css Ninja</span>
                  <span>3 hours ago</span>
                </div>
                <div className="add-page">
                  <i data-feather="eye" />
                </div>
              </div>
              {/* Recommended Page */}
              <div className="page-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/milly.jpg" alt="" data-user-popover={7} />
                <div className="page-meta">
                  <span>Milly Augustine</span>
                  <span>5 hours ago</span>
                </div>
                <div className="add-page">
                  <i data-feather="eye" />
                </div>
              </div>
              {/* Recommended Page */}
              <div className="page-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/icons/logos/nuclearjs.svg" data-page-popover={3} alt="" />
                <div className="page-meta">
                  <span>Nuclearjs</span>
                  <span>Yesterday</span>
                </div>
                <div className="add-page">
                  <i data-feather="eye" />
                </div>
              </div>
            </div>
          </div>          </div>
        {/* /Left side column */}
        {/* Middle column */}
        <div className="column is-6">
          {/* Publishing Area */}
          {/* /includes/pages/feed/compose-card.html */}
          <div id="compose-card" className="card is-new-content">
            {/* Top tabs */}
            <div className="tabs-wrapper">
              <div className="tabs is-boxed is-fullwidth">
                <ul>
                  <li className="is-active">
                    <a>
                      <span className="icon is-small"><i data-feather="edit-3" /></span>
                      <span>Publish</span>
                    </a>
                  </li>
                  <li>
                    <a className="modal-trigger" data-modal="albums-help-modal">
                      <span className="icon is-small"><i data-feather="image" /></span>
                      <span>Albums</span>
                    </a>
                  </li>
                  <li>
                    <a className="modal-trigger" data-modal="videos-help-modal">
                      <span className="icon is-small"><i data-feather="video" /></span>
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
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" alt="" />
                    <div className="control">
                      <textarea id="publish" className="textarea" rows={3} placeholder="Write something about you..." defaultValue={""} />
                    </div>
                  </div>
                  <div id="options-summary" className="options-summary" />
                  <div id="tag-suboption" className="is-autocomplete is-suboption is-hidden">
                    {/* Tag friends suboption */}
                    <div id="tag-list" className="tag-list" />
                    <div className="control">
                      <input id="users-autocpl" type="text" className="input" placeholder="Who are you with?" />
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
                  <div id="activities-suboption" className="is-autocomplete is-suboption is-hidden">
                    <div id="activities-autocpl-wrapper" className="control has-margin">
                      <input id="activities-autocpl" type="text" className="input" placeholder="What are you doing right now?" />
                      <div className="icon">
                        <i data-feather="search" />
                      </div>
                      <div className="close-icon is-main">
                        <i data-feather="x" />
                      </div>
                    </div>
                    {/* Mood suboption */}
                    <div id="mood-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                      <div className="control has-margin">
                        <input id="mood-autocpl" type="text" className="input is-subactivity" placeholder="How do you feel?" />
                        <div className="input-block">
                          Feels
                        </div>
                        <div className="close-icon is-subactivity">
                          <i data-feather="x" />
                        </div>
                      </div>
                    </div>
                    {/* Drinking suboption child */}
                    <div id="drinking-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                      <div className="control has-margin">
                        <input id="drinking-autocpl" type="text" className="input is-subactivity" placeholder="What are you drinking?" />
                        <div className="input-block">
                          Drinks
                        </div>
                        <div className="close-icon is-subactivity">
                          <i data-feather="x" />
                        </div>
                      </div>
                    </div>
                    {/* Eating suboption child */}
                    <div id="eating-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                      <div className="control has-margin">
                        <input id="eating-autocpl" type="text" className="input is-subactivity" placeholder="What are you eating?" />
                        <div className="input-block">
                          Eats
                        </div>
                        <div className="close-icon is-subactivity">
                          <i data-feather="x" />
                        </div>
                      </div>
                    </div>
                    {/* Reading suboption child */}
                    <div id="reading-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                      <div className="control has-margin">
                        <input id="reading-autocpl" type="text" className="input is-subactivity" placeholder="What are you reading?" />
                        <div className="input-block">
                          Reads
                        </div>
                        <div className="close-icon is-subactivity">
                          <i data-feather="x" />
                        </div>
                      </div>
                    </div>
                    {/* Watching suboption child */}
                    <div id="watching-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                      <div className="control has-margin">
                        <input id="watching-autocpl" type="text" className="input is-subactivity" placeholder="What are you watching?" />
                        <div className="input-block">
                          Watches
                        </div>
                        <div className="close-icon is-subactivity">
                          <i data-feather="x" />
                        </div>
                      </div>
                    </div>
                    {/* Travel suboption child */}
                    <div id="travel-autocpl-wrapper" className="is-autocomplete is-activity is-hidden">
                      <div className="control has-margin">
                        <input id="travel-autocpl" type="text" className="input is-subactivity" placeholder="Where are you going?" />
                        <div className="input-block">
                          Travels
                        </div>
                        <div className="close-icon is-subactivity">
                          <i data-feather="x" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Activities suboption */}
                  {/* Location suboption */}
                  <div id="location-suboption" className="is-autocomplete is-suboption is-hidden">
                    <div id="location-autocpl-wrapper" className="control is-location-wrapper has-margin">
                      <input id="location-autocpl" type="text" className="input" placeholder="Where are you now?" />
                      <div className="icon">
                        <i data-feather="map-pin" />
                      </div>
                      <div className="close-icon is-main">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                  {/* Link suboption */}
                  <div id="link-suboption" className="is-autocomplete is-suboption is-hidden">
                    <div id="link-autocpl-wrapper" className="control is-location-wrapper has-margin">
                      <input id="link-autocpl" type="text" className="input" placeholder="Enter the link URL" />
                      <div className="icon">
                        <i data-feather="link-2" />
                      </div>
                      <div className="close-icon is-main">
                        <i data-feather="x" />
                      </div>
                    </div>
                  </div>
                  {/* GIF suboption */}
                  <div id="gif-suboption" className="is-autocomplete is-suboption is-hidden">
                    <div id="gif-autocpl-wrapper" className="control is-gif-wrapper has-margin">
                      <input id="gif-autocpl" type="text" className="input" placeholder="Search a GIF to add" />
                      <div className="icon">
                        <i data-feather="search" />
                      </div>
                      <div className="close-icon is-main">
                        <i data-feather="x" />
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
                      <div id="extended-show-activities" className="compose-option is-centered">
                        <img src="../../assets/images/icons/emoji/emoji-1.svg" alt="" />
                        <span>Mood/Activity</span>
                      </div>
                    </div>
                    {/* Tag friends action */}
                    <div className="column is-6 is-narrower">
                      <div id="open-tag-suboption" className="compose-option is-centered">
                        <i data-feather="tag" />
                        <span>Tag friends</span>
                      </div>
                    </div>
                    {/* Post location action */}
                    <div className="column is-6 is-narrower">
                      <div id="open-location-suboption" className="compose-option is-centered">
                        <i data-feather="map-pin" />
                        <span>Post location</span>
                      </div>
                    </div>
                    {/* Share link action */}
                    <div className="column is-6 is-narrower">
                      <div id="open-link-suboption" className="compose-option is-centered">
                        <i data-feather="link-2" />
                        <span>Share link</span>
                      </div>
                    </div>
                    {/* Post GIF action */}
                    <div className="column is-6 is-narrower">
                      <div id="open-gif-suboption" className="compose-option is-centered">
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
                    <img src="../../assets/images/icons/emoji/emoji-1.svg" alt="" />
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
                                  <small>only friends can see this publication.</small>
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
                        <a id="open-compose-search" href="javascript:void(0);" className="search-trigger">
                          <i data-feather="search" />
                        </a>
                        {/* Hidden filter input */}
                        <div id="compose-search" className="control is-hidden">
                          <input type="text" className="input" placeholder="Search People" />
                          <span>
                            <i data-feather="search" />
                          </span>
                        </div>
                        <a href="javascript:void(0);" className="is-inverted modal-trigger" data-modal="create-group-modal">Create group</a>
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
                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" alt="" />
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
                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" alt="" />
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
                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/stella.jpg" alt="" />
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
                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" alt="" />
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
                        <img className="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/nelly.png" alt="" />
                        <div className="friend-name">Nelly Schwartz</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer buttons */}
                <div className="more-wrap">
                  {/* View more button */}
                  <button id="show-compose-friends" type="button" className="button is-more" aria-haspopup="true">
                    <i data-feather="more-vertical" />
                    <span>View More</span>
                  </button>
                  {/* Publish button */}
                  <button id="publish-button" type="button" className="button is-solid accent-button is-fullwidth is-disabled">
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 1 */}
          {/* /includes/pages/feed/posts/feed-post1.html */}
          {/* POST #1 */}
          <div id="feed-post-1" className="card is-post">
            {/* Main wrap */}
            <div className="content-wrap">
              {/* Post header */}
              <div className="card-heading">
                {/* User meta */}
                <div className="user-block">
                  <div className="image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" data-user-popover={1} alt="" />
                  </div>
                  <div className="user-info">
                    <a href="#">Dan Walker</a>
                    <span className="time">July 26 2018, 01:03pm</span>
                  </div>
                </div>
                {/* Right side dropdown */}
                {/* /includes/pages/feed/dropdowns/feed-post-dropdown.html */}
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical" />
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="bookmark" />
                          <div className="media-content">
                            <h3>Bookmark</h3>
                            <small>Add this post to your bookmarks.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="bell" />
                          <div className="media-content">
                            <h3>Notify me</h3>
                            <small>Send me the updates.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="flag" />
                          <div className="media-content">
                            <h3>Flag</h3>
                            <small>In case of inappropriate content.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>      </div>
              {/* /Post header */}
              {/* Post body */}
              <div className="card-body">
                {/* Post body text */}
                <div className="post-text">
                  <p>Yesterday with
                    <a href="#">@Karen Miller</a> and
                    <a href="#">@Marvin Stemperd</a> at the
                    <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally fantastic! People were really excited about this one!</p>
                </div>
                {/* Featured image */}
                <div className="post-image">
                  <a data-fancybox="post1" data-lightbox-type="comments" data-thumb="../../assets/images/demo/unsplash/1.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="../../assets/images/demo/unsplash/1.jpg">
                    <img src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/1.jpg" alt="" />
                  </a>
                  {/* Action buttons */}
                  {/* /includes/pages/feed/buttons/feed-post-actions.html */}
                  <div className="like-wrapper">
                    <a href="javascript:void(0);" className="like-button">
                      <i className="mdi mdi-heart not-liked bouncy" />
                      <i className="mdi mdi-heart is-liked bouncy" />
                      <span className="like-overlay" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-share">
                    <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                      <i data-feather="link-2" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-comment">
                    <a href="javascript:void(0);" className="small-fab">
                      <i data-feather="message-circle" />
                    </a>
                  </div>          </div>
              </div>
              {/* /Post body */}
              {/* Post footer */}
              <div className="card-footer">
                {/* Followers avatars */}
                <div className="likers-group">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" data-user-popover={1} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" data-user-popover={4} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/edward.jpeg" data-user-popover={5} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/milly.jpg" data-user-popover={7} alt="" />
                </div>
                {/* Followers text */}
                <div className="likers-text">
                  <p>
                    <a href="#">Milly</a>,
                    <a href="#">David</a>
                  </p>
                  <p>and 23 more liked this</p>
                </div>
                {/* Post statistics */}
                <div className="social-count">
                  <div className="likes-count">
                    <i data-feather="heart" />
                    <span>27</span>
                  </div>
                  <div className="shares-count">
                    <i data-feather="link-2" />
                    <span>9</span>
                  </div>
                  <div className="comments-count">
                    <i data-feather="message-circle" />
                    <span>3</span>
                  </div>
                </div>
              </div>
              {/* /Post footer */}
            </div>
            {/* /Main wrap */}
            {/* Post #1 Comments */}
            <div className="comments-wrap is-hidden">
              {/* Header */}
              <div className="comments-heading">
                <h4>Comments
                  <small>(8)</small></h4>
                <div className="close-comments">
                  <i data-feather="x" />
                </div>
              </div>
              {/* /Header */}
              {/* Comments body */}
              <div className="comments-body has-slimscroll">
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" data-user-popover={1} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Dan Walker</a>
                    <span className="time">28 minutes ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                    {/* Actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>4</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                      <div className="edit">
                        <a href="#">Edit</a>
                      </div>
                    </div>
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" data-user-popover={4} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">David Kim</a>
                        <span className="time">15 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>0</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    {/* /includes/pages/feed/dropdowns/comment-dropdown.html */}
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/rolf.jpg" data-user-popover={13} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Rolf Krupp</a>
                    <span className="time">9 hours ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                      dolore magna aliqua. Exercitation ullamco laboris consequat.</p>
                    {/* Actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>2</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Elise Walker</a>
                        <span className="time">8 hours ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>0</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/rolf.jpg" data-user-popover={13} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Rolf Krupp</a>
                        <span className="time">7 hours ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>1</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Elise Walker</a>
                        <span className="time">6 hours ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>0</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/lana.jpeg" data-user-popover={10} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Lana Henrikssen</a>
                    <span className="time">10 hours ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore
                      et dolore magna aliqua.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>5</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
              </div>
              {/* /Comments body */}
              {/* Comments footer */}
              <div className="card-footer">
                <div className="media post-comment">
                  {/* User image */}
                  <div className="media-left">
                    <p className="image is-48x48">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" data-user-popover={0} alt="" />
                    </p>
                  </div>
                  {/* Comment Textarea */}
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea className="textarea comment-textarea" rows={5} placeholder="Write a comment..." defaultValue={""} />
                      </p>
                    </div>
                    {/* Additional actions */}
                    <div className="actions">
                      <div className="action is-auto">
                        <i data-feather="at-sign" />
                      </div>
                      <div className="action is-upload">
                        <i data-feather="camera" />
                        <input type="file" />
                      </div>
                      <a className="button is-solid primary-button raised">Post Comment</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Comments footer */}
            </div>
            {/* /Post #1 Comments */}
          </div>
          {/* POST #1 */}
          {/* Post 2 */}
          {/* /includes/pages/feed/posts/feed-post2.html */}
          {/* POST #2 */}
          <div className="card is-post">
            {/* Main wrap */}
            <div className="content-wrap">
              {/* Post header */}
              <div className="card-heading">
                {/* User meta */}
                <div className="user-block">
                  <div className="image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/edward.jpeg" data-user-popover={5} alt="" />
                  </div>
                  <div className="user-info">
                    <a href="#">Edward Mayers</a>
                    <span className="time">July 26 2018, 11:14am</span>
                  </div>
                </div>
                {/* Right side dropdown */}
                {/* /includes/pages/feed/dropdowns/feed-post-dropdown.html */}
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical" />
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="bookmark" />
                          <div className="media-content">
                            <h3>Bookmark</h3>
                            <small>Add this post to your bookmarks.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="bell" />
                          <div className="media-content">
                            <h3>Notify me</h3>
                            <small>Send me the updates.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="flag" />
                          <div className="media-content">
                            <h3>Flag</h3>
                            <small>In case of inappropriate content.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>      </div>
              {/* /Post header */}
              {/* Post body */}
              <div className="card-body">
                {/* Post body text */}
                <div className="post-text">
                  <p>You all know how i love bootstrap, but i didn't have time to dig deeper into it. Therefore i found this very
                    interesting video i wanted to share with you all.
                    <a href="#">#bootsrap #webdesign</a>
                  </p><p>
                  </p></div>
                {/* Featured youtube video */}
                <div className="post-link is-video">
                  {/* Link image */}
                  <div className="link-image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/demo/video/bootstrap.jpg" alt="" />
                    <div className="video-overlay" />
                    <a className="video-button" data-fancybox href="https://www.youtube.com/watch?v=N8GksI_-iIM">
                      <img src="../../assets/images/icons/video/play.svg" alt="" />
                    </a>
                  </div>
                  {/* Link content */}
                  <div className="link-content">
                    <h4>
                      <a href="#">What's new in Bootstrap 4 ?</a>
                    </h4>
                    <p>Before I create the new Bootstrap 4 crash course I want to go over some of the changes from Bootstrap
                      3.</p>
                    <small>Youtube.com</small>
                  </div>
                  {/* Post actions */}
                  {/* /includes/pages/feed/buttons/feed-post-actions.html */}
                  <div className="like-wrapper">
                    <a href="javascript:void(0);" className="like-button">
                      <i className="mdi mdi-heart not-liked bouncy" />
                      <i className="mdi mdi-heart is-liked bouncy" />
                      <span className="like-overlay" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-share">
                    <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                      <i data-feather="link-2" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-comment">
                    <a href="javascript:void(0);" className="small-fab">
                      <i data-feather="message-circle" />
                    </a>
                  </div>          </div>
              </div>
              {/* /Post body */}
              {/* Post footer */}
              <div className="card-footer">
                {/* Followers */}
                <div className="likers-group">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" data-user-popover={3} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                </div>
                <div className="likers-text">
                  <p>
                    <a href="#">Daniel</a> and
                    <a href="#">Elise</a>
                  </p>
                  <p>liked this</p>
                </div>
                {/* Post statistics */}
                <div className="social-count">
                  <div className="likes-count">
                    <i data-feather="heart" />
                    <span>2</span>
                  </div>
                  <div className="shares-count">
                    <i data-feather="link-2" />
                    <span>0</span>
                  </div>
                  <div className="comments-count">
                    <i data-feather="message-circle" />
                    <span>2</span>
                  </div>
                </div>
              </div>
              {/* /Post footer */}
            </div>
            {/* /Main wrap */}
            {/* Post #2 comments */}
            <div className="comments-wrap is-hidden">
              {/* Header */}
              <div className="comments-heading">
                <h4>Comments
                  <small>(2)</small></h4>
                <div className="close-comments">
                  <i data-feather="x" />
                </div>
              </div>
              {/* /Header */}
              {/* Comments body */}
              <div className="comments-body has-slimscroll">
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Elise Walker</a>
                    <span className="time">2 days ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>1</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" data-user-popover={3} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Daniel Wellington</a>
                        <span className="time">2 days ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Comment actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>0</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    {/* /includes/pages/feed/dropdowns/comment-dropdown.html */}
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
              </div>
              {/* /Comments body */}
              {/* Comments footer */}
              <div className="card-footer">
                {/* User image */}
                <div className="media post-comment">
                  <div className="media-left">
                    <p className="image is-48x48">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" data-user-popover={0} alt="" />
                    </p>
                  </div>
                  {/* Textarea */}
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea className="textarea comment-textarea" rows={5} placeholder="Write a comment..." defaultValue={""} />
                      </p>
                    </div>
                    {/* Additional actions */}
                    <div className="actions">
                      <div className="action is-auto">
                        <i data-feather="at-sign" />
                      </div>
                      <div className="action is-upload">
                        <i data-feather="camera" />
                        <input type="file" />
                      </div>
                      <a className="button is-solid primary-button raised">Post Comment</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Comments footer */}
            </div>
            {/* /Post #2 comments */}
          </div>
          {/* /POST #2 */}
          {/* Post 3 */}
          {/* /includes/pages/feed/posts/feed-post3.html */}
          {/* POST #3 */}
          <div className="card is-post">
            {/* Main wrap */}
            <div className="content-wrap">
              {/* Header */}
              <div className="card-heading">
                <div className="user-block">
                  <div className="image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                  </div>
                  <div className="user-info">
                    <a href="#">Elise Walker</a>
                    <span className="time">July 19 2018, 19:42pm</span>
                  </div>
                </div>
                {/* /includes/pages/feed/dropdowns/feed-post-dropdown.html */}
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical" />
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="bookmark" />
                          <div className="media-content">
                            <h3>Bookmark</h3>
                            <small>Add this post to your bookmarks.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="bell" />
                          <div className="media-content">
                            <h3>Notify me</h3>
                            <small>Send me the updates.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="flag" />
                          <div className="media-content">
                            <h3>Flag</h3>
                            <small>In case of inappropriate content.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>      </div>
              {/* /Header */}
              {/* Post body */}
              <div className="card-body">
                {/* Post body text */}
                <div className="post-text">
                  <p>Thanks a lot to
                    <a href="#">@Gaelle</a> and
                    <a href="#">@Rolf</a> for this wonderful team lunch. The food was really tasty and we had some great laughs. Thanks
                    to all the team, you're all awesome !
                  </p><p>
                  </p></div>
                {/* Featured image */}
                <div className="post-image">
                  <a data-fancybox="post2" data-lightbox-type="comments" data-thumb="../../assets/images/demo/unsplash/2.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="../../assets/images/demo/unsplash/2.jpg">
                    <img src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/2.jpg" alt="" />
                  </a>
                  {/* Post actions */}
                  {/* /includes/pages/feed/buttons/feed-post-actions.html */}
                  <div className="like-wrapper">
                    <a href="javascript:void(0);" className="like-button">
                      <i className="mdi mdi-heart not-liked bouncy" />
                      <i className="mdi mdi-heart is-liked bouncy" />
                      <span className="like-overlay" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-share">
                    <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                      <i data-feather="link-2" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-comment">
                    <a href="javascript:void(0);" className="small-fab">
                      <i data-feather="message-circle" />
                    </a>
                  </div>          </div>
              </div>
              {/* /Post body */}
              {/* Post footer */}
              <div className="card-footer">
                {/* Followers */}
                <div className="likers-group">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/gaelle.jpeg" data-user-popover={11} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/edward.jpeg" data-user-popover={5} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/nelly.png" data-user-popover={9} alt="" />
                </div>
                <div className="likers-text">
                  <p>
                    <a href="#">Gaelle</a>,
                    <a href="#">Edward</a>
                  </p>
                  <p>and 1 more liked this</p>
                </div>
                {/* Post statistics */}
                <div className="social-count">
                  <div className="likes-count">
                    <i data-feather="heart" />
                    <span>3</span>
                  </div>
                  <div className="shares-count">
                    <i data-feather="link-2" />
                    <span>0</span>
                  </div>
                  <div className="comments-count">
                    <i data-feather="message-circle" />
                    <span>5</span>
                  </div>
                </div>
              </div>
              {/* /Post footer */}
            </div>
            {/* /Main wrap */}
            {/* Post #3 comments */}
            <div className="comments-wrap is-hidden">
              {/* Header */}
              <div className="comments-heading">
                <h4>Comments
                  <small>(5)</small></h4>
                <div className="close-comments">
                  <i data-feather="x" />
                </div>
              </div>
              {/* Header */}
              {/* Comments body */}
              <div className="comments-body has-slimscroll">
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/gaelle.jpeg" data-user-popover={11} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Gaelle Morris</a>
                    <span className="time">2 days ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>3</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Elise Walker</a>
                        <span className="time">2 days ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Comment actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>1</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        {/* /includes/pages/feed/dropdowns/comment-dropdown.html */}
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/rolf.jpg" data-user-popover={13} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Rolf Krupp</a>
                        <span className="time">2 days ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt.</p>
                        {/* Comment actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>1</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Elise Walker</a>
                        <span className="time">2 days ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Comment actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>1</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/nelly.png" data-user-popover={9} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Nelly Schwartz</a>
                    <span className="time">2 days ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                      dolore magna aliqua.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>1</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
              </div>
              {/* Comments body */}
              {/* Comments footer */}
              <div className="card-footer">
                <div className="media post-comment">
                  {/* User image */}
                  <div className="media-left">
                    <p className="image is-48x48">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" data-user-popover={0} alt="" />
                    </p>
                  </div>
                  {/* Textarea */}
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea className="textarea comment-textarea" rows={5} placeholder="Write a comment..." defaultValue={""} />
                      </p>
                    </div>
                    {/* Additional actions */}
                    <div className="actions">
                      <div className="action is-auto">
                        <i data-feather="at-sign" />
                      </div>
                      <div className="action is-upload">
                        <i data-feather="camera" />
                        <input type="file" />
                      </div>
                      <a className="button is-solid primary-button raised">Post Comment</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Comments footer */}
            </div>
            {/* /Post #3 Comments */}
          </div>
          {/* /POST #3 */}
          {/* Post 4 */}
          {/* /includes/pages/feed/posts/feed-post4.html */}
          {/* POST #4 */}
          <div className="card is-post">
            {/* Main wrap */}
            <div className="content-wrap">
              {/* Header */}
              <div className="card-heading">
                <div className="user-block">
                  <div className="image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/stella.jpg" data-user-popover={2} alt="" />
                  </div>
                  <div className="user-info">
                    <a href="#">Stella Bergmann</a>
                    <span className="time">July 19 2018, 15:13pm</span>
                  </div>
                </div>
                {/* Right side dropdown */}
                {/* /includes/pages/feed/dropdowns/feed-post-dropdown.html */}
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical" />
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="bookmark" />
                          <div className="media-content">
                            <h3>Bookmark</h3>
                            <small>Add this post to your bookmarks.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="bell" />
                          <div className="media-content">
                            <h3>Notify me</h3>
                            <small>Send me the updates.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="flag" />
                          <div className="media-content">
                            <h3>Flag</h3>
                            <small>In case of inappropriate content.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>      </div>
              {/* Header */}
              {/* Post body */}
              <div className="card-body">
                {/* Post body text */}
                <div className="post-text">
                  <p>Hey friends ! Iam back and i wanted to share with you some awesome pictures we took during our trip to Santa
                    Monica. We had wonderful holidays at the beach. Kisses to all !
                  </p><p>
                  </p></div>
                {/* Featured image */}
                <div className="post-image">
                  {/* CSS masonry wrap */}
                  <div className="masonry-grid">
                    {/* Left column */}
                    <div className="masonry-column-left">
                      <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../../assets/images/demo/unsplash/3.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="../../assets/images/demo/unsplash/3.jpg">
                        <img src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/3.jpg" alt="" />
                      </a>
                      <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../../assets/images/demo/unsplash/4.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="../../assets/images/demo/unsplash/4.jpg">
                        <img src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/4.jpg" alt="" />
                      </a>
                    </div>
                    {/* Right column */}
                    <div className="masonry-column-right">
                      <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../../assets/images/demo/unsplash/5.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="../../assets/images/demo/unsplash/5.jpg">
                        <img src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/5.jpg" alt="" />
                      </a>
                      <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../../assets/images/demo/unsplash/6.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="../../assets/images/demo/unsplash/6.jpg">
                        <img src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/6.jpg" alt="" />
                      </a>
                      <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../../assets/images/demo/unsplash/7.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="../../assets/images/demo/unsplash/7.jpg">
                        <img src="https://via.placeholder.com/1600x900" data-demo-src="../../assets/images/demo/unsplash/7.jpg" alt="" />
                      </a>
                    </div>
                    {/* Post actions */}
                    {/* /includes/pages/feed/buttons/feed-post-actions.html */}
                    <div className="like-wrapper">
                      <a href="javascript:void(0);" className="like-button">
                        <i className="mdi mdi-heart not-liked bouncy" />
                        <i className="mdi mdi-heart is-liked bouncy" />
                        <span className="like-overlay" />
                      </a>
                    </div>
                    <div className="fab-wrapper is-share">
                      <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                        <i data-feather="link-2" />
                      </a>
                    </div>
                    <div className="fab-wrapper is-comment">
                      <a href="javascript:void(0);" className="small-fab">
                        <i data-feather="message-circle" />
                      </a>
                    </div>              </div>
                </div>
              </div>
              {/* /Post body */}
              {/* Post footer */}
              <div className="card-footer">
                {/* Followers */}
                <div className="likers-group">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/rolf.jpg" data-user-popover={13} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/mike.jpg" data-user-popover={12} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" data-user-popover={3} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" data-user-popover={4} alt="" />
                </div>
                <div className="likers-text">
                  <p>
                    <a href="#">Gaelle</a>,
                    <a href="#">Rolf</a>
                  </p>
                  <p>and 31 more liked this</p>
                </div>
                {/* Post statistics */}
                <div className="social-count">
                  <div className="likes-count">
                    <i data-feather="heart" />
                    <span>33</span>
                  </div>
                  <div className="shares-count">
                    <i data-feather="link-2" />
                    <span>1</span>
                  </div>
                  <div className="comments-count">
                    <i data-feather="message-circle" />
                    <span>9</span>
                  </div>
                </div>
              </div>
              {/* /Post footer */}
            </div>
            {/* Main wrap */}
            {/* Post #4 comments */}
            <div className="comments-wrap is-hidden">
              {/* Header */}
              <div className="comments-heading">
                <h4>Comments
                  <small>(9)</small></h4>
                <div className="close-comments">
                  <i data-feather="x" />
                </div>
              </div>
              {/* /Header */}
              {/* Comments body */}
              <div className="comments-body has-slimscroll">
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" data-user-popover={0} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Jenna Davis</a>
                    <span className="time">30 minutes ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>0</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/lana.jpeg" data-user-popover={10} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Lana Henrikssen</a>
                        <span className="time">15 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.</p>
                        {/* Comment actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>2</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        {/* /includes/pages/feed/dropdowns/comment-dropdown.html */}
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" data-user-popover={4} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">David Kim</a>
                        <span className="time">12 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>5</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/mike.jpg" data-user-popover={12} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Mike Lasalle</a>
                        <span className="time">8 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt.</p>
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>5</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/stella.jpg" data-user-popover={2} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Stella Bergmann</a>
                        <span className="time">Just now</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt.</p>
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>2</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" data-user-popover={3} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Daniel Wellington</a>
                    <span className="time">5 hours ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore
                      et dolore magna aliqua.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>1</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/bobby.jpg" data-user-popover={8} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Bobby Brown</a>
                    <span className="time">7 hours ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore
                      et dolore magna aliqua.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>1</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/stella.jpg" data-user-popover={2} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Stella Bergmann</a>
                        <span className="time">7 hours ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt.</p>
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>2</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/lana.jpeg" data-user-popover={10} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">Lana Henrikssen</a>
                        <span className="time">15 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.</p>
                        {/* Comment actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>2</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
              </div>
              {/* /Comments body */}
              {/* Comments footer */}
              <div className="card-footer">
                <div className="media post-comment">
                  {/* User image */}
                  <div className="media-left">
                    <p className="image is-48x48">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" data-user-popover={8} alt="" />
                    </p>
                  </div>
                  {/* Textarea */}
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea className="textarea comment-textarea" rows={5} placeholder="Write a comment..." defaultValue={""} />
                      </p>
                    </div>
                    {/* Additional actions */}
                    <div className="actions">
                      <div className="action is-auto">
                        <i data-feather="at-sign" />
                      </div>
                      <div className="action is-upload">
                        <i data-feather="camera" />
                        <input type="file" />
                      </div>
                      <a className="button is-solid primary-button raised">Post Comment</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Comments footer */}
            </div>
            {/* /Post #4 comments */}
          </div>
          {/* /POST #4 */}
          {/* Post 5 */}
          {/* /includes/pages/feed/posts/feed-post5.html */}
          {/* POST #5 */}
          <div className="card is-post">
            {/* Main wrap */}
            <div className="content-wrap">
              {/* Header */}
              <div className="card-heading">
                {/* User image */}
                <div className="user-block">
                  <div className="image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" data-user-popover={4} alt="" />
                  </div>
                  <div className="user-info">
                    <a href="#">David Kim</a>
                    <span className="time">August 02 2018, 03:04pm</span>
                  </div>
                </div>
                {/* Right side dropdown */}
                {/* /includes/pages/feed/dropdowns/feed-post-dropdown.html */}
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical" />
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="bookmark" />
                          <div className="media-content">
                            <h3>Bookmark</h3>
                            <small>Add this post to your bookmarks.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="bell" />
                          <div className="media-content">
                            <h3>Notify me</h3>
                            <small>Send me the updates.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="flag" />
                          <div className="media-content">
                            <h3>Flag</h3>
                            <small>In case of inappropriate content.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>      </div>
              {/* /Header */}
              {/* Post body */}
              <div className="card-body">
                {/* Post body text */}
                <div className="post-text">
                  <p>Just discovered this awesome CSS framework named
                    <a href="#">#bulmaCss</a>. It's based on flexbox, so easy to use and comes with so many mobile first modifiers. You
                    can build anything from scratch easily with Bulma.
                    <a href="#">#webdesign #bulmaio</a>
                  </p>
                </div>
                {/* Featured link */}
                <div className="post-link">
                  {/* link image */}
                  <div className="link-image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/demo/video/bulma2.png" alt="" />
                  </div>
                  {/* Link content */}
                  <div className="link-content">
                    <h4>
                      <a href="#">Bulma CSS Framework</a>
                    </h4>
                    <p>Bulma is a mobile first CSS framework built on top of Flexbox. It's awesome and so easy to use.</p>
                    <small>Bulma.io</small>
                  </div>
                  {/* Post actions */}
                  {/* /includes/pages/feed/buttons/feed-post-actions.html */}
                  <div className="like-wrapper">
                    <a href="javascript:void(0);" className="like-button">
                      <i className="mdi mdi-heart not-liked bouncy" />
                      <i className="mdi mdi-heart is-liked bouncy" />
                      <span className="like-overlay" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-share">
                    <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                      <i data-feather="link-2" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-comment">
                    <a href="javascript:void(0);" className="small-fab">
                      <i data-feather="message-circle" />
                    </a>
                  </div>          </div>
              </div>
              {/* /Post body */}
              {/* Post footer */}
              <div className="card-footer">
                {/* Followers */}
                <div className="likers-group">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/lana.jpeg" data-user-popover={10} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/mike.jpg" data-user-popover={12} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/gaelle.jpeg" data-user-popover={11} alt="" />
                </div>
                <div className="likers-text">
                  <p>
                    <a href="#">Lana</a>,
                    <a href="#">Mike</a>
                  </p>
                  <p>and 1 more liked this</p>
                </div>
                {/* Post statistics */}
                <div className="social-count">
                  <div className="likes-count">
                    <i data-feather="heart" />
                    <span>11</span>
                  </div>
                  <div className="shares-count">
                    <i data-feather="link-2" />
                    <span>3</span>
                  </div>
                  <div className="comments-count">
                    <i data-feather="message-circle" />
                    <span>2</span>
                  </div>
                </div>
              </div>
              {/* /Post footer */}
            </div>
            {/* /Main wrap */}
            {/* Post #5 comments */}
            <div className="comments-wrap is-hidden">
              {/* Header */}
              <div className="comments-heading">
                <h4>
                  Comments
                  <small>(2)</small>
                </h4>
                <div className="close-comments">
                  <i data-feather="x" />
                </div>
              </div>
              {/* /Header */}
              {/* Comments body */}
              <div className="comments-body has-slimscroll">
                {/* Comment */}
                <div className="media is-comment">
                  {/* User image */}
                  <div className="media-left">
                    <div className="image">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/lana.jpeg" data-user-popover={10} alt="" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="media-content">
                    <a href="#">Lana Henrikssen</a>
                    <span className="time">2 days ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                    {/* Comment actions */}
                    <div className="controls">
                      <div className="like-count">
                        <i data-feather="thumbs-up" />
                        <span>1</span>
                      </div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    {/* Nested Comment */}
                    <div className="media is-comment">
                      {/* User image */}
                      <div className="media-left">
                        <div className="image">
                          <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/david.jpg" data-user-popover={4} alt="" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="media-content">
                        <a href="#">David Kim</a>
                        <span className="time">2 days ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                          dolore magna aliqua.</p>
                        {/* Comment actions */}
                        <div className="controls">
                          <div className="like-count">
                            <i data-feather="thumbs-up" />
                            <span>0</span>
                          </div>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      {/* Right side dropdown */}
                      <div className="media-right">
                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical" />
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="x" />
                                  <div className="media-content">
                                    <h3>Hide</h3>
                                    <small>Hide this comment.</small>
                                  </div>
                                </div>
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag" />
                                  <div className="media-content">
                                    <h3>Report</h3>
                                    <small>Report this comment.</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>                      </div>
                    </div>
                    {/* /Nested Comment */}
                  </div>
                  {/* Right side dropdown */}
                  <div className="media-right">
                    {/* /includes/pages/feed/dropdowns/comment-dropdown.html */}
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical" />
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x" />
                              <div className="media-content">
                                <h3>Hide</h3>
                                <small>Hide this comment.</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="flag" />
                              <div className="media-content">
                                <h3>Report</h3>
                                <small>Report this comment.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>              </div>
                </div>
                {/* /Comment */}
              </div>
              {/* Comments body */}
              {/* Comments footer */}
              <div className="card-footer">
                <div className="media post-comment">
                  {/* User image */}
                  <div className="media-left">
                    <p className="image is-48x48">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" data-user-popover={0} alt="" />
                    </p>
                  </div>
                  {/* Textarea */}
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea className="textarea comment-textarea" rows={5} placeholder="Write a comment..." defaultValue={""} />
                      </p>
                    </div>
                    {/* Additional actions */}
                    <div className="actions">
                      <div className="action is-auto">
                        <i data-feather="at-sign" />
                      </div>
                      <div className="action is-upload">
                        <i data-feather="camera" />
                        <input type="file" />
                      </div>
                      <a className="button is-solid primary-button raised">Post Comment</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Comments footer */}
            </div>
            {/* /Post #5 comments */}
          </div>
          {/* /POST #5 */}
          {/* Post 6 */}
          {/* /includes/pages/feed/posts/feed-post6.html */}
          {/* POST #6 */}
          <div className="card is-post is-simple">
            {/* Main wrap */}
            <div className="content-wrap">
              {/* Header */}
              <div className="card-heading">
                {/* User image */}
                <div className="user-block">
                  <div className="image">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/bobby.jpg" data-user-popover={8} alt="" />
                  </div>
                  <div className="user-info">
                    <a href="#">Bobby Brown</a>
                    <span className="time">July 26 2018, 11:14am</span>
                  </div>
                </div>
                {/* /includes/pages/feed/dropdowns/feed-post-dropdown.html */}
                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical" />
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="bookmark" />
                          <div className="media-content">
                            <h3>Bookmark</h3>
                            <small>Add this post to your bookmarks.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="bell" />
                          <div className="media-content">
                            <h3>Notify me</h3>
                            <small>Send me the updates.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="flag" />
                          <div className="media-content">
                            <h3>Flag</h3>
                            <small>In case of inappropriate content.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>      </div>
              {/* /Header */}
              {/* Post body */}
              <div className="card-body">
                {/* Post body text */}
                <div className="post-text">
                  <p>Today, when i was walking back home from my job, i figured that i should build the best social media template
                    in ThemeForest. As soon as i got back, i started working on this fresh and new project. Any suggestions
                    about where i could find some interesting resources for social media design?
                    <a href="#">#webdesign #socialmedia</a>
                  </p><p>
                  </p></div>
                {/* Post actions */}
                <div className="post-actions">
                  {/* /includes/pages/feed/buttons/feed-post-actions.html */}
                  <div className="like-wrapper">
                    <a href="javascript:void(0);" className="like-button">
                      <i className="mdi mdi-heart not-liked bouncy" />
                      <i className="mdi mdi-heart is-liked bouncy" />
                      <span className="like-overlay" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-share">
                    <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                      <i data-feather="link-2" />
                    </a>
                  </div>
                  <div className="fab-wrapper is-comment">
                    <a href="javascript:void(0);" className="small-fab">
                      <i data-feather="message-circle" />
                    </a>
                  </div>          </div>
              </div>
              {/* /Post body */}
              {/* Post footer */}
              <div className="card-footer">
                {/* Followers */}
                <div className="likers-group">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/daniel.jpg" data-user-popover={3} alt="" />
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                </div>
                <div className="likers-text">
                  <p>
                    <a href="#">Daniel</a> and
                    <a href="#">Elise</a>
                  </p>
                  <p>liked this</p>
                </div>
                {/* Post statistics */}
                <div className="social-count">
                  <div className="likes-count">
                    <i data-feather="heart" />
                    <span>2</span>
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
              </div>
              {/* /Post footer */}
            </div>
            {/* /Main wrap */}
            {/* Post #6 comments */}
            <div className="comments-wrap is-hidden">
              {/* Header */}
              <div className="comments-heading">
                <h4>
                  Comments
                  <small>(0)</small>
                </h4>
                <div className="close-comments">
                  <i data-feather="x" />
                </div>
              </div>
              {/* /Header */}
              {/* Comments body */}
              <div className="comments-body has-slimscroll">
                <div className="comments-placeholder">
                  <img src="../../assets/images/icons/feed/bubble.svg" alt="" />
                  <h3>Nothing in here yet</h3>
                  <p>Be the first to post a comment.</p>
                </div>
              </div>
              {/* /Comments body */}
              {/* Comments footer */}
              <div className="card-footer">
                <div className="media post-comment">
                  {/* User image */}
                  <div className="media-left">
                    <p className="image is-48x48">
                      <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/jenna.png" data-user-popover={8} alt="" />
                    </p>
                  </div>
                  {/* Textarea */}
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea className="textarea comment-textarea" rows={5} placeholder="Write a comment..." defaultValue={""} />
                      </p>
                    </div>
                    {/* Additional actions */}
                    <div className="actions">
                      <div className="action is-auto">
                        <i data-feather="at-sign" />
                      </div>
                      <div className="action is-upload">
                        <i data-feather="camera" />
                        <input type="file" />
                      </div>
                      <a className="button primary-button is-solid raised">Post Comment</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Comments footer */}
            </div>
            {/* /Post #6 comments */}
          </div>
          {/* /POST #6 */}
          {/* Load more posts */}
          <div className=" load-more-wrap narrow-top has-text-centered">
            <a href="#" className="load-more-button">Load More</a>
          </div>
          {/* /Load more posts */}
        </div>
        {/* /Middle column */}
        {/* Right side column */}
        <div className="column is-3">
          {/* Stories widget */}
          {/* /includes/widgets/stories-widget.html */}
          <div className="card">
            <div className="card-heading is-bordered">
              <h4>Stories</h4>
              <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                <div>
                  <div className="button">
                    <i data-feather="more-vertical" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="tv" />
                        <div className="media-content">
                          <h3>Browse stories</h3>
                          <small>View all recent stories.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="settings" />
                        <div className="media-content">
                          <h3>Settings</h3>
                          <small>Access widget settings.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="trash-2" />
                        <div className="media-content">
                          <h3>Remove</h3>
                          <small>Removes this widget from your feed.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body no-padding">
              {/* Story block */}
              <div className="story-block">
                <a id="add-story-button" href="#" className="add-story">
                  <i data-feather="plus" />
                </a>
                <div className="story-meta">
                  <span>Add a new Story</span>
                  <span>Share an image, a video or some text</span>
                </div>
              </div>
              {/* Story block */}
              <div className="story-block">
                <div className="img-wrapper">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" data-user-popover={1} alt="" />
                </div>
                <div className="story-meta">
                  <span>Dan Walker</span>
                  <span>1 hour ago</span>
                </div>
              </div>
              {/* Story block */}
              <div className="story-block">
                <div className="img-wrapper">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/bobby.jpg" data-user-popover={8} alt="" />
                </div>
                <div className="story-meta">
                  <span>Bobby Brown</span>
                  <span>3 days ago</span>
                </div>
              </div>
              {/* Story block */}
              <div className="story-block">
                <div className="img-wrapper">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/elise.jpg" data-user-popover={6} alt="" />
                </div>
                <div className="story-meta">
                  <span>Elise Walker</span>
                  <span>Last week</span>
                </div>
              </div>
            </div>
          </div>
          {/* Birthday widget */}
          {/* /includes/widgets/birthday-widget.html */}
          <div className="card is-birthday-card has-background-image" data-background="../../assets/images/illustrations/cards/birthday-bg.svg">
            <div className="card-heading">
              <i data-feather="gift" />
              <div className="dropdown is-spaced is-right dropdown-trigger is-light">
                <div>
                  <div className="button">
                    <i data-feather="more-vertical" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="clock" />
                        <div className="media-content">
                          <h3>Remind me</h3>
                          <small>Remind me of this later today.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="message-circle" />
                        <div className="media-content">
                          <h3>Message</h3>
                          <small>Send an automatic greeting message.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="trash-2" />
                        <div className="media-content">
                          <h3>Remove</h3>
                          <small>Removes this widget from your feed.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div>
                <div className="birthday-avatar">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/dan.jpg" alt="" />
                  <div className="birthday-indicator">
                    31
                  </div>
                </div>
                <div className="birthday-content">
                  <h4>Dan turns 31 today!</h4>
                  <p>Send him your best wishes by leaving something on his wall.</p>
                  <button type="button" className="button light-button">Write Message</button>
                </div>
              </div>
            </div>
          </div>
          {/* Suggested friends widget */}
          {/* /includes/widgets/suggested-friends-1-widget.html */}
          <div className="card">
            <div className="card-heading is-bordered">
              <h4>Suggested Friends</h4>
              <div className="dropdown is-spaced is-right dropdown-trigger">
                <div>
                  <div className="button">
                    <i data-feather="more-vertical" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="users" />
                        <div className="media-content">
                          <h3>All Suggestions</h3>
                          <small>View all friend suggestions.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="settings" />
                        <div className="media-content">
                          <h3>Settings</h3>
                          <small>Access widget settings.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="trash-2" />
                        <div className="media-content">
                          <h3>Remove</h3>
                          <small>Removes this widget from your feed.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body no-padding">
              {/* Suggested friend */}
              <div className="add-friend-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/nelly.png" data-user-popover={9} alt="" />
                <div className="page-meta">
                  <span>Nelly Schwartz</span>
                  <span>Melbourne</span>
                </div>
                <div className="add-friend add-transition">
                  <i data-feather="user-plus" />
                </div>
              </div>
              {/* Suggested friend */}
              <div className="add-friend-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/lana.jpeg" data-user-popover={10} alt="" />
                <div className="page-meta">
                  <span>Lana Henrikssen</span>
                  <span>Helsinki</span>
                </div>
                <div className="add-friend add-transition">
                  <i data-feather="user-plus" />
                </div>
              </div>
              {/* Suggested friend */}
              <div className="add-friend-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/gaelle.jpeg" data-user-popover={11} alt="" />
                <div className="page-meta">
                  <span>Gaelle Morris</span>
                  <span>Lyon</span>
                </div>
                <div className="add-friend add-transition">
                  <i data-feather="user-plus" />
                </div>
              </div>
              {/* Suggested friend */}
              <div className="add-friend-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/mike.jpg" data-user-popover={12} alt="" />
                <div className="page-meta">
                  <span>Mike Lasalle</span>
                  <span>Toronto</span>
                </div>
                <div className="add-friend add-transition">
                  <i data-feather="user-plus" />
                </div>
              </div>
              {/* Suggested friend */}
              <div className="add-friend-block transition-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/rolf.jpg" data-user-popover={13} alt="" />
                <div className="page-meta">
                  <span>Rolf Krupp</span>
                  <span>Berlin</span>
                </div>
                <div className="add-friend add-transition">
                  <i data-feather="user-plus" />
                </div>
              </div>
            </div>
          </div>
          {/* New job widget */}
          {/* /includes/widgets/new-job-widget.html */}
          <div className="card is-new-job-card has-background-image" data-background="../../assets/images/illustrations/cards/job-bg.svg">
            <div className="card-heading">
              <i data-feather="briefcase" />
              <div className="dropdown is-spaced is-right dropdown-trigger is-light">
                <div>
                  <div className="button">
                    <i data-feather="more-vertical" />
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="clock" />
                        <div className="media-content">
                          <h3>Remind me</h3>
                          <small>Remind me of this later today.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="message-circle" />
                        <div className="media-content">
                          <h3>Message</h3>
                          <small>Send an automatic congratz message.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="trash-2" />
                        <div className="media-content">
                          <h3>Remove</h3>
                          <small>Removes this widget from your feed.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div>
                <div className="job-avatar">
                  <img src="https://via.placeholder.com/300x300" data-demo-src="../../assets/images/avatars/nelly.png" alt="" />
                </div>
                <div className="job-content">
                  <h4>Nelly has a new job!</h4>
                  <p>Send her message congratulating her for getting this job.</p>
                  <button type="button" className="button light-button">Write Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Right side column */}
      </div>
    </div>
    {/* /Feed page main wrapper */}
  </div>
  {/* /Container */}
  {/* Create group modal in compose card */}
  {/* /includes/pages/feed/modals/create-group-modal.html */}
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
                      <div className="progress-bar progress-bar-success" style={{width: '0%'}} data-dz-uploadprogress />
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