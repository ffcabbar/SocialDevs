import React, { Component } from 'react';
import * as Icon from 'react-feather';

class AboutOverview extends Component {
    render() {
        return (
            <div id="overview-content" className="content-section is-active">
                <div className="columns">
                    <div className="column">

                        <div className="flex-block">
                            <img src="https://via.placeholder.com/400x400" alt="" data-page-popover={4} />
                            <div className="flex-block-meta">
                                <span>Works at <a>Slicer</a></span>
                                <a className="action-link">Edit your professional info</a>
                            </div>
                            <div className="go-button">
                                <Icon.ArrowRight />
                            </div>
                        </div>

                        <div className="flex-block">
                            <img src="https://via.placeholder.com/400x400" alt="" data-page-popover={6} />
                            <div className="flex-block-meta">
                                <span>Studied at <a>Brent University</a></span>
                                <a className="action-link">Edit your education info</a>
                            </div>
                            <div className="go-button">
                                <Icon.ArrowRight />
                            </div>
                        </div>

                        <div className="flex-block">
                            <img src="https://via.placeholder.com/400x400" alt="" data-page-popover={8} />
                            <div className="flex-block-meta">
                                <span>Lives in <a>Los Angeles, CA</a></span>
                                <a className="action-link">Edit your location</a>
                            </div>
                            <div className="go-button">
                                <Icon.ArrowRight />
                            </div>
                        </div>

                        <div className="flex-block">
                            <img src="https://via.placeholder.com/300x300" data-user-popover={1} alt="" />
                            <div className="flex-block-meta">
                                <span>Married to <a>Dan Walker</a></span>
                                <a className="action-link">Edit your situation</a>
                            </div>
                            <div className="go-button">
                                <Icon.ArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="about-summary">
                            <div className="content">
                                <h3>About Me</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter homines, aliter philosophos loqui putas oportere? Duo
                                  enim genera quae erant, fecit tria. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. Hoc simile tandem est?
                                                         </p>
                                <p>Eam tum adesse, cum dolor omnis absit; Duo Reges: constructio interrete. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutOverview;
