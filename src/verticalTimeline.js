import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';



export default function Timeline()
{
 return <VerticalTimeline lineColor='#d32f2f' animate={false}>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
    date="September 2021 - Present"
    iconStyle={{ background: '#d32f2f', color: '#fff' }}
    icon={<SchoolIcon style={{fill:'white'}} />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <p className="vertical-timeline-element-subtitle">GUVI
      Geek Networks, IITM Research Park, Chennai,Tamilnadu</p>
  </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
    contentArrowStyle={{ borderRight: '7px solid  #d32f2f' }}
    date="2020 - 2021"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={< WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Graduate Engineer Trainee</h3>
    <p className="vertical-timeline-element-subtitle">General Electric T&amp;D India Limited,Chennai,Tamilnadu</p>
    <ul>
    <li>Involvement in testing of panels and coordinating the testing team.</li> 
    <li> Testing on control panels, relay panels (scheme checking).</li> 
    <li> Providing feedback towards Engineer's team for scheme correction.</li> 
    <li> Manage reports for the tested panels</li> 
    </ul>
  </VerticalTimelineElement>

  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
    contentArrowStyle={{ borderRight: '7px solid  #d32f2f' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={< WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Trainee Engineer (Contract Basis)</h3>
    <p className="vertical-timeline-element-subtitle">Alliance Tire Group,Tirunelveli,TamilNadu</p>
    <ul>
    <li>Finding the cause of electrical breakdown in the industry.</li>
    <li>Giving proper solutions towards the breakdown</li>
    <li>Implementing new ideas to improve manufacturing time</li>
    </ul>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2014 - 2018"
    contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
    contentArrowStyle={{ borderRight: '7px solid #d32f2f' }}
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<SchoolIcon  style={{fill:'black'}}/>}
  >
    <h3 className="vertical-timeline-element-title">Electrical &amp; Electronics Engineering</h3>
    <p className="vertical-timeline-element-subtitle">National Engineering College,Kovilpatti,Tamilnadu</p>
    <p>
    Aggregate:74.20%
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2013 - 2014"
    contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
    contentArrowStyle={{ borderRight: '7px solid  #d32f2f' }}
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<SchoolIcon style={{fill:'black'}} />}
  >
    <h3 className="vertical-timeline-element-title">HSC</h3>
    <p className="vertical-timeline-element-subtitle">Rose Marry Matric Higher Secondary school,Tirunelveli,TamilNadu</p>
    <p>
      Aggregate:89.9%
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2011-2012"
    contentStyle={{ background: 'black', color: 'white',borderRadius:"0px" }}
    contentArrowStyle={{ borderRight: '7px solid  #d32f2f' }}
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<SchoolIcon style={{fill:'black'}} />}
    // lineColor='black'
  >
    <h3 className="vertical-timeline-element-title">SSLC</h3>
    <p className="vertical-timeline-element-subtitle">Rose Marry Matric Higher Secondary school,Tirunelveli,TamilNadu</p>
    <p>
    Aggregate:90.80%
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>

}