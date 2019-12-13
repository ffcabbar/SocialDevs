import React, { Component } from 'react';
import {Heart} from 'react-feather';
class PhotoList extends Component {
    render() {
        return (
            <div className="photo-list">
                <div className="photo-wrapper">
                    <div className="photo-overlay" />
                    <div className="small-like">
                        <div className="inner">
                            <div className="like-overlay" />
                            <Heart/>
                        </div>
                    </div>
                    <img src="https://via.placeholder.com/400x400" alt="" />
                </div>
            </div>
        )
    }
}

export default PhotoList;
