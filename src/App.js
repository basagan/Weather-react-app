import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Main />
        <Footer />
      </div>
    </div>
  );
}
