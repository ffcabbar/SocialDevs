import React, { Component } from "react";
import QuestionMenu from "../common/question-menu/QuestionMenu";
import QuestionPosts from "../common/question-posts/QuestionPosts";
import Categories from "../common/categories/Categories";
import QuestionMenuFixed from "../common/question-menu-fixed/QuestionMenuFixed";
import CreateQuestion from "../common/create-question/CreateQuestion";

class QuestionHome extends Component {
  render() {
    return (
      <div className="view-wrapper">
        <QuestionMenu />
        <div className="questions-wrap is-smaller">
          <div className="container">
            <div className="columns is-open">
              <QuestionMenuFixed />
              <div className="column is-6">
                <CreateQuestion />
                <Categories />
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
