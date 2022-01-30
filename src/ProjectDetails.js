// URL Shortener
import login from './Project/URL Shortener/login.png'

// Github
import SearchPage from './Project/Github UserSearch/Searchpage.png'

// UserList
import homePage from './Project/Userlist Management/homepage.png'

// Calculator
import Calculator from './Project/Calculator/Calculator1.png'


let project=[
    {name:'URL Shortener',coverPic:login,
    github_client:'https://github.com/ChokkalingamS/React-UrlShortener',
    github_server:'https://github.com/ChokkalingamS/Nodejs-URL-Shortener',
    site:'https://url-short-ener.netlify.app/',
    technology:[{name:'MongoDb',icon:<i className="fas fa-database"></i>},
    {name:'ExpressJs'},{name:'ReactJs',icon:<i className="fab fa-react"></i>},
    {name:'NodeJs',icon:<i className="fab fa-node"></i>},{name:'CSS3',icon:<i className="fab fa-css3-alt"></i>}],
    description:'Url Shortener is an application with dark theme support that is used to shorten the URL. we can manage the shortened URL using the personal account with the two-step verification process. The features of this application are the link can be customized, The link can be modified after the creation, The link can also be deleted from the account, The links can be tracked.',
    demoCredentials:{mailId:'admin2022@gmail.com',Password:'admin2022'},
},

    
    {name:'GITHUB UserSearch',coverPic:SearchPage,
    github_client:'https://github.com/ChokkalingamS/React-Github-User-Search',
    github_server:'',
    site:'https://github-user-sea-rch.netlify.app/',
    technology:[{name:'ReactJs',icon:<i className="fab fa-react"></i>},{name:'CSS3',icon:<i className="fab fa-css3-alt"></i>}],
    description:'Github User search is an application that can be used to search Github users. By using this application we can see the Github profile of the user, public repositories of the user, the Language used in the repository, Search the particular repository of the user.',
    demoCredentials:'',
},
    
    {name:'User list Management',coverPic:homePage,
    github_client:'https://github.com/ChokkalingamS/React-userlist-management',
    github_server:'https://github.com/ChokkalingamS/Nodejs-Userlist-Management',
     site:'https://userlist-management.netlify.app/users',
     technology:[{name:'MongoDb',icon:<i className="fas fa-database"></i>},
    {name:'ExpressJs'},{name:'ReactJs',icon:<i className="fab fa-react"></i>},
    {name:'NodeJs',icon:<i className="fab fa-node"></i>},{name:'CSS3',icon:<i className="fab fa-css3-alt"></i>}],
    description:'Userlist Management is a basic CRUD application with dark theme support in which we can create users, update the user & delete the user.',
    demoCredentials:'',
},
    
    {name:'Simple Calculator',coverPic:Calculator,
    github_client:'https://github.com/ChokkalingamS/Simple-Calculator',
    github_server:'',
    site:'https://tender-elion-881e1a.netlify.app/',
    technology:[{name:'HTML5',icon:<i className="fab fa-html5"></i>},
    {name:'CSS3',icon:<i className="fab fa-css3-alt"></i>},{name:'JavaScript',icon:<i className="fab fa-js"></i>}],
    description:'Calculator which can perform all the basic math operations, created using Javascript, HTML, CSS.',
    demoCredentials:'',
},
]

export default project;





