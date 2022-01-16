import * as React from 'react';
import './App.css';
import Artifact from './artifact/artifact';
import Receivers from './receivers/receivers'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Footer from './footer'

function App() {
  const [artifact, setArtifact] = React.useState({});
  const [minNumberOfStat, setMinNumberOfStat] = React.useState('');

  const updateStateInfos = (artifact, minNumberOsStats) => {
    setArtifact(artifact)
    setMinNumberOfStat(minNumberOsStats)
  }

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        spacing={4}
        style={{ padding: 32 }}
      >
        <Grid container item direction="column" alignItems="center">
          <h1>Genshin Impact Reverse Artifact</h1>
        </Grid>
        <Artifact updateArtifactCallback={updateStateInfos} />
        <Receivers artifact={artifact} minNumberOfStats={minNumberOfStat} />
        <div  style={{ marginTop: 32 }}>
        <Footer />
        </div>
      </Grid>
    </Container>
  );
}

export default App;
