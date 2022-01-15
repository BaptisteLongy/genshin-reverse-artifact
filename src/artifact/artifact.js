import ArtifactType from './artifact-type'

function Artifact() {
    return (
        <div>
            <h2>Artifact section</h2>
            <p>Here the user will be able to enter details of his artifact</p>
            <p> And I can modify artifact section easily</p>
            <ArtifactType />
            <p>Main stat (if relevant)</p>
            <p>sub stats</p>
        </div>
    );
}

export default Artifact;