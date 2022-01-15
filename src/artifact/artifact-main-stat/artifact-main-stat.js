import * as React from 'react';
import MainStatSelect from './main-stat-select'

function ArtifactMainStat({ artifactType, artifactMainStatChangeCallback}) {

    const renderSpecificMainStat = (artifactType) => {
        let potentialStats = []
        switch (artifactType) {
            case 'flower':
                potentialStats.push({value:"hp-flat", name:"Flat HP"})
              break;
            case 'plume':
                potentialStats.push({value:"atk-flat", name:"Flat ATK"})
                break;
            case 'sands':
                potentialStats.push({value:"hp-percent", name:"HP %"})
                potentialStats.push({value:"atk-percent", name:"ATK %"})
                potentialStats.push({value:"def-percent", name:"DEF %"})
                potentialStats.push({value:"em-flat", name:"Flat EM (Elemental Mastery)"})
                potentialStats.push({value:"er-percent", name:"ER % (Energy Recharge)"})
              break;
            case 'goblet':
                potentialStats.push({value:"hp-percent", name:"HP %"})
                potentialStats.push({value:"atk-percent", name:"ATK %"})
                potentialStats.push({value:"def-percent", name:"DEF %"})
                potentialStats.push({value:"em-flat", name:"Flat EM (Elemental Mastery)"})
                potentialStats.push({value:"pyro-dmg-percent", name:"Pyro DMG Bonus %"})
                potentialStats.push({value:"electro-dmg-percent", name:"Electro DMG Bonus %"})
                potentialStats.push({value:"hydro-dmg-percent", name:"Hydro DMG Bonus %"})
                potentialStats.push({value:"cryo-dmg-percent", name:"Cryo DMG Bonus %"})
                potentialStats.push({value:"anemo-dmg-percent", name:"Anemo DMG Bonus %"})
                potentialStats.push({value:"geo-dmg-percent", name:"Geo DMG Bonus %"})
                potentialStats.push({value:"physical-dmg-percent", name:"Physical DMG Bonus %"})
                break;
            case 'circlet':
                potentialStats.push({value:"hp-percent", name:"HP %"})
                potentialStats.push({value:"atk-percent", name:"ATK %"})
                potentialStats.push({value:"def-percent", name:"DEF %"})
                potentialStats.push({value:"em-flat", name:"Flat EM (Elemental Mastery)"})
                potentialStats.push({value:"crit-rate-percent", name:"Crit Rate %"})
                potentialStats.push({value:"crit-dmg-percent", name:"Crit Dmg %"})
                potentialStats.push({value:"healing-percent", name:"Healing Bonus %"})
                break;
            default:
                break;
          }

        return <MainStatSelect potentialStats={potentialStats} key={artifactType} artifactMainStatChangeCallback={artifactMainStatChangeCallback}/>
    }

    return (
        <div>
            {artifactType === "" ?
                <p>Waiting for an artifact type</p>
                :
                renderSpecificMainStat(artifactType)
            }
        </div>
    );
}

export default ArtifactMainStat;