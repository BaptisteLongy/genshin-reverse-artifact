import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ArtifactType({artifactTypeChangeCallback}) {
    const [artifactType, setArtifactType] = React.useState('');

    const handleChange = (event) => {
        setArtifactType(event.target.value);
        artifactTypeChangeCallback(event.target.value)
    };

    return (
        <FormControl>
            <InputLabel>Type</InputLabel>
            <Select
                value={artifactType}
                label="Type"
                onChange={handleChange}
            >
                <MenuItem value={'flower'}>Flower of Life</MenuItem>
                <MenuItem value={'plume'}>Plume of Death</MenuItem>
                <MenuItem value={'sands'}>Sands of Eon</MenuItem>
                <MenuItem value={'goblet'}>Goblet of Eonothem</MenuItem>
                <MenuItem value={'circlet'}>Circlet of Logos</MenuItem>
            </Select>
        </FormControl>
    );
}

export default ArtifactType;