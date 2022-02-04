import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MainStatSelect({ potentialStats, artifactMainStatChangeCallback, disabled }) {
    const [artifactMainStat, setArtifactMainStat] = React.useState('');

    const handleChange = (event) => {
        setArtifactMainStat(event.target.value);
        artifactMainStatChangeCallback(event.target.value)
    };

    return (
        <FormControl fullWidth={true} disabled={disabled} sx={{ height: '100%' }}>
            <InputLabel sx={{ top: 'calc(45% - 1.4375rem)' }}>Main Stat</InputLabel>
            <Select
                sx={{ height: '100%' }}
                value={artifactMainStat}
                label="Main Stat"
                onChange={handleChange}
            >
                {potentialStats.map(potentialStat => {
                    return <MenuItem value={potentialStat.value} key={potentialStat.value}>{potentialStat.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
}

export default MainStatSelect;