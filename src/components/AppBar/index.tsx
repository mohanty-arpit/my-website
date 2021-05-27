import React, { useState } from 'react'
import { AppBar as MuiAppBar, IconButton, Toolbar, Typography, } from "@material-ui/core";
import { MenuRounded } from '@material-ui/icons';
import MainMenu from '../MainMenu';

const AppBar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
        <MuiAppBar color="primary" position="sticky">
            <Toolbar>
                <IconButton edge="start" aria-label="menu" onClick={() => setOpenMenu(state => !state)}>
                <MenuRounded/>
                </IconButton>
                <Typography variant="h6">
                Chefs and Devs
                </Typography>
            </Toolbar>            
        </MuiAppBar >
        <MainMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </>
    )
}

export default AppBar
