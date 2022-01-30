import { useState, useEffect } from "react";

import{useHistory} from "react-router-dom";

// select
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// upload
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";



export function Forms() {
  const [Name, setName] = useState("");
  const [Role, setRole] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [Github, setGithub] = useState("");
  const [Email, setEmail] = useState("");
  const [Resume, setResume] = useState("");

  let history=useHistory()

  const [ProjectTechnologyUsed,setProjectTechnologyUsed]=useState([])
  console.log(ProjectTechnologyUsed);
  localStorage.setItem("skills", JSON.stringify(ProjectTechnologyUsed));

  const profileDetails = { Name, Role, LinkedIn, Github, Email, Resume };
  localStorage.setItem("profile", JSON.stringify(profileDetails));

  const [projectDetails, setProjectDetails] = useState([]);
  localStorage.setItem("project", JSON.stringify(projectDetails));
  console.log("projectDDetails", projectDetails);

  const [employmentDetails, setEmploymentDetails] = useState("");
  localStorage.setItem("employment", JSON.stringify(employmentDetails));
  console.log(employmentDetails);

  const [profileDescription,setProfileDescription]=useState('')
  localStorage.setItem("profileDescription", JSON.stringify(profileDescription));

  const [interests,setInterests]=useState('');
  localStorage.setItem("interests", JSON.stringify(interests));

  const [educationDetails,setEducationDetails]=useState('')
  localStorage.setItem("education", JSON.stringify(educationDetails));

  return (
    <div>
      <br />
      <div className='ProfileDetails'>
      <div className='profile'>
      <h4>Profile</h4>
      <br />
      <TextField type="text" variant="outlined"  className='profiletextfield' onChange={(e) => setName(e.target.value)} label="Name" placeholder="Name"/>
      <br />
      <br />

      <TextField  type="text" variant="outlined" className='profiletextfield' onChange={(e) => setRole(e.target.value)}  label="Role" placeholder="Role"/>
      <br />
      <br />
      <TextField type="url" variant="outlined" className='profiletextfield' onChange={(e) => setLinkedIn(e.target.value)} label="LinkedIn" placeholder="LinkedIn" />
      <br />
      <br />
      <TextField type="url" variant="outlined" className='profiletextfield' onChange={(e) => setGithub(e.target.value)} label="Github" placeholder="Github"/>
      <br />
      <br />
      <TextField type="url" variant="outlined" className='profiletextfield' onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Email"/>
      <br />
      <br />
      <TextField type="url" variant="outlined" className='profiletextfield' onChange={(e) => setResume(e.target.value)} label="Resume" placeholder="Resume"/>
      <br />
      <br />
      </div>

      <div className='skill container'>
        <h4>About</h4>
        <br/>
      <About setProfileDescription={setProfileDescription} />
      <br/>
      <h4>Skills</h4>
      <MultipleSelectChip setProjectTechnologyUsed={setProjectTechnologyUsed}/>
      <h4>Interests</h4>
      <Interests setInterests={setInterests}/>
      </div>
      </div>

      <br/>
      <div className='empeducontainer'>
      <div>
      <h4>Employment</h4>
      <Employment className='employment' setEmploymentDetails={setEmploymentDetails} />
      </div>
      <div className='educationcontainer' >
      <h4>Education</h4>
      <Education setEducationDetails={setEducationDetails}/>
      </div>
      </div>

      <br/>
      <br/>
      <div className='projectcontainer'>
      <h3>Projects</h3>
      <ProjectDetails setProjectDetails={setProjectDetails} />
      <br />
      </div>
      <br />
      <br/>
      <br/>
    <Button variant='contained' color='success' onClick={()=>(Name)&&history.push('/output')}  className='submitbutton'>Submit Form</Button>
    </div>
  );
}



function ProjectDetails({ setProjectDetails }) {
  const [projectName, setProjectName] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState("");
  const [projectDemo, setProjectDemo] = useState("");
  const [projectServerRepo, setProjectServerRepo] = useState("");
  const [projectClientRepo, setProjectClientRepo] = useState("");
  const [projectTechnologyUsed, setProjectTechnologyUsed] = useState([]);

  const [project, setProject] = useState([{}]);
  const save = (obj) => {
    setProjectDetails([...project, obj]);
  };

  const [view, setView] = useState(false);

  let obj = { projectName,projectDemo,projectServerRepo,projectClientRepo,projectTechnologyUsed,
    projectThumbnail: projectThumbnail ? URL.createObjectURL(projectThumbnail): "",};

  return (
    <div>
      {project.map((a, i) => {
        return (
          <div key={i}>
            <Project
              setProjectName={setProjectName}
              setProjectDemo={setProjectDemo}
              setProjectClientRepo={setProjectClientRepo}
              setProjectServerRepo={setProjectServerRepo}
              setProjectThumbnail={setProjectThumbnail}
            />
            <br/>
            <MultipleSelectChip setProjectTechnologyUsed={setProjectTechnologyUsed}/>

            <br />
            <br />
          </div>
        );
      })}

      <Button variant="contained" disabled={view} onClick={() => { setProject((data) => [...data, obj]); setProjectTechnologyUsed([]);}}>
        Add Project
      </Button>

      <Button color='warning' variant='contained' onClick={() => { setView(true); save(obj);}} className='savebutton'>Save</Button>
    </div>
  );
}

function Project({
  setProjectName,
  setProjectDemo,
  setProjectClientRepo,
  setProjectServerRepo,
  setProjectThumbnail,
}) {
  const [,setName] = useState("");
  const [,setThumbnail] = useState("");
  const [,setDemo] = useState("");
  const [,setServerRepo] = useState("");
  const [,setClientRepo] = useState("");

  useEffect(() => {
    setProjectName("");
    setProjectDemo("");
    setProjectClientRepo("");
    setProjectServerRepo("");
    setProjectThumbnail("");
  }, [setProjectName,
    setProjectDemo,
    setProjectClientRepo,
    setProjectServerRepo,
    setProjectThumbnail,]);

  const Input = styled("input")({ display: "none" });

  return (
    <div>
      <TextField type="text"  className='projecttextfield'  variant="outlined" onChange={(e) => {setName(e.target.value);setProjectName(e.target.value); }} label=" Title" placeholder=" Title"/>
      <br />
      <br />

      <TextField type="url" className='projecttextfield'  variant="outlined" onChange={(e) => { setDemo(e.target.value);setProjectDemo(e.target.value); }} label="Demo Link" placeholder="Demo Link" />
      <br />
      <br />

      <TextField  type="url" className='projecttextfield' variant="outlined"onChange={(e) => { setClientRepo(e.target.value); setProjectClientRepo(e.target.value);}} label="Client Repository" placeholder="Client Repository"/>
      <br />
      <br />
      <TextField type="url" className='projecttextfield'  variant="outlined" onChange={(e) => { setServerRepo(e.target.value); setProjectServerRepo(e.target.value); }} label="Server Repository" placeholder="Server Repository"/>
      <br />
      <br />

      {/* Upload button */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file" autoWidth
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
              setProjectThumbnail(e.target.files[0]);
            }}
          />
          <Button variant="contained" component="span" endIcon={<PhotoCamera />}>
            Upload
          </Button>
        </label>
      </Stack>
    </div>
  );
}

function MultipleSelectChip({ setProjectTechnologyUsed }) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["HTML","CSS","JavaScript","ReactJs","NodeJs","MongoDB","ExpressJs"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setProjectTechnologyUsed(()=>[...value]);
    
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function About({setProfileDescription}) {
  const [description, setDescription] = useState('');
  return (
    <div>
      <TextField label="About" size="medium" className='abouttextfield' value={description}  multiline maxRows={6} minRows={6}
        onChange={(e) => {setDescription(e.target.value);setProfileDescription(e.target.value)}}/>
    </div>
  );
}

function Employment({ setEmploymentDetails }) {
  const [employment, setEmployment] = useState([{}]);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [view, setView] = useState(false);

  let obj={name,designation,fromDate,toDate};

  const save=(obj)=>{
    setEmploymentDetails([...employment,obj])
  }

  return (
    <div>
      {employment.map((a, i) => {
        return (
          <div key={i}>
            <Experience
              setName={setName}
              setDesignation={setDesignation}
              setFromDate={setFromDate}
              setToDate={setToDate}
            />
          </div>
        );
      })}

      <Button variant="contained" disabled={view} onClick={()=>setEmployment((data)=>[...data,obj])}>Add Experience</Button>
      <Button variant="contained"  onClick={()=>{save(obj);setView(true);}} className='savebutton' color='warning'> Save</Button>
    </div>
  );
}

function Experience({setName,setDesignation,setFromDate,setToDate})
 {
  const [, setCompanyName] = useState("");
  const [, setCompanyDesignation] = useState("");
  const [, setFrom] = useState("");
  const [, setTo] = useState("");
  useEffect(()=>{setName('');setDesignation('');setFromDate('');setToDate('')},[setName,
    setDesignation,
    setFromDate,
    setToDate,])

  const formatfrom=(e)=>{
    let t=new Date(e.target.value).toString().split(' ');
    setFromDate(`${t[1]} ${t[3]}`)
  }
  const formatto=(e)=>{
    let t=new Date(e.target.value).toString().split(' ');
    setToDate(`${t[1]} ${t[3]}`)
  }

  return (
    <div>
      <TextField  label="Designation" className='employmenttextfield' onChange={(e) => {setCompanyDesignation(e.target.value);setDesignation(e.target.value)}}/>
      <br />
      <br />
      <TextField label="Company Name"  className='employmenttextfield' onChange={(e) => {setCompanyName(e.target.value);setName(e.target.value)}}/>
      <br />
      <br />
      <label>From</label><br/>
      <input type="month" onChange={(e) => {setFrom(e.target.value);formatfrom(e)}} /><br/><br/>
      <label>To</label><br/>
      <input type="month" onChange={(e) => {setTo(e.target.value);formatto(e)}} />
      <br />
      <br />
      <br />
    </div>
  );
}

function Education({ setEducationDetails }) 
{
  const [education, setEducation] = useState([{}]);

  const [name, setName] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [view, setView] = useState(false);
  let obj={name,fieldName,fromDate,toDate};

  const save=(obj)=>{
    setEducationDetails([...education,obj])
  }

  return (
    <div>
      {education.map((a, i) => {
        return (
          <div key={i}>
            <Educate
              setName={setName}
              setFieldName={setFieldName}
              setFromDate={setFromDate}
              setToDate={setToDate}
            />
          </div>
        );
      })}

      <Button variant="contained" disabled={view}  onClick={()=>setEducation((data)=>[...data,obj])}>Add Education</Button>
      <Button variant="contained"  className='savebutton' onClick={()=>{save(obj);setView(true);}} color='warning'>Save</Button>
      
    </div>
  );
}

function Educate({setName,setFieldName,setFromDate,setToDate})
 {
  const [,setInstituteName] = useState("");
  const [,setStudyField] = useState("");
  const [,setFrom] = useState("");
  const [,setTo] = useState("");
  useEffect(()=>{setName('');setFieldName('');setFromDate('');setToDate('')},[setName,
    setFieldName,
    setFromDate,
    setToDate])

  const formatfrom=(e)=>{
    let t=new Date(e.target.value).toString().split(' ');
    setFromDate(`${t[1]} ${t[3]}`)
  }
  const formatto=(e)=>{
    let t=new Date(e.target.value).toString().split(' ');
    setToDate(`${t[1]} ${t[3]}`)
  }

  return (
    <div>
      <TextField  label="Field of study" className='educationtextfield' onChange={(e) => {setStudyField(e.target.value);setFieldName(e.target.value)}}/>
      <br />
      <br />
      <TextField label="Institute Name" className='educationtextfield'  onChange={(e) => {setInstituteName(e.target.value);setName(e.target.value)}}/>
      <br />
      <br />
      <label>From</label><br/>
      <input type="month" onChange={(e) => {setFrom(e.target.value);formatfrom(e)}} /><br/><br/>
      <label>To</label><br/>
      <input type="month" onChange={(e) => {setTo(e.target.value);formatto(e)}} />
      <br />
      <br />
      <br />
    </div>
  );
}


function Interests({setInterests})
{

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["Cycling","Music","Cricket","Gardening"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setInterests(()=>[...value]);
    
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}