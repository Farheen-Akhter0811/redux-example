import logo from "./logo.svg"
import "./App.css"

import Map from "./components/map"
import { Provider } from "react-redux"
import store from "./store"
import HomeButton from "./components/HomeButton"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const name = "feenu"
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to={`/dashboard/${name}`}>Dashboard</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/home">
              <HomeButton />
            </Route>
            {/* <Route path="/about">
              <PostForm />
            </Route> */}
            <Route path="/dashboard/:name">
              <Map />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
