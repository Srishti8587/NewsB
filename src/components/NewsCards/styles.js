import { makeStyles } from '@material-ui/core/styles';



export default makeStyles({
    container: {
        padding: '0 5%',
        width:' 100%' ,
        margin:0,

    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'95%',
        height:'45vh',
        padding:'10%',
        borderRadius: 10,
        color:'white',
        margin:'5%',
        fontFamily: 'Ubuntu',
        
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'

    },
});


