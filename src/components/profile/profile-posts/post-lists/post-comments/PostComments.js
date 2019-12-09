import React, { Component } from 'react';
import CommentLists from './comment-list/CommentLists';
import * as Icon from 'react-feather';

class PostComments extends Component {
    render() {
        return (
            <div className="comments-wrap is-hidden">
                <div className="comments-heading">
                    <h4>Comments
                    <small>(5)</small></h4>
                    <div className="close-comments">
                        <Icon.X/>
                    </div>
                </div>

                <div className="comments-body has-slimscroll">
                    <CommentLists />
                </div>
                <div className="card-footer">
                    <div className="media post-comment">
                        <div className="media-left">
                            <p className="image is-48x48">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/jenna.png" data-user-popover={0} alt="" />
                            </p>
                        </div>
                        <div className="media-content">
                            <div className="field">
                                <p className="control">
                                    <textarea className="textarea comment-textarea" rows={5} placeholder="Write a comment..." defaultValue={""} />
                                </p>
                            </div>
                            <div className="actions">
                                <div className="action is-auto">
                                    <Icon.AtSign/>
                                </div>
                                <div className="action is-upload">
                                    <Icon.Camera/>
                                    <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">Post Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostComments;
