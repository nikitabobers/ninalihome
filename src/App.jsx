import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Home from "./components/pages/home/Home";
import Shop from "./components/pages/shop/Shop";
import About from "./components/pages/about/About";
import Blog from "./components/pages/blog/Blog";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import PageNotFound from "./components/pages/notFound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/notfound" component={PageNotFound} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
