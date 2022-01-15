import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const artifactSetList = [
    { value: "gladiator-finale", name: "Gladiator's Finale" },
    { value: "wanderer-troupe", name: "Wanderer's Troupe" },
    { value: "thundersoother", name: "Thundersoother" },
    { value: "thundering-fury", name: "Thundering Fury" },
    { value: "maiden-beloved", name: "Maiden Beloved" },
    { value: "viridescent-venerer", name: "Viridescent Venerer" },
    { value: "crimson-witch-of-flames", name: "Crimson Witch of Flames" },
    { value: "lavawalker", name: "Lavawalker" },
    { value: "noblesse-oblige", name: "Noblesse Oblige" },
    { value: "bloodstained-chivalry", name: "Bloodstained Chivalry" },
    { value: "archaic-petra", name: "Archaic Petra" },
    { value: "retracing-bolide", name: "Retracing Bolide" },
    { value: "blizzard-strayer", name: "Blizzard Strayer" },
    { value: "heart-of-depth", name: "Heart of Depth" },
    { value: "tenacity-of-the-millelith", name: "Tenacity of the Millelith" },
    { value: "pale-flame", name: "Pale Flame" },
    { value: "shimenawa-reminiscence", name: "Shimenawa's Reminiscence" },
    { value: "emblem-of-severed-fate", name: "Emblem of Severed Fate" },
    { value: "husk-of-opulent-dreams", name: "Husk of Opulent Dreams" },
    { value: "ocean-hued-clam", name: "Ocean-Hued Clam" }
]



function ArtifactSet({onSetChangeCallback}) {
    const [artifactSet, setArtifactSet] = React.useState('');

    const handleChange = (event) => {
        setArtifactSet(event.target.value);
        onSetChangeCallback && onSetChangeCallback(event.target.value)
    };

    return (
        <FormControl>
            <InputLabel>Type</InputLabel>
            <Select
                value={artifactSet}
                label="Type"
                onChange={handleChange}
            >
                {artifactSetList.map(artifactSet => {
                    return <MenuItem value={artifactSet.value} key={artifactSet.value}>{artifactSet.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
}

export default ArtifactSet;