import * as React from 'react';
import ArtifactSet from './artifact-set'
import ArtifactType from './artifact-type'
import ArtifactMainStat from './artifact-main-stat/artifact-main-stat'
import ArtifactSubStats from './artifact-sub-stats/artifact-sub-stats'
import Button from '@mui/material/Button';

function Artifact({ updateArtifactCallback }) {
    const [artifactSet, setArtifactSet] = React.useState('');
    const [artifactType, setArtifactType] = React.useState('');
    const [artifactMainStat, setArtifactMainStat] = React.useState('');
    const [artifactFirstSubStat, setArtifactFirstSubStat] = React.useState('');
    const [artifactSecondSubStat, setArtifactSecondSubStat] = React.useState('');
    const [artifactThirdSubStat, setArtifactThirdSubStat] = React.useState('');
    const [artifactFourthSubStat, setArtifactFourthSubStat] = React.useState('');
    

    const updateArtifact = () => {
        updateArtifactCallback({
            set: artifactSet,
            type: artifactType,
            mainStat: artifactMainStat,
            subStat1: artifactFirstSubStat,
            subStat2: artifactSecondSubStat,
            subStat3: artifactThirdSubStat,
            subStat4: artifactFourthSubStat
        })
    }

    return (
        <div>
            <h2>Artifact section</h2>
            <p>Here the user will be able to enter details of his artifact</p>
            <p> And I can modify artifact section easily</p>
            <ArtifactSet onSetChangeCallback={setArtifactSet}/>
            <ArtifactType artifactTypeChangeCallback={setArtifactType} />
            <ArtifactMainStat artifactType={artifactType} artifactMainStatChangeCallback={setArtifactMainStat} />
            <ArtifactSubStats 
                artifactMainStat={artifactMainStat}
                onFirstSubStatChange={setArtifactFirstSubStat}
                onSecondSubStatChange={setArtifactSecondSubStat}
                onThirdSubStatChange={setArtifactThirdSubStat}
                onFourthSubStatChange={setArtifactFourthSubStat}
            />
            <Button variant="contained" onClick={updateArtifact}>Calculate</Button>
        </div>
    );
}

export default Artifact;