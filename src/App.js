import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** import navbar component */
import { Navbar } from "./components/navbar";

/** import all pages into application */
import { HomePage } from "./pages/homepage";
import { DashboardPage } from "./pages/dashboard";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/dashboard">
            <DashboardPage />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
