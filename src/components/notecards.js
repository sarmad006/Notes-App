import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';


const usestyles=makeStyles({
  test:{
    border:(note)=>{
      if(note.category==="work")
      return "1px solid red"
    },
   marginLeft:"0.5rem",
   marginTop:"0.5rem"
  },
  avatar:{
    backgroundColor:(note)=>{
      if(note.category==="work")
      {
      return "#FFFF33 !important"
      }
      if(note.category==="reminders")
      {
      return "cornflowerblue !important"
      }
      if(note.category==="todos")
      {
      return 'green !important'
      }
      return 'red !important'
    },
  }
})
const Notecard = ({note,handleDelete}) => {
  const classes=usestyles(note);
    return (  
        
            <Card className={classes.test}>
                <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>
                }
                action={
                    <IconButton onClick={()=>handleDelete(note.id)}>
                    <DeleteIcon />
                  </IconButton>
                  
                }
                title={note.title}
                subheader={note.category}
                />
             <CardContent>
             <Typography variant="body2" >
             {note.details}
             </Typography>

             </CardContent>
               
            </Card>
        
    );
}
 
export default Notecard;