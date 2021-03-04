const styles = theme => ({
    main: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto"

        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(2)}px `,
    },
    avatar:{
        margin:theme.spacing(1),
        backgroundColor:theme.palette.secondary.main,
    },
    form:{
        width:"100%",
        marginTop:theme.spacing(3)
    },
    submit:{
        marginTop:theme.spacing(3),
    },
    remember:{
        marginLeft:theme.spacing(0),
        marginTop:theme.spacing(1)
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});
export default styles;