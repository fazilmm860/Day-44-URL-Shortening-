import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/header/Header"
import Landing from "./components/landing/Landing";
import './App.css';

class App extends Component {
  componentDidMount() { }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
        <div className="footer">
          Built by{" "}
          <a target="_blank" href="http://muhzi.com">
            Muhsin.K
          </a>© 2018
        </div>
      </div>
    );
  }
}

export default App;