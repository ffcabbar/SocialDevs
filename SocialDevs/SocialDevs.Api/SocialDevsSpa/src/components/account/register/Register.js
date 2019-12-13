import React, { Component } from "react";
import {Link} from "react-router-dom";
import * as Icon from "react-feather";

class Register extends Component {
  render() {
    return (
      <div>
        {/* Pageloader */}
        <div className="pageloader" />
        <div className="infraloader is-active" />
        <div className="signup-wrapper">
          <div className="fake-nav">
            <a href="/" className="logo">
              <img
                src={require('../../../assets/images/logo/friendkit.svg')}
                width={112}
                height={28}
                alt=""
              />
            </a>
          </div>
          <div className="process-bar-wrap" style={{background:"#f4f4f4"}}>
            <div className="process-bar">
              <div className="progress-wrap">
                <div className="track" />
                <div className="bar" />
                <div
                  id="step-dot-1"
                  className="dot is-first is-active is-current"
                  data-step={0}
                >
                  <Icon.Smile />
                </div>
                <div id="step-dot-2" className="dot is-second" data-step={25}>
                  <Icon.User />
                </div>
                <div id="step-dot-3" className="dot is-third" data-step={50}>
                  <Icon.Image />
                </div>
                <div id="step-dot-4" className="dot is-fourth" data-step={75}>
                  <Icon.Lock />
                </div>
                <div id="step-dot-5" className="dot is-fifth" data-step={100}>
                  <Icon.Flag />
                </div>
              </div>
            </div>
          </div>
          <div className="outer-panel" style={{background:"#f4f4f4"}}>
            <div className="outer-panel-inner">
              <div className="process-title">
                <h2 id="step-title-1" className="step-title is-active">
                  Welcome, select an account type.
                </h2>
                <h2 id="step-title-2" className="step-title">
                  Tell us more about you.
                </h2>
                <h2 id="step-title-3" className="step-title">
                  Upload a profile picture.
                </h2>
                <h2 id="step-title-4" className="step-title">
                  Secure your account.
                </h2>
                <h2 id="step-title-5" className="step-title">
                  You're all set. Ready?
                </h2>
              </div>
              <div id="signup-panel-1" className="process-panel-wrap is-active">
                <div className="columns">
                  <div className="column is-4">
                    <div className="account-type">
                      <img
                        src={require('../../../assets/images/illustrations/signup/company.svg')}
                        alt=""
                      />
                      <h3>Company</h3>
                      <p>
                        Create a company account to be able to do some awesome
                        things.
                      </p>
                      <button
                        className="button is-fullwidth is-rounded process-button"
                        data-step="step-dot-2"
                        disabled
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="account-type">
                      <img
                        src={require('../../../assets/images/illustrations/signup/public.svg')}
                        alt=""
                      />
                      <h3>Public Person</h3>
                      <p>
                        Create a company account to be able to do some awesome
                        things.
                      </p>
                      <a
                        className="button is-fullwidth is-rounded process-button"
                        data-step="step-dot-2"
                      >
                        Continue
                      </a>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="account-type">
                      <img
                        src={require('../../../assets/images/illustrations/signup/personal.svg')}
                        alt=""
                      />
                      <h3>Personal</h3>
                      <p>
                        Create a company account to be able to do some awesome
                        things.
                      </p>
                      <button
                        className="button is-fullwidth is-rounded process-button"
                        data-step="step-dot-2"
                        disabled
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="signup-panel-2" className="process-panel-wrap is-narrow">
                <div className="form-panel">
                  <div className="field">
                    <label>First Name</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Last Name</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <a
                    className="button is-rounded process-button"
                    data-step="step-dot-1"
                  >
                    Back
                  </a>
                  <a
                    className="button is-rounded process-button is-next"
                    data-step="step-dot-3"
                  >
                    Next
                  </a>
                </div>
              </div>
              <div id="signup-panel-3" className="process-panel-wrap is-narrow">
                <div className="form-panel">
                  <div className="photo-upload">
                    <div className="preview">
                      <a className="upload-button">
                        <Icon.Plus />
                      </a>
                      <img
                        id="upload-preview"
                        src='https://via.placeholder.com/150x150'
                        alt=""
                      />
                      <form
                        id="profile-pic-dz"
                        className="dropzone is-hidden"
                        action="/"
                      />
                    </div>
                    <div className="limitation">
                      <small>
                        Only images with a size lower than 3MB are allowed.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <a
                    className="button is-rounded process-button"
                    data-step="step-dot-2"
                  >
                    Back
                  </a>
                  <a
                    className="button is-rounded process-button is-next"
                    data-step="step-dot-4"
                  >
                    Next
                  </a>
                </div>
              </div>
              <div id="signup-panel-4" className="process-panel-wrap is-narrow">
                <div className="form-panel">
                  <div className="field">
                    <label>Password</label>
                    <div className="control">
                      <input
                        type="password"
                        className="input"
                        placeholder="Choose a password"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Repeat Password</label>
                    <div className="control">
                      <input
                        type="password"
                        className="input"
                        placeholder="Repeat your password"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <a
                    className="button is-rounded process-button"
                    data-step="step-dot-3"
                  >
                    Back
                  </a>
                  <a
                    className="button is-rounded process-button is-next"
                    data-step="step-dot-5"
                  >
                    Next
                  </a>
                </div>
              </div>
              <div id="signup-panel-5" className="process-panel-wrap is-narrow">
                <div className="form-panel">
                  <img
                    className="success-image"
                    src={require('../../../assets/images/illustrations/signup/mailbox.svg')}
                    alt=""
                  />
                  <div className="success-text">
                    <h3>Congratz, you successfully created your account.</h3>
                    <p>
                      {" "}
                      We just sent you a confirmation email. PLease confirm your
                      account within 24 hours.
                    </p>
                    <Link
                      to={"/account/login"}
                      className="button is-fullwidth is-rounded"
                    >
                      Let Me In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Edit Credit card Modal*/}
          <div
            id="crop-modal"
            className="modal mdl-modal is-small crop-modal is-animated"
          >
            <div className="modal-background" />
            <div className="modal-content">
              <div className="modal-card">
                <header className="modal-card-head">
                  <div className="modal-card-title">
                    <span>Crop your picture</span>
                  </div>
                  <button className="mdl-modal-close" aria-label="close">
                    <Icon.X />
                  </button>
                </header>
                <div className="modal-card-body">
                  <div id="cropper-wrapper" className="cropper-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
