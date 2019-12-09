import React from "react";
import Header from "./common/header/Header";
import Timeline from "./timeline/Timeline";
import QuestionSettings from "./questions/settings/QuestionSettings";
import QuestionMyStats from "./questions/my-stats/QuestionMyStats";
import QuestionCategories from "./questions/categories/QuestionCategories";
import QuestionHome from "./questions/home/QuestionHome";
import { Route, Switch } from "react-router-dom";
import MyQuestions from "./questions/my-questions/MyQuestions";
import Profile from "./profile/profile-main/Profile";
import ProfileAbout from "./profile/profile-about/ProfileAbout";
import ProfileFriends from "./profile/profile-friends/ProfileFriends";
import ProfilePhotos from "./profile/profile-photos/ProfilePhotos";

function App() {
  return (
    <div>
      <div className="app-overlay"></div>
      <Header />
      <Switch>
        <Route exact path="/" component={Timeline} />
        <Route exact path="/question/home" component={QuestionHome} />
        <Route exact path="/question/settings" component={QuestionSettings} />
        <Route
          exact
          path="/question/categories"
          component={QuestionCategories}
        />
        <Route exact path="/question/my-stats" component={QuestionMyStats} />
        <Route exact path="/question/my-questions" component={MyQuestions} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/about" component={ProfileAbout} />
        <Route exact path="/profile/friends" component={ProfileFriends} />
        <Route exact path="/profile/photos" component={ProfilePhotos} />
      </Switch>
    </div>
  );
}

export default App;
