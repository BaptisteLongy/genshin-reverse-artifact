import logo from './logo.svg';
import './App.css';
import Artifact from './artifact';
import Characters from './characters';

function App() {
  return (
    <div className="App">
      <h1>Genshin Reverse Artifact</h1>
      <Artifact />
      <Characters />
      <h1>One day I will add a footer</h1>
    </div>
  );
}

export default App;
