import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/';
import Cart from './Cart';
import img from './img/header.png'



const styless = makeStyles((theme)=>({
    headerStyle:{
        background: `linear-gradient(rgba(238, 20, 173, 0.185),rgba(253, 252, 252, 0.995)100%),url(${img})`,
        backgroundSize:'cover',
        height: '90px',
        margin: '0px',
        
    },
    links:{
        textDecoration:'none',
        color: 'rgb(85, 84, 84)',
        fontFamily: 'Sarabun', 
        fontSize:'14px',
        '@media (max-width:656px)':{
            fontSize:'10px',
        },
        '@media(min-width:734px)':{
            display:'block'
        },
        "@media(max-width:735px)":{
            display: 'none'
        }


    },

    carrinho:{
        '@media(min-width:734px)':{
            display:'block'
        },
        "@media(max-width:735px)":{
            display: 'none'
        }
    },

    logo:{
        fontSize:'60px',
        "@media(max-width:735px)":{
            fontSize: '40px'
        }

    },
    menuMin:{
        position: 'relative',
        right:'5px',
        backgroundColor:'#ed97d4',
        textAlign:'center',
        color: 'gray',
        width:'45px' ,

        '@media(min-width:734px)':{
            display:'none'
        },
        "@media(max-width:735px)":{
            display: 'block'
        }
    },


}));



const newLocal = 'Imperial Script,  cursive';


const Header = (props) => {
    const classes = styless()
       
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" sm={12} className={classes.headerStyle}>
             
                <Typography variant='h1'className={classes.logo} style={{fontFamily: newLocal, marginLeft:'5px'}} >
                    Shopping Dreams
                </Typography>

             
            <Link to="/" className={classes.links} id='mainMenu'>
                <Button color="primary"  className={classes.links} >Home</Button>
            </Link>
            <Link to="/contato" className={classes.links} id='mainMenu'>
                <Button color="primary" className={classes.links}>Contato</Button>
            </Link>
            <Cart />  

          
           

            {/* Modal */}
            
            
            <button type="button" className={`btn btn-info ${classes.menuMin}`} data-bs-toggle="modal" data-bs-target="#MenuModal" style={{backgroundColor:'#ed97d4', border:'none'}}>
                            <span style={{color:'gray'}}><i className="fa fa-lg fa-bars"></i></span>
                
            </button>

            {/* Modal */}
            <div className="modal fade" id="MenuModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                    
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" style={{width:'30px',height:'30px', borderRadius:'50%', border:'none',backgroundColor:'#ed97d4', color:'gray'}}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <Link to="/"  id='mainMenu' style={{textDecoration:'none'}}>
                         <Button color="primary" style={{color:'gray'}} >Home</Button>
                    </Link>
                    <Link to="/contato"  id='mainMenu' style={{textDecoration:'none'}}>
                         <Button color="primary" style={{color:'gray'}}>Contato</Button>
                    </Link>
                    

                    
                    </div>
                </div>
            </div>
           

            
        </Grid>
    )
}

export default Header;
