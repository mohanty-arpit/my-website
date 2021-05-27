import {PaletteOptions} from  "@material-ui/core/styles/createPalette"

export const palette:PaletteOptions={
    primary:{
        main:'#5cdb95'
    },
    secondary:{
        main:'#05376b'
    },
    // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,

}