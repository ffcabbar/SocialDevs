import React, { Component } from "react";
import QuestionMenu from "../question-menu/QuestionMenu";
import CategoryList from "./category-list/CategoryList";

class QuestionCategories extends Component {
  render() {
    return (
      <div className="view-wrapper">
        <QuestionMenu />

        <div className="questions-wrap is-smaller">
          {/* Container */}
          <div className="container">
            <div className="question-content is-large">

              <div className="columns is-open">
                <CategoryList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCategories;
