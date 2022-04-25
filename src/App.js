import './App.css';
import './Responsive.css';
import Button from "@mui/material/Button";

import{Switch,Link,Route} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Template from './Template.js'
import {Forms} from './Form.js'
import Output from './Output.js'
import Typography from '@mui/material/Typography';
import homepage from './icons/homepage.svg'

export default function App() {


  
  return (
    <div className="App">
              <Container/>
    </div>
  );
}


function Container()
{
      return(<div>
          <Navbar/>
        <Switch>
            <Route exact path='/'><Homepage/></Route>
            <Route exact path='/form'><Forms/></Route>
            <Route exact path='/sample'><Template/></Route>
            <Route exact path='/output'><Output/></Route>
        </Switch>
        </div>)  
}

function Navbar()
{
    return(<div>
               <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{height:"3rem",backgroundColor:"rgb(39 39 39)"}}>
                <Toolbar variant="dense" >
               <Button color='inherit'> <Link to='/'>Home</Link></Button>
               <Button color='inherit'> <Link to='/sample'>Sample</Link></Button>
               <Button color='inherit'> <Link to='/form'>Forms</Link> </Button>
                </Toolbar>    
                </AppBar>
      </Box>
    </div>)  
}


function Homepage()
{
    return (<div className='home-page'>

      <img src={homepage} className='homeimg' alt='logo'/>

        <div>
                <Typography gutterBottom variant="h3" component="div">PORTFOLIO</Typography>
                <Typography gutterBottom variant="h3" component="div">TO PDF</Typography>
        </div>
    </div>)  
}



















