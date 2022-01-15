import * as React from 'react';
import SingleSubStatSelect from './single-stat-select'

function ArtifactSubStats({ artifactMainStat, onFirstSubStatChange, onSecondSubStatChange, onThirdSubStatChange, onFourthSubStatChange }) {
    const [firstSubStat, setFirstSubStat] = React.useState('');
    const [secondSubStat, setSecondSubStat] = React.useState('');
    const [thirdSubStat, setThirdSubStat] = React.useState('');

    const changeFirstSubStat = (newValue) => {
        setFirstSubStat(newValue)
        onFirstSubStatChange(newValue)
    }

    const changeSecondSubStat = (newValue) => {
        setSecondSubStat(newValue)
        onSecondSubStatChange(newValue)
    }

    const changeThirdSubStat = (newValue) => {
        setThirdSubStat(newValue)
        onThirdSubStatChange(newValue)
    }

    const changeFourthSubStat = (newValue) => {
        onFourthSubStatChange(newValue)
    }

    return (
        <div>
            <p>Let's display sub stats here, knowing main stat is {artifactMainStat}</p>
            <SingleSubStatSelect lockedStats={[artifactMainStat]} subStatChangeCallback={changeFirstSubStat}/>
            <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat]} subStatChangeCallback={changeSecondSubStat} disabled={firstSubStat===''}/>
            <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat, secondSubStat]} subStatChangeCallback={changeThirdSubStat} disabled={secondSubStat===''}/>
            <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat, secondSubStat, thirdSubStat]} subStatChangeCallback={changeFourthSubStat} disabled={thirdSubStat===''}/>
        </div>
    );
}

export default ArtifactSubStats;