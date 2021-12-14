import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider, PrivateRoute } from "./lib/auth";
import Home from "./pages/Home/Home";
import "./App.scss";
import WatchMovie from "./pages/WatchMovie/WatchMovie";
import FinishedMovie from "./pages/FinishedMovie/FinishedMovie";
import NotFound from "./pages/NotFound/NotFound";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/watchList" component={WatchMovie} />
          <PrivateRoute exact path="/finishedMovie" component={FinishedMovie} />
          <PrivateRoute exact path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
