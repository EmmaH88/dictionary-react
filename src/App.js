import Dictionary from "./components/Dictionary";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1>🧾 Dictionary App 🧾</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>

      <footer>
        This page is open sourced on git hub, hosted on netlify, and coded by
        emma h 🤩
      </footer>
    </div>
  );
}

export default App;
