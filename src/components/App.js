import React from "react";
import Header from "./common/Header";
import Timeline from "./timeline/Timeline";
import QuestionSettings from "./questions/settings/QuestionSettings";
import QuestionMyStats from "./questions/my-stats/QuestionMyStats";
import QuestionCategories from "./questions/categories/QuestionCategories";
import QuestionHome from "./questions/home/QuestionHome";
import { Route, Switch } from "react-router-dom";
import MyQuestions from "./questions/my-questions/MyQuestions";

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
      </Switch>
    </div>
  );
}

export default App;
