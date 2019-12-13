import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Home, MessageCircle, Hexagon, Layers, Settings } from 'react-feather';

class QuestionMenuFixed extends Component {
    render() {
        return (
            <div className="column is-3">
                <ul className="questions-menu questions-menu-fixed">
                    <li>
                        <Link className="menu-item" to={"/question/home"}>
                            <Home />
                            <span>Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/my-questions"}>
                            <MessageCircle />
                            <span>My Questions</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/my-stats"}>
                            <Hexagon />
                            <span>My Stats</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/categories"}>
                            <Layers />
                            <span>Categories</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/settings"}>
                            <Settings />
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
                <ul className="questions-menu">
                    <li>
                        <Link className="menu-item" to={"/question/home"}>
                            <Home />
                            <span>Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/my-questions"}>
                            <MessageCircle />
                            <span>My Questions</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/my-stats"}>
                            <Hexagon />
                            <span>My Stats</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/categories"}>
                            <Layers />
                            <span>Categories</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="menu-item" to={"/question/settings"}>
                            <Settings />
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default QuestionMenuFixed;
