import * as React from 'react';
import SingleSubStatSelect from './single-stat-select'
import Grid from '@mui/material/Grid';

function ArtifactSubStats({ artifactMainStat, onFirstSubStatChange, onSecondSubStatChange, onThirdSubStatChange, onFourthSubStatChange, firstSubStat, secondSubStat, thirdSubStat, fourthSubStat }) {

    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={3}>
                <SingleSubStatSelect lockedStats={[artifactMainStat]} subStatChangeCallback={onFirstSubStatChange} disabled={artifactMainStat === ''} subStat={firstSubStat} subStatLabel="Sub Stat 1"/>
            </Grid>
            <Grid item xs={3}>
                <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat]} subStatChangeCallback={onSecondSubStatChange} disabled={firstSubStat === ''} subStat={secondSubStat} subStatLabel="Sub Stat 2"/>
            </Grid>
            <Grid item xs={3}>
                <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat, secondSubStat]} subStatChangeCallback={onThirdSubStatChange} disabled={secondSubStat === ''} subStat={thirdSubStat} subStatLabel="Sub Stat 3"/>
            </Grid>
            <Grid item xs={3}>
                <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat, secondSubStat, thirdSubStat]} subStatChangeCallback={onFourthSubStatChange} subStat={fourthSubStat} disabled={thirdSubStat === ''} subStatLabel="Sub Stat 4"/>
            </Grid>
        </Grid>
    );
}

export default ArtifactSubStats;