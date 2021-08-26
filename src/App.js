import React, { useState } from 'react'
import ClassComponent from './ClassComponent'
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
        <h1>useContext</h1>
        <header className="App-header">
          <ClassComponent />
          <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
