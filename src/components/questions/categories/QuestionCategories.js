import React, { Component } from "react";
import QuestionMenu from "../question-menu/QuestionMenu";
import * as Icon from 'react-feather';

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
                <div className="column">
                  <div className="categories-header">
                    <h2>Categories</h2>
                    <div className="control">
                      <input
                        className="input is-rounded"
                        type="text"
                        placeholder="Filter..."
                      />
                      <div className="search-icon">
                        <Icon.Search />
                      </div>
                    </div>
                  </div>
                  <div className="tile is-ancestor categories-tile-grid">
                    <div className="tile is-vertical is-8">
                      <div className="tile">
                        <div className="tile is-parent is-vertical">
                          <a className="tile is-child category-box is-primary">
                            <img
                              src={require('../../../assets/images/illustrations/questions/programming.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">Programming</h3>
                              <p>Talk about code and stuff</p>
                            </div>
                          </a>
                          <a className="tile is-child category-box is-accent">
                            <img
                              src={require('../../../assets/images/illustrations/questions/reading.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">Reading</h3>
                              <p>About books &amp; Litterature</p>
                            </div>
                          </a>
                        </div>
                        <div className="tile is-parent is-vertical">
                          <a className="tile is-child category-box is-accent">
                            <img
                              src={require('../../../assets/images/illustrations/questions/travel.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">Travel</h3>
                              <p>Trips around the world</p>
                            </div>
                          </a>
                          <a className="tile is-child category-box is-primary">
                            <img
                              src={require('../../../assets/images/illustrations/questions/gastronomy.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">Gastronomy</h3>
                              <p>Food, drinks and beverages</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <a className="tile is-child category-box is-accent is-row">
                          <img
                            src={require('../../../assets/images/illustrations/questions/lifestyle.svg')}
                            alt=""
                          />
                          <div className="box-content">
                            <h3 className="title is-6">Lifestyle</h3>
                            <p>
                              Lorem ipsum sit dolor amet is a dummy text that is
                              often used by typographers and the web industry.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="tile is-parent is-vertical">
                      <a className="tile is-child category-box is-accent is-taller">
                        <img
                          src={require('../../../assets/images/illustrations/questions/mobile-apps.svg')}
                          alt=""
                        />
                        <div className="box-content">
                          <h3 className="title is-6">Mobile Apps</h3>
                          <p>
                            Lorem ipsum sit dolor amet is a dummy text that is
                            often used by typographers and the web industry.
                          </p>
                        </div>
                      </a>
                      <a className="tile is-child category-box is-primary is-taller">
                        <img
                          src={require('../../../assets/images/illustrations/questions/social-media.svg')}
                          alt=""
                        />
                        <div className="box-content">
                          <h3 className="title is-6">Social Media</h3>
                          <p>
                            Lorem ipsum sit dolor amet is a dummy text that is
                            often used by typographers and the web industry.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="tile is-ancestor">
                    <div className="tile is-parent is-vertical">
                      <a className="tile is-child category-box is-accent is-taller">
                        <img
                          src={require('../../../assets/images/illustrations/questions/blogging.svg')}
                          alt=""
                        />
                        <div className="box-content">
                          <h3 className="title is-6">Blogging</h3>
                          <p>
                            Lorem ipsum sit dolor amet is a dummy text that is
                            often used by typographers and the web industry.
                          </p>
                        </div>
                      </a>
                      <a className="tile is-child category-box is-primary is-taller">
                        <img
                          src={require('../../../assets/images/illustrations/questions/automotive.svg')}
                          alt=""
                        />
                        <div className="box-content">
                          <h3 className="title is-6">Automotive</h3>
                          <p>
                            Lorem ipsum sit dolor amet is a dummy text that is
                            often used by typographers and the web industry.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="tile is-vertical is-8">
                      <div className="tile">
                        <div className="tile is-parent is-vertical">
                          <a className="tile is-child category-box is-primary">
                            <img
                              src={require('../../../assets/images/illustrations/questions/business.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">Business</h3>
                              <p>Business ideas &amp; stuff</p>
                            </div>
                          </a>
                          <a className="tile is-child category-box is-accent">
                            <img
                              src={require('../../../assets/images/illustrations/questions/shopping.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">Shopping</h3>
                              <p>Shopping &amp; Good Deals</p>
                            </div>
                          </a>
                        </div>
                        <div className="tile is-parent is-vertical">
                          <a className="tile is-child category-box is-accent">
                            <img
                              src={require('../../../assets/images/illustrations/questions/wordpress.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">WordPress</h3>
                              <p>Discussions about WordPress</p>
                            </div>
                          </a>
                          <a className="tile is-child category-box is-primary">
                            <img
                              src={require('../../../assets/images/illustrations/questions/sports.svg')}
                              alt=""
                            />
                            <div className="box-content">
                              <h3 className="title is-6">
                                Sports &amp; Fitness
                              </h3>
                              <p>All about healthy lifestyles</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <a className="tile is-child category-box is-accent is-row">
                          <img
                            src={require('../../../assets/images/illustrations/questions/movies.svg')}
                            alt=""
                          />
                          <div className="box-content">
                            <h3 className="title is-6">Movies</h3>
                            <p>
                              Lorem ipsum sit dolor amet is a dummy text that is
                              often used by typographers and the web industry.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Load more Categories */}
                  <div className=" load-more-wrap has-text-centered">
                    <a href="#" className="load-more-button">
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCategories;
