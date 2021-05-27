import { Divider, makeStyles, Typography } from '@material-ui/core'


const useStyles=makeStyles(()=>({
    root:{
        margin:'0 auto',
        maxWidth:'57rem',
        padding:'2rem 0'
    }
}))


function BodyContent() {
    const classes=useStyles()
    return (
        <main className={classes.root}>
            <Typography variant="h2">Chefs and Devs</Typography>
        <Typography variant="body1">
          Your one stop for Code and Recipes
        </Typography>
        <Typography variant="body2">
          As no body wrote code on an Empty Stomach
        </Typography>
        <Divider/>
        </main>
    )
}

export default BodyContent
