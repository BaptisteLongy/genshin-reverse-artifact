import * as React from 'react';
import SingleSubStatSelect from './single-stat-select'

function ArtifactSubStats({ artifactMainStat }) {
    const [firstSubStat, setFirstSubStat] = React.useState('');
    const [secondSubStat, setSecondSubStat] = React.useState('');
    const [thirdSubStat, setThirdSubStat] = React.useState('');

    return (
        <div>
            <p>Let's display sub stats here, knowing main stat is {artifactMainStat}</p>
            <SingleSubStatSelect lockedStats={[artifactMainStat]} subStatChangeCallback={setFirstSubStat}/>
            <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat]} subStatChangeCallback={setSecondSubStat} disabled={firstSubStat===''}/>
            <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat, secondSubStat]} subStatChangeCallback={setThirdSubStat} disabled={secondSubStat===''}/>
            <SingleSubStatSelect lockedStats={[artifactMainStat, firstSubStat, secondSubStat, thirdSubStat]} disabled={thirdSubStat===''}/>
        </div>
    );
}

export default ArtifactSubStats;