import * as React from 'react';
import './App.css';
import Artifact from './artifact/artifact';
import Receivers from './receivers/receivers'

function App() {
  const [artifact, setArtifact] = React.useState({});

  return (
    <div className="App">
      <h1>Genshin Reverse Artifact</h1>
      <Artifact updateArtifactCallback={setArtifact}/>
      <Receivers artifact={artifact}/>
      <h1>One day I will add a footer</h1>
      <p>It will have my github link and a link to the data I'm using + the date it was last updated</p>
    </div>
  );
}

export default App;
