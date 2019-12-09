import React, { Component } from 'react';
import * as Icon from 'react-feather';

class PostFooter extends Component {
    render() {
        return (
            <div className="card-footer">
                <div className="likers-group">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/milly.jpg" data-user-popover={7} alt="" />
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/david.jpg" data-user-popover={4} alt="" />
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/nelly.png" data-user-popover={9} alt="" />
                </div>
                <div className="likers-text">
                    <p>
                        <a href="#">Milly</a>,
                        <a href="#">David</a>
                    </p>
                    <p>and 1 more liked this</p>
                </div>
                <div className="social-count">
                    <div className="likes-count">
                        <Icon.Heart />
                        <span>32</span>
                    </div>
                    <div className="shares-count">
                        <Icon.Link2 />
                        <span>4</span>
                    </div>
                    <div className="comments-count">
                        <Icon.MessageCircle />
                        <span>5</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostFooter;
