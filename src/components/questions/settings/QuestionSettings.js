import React, { Component } from "react";
import QuestionMenu from "../question-menu/QuestionMenu";
import QuestionMenuFixed from "../question-menu-fixed/QuestionMenuFixed";
import * as Icon from 'react-feather';

class QuestionSettings extends Component {
  render() {
    return (
      <div className="view-wrapper">
        <QuestionMenu />
        {/* Question wrap */}
        <div className="questions-wrap is-smaller">
          {/* Container */}
          <div className="container">

            <div className="columns is-open">
              <QuestionMenuFixed />
              <div className="column is-6">
                <div className="questions-settings">
                  <div className="settings-header">
                    <h2>Settings</h2>
                    <div className="control">
                      <input
                        className="input is-rounded"
                        type="text"
                        placeholder="Search..."
                      />
                      <div className="search-icon">
                        <Icon.Search/>
                      </div>
                    </div>
                  </div>
                  <div className="settings-body">
                    <div className="switch-block">
                      <label className="f-switch is-accent">
                        <input
                          type="checkbox"
                          className="is-switch"
                          defaultChecked
                        />
                        <i />
                      </label>
                      <div className="meta">
                        <span>New Question</span>
                        <span>
                          Receive a notification when someone you are following
                          posts a new question.
                        </span>
                      </div>
                    </div>
                    <div className="switch-block">
                      <label className="f-switch is-accent">
                        <input type="checkbox" className="is-switch" />
                        <i />
                      </label>
                      <div className="meta">
                        <span>New Answer</span>
                        <span>
                          Receive a notification when someone posts an answer to
                          a question you asked.
                        </span>
                      </div>
                    </div>
                    <div className="switch-block">
                      <label className="f-switch is-accent">
                        <input type="checkbox" className="is-switch" />
                        <i />
                      </label>
                      <div className="meta">
                        <span>Upvotes</span>
                        <span>
                          Receive notifications when your answers are being
                          upvoted.
                        </span>
                      </div>
                    </div>
                    <div className="switch-block">
                      <label className="f-switch is-primary">
                        <input type="checkbox" className="is-switch" />
                        <i />
                      </label>
                      <div className="meta">
                        <span>New Follower</span>
                        <span>
                          Receive a notification when someone starts following
                          you.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className="questions-side-card">
                  <img src={require('../../../assets/images/icons/questions/help.svg')} alt="" />
                  <h4>Help center</h4>
                  <p>
                    Having trouble? Please search our
                    <a className="standard-link">Help Center</a> for a quick
                    answer to your problem.
                  </p>
                </div>
                <div className="questions-side-card">
                  <img src={require('../../../assets/images/icons/questions/assistance.svg')} alt=""
                  />
                  <h4>24/7 Support</h4>
                  <p>
                    Our Help Center didn't help? Please contact our 24/7
                    <a className="standard-link">Customer Assistance</a>
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

export default QuestionSettings;
