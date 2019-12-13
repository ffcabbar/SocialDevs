import React, { Component } from 'react';
import { Heart } from 'react-feather';

class VideoList extends Component {
    render() {
        return (
            <div className="video-wrapper">
                <div className="video-overlay" />
                <div className="video-length">02:32</div>
                <div className="small-like">
                    <div className="inner">
                        <div className="like-overlay" />
                        <Heart />
                    </div>
                </div>
                <img src="https://via.placeholder.com/800x600" alt="" />
                <div className="video-button" data-video-id="LTrzSSf0YlA">
                    <img src={require('../../../../../assets/images/icons/video/play.svg')} alt="" />
                </div>
            </div>
        )
    }
}

export default VideoList;
