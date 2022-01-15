import { DataGrid } from '@mui/x-data-grid';

const pyro = require('./characters/pyro/index')

const characterList = [...pyro]

function Receivers({ artifact }) {
    let filteredSetCompatibleCharList = []
    let filteredSetNotCompatibleCharList = []
    characterList.forEach(character => {
        character.roles.forEach(role => {
            switch (artifact.type) {
                case "sands":
                    if (role.sands.find(element => element.id === artifact.mainStat)) {
                        if (role.sets.find(element => element.id === artifact.set)) {
                            // Let's check substats for filteredSetCompatibleCharList
                            let firstSubStatMatches = role.subStats.find(element => element.id === artifact.subStat1) !== undefined
                            let secondSubStatMatches = role.subStats.find(element => element.id === artifact.subStat2) !== undefined
                            let thirdSubStatMatches = role.subStats.find(element => element.id === artifact.subStat3) !== undefined
                            let fourthSubStatMatches = role.subStats.find(element => element.id === artifact.subStat4) !== undefined
                            let atLeastOneSubStatMatches = firstSubStatMatches || secondSubStatMatches || thirdSubStatMatches || fourthSubStatMatches
                            if (atLeastOneSubStatMatches) {
                                filteredSetCompatibleCharList.push({
                                    id: `${character.name}-${role.name}`,
                                    name: character.name,
                                    role: role.name,
                                    best: role.best,
                                    subStat1: firstSubStatMatches,
                                    subStat2: secondSubStatMatches,
                                    subStat3: thirdSubStatMatches,
                                    subStat4: fourthSubStatMatches
                                })
                            }
                        } else {
                            // Let's check substats for filteredSetNotCompatibleCharList
                            let firstSubStatMatches = role.subStats.find(element => element.id === artifact.subStat1) !== undefined
                            let secondSubStatMatches = role.subStats.find(element => element.id === artifact.subStat2) !== undefined
                            let thirdSubStatMatches = role.subStats.find(element => element.id === artifact.subStat3) !== undefined
                            let fourthSubStatMatches = role.subStats.find(element => element.id === artifact.subStat4) !== undefined
                            let atLeastOneSubStatMatches = firstSubStatMatches || secondSubStatMatches || thirdSubStatMatches || fourthSubStatMatches
                            if (atLeastOneSubStatMatches) {
                                filteredSetNotCompatibleCharList.push({
                                    id: `${character.name}-${role.name}`,
                                    name: character.name,
                                    role: role.name,
                                    best: role.best,
                                    subStat1: firstSubStatMatches,
                                    subStat2: secondSubStatMatches,
                                    subStat3: thirdSubStatMatches,
                                    subStat4: fourthSubStatMatches
                                })
                            }
                        }
                    }
                    break
                case "goblet":
                    if (role.goblet.find(element => element.id === artifact.mainStat)) {
                        // Let's check the artifact against the role
                    }
                    break
                case "circlet":
                    if (role.circlet.find(element => element.id === artifact.mainStat)) {
                        // Let's check the artifact against the role
                    }
                    break
                default:
                // Let's check the artifact against the role
            }
        })
    })

    const columns = [
        { field: 'name', headerName: 'Character' },
        { field: 'role', headerName: 'Build' },
        { field: 'best', headerName: 'Best role' },
        { field: 'subStat1', headerName: artifact.subStat1 },
        { field: 'subStat2', headerName: artifact.subStat2 },
        { field: 'subStat3', headerName: artifact.subStat3 },
        { field: 'subStat4', headerName: artifact.subStat4 },
    ];

    debugger



    return (
        <div>
            <h2>Character section</h2>
            <p>Herer the user will be presented with the list of characters and ranking the artifact can be used with</p>
            <p>We will display the list of characters that can use that artifact, knowing that</p>
            <p>Set: {artifact.set}</p>
            <p>Type: {artifact.type}</p>
            <p>Main stat: {artifact.mainStat}</p>
            <p>Sub stat 1: {artifact.subStat1}</p>
            <p>Sub stat 2: {artifact.subStat2}</p>
            <p>Sub stat 3: {artifact.subStat3}</p>
            <p>Sub stat 4: {artifact.subStat4}</p>

<h3>Those characters can use the set bonus</h3>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredSetCompatibleCharList}
                    columns={columns}
                />
            </div>
            <h3>The set bonus is useless, just check stats</h3>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredSetNotCompatibleCharList}
                    columns={columns}
                />
            </div>
        </div>
    );
}

export default Receivers;