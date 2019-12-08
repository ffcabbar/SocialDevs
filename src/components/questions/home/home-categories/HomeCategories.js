import React, { Component } from 'react'

class HomeCategories extends Component {
    render() {
        return (
            <div className="tabs question-tabs is-centered">
                <ul>
                    <li className="is-active">
                        <a>Coding</a>
                    </li>
                    <li>
                        <a>Gaming</a>
                    </li>
                    <li>
                        <a>Fashion</a>
                    </li>
                    <li>
                        <a>Travel</a>
                    </li>
                    <li>
                        <a>Books</a>
                    </li>
                    <li>
                        <a>Movies</a>
                    </li>
                    <li>
                        <a href="questions-categories.html">All</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeCategories;
