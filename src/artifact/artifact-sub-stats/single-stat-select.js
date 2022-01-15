import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const allPossibleSubStats = require('../artifactPossibleSubStats.json')

function SingleSubStatSelect({lockedStats, subStatChangeCallback, disabled, subStatLabel, subStat}) {

    const handleChange = (event) => {
        subStatChangeCallback && subStatChangeCallback(event.target.value)
    };

    const potentialSubStats = allPossibleSubStats.filter(possibleSubStat => {
        return lockedStats.find(element => element === possibleSubStat.value) === undefined
    })

    return (
            <FormControl fullWidth={true}>
            <InputLabel>{subStatLabel === undefined ? "Sub Stat" : subStatLabel}</InputLabel>
            <Select
                value={subStat}
                label={subStatLabel === undefined ? "Sub Stat" : subStatLabel}
                onChange={handleChange}
                disabled={disabled}
                autoWidth={true}
            >
                {potentialSubStats.map(potentialSubStat => {
                    return <MenuItem value={potentialSubStat.value} key={potentialSubStat.value}>{potentialSubStat.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
}

export default SingleSubStatSelect;