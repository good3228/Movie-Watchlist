import "./App.css";
import Header from "./Components/Header/Header.js";
import SimpleBottomNavigation from "./Components/MainNav";
import { Container } from "@mui/system";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </Router>
    </>
  );
}

export default App;
