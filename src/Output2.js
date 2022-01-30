// import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
// import { useRef } from 'react';

// import Checkbox from '@mui/material/Checkbox';


// import './App.css';
// import './Responsive.css';




// import{Switch,Link,Route} from "react-router-dom";
// import {useState,forwardRef} from 'react'
// import axios from "axios";

// import project from './ProjectDetails'
// import Timeline from './verticalTimeline'

// // SVG Icons
// import img from './icons/img.svg';
// import contact from './icons/contact.svg';
// import html from './icons/html5.svg'
// import css from './icons/css3.svg'
// import js from './icons/javascript.svg'
// import reactjs from './icons/reactjs.svg'
// import expressjs from './icons/express.png'
// import nodejs from './icons/nodejs.svg'
// import materialui from './icons/material.svg'
// import mongodb from './icons/mongodb.svg'
// import vscode from './icons/vscode.svg'
// import postman from './icons/postman.svg'


// // Material UI
// import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
// import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import YardIcon from '@mui/icons-material/Yard';
// import SportsCricketIcon from '@mui/icons-material/SportsCricket';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Form from 'react-bootstrap/Form'
// import CircularProgress from '@mui/material/CircularProgress';
// import Stack from '@mui/material/Stack';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Button from '@mui/material/Button';
// import MailIcon from '@mui/icons-material/Mail';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LanguageIcon from '@mui/icons-material/Language';
// import IconButton from '@mui/material/IconButton';
// import Chip from '@mui/material/Chip';
// import InfoIcon from '@mui/icons-material/Info';
// import Tooltip from '@mui/material/Tooltip';
// import ArticleIcon from '@mui/icons-material/Article';




// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';




// export default function Output() {

//     const pdfExportComponent = useRef(null);
//     const contentArea = useRef(null);
    
//     const handleExportWithComponent = (event) => {
//       pdfExportComponent.current.save();
//     }
  
   
//     return (
//       <div className="template">
//          <button primary={true} onClick={handleExportWithComponent}>Export with Component</button>
//         <PDFExport ref={pdfExportComponent} paperSize="A4" scale={0.4} margin="1cm"   keepTogether='.App'>
//         <div ref={contentArea}>
//        <Content/>
//        </div>
//        </PDFExport>
//       </div>
//     );
//   }



// // const Resume='https://drive.google.com/file/d/165KGRpCTpcgNou7fhzEIYpOIyUAVmLuD/view?ths=true';
// const Resume='https://drive.google.com/file/d/14E-7DBNdkzKdbTxvG_4nYtxjQXhnSzFF/view?usp=sharing'



// function Content()
// {

//       let profileDetails = {
//         Name: "Chokkalingam.S",
//         Role: "Full Stack Developer",
//         Github: "https://github.com/ChokkalingamS",
//         Linkedin:'https://www.linkedin.com/in/chokkalingam-s/',
//         Email:'lingam1707@gmail.com"',
//         Resume:'https://drive.google.com/file/d/14E-7DBNdkzKdbTxvG_4nYtxjQXhnSzFF/view?usp=sharing'
//       };

//       const [profile,setProfile]=useState(profileDetails)
//   return(
  
//   <div>
     
//       {/* <Switch>
//       <Route exact path='/'>Home</Route>
//       <Route exact path='/form'><Forms/></Route>
//         <Route exact path='/sample'><Home profile={profile}/></Route>
//       </Switch> */}
//         {/* <Home profile={JSON.parse(localStorage.getItem('profile'))}/> */}
//         <Home profile={profile} setProfile={setProfile}/>

//   </div>)
// }
 
// function NavBar()
// {
//   return(
//   <div>
//     <ul className='nav-link'>
//       <li> <Link  to='/sample'>Home</Link></li>
//       <li> <a href='#skills'>Skills</a></li>
//       <li> <a href='#projects'>Projects</a></li>
//       <li> <a href='#about'>About</a></li>
//       <li> <a href='#contact'>Contact</a></li>
//       <li> <a href={Resume} rel="noreferrer" target='_blank'>Resume</a></li>
//     </ul>
//   </div>)
// }


// export function Home({profile,setProfile})
// {

//   const {Name,Role,Github,Linkedin,Resume,Email}=profile

//   const [name, setName] = useState(Name);
//   const [role, setRole] = useState(Role);
//   const [linkedin, setLinkedIn] = useState(Linkedin);
//   const [github, setGithub] = useState(Github);
//   const [email, setEmail] = useState(Email);
//   const [resume, setResume] = useState(Resume);

//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const UpdatedData={name,role,linkedin,github,email,resume}

//   return(<div>
//      <div id='home'>
//     <NavBar/>
//     <div className='img-name'>

//      <div className='name'>
//      <p className='name-line-1'>Hey there!, I'm-</p>
//      <p className='name-line-2'>{name}</p>
//      <p className='name-line-3'>I'm a {role}</p>

//       <div className='button-group'>

//       <div className='desktop-button'>
//      <Button startIcon={<MailIcon/>} variant='outlined' color='error'>
//       <a href={`mailto:${email}`}  rel="noreferrer" target='_blank'>Mail</a>
//      </Button>
//      <Button startIcon={<LinkedInIcon/>} variant='outlined' color='error'>
//       <a href={linkedin} rel="noreferrer" target='_blank'>LinkedIn</a>
//      </Button>
//      <Button startIcon={<GitHubIcon/>} variant='outlined' color='error'>
//       <a href={github} target='_blank'rel="noreferrer">GITHUB</a>
//      </Button>
//      <Button startIcon={<ArticleIcon/>} variant='outlined' color='error'>
//       <a href={resume} target='_blank'rel="noreferrer">Resume</a>
//      </Button>
//      </div>

//      <div className='mobile-icon'>
//     <IconButton><a href={`mailto:${email}`} rel="noreferrer" target='_blank'><MailIcon className='footer-icon'fontSize='large'/></a></IconButton>
//     <IconButton><a href={github} rel="noreferrer" target='_blank'><GitHubIcon className='footer-icon' fontSize='large'/></a></IconButton>
//     <IconButton><a href={linkedin} rel="noreferrer" target='_blank'><LinkedInIcon className='footer-icon' fontSize='large'/></a></IconButton>
//     <IconButton><a href={resume} rel="noreferrer" target='_blank'><ArticleIcon className='footer-icon' fontSize='large'/></a></IconButton>
//     </div>

//     </div>

//      </div>

//      <img src={img} className='img' alt='logo'/>
//      </div>



//      <div>
//       <Button variant="outlined" onClick={handleClickOpen}> Open form dialog</Button>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Profile</DialogTitle>
//         <DialogContent>
//           {/* <DialogContentText>
//             To subscribe to this website, please enter your email address here. We
//             will send updates occasionally.
//           </DialogContentText>
//            */}
         
//          <TextField  autoFocus margin="dense"fullWidth type="text" value={name} variant="standard" onChange={(e) => setName(e.target.value)} label="Name" placeholder="Name"/>
//          <TextField  autoFocus margin="dense"fullWidth type="text" value={role} variant="standard" onChange={(e) => setRole(e.target.value)}  label="Role" placeholder="Role"/>
//          <TextField autoFocus margin="dense"fullWidth type="url" variant="standard" onChange={(e) => setLinkedIn(e.target.value)} label="LinkedIn" placeholder="LinkedIn" />
//          <TextField autoFocus margin="dense"fullWidth type="url" variant="standard" onChange={(e) => setGithub(e.target.value)} label="Github" placeholder="Github"/>
//          <TextField autoFocus margin="dense"fullWidth type="email" variant="standard" onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Email"/>
//         <TextField autoFocus margin="dense"fullWidth type="url" variant="standard" onChange={(e) => setResume(e.target.value)} label="Resume" placeholder="Resume"/>




//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={()=>{setProfile(UpdatedData);handleClose()}}>Save</Button>
//         </DialogActions>
//       </Dialog>
//     </div>

//   </div>
  
//   <Skills/>
//   <Projects/>
//   <About/>
//   <Interests/>
//   <Contact/>
//   <Footer/>
//   </div>)
// }



// function About()
// {
//   // const about=localStorage.getItem('profileDescription')

//   const about=`Hello! I am a Fresher from Tirunelveli. Having good Knowledge in developing UI and CRUD APIs, and always open to new directions of programming. Dedicated to creating and optimizing interactive, user-friendly, and feature-rich web applications, Exposure to both Front-end & Back-end web development. I love to design websites and build full-stack applications using MERN stack preferably.Believe that continuous learning and belief are the key factors for achieving personal and professional success.Have the desire to learn and develop something new, as well as adhere to the rule "Good code is beautiful code" and try to follow all standards of the modern development process.`


//   const [open, setOpen] = useState(false);
//   const [description, setDescription] = useState(about);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
  


//   return(<div className='about' id='about'>
//     <p className='heading'>About</p>
//     <div className='para1'>
//       <p>{description}</p>
      
//     </div>
//     <div>
//       <p className='heading'>Education &amp; Work Experience</p>
//       <Dialog open={open} onClose={handleClose} >
//   <DialogTitle>Profile</DialogTitle>
//   <DialogContent>

// <TextField label="About"  multiline autoFocus maxRows={10} margin="dense" style={{width:'30rem'}} value={description}
//         onChange={(e) => {setDescription(e.target.value);}}/>
// </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Save</Button>
//         </DialogActions>
//       </Dialog>
//       <Button variant="outlined" onClick={handleClickOpen}> Open form dialog</Button>
//     <Timeline/>
//     </div>
//   </div>)
// }


// function Skills()
// {
//     const data=JSON.parse(localStorage.getItem('skills'))
//     const label = { inputProps: { 'aria-label': 'HTML' } };

//     const skills=techKnown(data)
//       console.log(typeof data);
//   return(<div className='skill-container' id='skills'>
//     <p className='heading' >SKILLS</p><br/>
//     {/* <Checkbox  {...label} value='html' onChange={(e)=>console.log(e.target.checked)}/> */}
//     <div className='icon-container'>
//     {skills.map(({name,icon},i)=>{ 
//       return(<div key={i}>
//     <img  className='icons' src={icon} alt='icon'/>
//     <p className='icon-name'>{name}</p>
//     </div>)})}
//     </div>
//   </div>)
// }


// function techKnown(data)
// {
//   let obj=[]
  
//       for(let i of data)
//       {   
        
//         switch (i) 
//         {
//           case 'HTML':
//           obj.push({name:'HTML5',icon:html})
//               break;

//           case 'CSS':
//           obj.push({name:'CSS3',icon:css})
//           break;

//           case 'JavaScript':
//           obj.push({name:'JavaScript',icon:js})
//           break;

//           case 'ReactJs':
//           obj.push({name:'ReactJs',icon:reactjs})
//           break;

//           case 'NodeJs':
//           obj.push({name:'NodeJs',icon:nodejs})
//           break;

//           case 'MongoDB':
//           obj.push({name:'MongoDB',icon:mongodb})
//           break;

//           case 'ExpressJs':
//           obj.push({name:'ExpressJs',icon:expressjs})
//           break;
      
//           default:
//               break;
//          }

//       }  
//       return obj;
// }












// function Projects()
// {
//     const pro=JSON.parse(localStorage.getItem('project'))
//     const project1=pro.filter((a,i)=>i!==0)

// return (
// <div className='Projects' id='projects'>
//   <p className='heading'>Projects</p>
//   <div className='project-container'>
//         {project1.map(({projectName,projectThumbnail,projectTechnologyUsed,projectClientRepo,projectServerRepo,projectDemo,description,demoCredentials},i)=>{
//         return(<div className='ind-project' key={i}>
//        <a href={projectDemo} target='_blank' rel="noreferrer" ><img src={projectThumbnail}  alt='coverpic' className='coverpic' /></a>
//          <p>{projectName}</p>
      
//          <Moreinfo projectClientRepo={projectClientRepo} 
//                    projectDemo={projectDemo}  
//                    projectTechnologyUsed={projectTechnologyUsed}
//                    description={description}
//                    demoCredentials={demoCredentials}
//                    projectServerRepo={projectServerRepo}/>
//                 </div>)
//         })
//         }
//         </div>
//         </div>)
// }


// function Tech(projectTechnologyUsed)
// {
//   console.log(projectTechnologyUsed);
//         let obj=[];
//         for(let i of projectTechnologyUsed)
//         {
//             switch (i) {
//                 case 'HTML':
//                 obj.push({name:'HTML',icon:<i className="fab fa-html5"></i>})
//                     break;

//                 case 'CSS':
//                 obj.push({name:'CSS',icon:<i className="fab fa-css3-alt"></i>})
//                 break;

//                 case 'JavaScript':
//                 obj.push({name:'JavaScript',icon:<i className="fab fa-js"></i>})
//                 break;

//                 case 'ReactJs':
//                 obj.push({name:'ReactJs',icon:<i className="fab fa-react"></i>})
//                 break;

//                 case 'NodeJs':
//                 obj.push({name:'NodeJs',icon:<i className="fab fa-node"></i>})
//                 break;

//                 case 'MongoDB':
//                 obj.push({name:'MongoDB',icon:<i className="fas fa-database"></i>})
//                 break;

//                 case 'ExpressJs':
//                 obj.push({name:'ExpressJs'})
//                 break;
            
//                 default:
//                     break;
//             }
//         }

//         return obj;
// }






// function Moreinfo({projectClientRepo,projectDemo,projectTechnologyUsed,projectServerRepo})
// {


//     const TechnologyUsed=Tech(projectTechnologyUsed)

//   return (<div className='moreinfo'>
//        <div className='icon-button'>
//           {(projectClientRepo)&&<Tooltip title='Github-Client' placement='left'>
//          <IconButton><a href={projectClientRepo} target='_blank'rel="noreferrer"><GitHubIcon color='primary' style={{fill:'#1976d2'}}  /></a></IconButton>
//          </Tooltip>}
//          {(projectServerRepo)&&
//          <Tooltip title='Github-Server' placement='left'>
//          <IconButton><a href={projectServerRepo} target='_blank'rel="noreferrer"><GitHubIcon color='primary' style={{fill:'#1976d2'}} /></a></IconButton>
//          </Tooltip>}
//          <Tooltip title='live Site' placement='bottom'>
//          <IconButton><a href={projectDemo} target='_blank' rel="noreferrer"><LanguageIcon color='primary' style={{fill:'#1976d2'}} /></a></IconButton>
//          </Tooltip>
//          </div>
//          <div className='chip'>
//         {TechnologyUsed.map(({name,icon},i)=>{return (<div key={i}>
//          <Chip icon={icon} label={name} variant="outlined" color='error' />
//         </div>)})}
//         </div>

//   </div>)
// }


// function Interests()
// {
  
//    const data=JSON.parse(localStorage.getItem('interests'))||[];

//    let obj=[];
//    for(let i of data)
//    {
//        switch (i) {
//            case 'Cycling':
//            obj.push({name:'Cycling',icon: <DirectionsBikeIcon color='inherit' style={{fill:'red'}} fontSize='large' />})
//                break;

//            case 'Music':
//            obj.push({name:'Music',icon: <AudiotrackIcon color='warning' style={{fill:'orange'}}  fontSize='large' />})
//            break;

//            case 'Cricket':
//            obj.push({name:'Cricket',icon:<SportsCricketIcon color='primary' style={{fill:'blue'}}  fontSize='large'/>})
//            break;

//            case 'Gardening':
//            obj.push({name:'Gardening',icon: <YardIcon color='success' style={{fill:'green'}}  fontSize='large'/>})
//            break;
//        }

//       }
//    return (
//    <div className='interests'>
//      <p className='heading'>Interests</p>
//      <div className='icon-container'>
//      {obj.map(({name,icon},i)=>{ return <div className='icon' key={i}>{icon} <p>{name}</p></div>})}
//    </div>
//    </div>)
// }

// function Contact()
// {
//   const [Name,setName]=useState('')
//   const [Email,setEmail]=useState('')
//   const [Message,setMessage]=useState('')
//   const [serverMessage,setServerMessage]=useState('')
//   const [progress, setProgress] = useState(0);

//   // Snack bar Open/Close Status
//   const [open, setOpen] = useState(false);
//   const Alert = forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

//   // Snack bar Open/Close function
//   const handleClick = () => { setOpen(true); };
//   const handleClose = () => { setOpen(false); };

//   const Data={Name,Email,Message};

//   const clearData=()=>{
//     setName('');setEmail('');setMessage('');
//   }

//   const Send=(Data)=>{
//     setProgress(1)
//       axios({
//         url:`https://server-port-folio.herokuapp.com/message`,
//         method:'POST',
//         data:Data,
//       }).then((response)=>response).then(({data})=>{setServerMessage({Msg:data,Result:'success'});clearData()})
//       .catch((error)=>setServerMessage({ Msg:error.response.data,Result:'error' }))
//       .then(()=>handleClick()).then(() => setProgress(0))
//       // .then(()=>{(serverMessage.Msg==='success') && clearData()})
//   }
//   return(<div className='contact-container' id='contact'>
//     <p className='heading'>Contact</p>

//     <div className='contact'>
    
//     <div>
//       <p className='heading'>Let's Work Together</p>
//       <img src={contact} alt='contact' className='contact-img' ></img>
//     </div>

//     <div>
//     <Form>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" ><br/>
//     <Form.Control type="text" placeholder="Name" size='lg' className='textField' value={Name} onChange={(e)=>setName(e.target.value)} />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" ><br/>
//     <Form.Control type="text" placeholder="Email" size='lg' className='textField' value={Email} onChange={(e)=>setEmail(e.target.value)} />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"><br/>
//     <Form.Control as="textarea" placeholder="Message" size='lg' rows={5}   className='textField' value={Message} onChange={(e)=>setMessage(e.target.value)} />
//   </Form.Group><br/>
  
// </Form>

// <Button variant='outlined' color='error' type='submit' fullWidth onClick={()=>Send(Data)}>Send</Button>  
 
//     </div>
//     </div>
    
//     {/* Progress Bar rendered based on condition */}
//     {(progress === 1) && <CircularProgress id='progress' color='primary'></CircularProgress>}
//     <Stack spacing={2} sx={{ width: '100%' }}>
//       <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
//         <Alert severity={serverMessage.Result} sx={{ width: '100%' }}>
//           {serverMessage.Msg}
//         </Alert>
//       </Snackbar>
//     </Stack>
//   </div>)
// }





// function Footer()
// {
//   return(<div className='footer'>
//     <div className='footer-text'>
//     <p>Made with <FavoriteIcon id='heart' color='error'/> By Chokkalingam </p>
//     </div>
//     <div>
//     <IconButton><a href="mailto:lingam1707@gmail.com" rel="noreferrer" target='_blank'><MailIcon className='footer-icon'fontSize='large'/></a></IconButton>
//     <IconButton><a href="https://github.com/ChokkalingamS" rel="noreferrer" target='_blank'><GitHubIcon className='footer-icon' fontSize='large'/></a></IconButton>
//     <IconButton><a href="https://www.linkedin.com/in/chokkalingam-s/" rel="noreferrer" target='_blank'><LinkedInIcon className='footer-icon' fontSize='large'/></a></IconButton>
//     </div>
//   </div>)
// }


