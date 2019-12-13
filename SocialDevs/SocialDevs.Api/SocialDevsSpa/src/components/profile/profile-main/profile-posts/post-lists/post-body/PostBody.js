import React, { Component } from 'react';
import * as Icon from 'react-feather';

class PostBody extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="post-text">
                    <p>Today i visited this amazing little fashion store in Church street. Everything is handmade, from skirts
                      to bags. Their products really have an outstanding quality. If you don't know them already, well
                      it's time to make your move!
                    </p>
                </div>
                <div className="post-image">
                    <a data-fancybox="profile-post1" data-lightbox-type="comments" data-thumb="assets/images/demo/unsplash/8.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="assets/images/demo/unsplash/8.jpg">
                        <img src="https://via.placeholder.com/1600x900" data-demo-src="assets/images/demo/unsplash/8.jpg" alt="" />
                    </a>
                    <div className="like-wrapper">
                        <a href="javascript:void(0);" className="like-button">
                            <i className="mdi mdi-heart not-liked bouncy" />
                            <i className="mdi mdi-heart is-liked bouncy" />
                            <span className="like-overlay" />
                        </a>
                    </div>
                    <div className="fab-wrapper is-share">
                        <a href="javascript:void(0);" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                            <Icon.Link2 />
                        </a>
                    </div>
                    <div className="fab-wrapper is-comment">
                        <a href="javascript:void(0);" className="small-fab">
                            <Icon.MessageCircle />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostBody;
