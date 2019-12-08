import React, { Component } from "react";
import QuestionMenu from "../question-menu/QuestionMenu";
import QuestionMenuFixed from "../question-menu-fixed/QuestionMenuFixed";

class QuestionMyStats extends Component {
  render() {
    return (
      <div className="view-wrapper">
        {/* /html/includes/pages/questions/questions-nav-menu.html */}
        <QuestionMenu />
        {/* Question wrap */}
        <div className="questions-wrap is-smaller">
          {/* Container */}
          <div className="container">

            <div className="columns is-open">

              <QuestionMenuFixed />

              <div className="column is-6">
                {/* user stats */}
                <div className="stats-wrapper">
                  <div className="stats-header">
                    <div className="avatar-wrapper">
                      <img
                        className="avatar"
                        src="https://via.placeholder.com/150x150"
                        data-demo-src="assets/images/avatars/jenna.png"
                        data-user-popover={0}
                        alt=""
                      />
                      <div className="badge">
                        <i data-feather="check" />
                      </div>
                    </div>
                    <div className="user-info">
                      <h4>Jenna Davis</h4>
                      <p>From Melbourne</p>
                      <a className="button is-follow">Follow</a>
                    </div>
                    <div className="main-stats">
                      <div className="stat-block">
                        <h4>Questions</h4>
                        <p>1337</p>
                      </div>
                      <div className="stat-block is-centered">
                        <h4>Followers</h4>
                        <p>618</p>
                      </div>
                      <div className="stat-block">
                        <h4>Following</h4>
                        <p>72</p>
                      </div>
                    </div>
                  </div>

                  <div className="quick-activity">
                    <div className="header">
                      <h3>Activity</h3>
                    </div>
                    <div className="activity-list">
                      <div className="activity-item is-best">
                        <div className="avatar-wrap">
                          <img
                            className="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/images/avatars/elise.jpg"
                            data-user-popover={6}
                            alt=""
                          />
                          <div className="badge">
                            <i data-feather="check" />
                          </div>
                        </div>
                        <div className="meta">
                          <span>Elise Walker</span>
                          <span>
                            Just asked{" "}
                            <a>
                              Is there a way to quickly convert a project from
                              Angular to React?
                            </a>
                          </span>
                          <small>42 minutes ago</small>
                        </div>
                      </div>
                      <div className="activity-item">
                        <div className="avatar-wrap">
                          <img
                            className="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/images/avatars/dan.jpg"
                            data-user-popover={1}
                            alt=""
                          />
                          <div className="badge">
                            <i data-feather="check" />
                          </div>
                        </div>
                        <div className="meta">
                          <span>Dan Walker</span>
                          <span>
                            Marked <a>your answer</a> as the best answer to his
                            question.
                          </span>
                          <small>1 hour ago</small>
                        </div>
                      </div>
                      <div className="activity-item">
                        <div className="avatar-wrap">
                          <img
                            className="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/images/avatars/daniel.jpg"
                            data-user-popover={3}
                            alt=""
                          />
                          <div className="badge">
                            <i data-feather="check" />
                          </div>
                        </div>
                        <div className="meta">
                          <span>Daniel Wellington</span>
                          <span>
                            Replied to{" "}
                            <a>
                              Is there a cheatsheet listing all available
                              browser polyfills?
                            </a>
                          </span>
                          <small>3 hours ago</small>
                        </div>
                      </div>
                      <div className="activity-item is-best">
                        <div className="avatar-wrap">
                          <img
                            className="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/images/avatars/lana.jpeg"
                            data-user-popover={10}
                            alt=""
                          />
                          <div className="badge">
                            <i data-feather="check" />
                          </div>
                        </div>
                        <div className="meta">
                          <span>Lana Henrikssen</span>
                          <span>
                            Marked <a>your answer</a> as the best answer to her
                            question.
                          </span>
                          <small>5 hours ago</small>
                        </div>
                      </div>
                      <div className="activity-item">
                        <div className="avatar-wrap">
                          <img
                            className="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/images/avatars/placeholder-m.jpg"
                            alt=""
                          />
                          <div className="badge">
                            <i data-feather="check" />
                          </div>
                        </div>
                        <div className="meta">
                          <span>Hank Robson</span>
                          <span>
                            Replied to{" "}
                            <a>
                              Is there a cheatsheet listing all available
                              browser polyfills?
                            </a>
                          </span>
                          <small>5 hours ago</small>
                        </div>
                      </div>
                    </div>
                    {/* Load more */}
                    <div className=" load-more-wrap has-text-centered">
                      <a href="#" className="load-more-button">
                        Load More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className="questions-side-card">
                  <img src="assets/images/icons/questions/help.svg" alt="" />
                  <h4>Help center</h4>
                  <p>
                    Having trouble? Please search our{" "}
                    <a className="standard-link">Help Center</a> for a quick
                    answer to your problem.
                  </p>
                </div>
                <div className="questions-side-card">
                  <img
                    src="assets/images/icons/questions/assistance.svg"
                    alt=""
                  />
                  <h4>24/7 Support</h4>
                  <p>
                    Our Help Center didn't help? Please contact our 24/7{" "}
                    <a className="standard-link">Customer Assistance</a>{" "}
                    hotline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionMyStats;
