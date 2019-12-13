import React, { Component } from 'react';
import {Heart} from 'react-feather';
class PhotoList extends Component {
    render() {
        return (
            <div className="image-row">
                <div className="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/images/demo/unsplash/3.jpg">
                    <div className="overlay" />
                    <div className="image-owner">
                        <img className="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/images/avatars/jenna.png" alt="" />
                        <div className="name">Jenna Davis</div>
                    </div>
                    <div className="photo-time">Aug 23, 2019</div>
                    <a className="photo-like">
                        <div className="inner">
                            <div className="like-overlay" />
                            <Heart/>
                        </div>
                    </a>
                </div>
                <div className="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/images/demo/unsplash/8.jpg">
                    <div className="overlay" />
                    <div className="image-owner">
                        <img className="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/images/avatars/stella.jpg" alt="" />
                        <div className="name">Stella Bergmann</div>
                    </div>
                    <div className="photo-time">Aug 19, 2019</div>
                    <a className="photo-like is-liked">
                        <div className="inner">
                            <div className="like-overlay" />
                            <Heart/>
                        </div>
                    </a>
                </div>
                <div className="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/images/demo/unsplash/4.jpg">
                    <div className="overlay" />
                    <div className="image-owner">
                        <img className="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/images/avatars/dan.jpg" alt="" />
                        <div className="name">Dan Walker</div>
                    </div>
                    <div className="photo-time">Aug 17, 2019</div>
                    <a className="photo-like is-liked">
                        <div className="inner">
                            <div className="like-overlay" />
                            <Heart/>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default PhotoList;
