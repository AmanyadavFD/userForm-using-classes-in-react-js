// import logo from "./logo.svg";
// import "./App.css";
import Profile from "./comp/Profile";
import ComponentDidMount from "./lifecycle/ComponentDidMount";
import Form from "./comp/forms/Form";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Profile /> */}
      {/* <ComponentDidMount /> */}
      <Form />
    </div>
  );
}

export default App;
