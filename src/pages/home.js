import { useEffect, useState } from "react";
import Notecard from "../components/notecards";
import {Container} from '@mui/material';
import Masonry from 'react-masonry-css'

const Home = () => {
    const [notes,setnotes]=useState([]);
    useEffect(()=>{
     fetch(" http://localhost:8000/notes")
     .then(res=>res.json())
     .then(data=>setnotes(data));
    },[])
    const handleDelete=async(id)=>{
     await fetch("http://localhost:8000/notes/"+ id,{
          method:"DELETE"
      })
      const newnotes=notes.filter( note=> (id!==note.id))
      setnotes(newnotes); //useeeffect renders the data for first time when user clicks on dlt button it affects this fun
      
    }
    const breakpoints={
        default:3,
        1100:2,
        700:1
    }
    return ( 
      
    <Container>
         <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
        {notes.map(note=>(
          <div item key={note.id} >
              {<Notecard note={note} handleDelete={handleDelete}/>}
        </div>
    
        ))}
        </Masonry>
    </Container> )
}
 
export default Home;
//reason of writing container next to grid is to give all grid items property relative to a container.