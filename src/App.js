import * as React from 'react';
import './App.css';
import Artifact from './artifact/artifact';
import Receivers from './receivers/receivers'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function App() {
  const [artifact, setArtifact] = React.useState({});

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
        <Artifact updateArtifactCallback={setArtifact} />
        <Receivers artifact={artifact} />
        <h1>One day I will add a footer</h1>
        <p>It will have my github link and a link to the data I'm using + the date it was last updated</p>
      </Grid>
    </Container>
  );
}

export default App;
