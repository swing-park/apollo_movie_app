import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import client from "./Apollo";
import GlobalStyles from "../Styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Detail} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
