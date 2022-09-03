import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Additional from "./components/Additional.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main defaultCity="Tokyo" />
        <Additional />
        <Footer />
      </div>
    </div>
  );
}
