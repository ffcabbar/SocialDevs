import React, { Component } from "react";
import QuestionMenu from "../question-menu/QuestionMenu";
import QuestionPosts from "./question-posts/QuestionPosts";
import HomeCategories from "./home-categories/HomeCategories";
import QuestionMenuFixed from "../question-menu-fixed/QuestionMenuFixed";

class QuestionHome extends Component {
  render() {
    return (
      <div className="view-wrapper">

        <QuestionMenu />

        {/* Question wrap */}
        <div className="questions-wrap is-smaller">
          {/* Container */}
          <div className="container">
            {/* Categories */}
            <HomeCategories />
            <div className="columns is-open">
              <QuestionMenuFixed />
              <div className="column is-6">
                <QuestionPosts />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionHome;
