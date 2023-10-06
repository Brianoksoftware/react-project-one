//import Logo from './logo.svg'; //not necessary since logo.svg is now in public folder not src
import Posts from "./components/Posts";
import {ReactComponent as Logo} from "./logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        {/*<img src= "/logo.svg" className="App-logo" alt="logo" /> */}
        <Logo style={{height:200}}/>
        <h1>React Posts Share app</h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
