import logo from './logo.svg';
import './App.css';
import Artifact from './artifact/artifact';
import Characters from './characters';

function App() {
  return (
    <div className="App">
      <h1>Genshin Reverse Artifact</h1>
      <Artifact />
      <h2>Button to launch the search</h2>
      <Characters />
      <h1>One day I will add a footer</h1>
    </div>
  );
}

export default App;
