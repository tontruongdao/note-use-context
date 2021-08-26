import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent';
import { ThemeProvider } from './ThemeContext';
import './App.css';

function App() {

  // Everything wrapped under the ThemeContext.Provider has access to the value.
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>useContext</h1>
          <div style={{ display: "flex", flexDirection: "row" }}> 
            {/* <ClassComponent /> */}
            <FunctionalComponent />
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
