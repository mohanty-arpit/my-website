import React from "react";
import { Box,Grid,Typography } from "@material-ui/core";

function ColourBox({intention,variant}:{intention:string,variant:string}) {
    const bgColor=`${intention}.${variant}`
    const color=intention==='text'?'background.paper':`${intention}.contrastText`

    return(
        <Grid item xs={12} sm={4}>
            <Box bgcolor={bgColor} color={color} p={4}>
                <strong>{bgColor}</strong>
            </Box>
        </Grid>
    )
}
const palette = [
    { intention: 'primary', variant: 'main' },
    { intention: 'secondary', variant: 'main' },
    { intention: 'error', variant: 'main' },
    { intention: 'warning', variant: 'main' },
    { intention: 'info', variant: 'main' },
    { intention: 'success', variant: 'main' },
    { intention: 'text', variant: 'primary' },
    { intention: 'text', variant: 'secondary' },
    { intention: 'text', variant: 'disabled' }
  ]

  export default function ColourPalette() {
    return (
      <>
        <Typography variant="h2">Colour Palette</Typography>
        <br />
        <Grid container spacing={1}>
          {palette.map((p, i) => <ColourBox key={i} {...p} />)}
        </Grid>
      </>
    )
  }