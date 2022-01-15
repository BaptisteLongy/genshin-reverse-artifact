import * as React from 'react';
import ArtifactType from './artifact-type'
import ArtifactMainStat from './artifact-main-stat/artifact-main-stat'
import ArtifactSubStats from './artifact-sub-stats/artifact-sub-stats'

function Artifact() {
    const [artifactType, setArtifactType] = React.useState('');
    const [artifactMainStat, setArtifactMainStat] = React.useState('');

    return (
        <div>
            <h2>Artifact section</h2>
            <p>Here the user will be able to enter details of his artifact</p>
            <p> And I can modify artifact section easily</p>
            <ArtifactType artifactTypeChangeCallback={setArtifactType}/>
            <ArtifactMainStat artifactType={artifactType} artifactMainStatChangeCallback={setArtifactMainStat}/>
            <ArtifactSubStats artifactMainStat={artifactMainStat}/>
        </div>
    );
}

export default Artifact;