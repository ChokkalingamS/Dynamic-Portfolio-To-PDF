import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';


export default function Timeline()
{

  let data1=JSON.parse(localStorage.getItem('employment'))||[]
  let data2=JSON.parse(localStorage.getItem('education'))||[]

  let employment=data1.filter((a,i)=>i!==0);
  let education=data2.filter((a,i)=>i!==0);


 return <VerticalTimeline lineColor='#d32f2f' animate={false}>
   {employment.map(({name,designation,fromDate,toDate},i)=>
  { return (<VerticalTimelineElement key={i}
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
    contentArrowStyle={{ borderRight: '7px solid  #d32f2f' }}
    date={`${fromDate}  to  ${toDate}`}
    iconStyle={{ background: '#d32f2f', color: '#fff' }}
    icon={< WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">{designation}</h3>
    <p className="vertical-timeline-element-subtitle">{name}</p>
  </VerticalTimelineElement>)}
   )}
   
  {education.map(({name,fieldName,fromDate,toDate},i)=>{
      return (<VerticalTimelineElement key={i}
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
        date={`${fromDate}  to  ${toDate}`}
        iconStyle={{ background: '#d32f2f', color: '#fff' }}
        icon={<SchoolIcon style={{fill:'white'}} />}
      >
        <h3 className="vertical-timeline-element-title">{fieldName}</h3>
        <p className="vertical-timeline-element-subtitle">{name}</p>
      </VerticalTimelineElement>)
  })}
  

  
</VerticalTimeline>

}
