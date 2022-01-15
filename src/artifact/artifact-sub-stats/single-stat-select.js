import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const allPossibleSubStats = [
    { value: "hp-flat", name: "Flat HP" },
    { value: "atk-flat", name: "Flat ATK" },
    { value: "def-flat", name: "Flat DEF" },
    { value: "hp-percent", name: "HP %" },
    { value: "atk-percent", name: "ATK %" },
    { value: "def-percent", name: "DEF %" },
    { value: "em-flat", name: "Flat EM (Elemental Mastery)" },
    { value: "er-percent", name: "ER % (Energy Recharge)" },
    { value: "crit-rate-percent", name: "Crit Rate %" },
    { value: "crit-dmg-percent", name: "Crit Dmg %" }
]

function SingleSubStatSelect({lockedStats, subStatChangeCallback, disabled}) {
    const [subStat, setSubStat] = React.useState('');

    const handleChange = (event) => {
        setSubStat(event.target.value);
        subStatChangeCallback && subStatChangeCallback(event.target.value)
    };

    const potentialSubStats = allPossibleSubStats.filter(possibleSubStat => {
        return lockedStats.find(element => element === possibleSubStat.value) === undefined
    })

    return (
        <div>
            <p>Let's display 1 sub stats here, based on passed stats to remove</p>
            <FormControl>
            <InputLabel>Sub Stat</InputLabel>
            <Select
                value={subStat}
                label="Sub Stat"
                onChange={handleChange}
                disabled={disabled}
                autoWidth={true}
            >
                {potentialSubStats.map(potentialSubStat => {
                    return <MenuItem value={potentialSubStat.value} key={potentialSubStat.value}>{potentialSubStat.name}</MenuItem>
                })}
            </Select>
        </FormControl>
        </div>
    );
}

export default SingleSubStatSelect;