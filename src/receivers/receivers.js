import { DataGrid } from '@mui/x-data-grid';

const allPossibleSubStats = require('../artifact/artifactPossibleSubStats.json')

const pyro = require('./characters/pyro/index')
const electro = require('./characters/electro/index')
const hydro = require('./characters/hydro/index')
const cryo = require('./characters/cryo/index')
const anemo = require('./characters/anemo/index')
const geo = require('./characters/geo/index')
const characterList = [...pyro, ...electro, ...hydro, ...cryo, ...anemo, ...geo]

const checkArtifactStatsAndAddToList = (artifact, character, role, list, threshold) => {
    let firstSubStatMatches = role.subStats.find(element => element.id === artifact.subStat1) !== undefined ? 1 : 0
    let secondSubStatMatches = role.subStats.find(element => element.id === artifact.subStat2) !== undefined ? 1 : 0
    let thirdSubStatMatches = role.subStats.find(element => element.id === artifact.subStat3) !== undefined ? 1 : 0
    let fourthSubStatMatches = role.subStats.find(element => element.id === artifact.subStat4) !== undefined ? 1 : 0
    // let atLeastOneSubStatMatches = firstSubStatMatches || secondSubStatMatches || thirdSubStatMatches || fourthSubStatMatches
    if (firstSubStatMatches + secondSubStatMatches + thirdSubStatMatches + fourthSubStatMatches >= threshold) {
        list.push({
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

const formatStatCheck = (params) => {
    return params.value ? <span style={{ color: 'green', fontSize: '20px' }}>✔</span> : <span style={{ color: 'red', fontSize: '24px' }}>×</span>
}

const getSubStatColumnName = (subStat) => {
    let foundSubStat = allPossibleSubStats.find(element => subStat === element.value)
    return (foundSubStat === undefined ? "" : foundSubStat.name)
}

function Receivers({ artifact, minNumberOfStats }) {
    let filteredSetCompatibleCharList = []
    let filteredSetNotCompatibleCharList = []
    characterList.forEach(character => {
        character.roles.forEach(role => {
            switch (artifact.type) {
                case "sands":
                    if (role.sands.find(element => element.id === artifact.mainStat)) {
                        if (role.sets.find(element => element.id === artifact.set)) {
                            checkArtifactStatsAndAddToList(artifact, character, role, filteredSetCompatibleCharList, minNumberOfStats)
                        } else {
                            checkArtifactStatsAndAddToList(artifact, character, role, filteredSetNotCompatibleCharList, minNumberOfStats)
                        }
                    }
                    break
                case "goblet":
                    if (role.goblet.find(element => element.id === artifact.mainStat)) {
                        if (role.sets.find(element => element.id === artifact.set)) {
                            checkArtifactStatsAndAddToList(artifact, character, role, filteredSetCompatibleCharList, minNumberOfStats)
                        } else {
                            checkArtifactStatsAndAddToList(artifact, character, role, filteredSetNotCompatibleCharList, minNumberOfStats)
                        }
                    }
                    break
                case "circlet":
                    if (role.circlet.find(element => element.id === artifact.mainStat)) {
                        if (role.sets.find(element => element.id === artifact.set)) {
                            checkArtifactStatsAndAddToList(artifact, character, role, filteredSetCompatibleCharList, minNumberOfStats)
                        } else {
                            checkArtifactStatsAndAddToList(artifact, character, role, filteredSetNotCompatibleCharList, minNumberOfStats)
                        }
                    }
                    break
                default:
                    if (role.sets.find(element => element.id === artifact.set)) {
                        checkArtifactStatsAndAddToList(artifact, character, role, filteredSetCompatibleCharList, minNumberOfStats)
                    } else {
                        checkArtifactStatsAndAddToList(artifact, character, role, filteredSetNotCompatibleCharList, minNumberOfStats)
                    }
            }
        })
    })

    const columns = [
        { field: 'name', headerName: 'Character', width: 130 },
        { field: 'role', headerName: 'Build', width: 130 },
        {
            field: 'best',
            headerName: 'Best role',
            width: 130,
            renderCell: formatStatCheck
        },
        {
            field: 'subStat1',
            headerName: getSubStatColumnName(artifact.subStat1),
            width: 130,
            renderCell: formatStatCheck
        },
        {
            field: 'subStat2',
            headerName: getSubStatColumnName(artifact.subStat2),
            width: 130,
            renderCell: formatStatCheck
        },
        {
            field: 'subStat3',
            headerName: getSubStatColumnName(artifact.subStat3),
            width: 130,
            renderCell: formatStatCheck
        },
        {
            field: 'subStat4',
            headerName: getSubStatColumnName(artifact.subStat4),
            width: 130,
            renderCell: formatStatCheck
        },
    ];

    return (
        <div>
            <h2>Who can use it?</h2>
            <h3>Those characters/roles can use the set bonus</h3>
            <DataGrid
                rows={filteredSetCompatibleCharList}
                columns={columns}
                autoHeight
                disableColumnMenu
                disableSelectionOnClick
                hideFooter
            />
            <h3>The set bonus is useless for those characters/roles, can be used as 5th artifact</h3>
            <DataGrid
                rows={filteredSetNotCompatibleCharList}
                columns={columns}
                autoHeight
                disableColumnMenu
                disableSelectionOnClick
                hideFooter
            />
        </div>
    );
}

export default Receivers;