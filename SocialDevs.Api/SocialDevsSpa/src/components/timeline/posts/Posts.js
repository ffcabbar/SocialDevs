import React, { Component } from "react";
import { connect } from "react-redux";
import * as postActions from "../../../redux/actions/postActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Posts extends Component {
  componentDidMount() {
    const { posts, actions } = this.props;
    actions.loadPosts().catch(error => {
      alert("Loading posts failed" + error);
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.posts.map(item => {
          return (
            <div key={item.id} className="card is-post">
              {/* Main wrap */}
              <div className="content-wrap">
                {/* Post header */}
                <div className="card-heading">
                  {/* User meta */}
                  <div className="user-block">
                    <div className="image">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="../../assets/images/avatars/dan.jpg"
                        data-user-popover={1}
                        alt=""
                      />
                    </div>
                    <div className="user-info">
                      <a href="#">Furkan Cabbar</a>
                      <span className="time">{item.createdDate}</span>
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
                  </div>{" "}
                </div>
                {/* /Post header */}
                {/* Post body */}
                <div className="card-body">
                  {/* Post body text */}
                  <div className="post-text">
                    <p>{item.text}</p>
                  </div>
                  {/* Featured image */}
                  <div className="post-image">
                    <a
                      data-fancybox="post1"
                      data-lightbox-type="comments"
                      data-thumb="../../assets/images/demo/unsplash/1.jpg"
                      href="https://via.placeholder.com/1600x900"
                      data-demo-href="../../assets/images/demo/unsplash/1.jpg"
                    >
                      <img
                        src="https://via.placeholder.com/1600x900"
                        data-demo-src="../../assets/images/demo/unsplash/1.jpg"
                        alt=""
                      />
                    </a>
                    {/* Action buttons */}
                    {/* /includes/pages/feed/buttons/feed-post-actions.html */}
                    <div className="like-wrapper">
                      <a href="#!" className="like-button">
                        <i className="mdi mdi-heart not-liked bouncy" />
                        <i className="mdi mdi-heart is-liked bouncy" />
                        <span className="like-overlay" />
                      </a>
                    </div>
                    <div className="fab-wrapper is-share">
                      <a
                        href="#!"
                        className="small-fab share-fab modal-trigger"
                        data-modal="share-modal"
                      >
                        <i data-feather="link-2" />
                      </a>
                    </div>
                    <div className="fab-wrapper is-comment">
                      <a href="#!" className="small-fab">
                        <i data-feather="message-circle" />
                      </a>
                    </div>{" "}
                  </div>
                </div>
                {/* /Post body */}
                {/* Post footer */}
                <div className="card-footer">
                  {/* Followers avatars */}
                  <div className="likers-group">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="../../assets/images/avatars/dan.jpg"
                      data-user-popover={1}
                      alt=""
                    />
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="../../assets/images/avatars/david.jpg"
                      data-user-popover={4}
                      alt=""
                    />
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="../../assets/images/avatars/edward.jpeg"
                      data-user-popover={5}
                      alt=""
                    />
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="../../assets/images/avatars/milly.jpg"
                      data-user-popover={7}
                      alt=""
                    />
                  </div>
                  {/* Followers text */}
                  <div className="likers-text">
                    <p>
                      <a href="#">Milly</a>,<a href="#">David</a>
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
                  <h4>
                    Comments
                    <small>(8)</small>
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
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="../../assets/images/avatars/dan.jpg"
                          data-user-popover={1}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="media-content">
                      <a href="#">Dan Walker</a>
                      <span className="time">28 minutes ago</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris consequat.
                      </p>
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
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="../../assets/images/avatars/david.jpg"
                              data-user-popover={4}
                              alt=""
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="media-content">
                          <a href="#">David Kim</a>
                          <span className="time">15 minutes ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>
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
                          </div>{" "}
                        </div>
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
                      </div>{" "}
                    </div>
                  </div>
                  {/* /Comment */}
                  {/* Comment */}
                  <div className="media is-comment">
                    {/* User image */}
                    <div className="media-left">
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="../../assets/images/avatars/rolf.jpg"
                          data-user-popover={13}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="media-content">
                      <a href="#">Rolf Krupp</a>
                      <span className="time">9 hours ago</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua. Exercitation ullamco laboris
                        consequat.
                      </p>
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
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="../../assets/images/avatars/elise.jpg"
                              data-user-popover={6}
                              alt=""
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="media-content">
                          <a href="#">Elise Walker</a>
                          <span className="time">8 hours ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>
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
                          </div>{" "}
                        </div>
                      </div>
                      {/* /Nested Comment */}
                      {/* Nested Comment */}
                      <div className="media is-comment">
                        {/* User image */}
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="../../assets/images/avatars/rolf.jpg"
                              data-user-popover={13}
                              alt=""
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="media-content">
                          <a href="#">Rolf Krupp</a>
                          <span className="time">7 hours ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>
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
                          </div>{" "}
                        </div>
                      </div>
                      {/* /Nested Comment */}
                      {/* Nested Comment */}
                      <div className="media is-comment">
                        {/* User image */}
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="../../assets/images/avatars/elise.jpg"
                              data-user-popover={6}
                              alt=""
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="media-content">
                          <a href="#">Elise Walker</a>
                          <span className="time">6 hours ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>
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
                          </div>{" "}
                        </div>
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
                      </div>{" "}
                    </div>
                  </div>
                  {/* /Comment */}
                  {/* Comment */}
                  <div className="media is-comment">
                    {/* User image */}
                    <div className="media-left">
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="../../assets/images/avatars/lana.jpeg"
                          data-user-popover={10}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="media-content">
                      <a href="#">Lana Henrikssen</a>
                      <span className="time">10 hours ago</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua.
                      </p>
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
                      </div>{" "}
                    </div>
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
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="../../assets/images/avatars/jenna.png"
                          data-user-popover={0}
                          alt=""
                        />
                      </p>
                    </div>
                    {/* Comment Textarea */}
                    <div className="media-content">
                      <div className="field">
                        <p className="control">
                          <textarea
                            className="textarea comment-textarea"
                            rows={5}
                            placeholder="Write a comment..."
                            defaultValue={""}
                          />
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
                        <a className="button is-solid primary-button raised">
                          Post Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comments footer */}
              </div>
              {/* /Post #1 Comments */}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPosts: bindActionCreators(postActions.loadPosts, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
