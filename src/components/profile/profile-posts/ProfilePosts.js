import React, { Component } from 'react';
import PostLists from './post-lists/PostLists';

class ProfilePosts extends Component {
    render() {
        return (
            <div className="profile-timeline">
                <PostLists/>
            </div>
        )
    }
}

export default ProfilePosts;
