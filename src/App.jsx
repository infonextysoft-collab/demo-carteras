import { Router, Route } from "@solidjs/router";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Promotions from "./pages/Promotions/Promotions";
import News from "./pages/News/News";
import BuyingGuide from "./pages/BuyingGuide/BuyingGuide";

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
      <Route path="/promociones" component={Promotions} />
      <Route path="/novedades" component={News} />
      <Route path="/guia-compra" component={BuyingGuide} />
    </Router>
  );
}

export default App;