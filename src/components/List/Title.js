import React, {useState} from 'react';
import {Typography, InputBase} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const useStyle = makeStyles((theme) => ({
    editableTitle:{
        flexGrow:1,
        fontSize:"1.2rem",
        fontWeight:"bold",
    },
    editableTitleContainer:{
        marginLeft: theme.spacing(1),
        display:'flex'
    },
    input:{
        margin:theme.spacing(1),
        "&:focus":{
            background:'#ddd'
        },
        fontSize:"1.2rem",
        fontWeight:"bold",
    }
}));



export default function Title({title}){
    const [open, setOpen] = useState();
    const classes = useStyle();
    return(
        <div>
            {open ?(
            <div>
                <InputBase autoFocus value={title} inputProps={{className:classes.input,}} fullWidth onBlur = {() => setOpen(!open)} />
            
        </div>):(
       
            
            <div className={classes.editableTitleContainer}>
                <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>{title}</Typography>
                <MoreHorizIcon />
            </div>
        )
             }
        </div>
    )
}