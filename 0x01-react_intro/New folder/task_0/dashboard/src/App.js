import logo from './Holberton-Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
         <p>Login to access the full dashboard</p>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright 2024 - Aasem Ali - {getFullYear} - {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
