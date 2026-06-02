import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.css";

function Layout(props) {
  return (
    <div class="layout">
      <Header />

      <main class="layout__main">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;