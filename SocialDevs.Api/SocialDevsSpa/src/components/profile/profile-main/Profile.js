import React, { Component } from 'react';
import ProfileHeader from '../common/profile-header/ProfileHeader';
import BasicInfo from './profile-widgets/basic-info/BasicInfo';
import BasicInfoWrapper from './profile-widgets/basic-info-wrapper/BasicInfoWrapper';
import ProfilePhotos from './profile-widgets/profile-photos/ProfilePhotos';
import PhotoList from './profile-widgets/profile-photos/photo-list/PhotoList';
import ProfileFriends from './profile-widgets/profile-friends/ProfileFriends';
import FriendList from './profile-widgets/profile-friends/friend-list/FriendList';
import ProfileVideos from './profile-widgets/profile-videos/ProfileVideos';
import VideoList from './profile-widgets/profile-videos/video-list/VideoList';
import ProfilePosts from './profile-posts/ProfilePosts';

class Profile extends Component {
    render() {
        return (
            <div className="view-wrapper">
                <div className="container is-custom">
                    <div id="profile-main" className="view-wrap is-headless">
                        <ProfileHeader />
                        <div className="columns">
                            <div id="profile-timeline-widgets" className="column is-4">
                                <BasicInfo />
                                <BasicInfoWrapper />
                                <ProfilePhotos />
                                <PhotoList />
                                <ProfileFriends />
                                <FriendList />
                                <ProfileVideos />
                                <VideoList />
                            </div>
                            <div className="column is-8">
                                <div id="profile-timeline-posts" className="box-heading">
                                    <h4>Posts</h4>
                                    <div className="button-wrap">
                                        <button type="button" className="button is-active">Recent</button>
                                        <button type="button" className="button">Popular</button>
                                    </div>
                                </div>
                                <ProfilePosts/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
