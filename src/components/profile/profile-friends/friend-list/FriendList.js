import React, { Component } from 'react';
import {MessageCircle} from 'react-feather';
class FriendList extends Component {
    render() {
        return (
            <div className="column is-3">
                <a className="friend-item has-text-centered">
                    <div className="avatar-wrap">
                        <div className="circle" />
                        <div className="chat-button">
                            <MessageCircle/>
                        </div>
                        <img src="https://via.placeholder.com/150x150" data-demo-src="assets/images/avatars/milly.jpg" data-user-popover={7} alt="" />
                    </div>
                    <h3>İsmail DOĞAN</h3>
                    <p>From Istanbul</p>
                </a>
            </div>
        )
    }
}

export default FriendList;
