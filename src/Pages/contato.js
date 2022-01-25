/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {

    const url = 'http://localhost:5000/message'
    const[message, setMessage]= useState([])
    const[author, setAuthor]= useState('')
    const[content, setContent]= useState('')
    const[validator, setValidator]=useState(true)
    const[render, setRender] = useState(false)
    const[success, setSuccess] = useState(false)

    useEffect(async ()=>{
        const response = await fetch(url)
        const data = await response.json()
       
        setMessage(data)
        
    },[render])
    
    const sendMessage=()=>{
        setValidator(false)
        if(author.length <= 0 || content.length <= 0){
            return setValidator(!validator)
        }
        
        const bodyForm={
            email:author,
            message:content
        }
    
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bodyForm)
        })
        .then(response=>response.json())
        .then(result =>{
            if(result.id){
                setRender(true)
                setSuccess(true)
                setTimeout(()=>{
                    setSuccess(false)
                },3000)
            }
        })
        setAuthor('')
        setContent('')
    }

    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" value={author} onChange={(e)=>{setAuthor(e.target.value)}} fullWidth/>
                <TextField id="message" label="Message" value={content} onChange={(e)=>{setContent(e.target.value)}}  fullWidth/>
            </Grid>

           {validator && 
                 <div className="alert alert-warning alert-dismissible fade show" role="alert">
                 <strong><h5>Por favor preencha todos os campos!!</h5></strong> 
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
           }

            {success && 
                 <div className="alert alert-success alert-dismissible fade show" role="alert" style={{backgroundColor:'green'}}>
                 <strong><h5>Mensagem enviada com sucesso!</h5></strong> 
                 
             </div>
           }

            <Button className="mt-2" variant="contained" color="primary" onClick={sendMessage}>
                Sent
            </Button>
            {message.map(content=>{
                return(
                    <div className="card" key={content.id}>
                    <div className="card-body">
                    <h5 className="card-title">{content.email}</h5>
                    <p className="card-text">{content.message}</p>
                    <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                </div>
            
            </div>
                )
            })}

            

            
        </>
    )
}

export default Contatos;
