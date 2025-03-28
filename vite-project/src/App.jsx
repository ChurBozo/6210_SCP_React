import { useState, useEffect } from 'react';
import Nav from './Nav';
import SCP from './SCP';
import './App.css';

function App() {
  const [scp, setSCP] = useState([]);
  const [selectedSCP, setSelectedSCP] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const base = import.meta.env.BASE_URL;

    fetch(`${base}data.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setSCP(data))
      .catch(err => console.error("Error loading data", err));
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <header className="centered-header full-header">
        <h1>SCP Entities Catalog</h1>
        <div className="header-actions">
          <div className="centered-buttons">
            <Nav scp={scp} onSCPSelect={setSelectedSCP} />
            <button className="toggle-mode styled-btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </header>
      <main>
        <SCP scp={selectedSCP} />
      </main>
    </div>
  );
}

export default App;

