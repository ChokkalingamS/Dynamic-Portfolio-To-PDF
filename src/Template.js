import './App.css';
import './Responsive.css';

import {useState,forwardRef} from 'react'
import axios from "axios";

import project from './ProjectDetails'
import Timeline from './verticalTimeline'

// SVG Icons
import img from './icons/img.svg';
import contact from './icons/contact.svg';
import html from './icons/html5.svg'
import css from './icons/css3.svg'
import js from './icons/javascript.svg'
import reactjs from './icons/reactjs.svg'
import expressjs from './icons/express.png'
import nodejs from './icons/nodejs.svg'
import materialui from './icons/material.svg'
import mongodb from './icons/mongodb.svg'
import vscode from './icons/vscode.svg'
import postman from './icons/postman.svg'


// Material UI
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import YardIcon from '@mui/icons-material/Yard';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Form from 'react-bootstrap/Form'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import ArticleIcon from '@mui/icons-material/Article';


export default function Template() {


  
   
    return (
      <div className="template">
       
       <Content/>
       </div>
      
    );
  }



// const Resume='https://drive.google.com/file/d/165KGRpCTpcgNou7fhzEIYpOIyUAVmLuD/view?ths=true';
const Resume='https://drive.google.com/file/d/14E-7DBNdkzKdbTxvG_4nYtxjQXhnSzFF/view?usp=sharing'



function Content()
{
 return(
  <div> <Home profile={JSON.parse(localStorage.getItem('profile'))}/>
  </div>)
}
 

export function Home()
{
  return(<div>
     <div id='home'>
    <div className='img-name'>

     <div className='name'>
     <p className='name-line-1'>Hey there!, I'm- </p>
     <p className='name-line-2'>Chokkalingam.S</p>
     <p className='name-line-3'>I'm a Full Stack Developer</p>

      <div className='button-group'>

      <div className='desktop-button'>
     <Button startIcon={<MailIcon/>} variant='outlined' color='error'>
      <a href={`mailto:lingam1707@gmail.com`}  rel="noreferrer" target='_blank'>Mail</a>
     </Button>
     <Button startIcon={<LinkedInIcon/>} variant='outlined' color='error'>
      <a href='https://www.linkedin.com/in/chokkalingam-s/' rel="noreferrer" target='_blank'>LinkedIn</a>
     </Button>
     <Button startIcon={<GitHubIcon/>} variant='outlined' color='error'>
      <a href='https://github.com/ChokkalingamS' target='_blank'rel="noreferrer">GITHUB</a>
     </Button>
     <Button startIcon={<ArticleIcon/>} variant='outlined' color='error'>
      <a href={Resume} target='_blank'rel="noreferrer">Resume</a>
     </Button>
     </div>

     <div className='mobile-icon'>
    <IconButton><a href='mailto:lingam1707@gmail.com' rel="noreferrer" target='_blank'><MailIcon className='footer-icon'fontSize='large'/></a></IconButton>
    <IconButton><a href='https://github.com/ChokkalingamS' rel="noreferrer" target='_blank'><GitHubIcon className='footer-icon' fontSize='large'/></a></IconButton>
    <IconButton><a href='https://www.linkedin.com/in/chokkalingam-s/' rel="noreferrer" target='_blank'><LinkedInIcon className='footer-icon' fontSize='large'/></a></IconButton>
    <IconButton><a href={Resume} rel="noreferrer" target='_blank'><ArticleIcon className='footer-icon' fontSize='large'/></a></IconButton>
    </div>

    </div>

     </div>

     <img src={img} className='img' alt='logo'/>
     </div>

  </div>
  
  <Skills/>
  <Projects/>
  <About/>
  <Interests/>
  <Contact/>
  <Footer/>
  </div>)
}



function About()
{
  return(<div className='about' id='about'>
    <p className='heading'>About</p>
    <div className='para1'>
      <p>Hello! I am a Fresher from Tirunelveli. Having good Knowledge in developing UI and CRUD APIs, and always open to new directions of programming. Dedicated to creating and optimizing interactive, user-friendly, and feature-rich web applications, Exposure to both Front-end &amp; Back-end web development. I love to design websites and build full-stack applications using MERN stack preferably.</p>
      <p>Believe that continuous learning and belief are the key factors for achieving personal and professional success.Have the desire to learn and develop something new, as well as adhere to the rule "Good code is beautiful code" and try to follow all standards of the modern development process.</p>
    </div>
    <div>
      <p className='heading'>Education &amp; Work Experience</p>
    <Timeline/>
    </div>
  </div>)
}


function Skills()
{
 
  return(<div className='skill-container' id='skills'>
    <p className='heading' >SKILLS</p><br/>
    
    <div className='icon-container'>

    <div>
    <img  className='icons' src={html} alt='icon'/>
    <p className='icon-name'>HTML5</p>
    </div>

    <div>
    <img  className='icons' src={css} alt='icon'/>
    <p className='icon-name'>CSS3</p>
    </div>

    <div>
    <img  className='icons' src={js} alt='icon'/>
    <p className='icon-name'>JavaScript</p>
    </div>

    <div>
    <img  className='icons' src={materialui} alt='icon'/>
    <p className='icon-name'>Material UI</p>
    </div>

    <div>
    <img  className='icons' src={mongodb} alt='icon'/>
    <p className='icon-name'>MongoDB</p>
    </div>

    <div>
    <img  className='icons' src={expressjs} alt='icon'/>
    <p className='icon-name'>Express Js</p>
    </div>

    <div>
    <img  className='icons' src={reactjs} alt='icon'/>
    <p className='icon-name'>React Js</p>
    </div>

    <div>
    <img  className='icons' src={nodejs} alt='icon'/>
    <p className='icon-name'>Node Js</p>
    </div>
    
    </div>
    <br/><br/>
    <p className='heading'>TOOLS</p>
    <div className='icon-container'>
      <div>
    <img  className='icons' src={vscode} alt='icon'/>
    <p className='icon-name'>VisualStudio Code</p>
    </div>
    <div>
    <img  className='icons' src={postman} alt='icon'/>
    <p className='icon-name'>Postman</p>
    </div>
    </div>
  </div>)
}



function Projects()
{
 
return (
<div className='Projects' id='projects'>
  <p className='heading'>Projects</p>
  <div className='project-container'>
        {project.map(({name,coverPic,technology,github_client,github_server,site,description,demoCredentials},i)=>{
        return(<div className='ind-project' key={i}>
       <a href={site} target='_blank' rel="noreferrer" ><img src={coverPic}  alt='coverpic' className='coverpic' /></a>
         <p>{name}</p>
      
         <Moreinfo github_client={github_client} 
                   site={site}  
                   technology={technology}
                   description={description}
                   demoCredentials={demoCredentials}
                   github_server={github_server}/>
                </div>)
        })
        }
        </div>
        </div>)
}


function Moreinfo({github_client,site,technology,description,demoCredentials,github_server})
{

  let [showDescription,setShowDescription]=useState(0)
  return (<div className='moreinfo'>
       <div className='icon-button'>
         <Tooltip title='Github-Client' placement='left'>
         <IconButton><a href={github_client} target='_blank'rel="noreferrer"><GitHubIcon color='primary' style={{fill:'#1976d2'}}  /></a></IconButton>
         </Tooltip>
         {(github_server)&&
         <Tooltip title='Github-Server' placement='left'>
         <IconButton><a href={github_server} target='_blank'rel="noreferrer"><GitHubIcon color='primary' style={{fill:'#1976d2'}} /></a></IconButton>
         </Tooltip>}
         <Tooltip title='live Site' placement='bottom'>
         <IconButton><a href={site} target='_blank' rel="noreferrer"><LanguageIcon color='primary' style={{fill:'#1976d2'}} /></a></IconButton>
         </Tooltip>
         <Tooltip title='More Info' placement='right' >
         <IconButton id='info' onClick={()=>setShowDescription((showDescription)=>(showDescription===0)?1:0)}><InfoIcon   color='primary'/></IconButton>
         </Tooltip>
         </div>
         {(showDescription===1)&&
         <div>
           <div className='description'>
           <p>{description}</p>
           </div>
           {(demoCredentials)&&<div>
             <p>Demo Login Credentials</p>
           <p>MailId: {demoCredentials.mailId}</p>
           <p>Password: {demoCredentials.Password}</p>
           </div>}
           </div>
           }
         {(showDescription===0)&&<div className='chip'>
        {technology.map(({name,icon},i)=>{return (<div key={i}>
         <Chip icon={icon} label={name} variant="outlined" color='error' />
        </div>)})}
        </div>}

  </div>)
}


function Interests()
{
   let interest = [
     { name: "Cycling", icon: <DirectionsBikeIcon color='inherit' style={{fill:'red'}} fontSize='large' /> },
     { name: "Music", icon: <AudiotrackIcon color='warning' style={{fill:'orange'}}  fontSize='large' /> },
     {name:'Cricket',icon:<SportsCricketIcon color='primary' style={{fill:'blue'}}  fontSize='large'/>}, 
     { name: "Gardening", icon: <YardIcon color='success' style={{fill:'green'}}  fontSize='large'/> },
   ];
   return (
   <div className='interests'>
     <p className='heading'>Interests</p>
     <div className='icon-container'>
     {interest.map(({name,icon},i)=>{ return <div className='icon' key={i}>{icon} <p>{name}</p></div>})}
   </div>
   </div>)
}

function Contact()
{
  const [Name,setName]=useState('')
  const [Email,setEmail]=useState('')
  const [Message,setMessage]=useState('')
  const [serverMessage,setServerMessage]=useState('')
  const [progress, setProgress] = useState(0);

  // Snack bar Open/Close Status
  const [open, setOpen] = useState(false);
  const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // Snack bar Open/Close function
  const handleClick = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const Data={Name,Email,Message};

  const clearData=()=>{
    setName('');setEmail('');setMessage('');
  }

  const Send=(Data)=>{
    setProgress(1)
      axios({
        url:`https://server-port-folio.herokuapp.com/message`,
        method:'POST',
        data:Data,
      }).then((response)=>response).then(({data})=>{setServerMessage({Msg:data,Result:'success'});clearData()})
      .catch((error)=>setServerMessage({ Msg:error.response.data,Result:'error' }))
      .then(()=>handleClick()).then(() => setProgress(0))
      // .then(()=>{(serverMessage.Msg==='success') && clearData()})
  }
  return(<div className='contact-container' id='contact'>
    <p className='heading'>Contact</p>

    <div className='contact'>
    
    <div>
      <p className='heading'>Let's Work Together</p>
      <img src={contact} alt='contact' className='contact-img' ></img>
    </div>

    <div>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" ><br/>
    <Form.Control type="text" placeholder="Name" size='lg' className='textField' value={Name} onChange={(e)=>setName(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" ><br/>
    <Form.Control type="text" placeholder="Email" size='lg' className='textField' value={Email} onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"><br/>
    <Form.Control as="textarea" placeholder="Message" size='lg' rows={5}   className='textField' value={Message} onChange={(e)=>setMessage(e.target.value)} />
  </Form.Group><br/>
  
</Form>

<Button variant='outlined' color='error' type='submit' fullWidth onClick={()=>Send(Data)}>Send</Button>  
 
    </div>
    </div>
    
    {/* Progress Bar rendered based on condition */}
    {(progress === 1) && <CircularProgress id='progress' color='primary'></CircularProgress>}
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity={serverMessage.Result} sx={{ width: '100%' }}>
          {serverMessage.Msg}
        </Alert>
      </Snackbar>
    </Stack>
  </div>)
}





function Footer()
{
  return(<div className='footer'>
    <div className='footer-text'>
    <p>Made with <FavoriteIcon id='heart' color='error'/> By Chokkalingam </p>
    </div>
    <div>
    <IconButton><a href="mailto:lingam1707@gmail.com" rel="noreferrer" target='_blank'><MailIcon className='footer-icon'fontSize='large'/></a></IconButton>
    <IconButton><a href="https://github.com/ChokkalingamS" rel="noreferrer" target='_blank'><GitHubIcon className='footer-icon' fontSize='large'/></a></IconButton>
    <IconButton><a href="https://www.linkedin.com/in/chokkalingam-s/" rel="noreferrer" target='_blank'><LinkedInIcon className='footer-icon' fontSize='large'/></a></IconButton>
    </div>
  </div>)
}
