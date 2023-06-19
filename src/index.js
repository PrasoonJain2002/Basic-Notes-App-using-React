import Header from "./header";
import Footer from "./footer";
import Notes from "./notes";
const react = require("react");
const reactDom = require("react-dom");

reactDom.render(
  <div>
    <Header />
    <Notes />
    <Notes />
    <Notes />
    <Notes />
    <Notes />
    <Notes />
    <Footer />
  </div>,
  document.getElementById("root")
);
