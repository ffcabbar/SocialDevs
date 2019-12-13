import React, { Component } from 'react';
import * as Icon from 'react-feather';

class FriendList extends Component {
    render() {
        return (
            <div className="friend-cards-list">
                <div className="card is-friend-card">
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/dan.jpg" alt="" data-user-popover={1} />
                        <div className="text-content">
                            <a>Dan Walker</a>
                            <span>4 mutual friend(s)</span>
                        </div>
                        <div className="star-friend">
                            <Icon.Star />
                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/milly.jpg" alt="" data-user-popover={7} />
                        <div className="text-content">
                            <a>Milly Augustine</a>
                            <span>3 mutual friend(s)</span>
                        </div>
                        <div className="star-friend is-active">
                            <Icon.Star />
                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/edward.jpeg" alt="" data-user-popover={5} />
                        <div className="text-content">
                            <a>Edward Mayers</a>
                            <span>35 mutual friend(s)</span>
                        </div>
                        <div className="star-friend is-active">
                            <Icon.Star />
                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/stella.jpg" alt="" data-user-popover={2} />
                        <div className="text-content">
                            <a>Stella Bergmann</a>
                            <span>48 mutual friend(s)</span>
                        </div>
                        <div className="star-friend">
                            <Icon.Star />
                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/elise.jpg" alt="" data-user-popover={6} />
                        <div className="text-content">
                            <a>Elise Walker</a>
                            <span>1 mutual friend(s)</span>
                        </div>
                        <div className="star-friend">
                            <Icon.Star />
                        </div>
                    </div>
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/images/avatars/nelly.png" alt="" data-user-popover={9} />
                        <div className="text-content">
                            <a>Nelly Schwartz</a>
                            <span>11 mutual friend(s)</span>
                        </div>
                        <div className="star-friend">
                            <Icon.Star />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendList
