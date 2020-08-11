import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNav from "./components/Nav";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FooterNav from "./components/Footer";

function App() {
  return (
    <>
      {/* <Router>
        <Nav />
        <main className="container p-3">
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </main>
      </Router> */}
    </>
  );
}

export default App;