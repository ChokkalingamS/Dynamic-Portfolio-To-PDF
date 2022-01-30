import { PDFExport} from '@progress/kendo-react-pdf';
import { useRef } from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import './App.css';
import './Responsive.css';

import Timeline from './Verticaltimeline2'

// SVG Icons
import img from './icons/img.svg';
import html from './icons/html5.svg'
import css from './icons/css3.svg'
import js from './icons/javascript.svg'
import reactjs from './icons/reactjs.svg'
import expressjs from './icons/express.png'
import nodejs from './icons/nodejs.svg'
import mongodb from './icons/mongodb.svg'




// Material UI
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import YardIcon from '@mui/icons-material/Yard';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import ArticleIcon from '@mui/icons-material/Article';




export default function Output() {

    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);
    
    const handleExportWithComponent = (event) => {
      pdfExportComponent.current.save();
    }
  
   
    return (
      <div className="template">
        <Box sx={{ '& > :not(style)': { m: 1 } }} className='box'>
        <Fab  aria-label="download" id='float-button'  variant="extended" onClick={handleExportWithComponent} > <PictureAsPdfIcon color='error' sx={{ mr: 1 }}/> GENERATE PDF</Fab>
        </Box>
        <PDFExport ref={pdfExportComponent} paperSize="A4" scale={0.4} margin="1cm"   keepTogether='.App'>
        <div ref={contentArea}>
       <Content/>
       </div>
       </PDFExport>
      </div>
    );
  }
  

function Content()
{

  return (
    <div>
      <Home profile={JSON.parse(localStorage.getItem("profile"))} />
    </div>
  );
}
 

export function Home({profile})
{

  const {Name,Role,Github,LinkedIn,Resume,Email}=profile

  return(<div>
     <div id='home'>
   
    <div className='img-name'>

     <div className='name'>
     <p className='name-line-1'>Hey there!, I'm-</p>
     <p className='name-line-2'>{Name}</p>
     <p className='name-line-3'>I'm a {Role}</p>

      <div className='button-group'>

      <div className='desktop-button'>
     {(Email)&&<Button startIcon={<MailIcon  style={{fill:'#d32f2f'}}/>} variant='outlined' color='error'>
      <a href={`mailto:${Email}`}  rel="noreferrer" target='_blank'>Mail</a>
     </Button>}

     {(LinkedIn)&&<Button startIcon={<LinkedInIcon  style={{fill:'#d32f2f'}}/>} variant='outlined' color='error'>
      <a href={LinkedIn} rel="noreferrer" target='_blank'>LinkedIn</a>
     </Button>}

     {(Github)&&<Button startIcon={<GitHubIcon  style={{fill:'#d32f2f'}}/>} variant='outlined' color='error'>
      <a href={Github} target='_blank'rel="noreferrer">GITHUB</a>
     </Button>}

     {(Resume)&&<Button startIcon={<ArticleIcon  style={{fill:'#d32f2f'}}/>} variant='outlined' color='error'>
      <a href={Resume} target='_blank'rel="noreferrer">Resume</a>
     </Button>}
     </div>

     <div className='mobile-icon'>
    {(Email)&&<IconButton><a href={`mailto:${Email}`} rel="noreferrer" target='_blank'><MailIcon className='footer-icon'fontSize='large'/></a></IconButton>}
    {(Github)&&<IconButton><a href={Github} rel="noreferrer" target='_blank'><GitHubIcon className='footer-icon' fontSize='large'/></a></IconButton>}
    {(LinkedIn)&&<IconButton><a href={LinkedIn} rel="noreferrer" target='_blank'><LinkedInIcon className='footer-icon' fontSize='large'/></a></IconButton>}
    {(Resume)&&<IconButton><a href={Resume} rel="noreferrer" target='_blank'><ArticleIcon className='footer-icon' fontSize='large'/></a></IconButton>}
    </div>

    </div>

     </div>

     {(Role)&&<img src={img} className='img' alt='logo'/>}
     </div>

  </div>
  
  <Skills/>
  <Projects/>
  <About/>
  <Interests/>
  </div>)
}



function About()
{
  const about=localStorage.getItem('profileDescription')
  return(
    (about.length>2)&&<div className='about' id='about'>
    <p className='heading'>About</p>
    <div className='para1'>
      <p>{about}</p>
      
    </div>
    <div>
      <p className='heading'>Education &amp; Work Experience</p>
    <Timeline/>
    </div>
  </div>)
}


function Skills()
{
    const data=JSON.parse(localStorage.getItem('skills'))

    const skills=techKnown(data)
     
  return(<div className='skill-container' id='skills'>
    {(skills.length>=1)&& <p className='heading'>SKILLS</p>}
    <br/>
    <div className='icon-container'>
    {skills.map(({name,icon},i)=>{ 
      return(<div key={i}>
    <img  className='icons' src={icon} alt='icon'/>
    <p className='icon-name'>{name}</p>
    </div>)})}
    </div>
  </div>)
}


function techKnown(data)
{
  let obj=[]
  
      for(let i of data)
      {   
        
        switch (i) 
        {
          case 'HTML':
          obj.push({name:'HTML5',icon:html})
              break;

          case 'CSS':
          obj.push({name:'CSS3',icon:css})
          break;

          case 'JavaScript':
          obj.push({name:'JavaScript',icon:js})
          break;

          case 'ReactJs':
          obj.push({name:'ReactJs',icon:reactjs})
          break;

          case 'NodeJs':
          obj.push({name:'NodeJs',icon:nodejs})
          break;

          case 'MongoDB':
          obj.push({name:'MongoDB',icon:mongodb})
          break;

          case 'ExpressJs':
          obj.push({name:'ExpressJs',icon:expressjs})
          break;
      
          default:
              break;
         }

      }  
      return obj;
}



function Projects()
{
    const pro=JSON.parse(localStorage.getItem('project'))
    const project1=pro.filter((a,i)=>i!==0)

return (
<div className='Projects' id='projects'>
  {(project1.length>=1)&&<p className='heading'>Projects</p>}
  <div className='project-container'>
        {project1.map(({projectName,projectThumbnail,projectTechnologyUsed,projectClientRepo,projectServerRepo,projectDemo,description,demoCredentials},i)=>{
        return(<div className='ind-project' key={i}>
       <a href={projectDemo} target='_blank' rel="noreferrer" ><img src={projectThumbnail}  alt='coverpic' className='coverpic' /></a>
         <p>{projectName}</p>
      
         <Moreinfo projectClientRepo={projectClientRepo} 
                   projectDemo={projectDemo}  
                   projectTechnologyUsed={projectTechnologyUsed}
                   description={description}
                   demoCredentials={demoCredentials}
                   projectServerRepo={projectServerRepo}/>
                </div>)
        })
        }
        </div>
        </div>)
}


function Tech(projectTechnologyUsed)
{
        let obj=[];
        for(let i of projectTechnologyUsed)
        {
            switch (i) {
                case 'HTML':
                obj.push({name:'HTML',icon:<i className="fab fa-html5"></i>})
                    break;

                case 'CSS':
                obj.push({name:'CSS',icon:<i className="fab fa-css3-alt"></i>})
                break;

                case 'JavaScript':
                obj.push({name:'JavaScript',icon:<i className="fab fa-js"></i>})
                break;

                case 'ReactJs':
                obj.push({name:'ReactJs',icon:<i className="fab fa-react"></i>})
                break;

                case 'NodeJs':
                obj.push({name:'NodeJs',icon:<i className="fab fa-node"></i>})
                break;

                case 'MongoDB':
                obj.push({name:'MongoDB',icon:<i className="fas fa-database"></i>})
                break;

                case 'ExpressJs':
                obj.push({name:'ExpressJs'})
                break;
            
                default:
                    break;
            }
        }

        return obj;
}






function Moreinfo({projectClientRepo,projectDemo,projectTechnologyUsed,projectServerRepo})
{


    const TechnologyUsed=Tech(projectTechnologyUsed)

  return (<div className='moreinfo'>
       <div className='icon-button'>
          {(projectClientRepo)&&<Tooltip title='Github-Client' placement='left'>
         <IconButton><a href={projectClientRepo} target='_blank'rel="noreferrer"><GitHubIcon color='primary' style={{fill:'#1976d2'}}  /></a></IconButton>
         </Tooltip>}
         {(projectServerRepo)&&
         <Tooltip title='Github-Server' placement='left'>
         <IconButton><a href={projectServerRepo} target='_blank'rel="noreferrer"><GitHubIcon color='primary' style={{fill:'#1976d2'}} /></a></IconButton>
         </Tooltip>}
         <Tooltip title='live Site' placement='bottom'>
         <IconButton><a href={projectDemo} target='_blank' rel="noreferrer"><LanguageIcon color='primary' style={{fill:'#1976d2'}} /></a></IconButton>
         </Tooltip>
         </div>
         <div className='chip'>
        {TechnologyUsed.map(({name,icon},i)=>{return (<div key={i}>
         <Chip icon={icon} label={name} variant="outlined" color='error' />
        </div>)})}
        </div>

  </div>)
}


function Interests()
{
  
   const data=JSON.parse(localStorage.getItem('interests'))||[];

   let obj=[];
   for(let i of data)
   {
       switch (i) {
           case 'Cycling':
           obj.push({name:'Cycling',icon: <DirectionsBikeIcon color='inherit' style={{fill:'red'}} fontSize='large' />})
               break;

           case 'Music':
           obj.push({name:'Music',icon: <AudiotrackIcon color='warning' style={{fill:'orange'}}  fontSize='large' />})
           break;

           case 'Cricket':
           obj.push({name:'Cricket',icon:<SportsCricketIcon color='primary' style={{fill:'blue'}}  fontSize='large'/>})
           break;

           case 'Gardening':
           obj.push({name:'Gardening',icon: <YardIcon color='success' style={{fill:'green'}}  fontSize='large'/>})
           break;
           default:
                    break;
       }

      }
   return (
   <div className='interests'>
     {(obj.length>=1)&&<p className='heading'>Interests</p>}
     <div className='icon-container'>
     {obj.map(({name,icon},i)=>{ return <div className='icon' key={i}>{icon} <p>{name}</p></div>})}
   </div>
   </div>)
}

