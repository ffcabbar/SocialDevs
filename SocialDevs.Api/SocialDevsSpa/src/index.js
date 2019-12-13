import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.js";
import * as serviceWorker from "./serviceWorker";

//CSS Files
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/webfont.css";
import "../node_modules/bulma/css/bulma.min.css";
import "./assets/css/core.css";
import "./assets/css/app.css";

//Js Files
import "./assets/data/tipuedrop_content";
import "./assets/js/global";
import "./assets/js/main";
import "./assets/js/feed";
import "./assets/js/chat";
import "./assets/js/inbox";
import "./assets/js/profile";
import "./assets/js/friends";
import "./assets/js/events";
import "./assets/js/explorer";
import "./assets/js/news";
import "./assets/js/videos";
import "./assets/js/widgets";
import "./assets/js/signup";
// import './assets/js/autocompletes';
import "./assets/js/modal-uploader";
import "./assets/js/popovers-users";
import "./assets/js/popovers-pages";
import "./assets/js/go-live";
import "./assets/js/lightbox";
import "./assets/js/touch";
import "./assets/js/tour";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
