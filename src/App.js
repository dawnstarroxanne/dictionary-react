import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Dawn" />
        </main>
        <footer>
          coded by{" "}
          <a
            href="https://github.com/dawnstarroxanne/dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dawn Roxanne
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
