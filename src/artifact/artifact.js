import * as React from 'react';
import ArtifactSet from './artifact-set'
import ArtifactType from './artifact-type'
import ArtifactMainStat from './artifact-main-stat/artifact-main-stat'
import ArtifactSubStats from './artifact-sub-stats/artifact-sub-stats'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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

    const resetArtifact = () => {
        setArtifactSet("")
        setArtifactType("")
        setArtifactMainStat("")
        setArtifactFirstSubStat("")
        setArtifactSecondSubStat("")
        setArtifactThirdSubStat("")
        setArtifactFourthSubStat("")
        updateArtifactCallback({
            set: "",
            type: "",
            mainStat: "",
            subStat1: "",
            subStat2: "",
            subStat3: "",
            subStat4: ""
        })
    }

    const changeArtifactType = (newValue) => {
        setArtifactType(newValue)
        changeMainStat("")
    }

    const changeMainStat = (newValue) => {
        setArtifactMainStat(newValue)
        changeFirstSubStat("")
    }

    const changeFirstSubStat = (newValue) => {
        setArtifactFirstSubStat(newValue)
        changeSecondSubStat("")
    }

    const changeSecondSubStat = (newValue) => {
        setArtifactSecondSubStat(newValue)
        changeThirdSubStat("")
    }

    const changeThirdSubStat = (newValue) => {
        setArtifactThirdSubStat(newValue)
        changeFourthSubStat("")
    }

    const changeFourthSubStat = (newValue) => {
        setArtifactFourthSubStat(newValue)
    }

    return (
        <div>
            <h2>Describe your Artifact</h2>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={4}>
                    <ArtifactSet artifactSet={artifactSet} onSetChangeCallback={setArtifactSet} />
                </Grid>
                <Grid item xs={4}>
                    <ArtifactType artifactType={artifactType} artifactTypeChangeCallback={changeArtifactType} />
                </Grid>
                <Grid item xs={4}>
                    <ArtifactMainStat artifactType={artifactType} artifactMainStatChangeCallback={changeMainStat} />
                </Grid>
            </Grid>
            <Grid item style={{ paddingTop: 20 }}>
                <ArtifactSubStats
                    artifactMainStat={artifactMainStat}
                    onFirstSubStatChange={changeFirstSubStat}
                    onSecondSubStatChange={changeSecondSubStat}
                    onThirdSubStatChange={changeThirdSubStat}
                    onFourthSubStatChange={changeFourthSubStat}
                    firstSubStat={artifactFirstSubStat}
                    secondSubStat={artifactSecondSubStat}
                    thirdSubStat={artifactThirdSubStat}
                    fourthSubStat={artifactFourthSubStat}
                />
            </Grid>
            <Grid item container direction="row" spacing={2} justifyContent="center" alignItems="center" style={{ paddingTop: 20 }}>
                <Grid item>
                <Button variant="contained" onClick={updateArtifact}>Calculate</Button>
                </Grid>
                <Grid item>
                <Button variant="contained" onClick={resetArtifact}>Reset</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Artifact;