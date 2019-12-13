import React, { Component } from 'react';

class VideoList extends Component {
    render() {
        return (
            <div className="is-videos-widget">
                <div className="video-container">
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/images/demo/widgets/videos/1.jpg" alt="" />
                    <div className="video-button">
                        <img src={require('../../../../../../assets/images/icons/video/play.svg')} alt="" />
                    </div>
                    <div className="video-overlay" />
                </div>
                <div className="video-container">
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/images/demo/widgets/videos/2.jpg" alt="" />
                    <div className="video-button">
                        <img src={require('../../../../../../assets/images/icons/video/play.svg')} alt="" />
                    </div>
                    <div className="video-overlay" />
                </div>
                <div className="video-container">
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/images/demo/widgets/videos/3.jpg" alt="" />
                    <div className="video-button">
                        <img src={require('../../../../../../assets/images/icons/video/play.svg')} alt="" />
                    </div>
                    <div className="video-overlay" />
                </div>
            </div>
        )
    }
}

export default VideoList;
