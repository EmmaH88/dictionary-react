import Dictionary from "./components/Dictionary";

import "./App.css";

function App() {
  return (
    <div className="container mt-3">
      <div className="App">
        <header className="App-header">
          <h1>🧾 Dictionary App 🧾</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
      </div>
    </div>
  );
}

export default App;
