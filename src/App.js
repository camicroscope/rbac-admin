import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** import navbar component */
import { Navbar } from "./components/navbar";

/** import all pages into application */
import { HomePage } from "./pages/homepage";
import { DashboardPage } from "./pages/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
