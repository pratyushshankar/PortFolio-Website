// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import ducatLogo from './assets/company_logo/ducat_logo.png';
import ducatLogo2 from './assets/company_logo/ducat_logo2.jpeg';

// Education Section Logo's
import fgietLogo from './assets/education_logo/fgiet_logo.png';
import davLogo from './assets/education_logo/dav_logo.jpeg';


// Project Section Logo's
import pratyushEstateLogo from './assets/work_logo/Pratyush_Estate.png';
import mernBlogLogo from './assets/work_logo/Mern_Blog.png';
import weatherLogo from './assets/work_logo/WeatherApp.png';
import LoginSignupLogo from './assets/work_logo/LoginSignup.png';
import passwordgeneatorLogo from './assets/work_logo/PasswordGenerator.png';
import TopCoursesLogo from './assets/work_logo/TopCourses.png';
import ShopingCartLogo from './assets/work_logo/ShopingCart.png';
import RandomGifLogo from './assets/work_logo/RandomGif.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ducatLogo,
      role: "Fullstack Developer",
      company: "Ducat It Traning",
      date: "July 2023 - March 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },
    {
      id: 1,
      img: ducatLogo2,
      role: "Fullstack Engineer",
      company: "Ducat Noida",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },

  ];
  
  export const education = [
    {
      id: 0,
      img: fgietLogo,
      school: "Feroze Gandhi Institute of engineering and technologoy Raibareli",
      date: "Sept 2019 - July 2023",
      grade: "8.00 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Technology from Feroze Gandhi Institute of Engineering & Technology, Raibareli. During my time at FGIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at FGIET  has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bacherlor's in Technology - B.TECH",
    },

    {
      id: 1,
      img: davLogo,
      school: "N.D.D.A.V. PUBLIC SCHOOL KUMARGANJ FAIZABAD",
      date: "Apr 2018 - March 2019",
      grade: "60%",
      desc: "I completed my class 12 education from N.D.D.A.V. PUBLIC SCHOOL KUMARGANJ FAIZABAD, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "CBSE(XII) - PCM .",
    },
    {
      id: 2,
      img: davLogo,
      school: "N.D.D.A.V. PUBLIC SCHOOL KUMARGANJ FAIZABAD",
      date: "Apr 2015 - March 2016",
      grade: "8.0 CGPA",
      desc: "I completed my class 10 education from N.D.D.A.V. PUBLIC SCHOOL KUMARGANJ FAIZABAD, under the CBSE board, where I studied Science .",
      degree: "CBSE(X), Science .",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "PratyushEstate App",
      description:
        "PratyushEstate App is a full-featured real estate platform built on the MERN stack. It enables users to seamlessly browse, list, and manage properties with secure authentication, advanced search, and responsive design. The app provides a smooth experience for buyers, sellers, and agents, making property dealings smarter and more efficient.",
      image: pratyushEstateLogo,
      tags: ["HTML", "Tailwind CSS","Javascript","React Js", "JWT Authentication", "Node Js","MongoDb","Mongoose",
             "Redux Toolkit","Cloudinary",  "API"],
      github: "https://github.com/pratyushshankar/MERN-ESTATE-PROJECT",
      webapp: "https://pratyush-estate.onrender.com/",
    },
    {
      id: 1,
      title: "Mern Blog App",
      description:
         "MERN Blog App is a powerful full-stack blogging platform built on the MERN stack, designed for seamless content creation and engagement. It enables users to publish, edit, and manage posts with secure authentication, rich text editing, and a responsive UI. With real-time interactions, personalized dashboards, and scalable architecture, the app delivers a smooth and dynamic blogging experience for writers and readers alike.",
      image: mernBlogLogo,
      tags: ["React JS",   "Express", "HTML", "Tailwind Css","Firebase", "JavaScript","JWT Authentication", "Node Js","MongoDb",],
      github: "https://github.com/pratyushshankar/mern-blog",
      webapp: "https://mern-blog-rj0c.onrender.com/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A React-powered Weather App that provides real-time, location-based forecasts using live APIs. It displays temperature, humidity, wind speed, and trends with a sleek, responsive UI. Featuring smooth navigation and stunning visuals, it transforms complex weather data into an interactive, reliable, and engaging experience for users worldwide.",
      image: weatherLogo,
      tags: [ "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/pratyushshankar/Weather-App",
      webapp: "https://github.com/pratyushshankar/Weather-App",
    },
    {
      id: 3,
      title: "Password Generator",
      description:
        "A React-powered Password Generator that creates secure, random passwords using cryptographically strong algorithms. It offers customizable options for length, symbols, numbers, and cases, wrapped in a sleek, responsive UI. With one-click copy and smooth performance, it ensures strong protection, making password management effortless, reliable, and user-friendly worldwide.",
      image: passwordgeneatorLogo,
      tags: ["Javascript", "HTML", "CSS", "Tailwind Css"],
      github: "https://github.com/pratyushshankar/Password-Generator--app",
      webapp: "https://github.com/pratyushshankar/Password-Generator--app",
    },
    {
      id: 4,
      title: "Random GIG Creator",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: RandomGifLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS","API"],
      github: "https://github.com/pratyushshankar/Random-Gif--Generator",
      webapp: "https://github.com/pratyushshankar/Random-Gif--Generator",
    },
    {
      id: 5,
      title: "Shopping Cart",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: ShopingCartLogo,
      tags: ["HTML", "CSS", "JavaScript", "React Js"],
      github: "https://github.com/pratyushshankar/Plan-With-Pratyush",
      webapp: "https://github.com/pratyushshankar/Plan-With-Pratyush",
    },
    {
      id: 6,
      title: "Top Courses",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: TopCoursesLogo,
      tags: ["React JS", "HTML", "Tailwind Css ", "Javascript"],
      github: "https://github.com/pratyushshankar/Top-Courses",
      webapp: "https://github.com/pratyushshankar/Top-Courses",
    },
    {
      id: 7,
      title: "Login SignUp App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: LoginSignupLogo,
      tags: ["React JS", "API", " HTML", "CSS", "Javascript","Tailwind Css"],
      github: "https://github.com/pratyushshankar/StudyNotion-Login-Sign-Up",
      webapp: "https://github.com/pratyushshankar/StudyNotion-Login-Sign-Up",
    },

  ];  