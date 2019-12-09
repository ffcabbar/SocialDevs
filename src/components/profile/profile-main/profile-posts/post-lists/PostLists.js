import React, { Component } from 'react';
import PostComments from './post-comments/PostComments';
import PostHeader from './post-header/PostHeader';
import PostBody from './post-body/PostBody';
import PostFooter from './post-footer/PostFooter';

class PostLists extends Component {
    render() {
        return (

            <div className="profile-post">
                <div className="time is-hidden-mobile">
                    <div className="img-container">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/jenna.png" alt="" />
                    </div>
                </div>
                <div className="card is-post">
                    <div className="content-wrap">
                        <PostHeader/>
                        <PostBody/>
                        <PostFooter/>
                    </div>
                    <PostComments />
                </div>
            </div>
        )
    }
}

export default PostLists;
