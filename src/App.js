import React, { useState } from 'react'
import './App.css';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  // Everything wrapped under the ThemeContext.Provider has access to the value.
  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="App">
        <header className="App-header">
          useContext
          <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
