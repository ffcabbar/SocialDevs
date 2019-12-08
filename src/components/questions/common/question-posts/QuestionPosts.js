import React, { Component } from "react";
import * as Icon from 'react-feather';

class QuestionPosts extends Component {
    render() {
        return (
            <div className="question-content">
                <div className="question-block is-top-spaced">
                    {/* Title */}
                    <a href="questions-single.html" className="question-title is-link">
                        Is there a simple guide for Sass Mixins?
                     </a>
                    {/* Author */}
                    <div className="question-author">
                        <img
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="../../../../assets/images/avatars/brian.jpg"
                            data-user-popover={19}
                            alt=""
                        />
                        <div className="meta">
                            <span>Brian Stevenson</span>
                            <span>3 hours ago</span>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="question-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eum
                            nihili facit; Quacumque enim ingredimur, in aliqua historia
                            vestigium ponimus. Duo Reges: constructio interrete. Proclivi currit
                            oratio. Quae contraria sunt his, malane? Quod quidem nobis non saepe
                            contingit.
                         </p>
                        <div className="tags">
                            <span className="tag">stylesheets</span>
                            <span className="tag">sass</span>
                            <span className="tag">mixins</span>
                            <span className="tag">bourbon</span>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="question-footer">
                        <div className="likes">
                            <div className="like-icon">
                                <Icon.Heart />
                            </div>
                            <span>12 Likes</span>
                        </div>
                        <div className="report">
                            <div className="report-icon">
                                <Icon.AlertOctagon />
                            </div>
                            <span>Report Topic</span>
                        </div>
                    </div>
                    <div className="answers-count">
                        <span>9 Answers</span>
                    </div>
                </div>


                <div className="question-block is-top-spaced">
                    {/* Title */}
                    <a href="questions-single.html" className="question-title is-link">
                        Is there a simple guide for Sass Mixins?
                    </a>
                    {/* Author */}
                    <div className="question-author">
                        <img
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/images/avatars/brian.jpg"
                            data-user-popover={19}
                            alt=""
                        />
                        <div className="meta">
                            <span>Brian Stevenson</span>
                            <span>3 hours ago</span>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="question-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eum
                            nihili facit; Quacumque enim ingredimur, in aliqua historia
                            vestigium ponimus. Duo Reges: constructio interrete. Proclivi currit
                            oratio. Quae contraria sunt his, malane? Quod quidem nobis non saepe
                            contingit.
                         </p>
                        <div className="tags">
                            <span className="tag">stylesheets</span>
                            <span className="tag">sass</span>
                            <span className="tag">mixins</span>
                            <span className="tag">bourbon</span>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="question-footer">
                        <div className="likes">
                            <div className="like-icon">
                                <Icon.Heart />
                            </div>
                            <span>12 Likes</span>
                        </div>
                        <div className="report">
                            <div className="report-icon">
                                <Icon.AlertOctagon />
                            </div>
                            <span>Report Topic</span>
                        </div>
                    </div>
                    <div className="answers-count">
                        <span>9 Answers</span>
                    </div>
                </div>


                <div className=" load-more-wrap has-text-centered">
                    <a href="#" className="load-more-button">
                        Load More
                    </a>
                </div>
            </div>
        );
    }
}

export default QuestionPosts;
