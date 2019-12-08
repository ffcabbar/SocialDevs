import React, { Component } from "react";
import QuestionMenu from "../common/question-menu/QuestionMenu";
import QuestionMenuFixed from "../common/question-menu-fixed/QuestionMenuFixed";
import Activities from "./activities/Activities";
import ActivitiesHeader from "./activities-header/ActivitiesHeader";

class QuestionMyStats extends Component {
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
                {/* user stats */}
                <div className="stats-wrapper">
                  <ActivitiesHeader />
                  <Activities />
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

export default QuestionMyStats;
