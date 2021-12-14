import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthProvider, PrivateRoute } from "./lib/auth";
import Home from "./pages/Home/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
