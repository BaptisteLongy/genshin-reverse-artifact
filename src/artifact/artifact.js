import * as React from 'react';
import ArtifactType from './artifact-type'
import ArtifactMainStat from './artifact-main-stat/artifact-main-stat'

function Artifact() {
    const [artifactType, setArtifactType] = React.useState('');

    return (
        <div>
            <h2>Artifact section</h2>
            <p>Here the user will be able to enter details of his artifact</p>
            <p> And I can modify artifact section easily</p>
            <ArtifactType artifactTypeChangeCallback={setArtifactType}/>
            <ArtifactMainStat artifactType={artifactType}/>
            <p>Main stat (if relevant)</p>
            <p>sub stats</p>
        </div>
    );
}

export default Artifact;