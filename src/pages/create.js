import { makeStyles } from '@mui/styles';
import { Button, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField,Radio } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';


const useStyles=makeStyles({
    inputtags:{
        margin:"1rem !important",
        display:"block !Important"
    }
     
 });

const Create = () => {
    const [title,settitle]=useState('');
    const [details,setdescription]=useState('');
    const [titleerror,settitleeror]=useState(false);
    const [descriptionerror,setdescriptionerror]=useState(false);
    const [category,setcategory]=useState('todos');
    const history=useHistory();
    const classes=useStyles();

    const handleSubmit=(e)=>{
        e.preventDefault();
        settitleeror(false);
        setdescriptionerror(false);
        if( !title)
         settitleeror(true);
         if(!details)
         setdescriptionerror(true);

         if(title&&details)
         fetch("http://localhost:8000/notes",{
             method:"POST",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify({title,details,category})
         }).then(()=>history.push('/'))
    }
    return ( <Container>
       

        <Typography 
        variant="h6"
        gutterBottom
        >Create Notes</Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
            onChange={(e)=>settitle(e.target.value)}
            className={classes.inputtags}
            variant="outlined"
            label="Name"
            color="secondary"
            fullWidth
            required
            error={titleerror}
            >
           </TextField>
            <TextField 
            onChange={(e)=>setdescription(e.target.value)}
            className={classes.inputtags}
            variant="outlined"
            label="Description"
            color="secondary"
            multiline
            rows={5}
            fullWidth
            required
            error={descriptionerror}
            >
                
            </TextField>
            <FormControl className={classes.inputtags}>
                <FormLabel>Category</FormLabel>
                    <RadioGroup value={category} onClick={(e)=>setcategory(e.target.value)} >
                        <FormControlLabel value="reminders" control={<Radio />} label="reminders"  >
                        </FormControlLabel>
                        <FormControlLabel value="todos" control={<Radio />} label="todos" >
                        </FormControlLabel>
                        <FormControlLabel value="work" control={<Radio />} label="work" >
                        </FormControlLabel>
                        <FormControlLabel value="money" control={<Radio />} label="money" >
                        </FormControlLabel>
                    </RadioGroup>
               
                </FormControl>
        <Button 
         variant="contained"
        color="info"
        type="submit"
        
        endIcon={<KeyboardArrowRightIcon />} >
        SUBMIT</Button>
</form>       

    </Container>  );
}
 
export default Create; 