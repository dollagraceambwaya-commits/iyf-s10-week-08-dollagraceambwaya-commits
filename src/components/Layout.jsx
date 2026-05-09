import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

function Layout({ children, sidebar = null }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <main>{children}</main>
        {sidebar && <aside className="sidebar">{sidebar}</aside>}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
