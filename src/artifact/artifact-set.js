import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';

const fiveStarArtifactSetList = require("./5-star-artifact-sets.json")
const fourStarArtifactSetList = require("./4-star-artifact-sets.json")



function ArtifactSet({ artifactSet, onSetChangeCallback }) {

    const handleChange = (event) => {
        onSetChangeCallback && onSetChangeCallback(event.target.value)
    };

    return (
        <FormControl fullWidth={true}>
            <InputLabel>Set</InputLabel>
            <Select
                value={artifactSet}
                label="Type"
                onChange={handleChange}
            >
                <ListSubheader>5 ☆</ListSubheader>
                {fiveStarArtifactSetList.map(artifactSet => {
                    return <MenuItem value={artifactSet.value} key={artifactSet.value}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={`${artifactSet.img}`}
                                alt={artifactSet.name}
                                width="40"
                            />
                            {artifactSet.name}
                        </Box>
                    </MenuItem>
                })}
                <ListSubheader>4 ☆</ListSubheader>
                {fourStarArtifactSetList.map(artifactSet => {
                    return <MenuItem value={artifactSet.value} key={artifactSet.value}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={`${artifactSet.img}`}
                                alt={artifactSet.name}
                                width="40"
                            />
                            {artifactSet.name}
                        </Box>
                    </MenuItem>
                })}
            </Select>
        </FormControl>
    );
}

export default ArtifactSet;