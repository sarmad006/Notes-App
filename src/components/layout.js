import { makeStyles } from "@mui/styles";
import {Drawer,Typography,List,ListItem,ListItemText,ListItemIcon, Toolbar,AppBar, Avatar} from "@mui/material";
import SubjectIcon from '@mui/icons-material/SubjectOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useHistory,useLocation } from "react-router-dom"; 
import {format} from "date-fns";

 const drawerwidth="18rem";
 const usestyles=makeStyles((theme)=>{
   return{  
    page:{
         backgroundColor:"whitesmoke",
         width:"100%",
         padding:theme.spacing(3)
     },
     drawer:{
         width:drawerwidth,
         [theme.breakpoints.only('xs')]:{
             width:"15rem"
         },
         
     },
     root:{
         display:"flex"
     },
     active:{ 
         backgroundColor:"#d3d3d3 !important"
        
     },
     title:{
         padding:theme.spacing(3)
     },
    appbar:{
        width:`calc(100% - ${drawerwidth})!important`,
        [theme.breakpoints.only('xs')]:{
            width:"27rem !important"
        },
    },
    toolbar: {
        marginTop:"3rem"
    },
    appbartypo:{
       flexGrow:1
    },
    avatar:{
      marginLeft:theme.spacing(2)
    }
    }
 })

const Layouts = ({children}) => {
 
    const menuitems=[
        
        {text: "My notes",
        icon: <SubjectIcon color="primary"/>,
        path: "/"
    },
    {
        text: "Create notes",
        icon: <ControlPointIcon color="primary"/>,
        path: "/create"
    }
    

    ]
    const classes=usestyles();
    const history=useHistory();
    const location=useLocation();
    return ( 

    <div className={classes.root}>
        <AppBar color="info" className={classes.appbar} elevation={0}>
          <Toolbar>
              <Typography color="textsecondary" className={classes.appbartypo}>
              Today's date is {format(new Date(),'do MMMM yyy')}
              </Typography>
              <Typography >
                  Arham
              </Typography>
              <Avatar src="/nicolas-horn.jpg" className={classes.avatar}></Avatar>
          </Toolbar>
          </AppBar>
        <Drawer className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper:classes.drawer}}>
            <div>
                <Typography variant="h5" className={classes.title}>
                    Sarmad Notes
                </Typography>
                <List>
                    {menuitems.map(menu=>(
                         <ListItem key={menu.text}
                          button 
                          onClick={()=>history.push(menu.path)}
                          className={location.pathname === menu.path ? classes.active: null}>
                            <ListItemIcon  > {menu.icon} </ListItemIcon>
                            <ListItemText primary={menu.text} />
                         </ListItem>
                    ))}
                   
                </List>
            </div>
            </Drawer>
            <div className={classes.page}>
         <div className={classes.toolbar}>
        {children}
        </div>
    </div>
    </div> );
}
 
export default Layouts;