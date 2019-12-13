import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Home, MessageCircle, Hexagon, Layers, Settings } from 'react-feather';


class QuestionMenu extends Component {
  render() {
    return (
      <div className="questions-nav">
        <div className="inner is-scrollable">
          <div className="container">
            <div className="questions-nav-menu">

              <Link className="menu-item" to={"/question/home"}>
                <Home />
                <span>Home</span>
              </Link>

              <a href="questions-single.html" className="menu-item">
                <MessageCircle />
                <span>My Questions</span>
              </a>

              <Link className="menu-item" to={"/question/mystats"}>
                <Hexagon />
                <span>My Stats</span>
              </Link>

              <Link className="menu-item" to={"/question/categories"}>
                <Layers />
                <span>Categories</span>
              </Link>

              <Link className="menu-item" to={"/question/settings"}>
                <Settings />
                <span>Settings</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionMenu;
