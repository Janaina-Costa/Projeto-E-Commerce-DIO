import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';



const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        minHeight:'300px',
        minWidth:'250px',
        display: 'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        alignContent:'space-between',  
             
    },
    grid:{
        display: 'flex',
        flexDirection:'column',
        flexGrow:'2',
        flexWrap:'wrap'
    },

    buttons:{
        borderRadius:'8px',
        borderColor:'#ed97d4',
        position: 'relative',
        alignItems:'center',
        bottom: '-15px',        
        right:'12px' ,
        margin: 'auto',
        display: 'flex',
        flexWrap:'wrap',
        fontSize:'0.8em',
        backgroundColor: '#fceef8',
        transition:'2s',
        zIndex:'0',

        '&:hover':{
            backgroundColor:"#ed97d4",
            borderColor:'#ed97d4',

        }
        
    },
    imgs:{
        borderRadius:'8px',
        '&:hover':{
            zIndex:'10000',
            transform:  'scale(2)',
            boxShadaw:'2px 2px 8px 10px',
            transition: '2s',
        }

    }
    
  }));

  
  /*caso queira tornar resposnsiva a fonte */
  const theme = createMuiTheme()

    
    

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Grid item md={4} className={classes.grid}>
            <Paper className={classes.paper} >
                <Grid container direction='column' >
                    <Grid item >
                    <img width="155px" height="173px"  src={product.image} alt={product.name_product} className={classes.imgs}/>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h6'>
                            {children}
                        </Typography>

                    </ThemeProvider>
                    <Typography variant='subtitle1'>
                        R$ {product.price.toFixed(2)}
                    </Typography>
                    </Grid>
                
                <Button 
                    variant="outlined"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                    className={classes.buttons}
                   
                >
                    Adicionar
                </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
