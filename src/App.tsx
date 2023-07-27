import { Home } from "./views";
import "./App.scss";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="app-content">
          <Navbar />
          <Home />
        </div>
      </header>
    </div>
  );
}

export default App;
