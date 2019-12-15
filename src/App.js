import React from 'react';
import Header from "./components/Header";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from "./containers/App/Routes";

const App = () => {
  return (
    <>
      <Router>
        <header className="l-app__header">
          <Header/>
        </header>
        <main className="l-app__ctn">
          <Routes/>
        </main>
      </Router>
    </>
  );
}

export default App;
