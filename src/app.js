import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const ExpenseDashboardPage = () => <div>DASHBOARD</div>;

const AddExpensePage = () => {
  return <div>NEW</div>;
};

const EditExpensePage = () => {
  return <div>Edit</div>;
};

const HelpPage = () => {
  return <div>Help</div>;
};

const NotFound = () => {
  return <div>404</div>;
};

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
