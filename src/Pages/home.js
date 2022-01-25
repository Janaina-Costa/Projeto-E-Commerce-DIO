/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';

import linkedin from '../components/img/likdin.png'
import git from '../components/img/github.png'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',  
      color:'gray',
      
     
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',  
          
    },
    list:{
        fontFamily: 'Sarabun', 
        color:'gray',
        textAlign:'left',
        
    },
    footer:{
        fontStyle:'italic'
    }
    
  }));
  

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return(
        <Grid container spacing={3} className={classes.root}>
            <Grid item sx={3}>
                <Paper className={classes.paper}>
               
                    <Typography variant='h5' className={classes.list} style={{fontFamily: 'Sarabun', marginLeft:'12px'}}>
                        <hr/>
                        Categorias
                        <hr/>
                    </Typography>

                
                    <List className={classes.list} style={{fontFamily: 'Sarabun'}}> 
                        {category.map(
                            category => {
                                return (
                                    <Item
                                    
                                    key = {category.id} 
                                    name= {category.name}
                                    details={count[category.name]}
                                    
                                    
                                    />
                                    )
                                }
                                )}
                                <hr/>
                                <h4 style={{fontStyle:'italic', textAlign:'center', margin:'auto', fontSize:'20px', padding:'8px', fontFamily: 'Great Vibes, cursive', color:'black'}} > Janaina Costa
                                </h4> 
                                <span style={{margin:'auto'}}>
                                    <a href="https://www.linkedin.com/feed/" target='_blank'style={{marginLeft:'70px' }}> <img src={linkedin} alt="icone linkedin" width='26px' style={{borderRadius:'100%'}}/></a><a href="https://github.com/Janaina-Costa" target='_blank' style={{marginLeft:'10px' }}> <img src={git} alt="iconegithub" width='26px' style={{borderRadius:'100%' }} /></a> 
                                
                                 </span> 
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={8} spacing={3} className={classes.root}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            
            </Grid>
        </Grid>
    )
}

export default HomePage;
