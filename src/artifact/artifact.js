import * as React from 'react';
import ArtifactSet from './artifact-set'
import ArtifactType from './artifact-type'
import ArtifactMainStat from './artifact-main-stat/artifact-main-stat'
import ArtifactSubStats from './artifact-sub-stats/artifact-sub-stats'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Artifact({ updateArtifactCallback }) {
    const [artifactSet, setArtifactSet] = React.useState('');
    const [artifactType, setArtifactType] = React.useState('');
    const [artifactMainStat, setArtifactMainStat] = React.useState('');
    const [artifactFirstSubStat, setArtifactFirstSubStat] = React.useState('');
    const [artifactSecondSubStat, setArtifactSecondSubStat] = React.useState('');
    const [artifactThirdSubStat, setArtifactThirdSubStat] = React.useState('');
    const [artifactFourthSubStat, setArtifactFourthSubStat] = React.useState('');
    const [minNumberOfStat, setMinNumberOfStat] = React.useState(3);


    const updateArtifact = () => {
        updateArtifactCallback({
            set: artifactSet,
            type: artifactType,
            mainStat: artifactMainStat,
            subStat1: artifactFirstSubStat,
            subStat2: artifactSecondSubStat,
            subStat3: artifactThirdSubStat,
            subStat4: artifactFourthSubStat
        },
        minNumberOfStat)
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
        },
        0)
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

    const changeThreshold = (event) => {
        setMinNumberOfStat(event.target.value)
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
                <Grid item xs={2}>
                    <FormControl fullWidth={true}>
                        <InputLabel>Min # of Stats</InputLabel>
                        <Select
                            value={minNumberOfStat}
                            label="Min # of Stats"
                            onChange={changeThreshold}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
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