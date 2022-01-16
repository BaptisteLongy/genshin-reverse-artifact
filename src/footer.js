import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';
import React from 'react'


export default function Footer() {
    return (
        <React.Fragment>
            <Divider />
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item >
                    Genshin Impact Reverse Artifact - Powered by TrotTrot
                    <br />
                    Data is coming from <a href="https://docs.google.com/spreadsheets/u/1/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/htmlview?pru=AAABd4N-fLk*X-bMgWoyQtpHPIS7FN1hTQ#">Genshin Impact Helper Team's Character Builds</a>
                    <br />
                    Last updated on 01/16/2021
                </Grid>
                <Grid item >
                    <IconButton aria-label="GitHub.com" onClick={() => window.open('https://github.com/BaptisteLongy/genshin-reverse-artifact', "_blank")}>
                        <GitHubIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}