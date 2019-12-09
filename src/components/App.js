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
import Login from "./account/login/Login";
import Register from "./account/register/Register";

function App() {
  return (
    <div>
      <div className="app-overlay"></div>
      {window.location.pathname === '/account/login' || window.location.pathname === '/account/register' ? null : <Header />}
      {/*Buraya yukardaki koşula göre header componenti geliyor veya gelmiyor*/}
      <Switch>
        <Route exact path="/" component={Timeline} />
        <Route exact path='/account/login' component={Login}/>
        <Route exact path='/account/register' component={Register} />
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
