import { Router, Route } from "@solidjs/router";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <Router
      root={(props) => (
        <Layout>
          {props.children}
        </Layout>
      )}
    >
      <Route path="/" component={Home} />
      <Route path="/productos" component={Products} />
      <Route path="/productos/categoria/:cat" component={Products} />
      <Route path="/productos/:id" component={ProductDetail} />
      <Route path="/contacto" component={Contact} />
    </Router>
  );
}

export default App;