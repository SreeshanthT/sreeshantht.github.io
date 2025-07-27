export const socialsIcons = [
    {'name':'discord','class':'discord','onload':'',},
    {'name':'facebook','class':'facebook','onload':'',},
    {'name':'instagram','class':'instagram','onload':'https://www.instagram.com/sreeshanth_thekkedath/',},
    {'name':'skype','class':'skype','onload':'',},
    {'name':'linkedin','class':'linkedin','onload':'https://www.linkedin.com/in/sreeshanth-thekkedath-110393172/',},
]
export const headerStyles = {
    backgroundColor:'transparent',
    boxShadow:'rgba(0, 0, 0, 0) 0px 4px 12px',
    opacity:1,
    transform:'translate3d(0,0,0)'
}
export const navBarContents = [
    {'id':'hero','title':'Home','iconClsName':'bx bx-home'},
    {'id':'about','title':'About','iconClsName':'bx bx-user'},
    {'id':'resume','title':'Resume','iconClsName':'bx bx-file-blank'},
    {'id':'portfolio','title':'Portfolio','iconClsName':'bx bx-book-content'},
    {'id':'services','title':'Services','iconClsName':'bx bx-server'},
    {'id':'contact','title':'Contact','iconClsName':'bx bx-envelope'},
]

export const skillsData = [
    {id: "1", name: "Python", percentage: "85"},
    {id: "2", name: "JavaScript", percentage: "75"},
    {id: "3", name: "Django", percentage: "80"},
    {id: "4", name: "React", percentage: "70"},
    {id: "5", name: "Flask", percentage: "75"},
    {id: "6", name: "HTML", percentage: "85"},
    {id: "7", name: "CSS", percentage: "75"},
    {id: "8", name: "Bootstrap", percentage: "70"},
    {id: "9", name: "MySQL", percentage: "75"},
    {id: "10", name: "PostgreSQL", percentage: "70"},
    {id: "11", name: "REST API", percentage: "80"},
    {id: "12", name: "GraphQL", percentage: "65"},
    {id: "13", name: "AWS", percentage: "70"},
    {id: "14", name: "Docker", percentage: "65"},
    {id: "15", name: "Terraform", percentage: "60"},
    {id: "16", name: "Git", percentage: "80"},
    {id: "17", name: "GitLab CI/CD", percentage: "70"},
    {id: "18", name: "nginx", percentage: "65"},
    {id: "19", name: "Web Scraping", percentage: "75"},
    {id: "20", name: "Raspberry Pi", percentage: "70"},
    {id: "21", name: "PCB Designing", percentage: "65"},
    {id: "22", name: "IoT", percentage: "70"},
    {id: "23", name: "Data Structures", percentage: "75"},
    {id: "24", name: "Algorithms", percentage: "70"}
]

export const aboutImg = require('../img/hero-bg2.jpg')
export const aboutInfo = [
  [
      { label: "Birthday", value: "22 Sept 1997" },
      { label: "Website", value: "https://www.crio.do/learn/portfolio/sreeshanththekkedath8/" },
      { label: "Phone", value: "+91 9947242749" },
      { label: "City", value: "Malappuram, Kerala, 676317" }
  ],
  [
      { label: "Age", value: "27" },
      { label: "Degree", value: "B-Tech" },
      { label: "Email", value: "sreeshanththekkedath8@gmail.com" },
      { label: "Freelance", value: "Available" }
  ]
];

let projects_count = 5
export const emailjs_service_id = "service_y34lswj";
export const emailjs_template_id = "template_tyj3vcj";
export const emailjs_user_id = "NbemrVU-wAfconvvG";
export const FactsData = [
    {id:1, name: "Happy Clients", val: 0, icon: "bi bi-emoji-smile"},
    {id:2, name: "Projects", val: projects_count, icon: "bi bi-journal-richtext"},
    {id:3, name: "Hours Of Support", val: 10, icon: "bi bi-headset"},
    {id:4, name: "Awards", val: 3, icon: "bi bi-award"},
]

export const portfolios = [
  {
    id: 1,
    category: "Web",
    image: require('../img/portfolio/primalcode/alt-tribe/alt-tribe-home.png'),
    title: "Alt-Tribe",
    description: "Alt-Tribe is a platform for showccasing the talent of the people in the society. Helps the people to get freelance work and also helps the people to get the work done by the freelancers.",
    other_images: [
      require('../img/portfolio/primalcode/alt-tribe/Home-Alt-Tribe-07-15-2025_08_57_PM.png'),
    ],
    is_active: true
  },
  {
    id: 2,
    category: "Web",
    image: require('../img/portfolio/primalcode/marzomilan/marzomilan-home.png'),
    title: "Marzo Milan",
    description: "Marzo Milan is an e-commerce website for the products of Marzo Milan. It is a platform for the people to buy the products of Marzo Milan.",
    other_images: [
      require('../img/portfolio/primalcode/marzomilan/Marzo-Milan-07-18-2025_09_09_PM.png'),
    ],
    is_active: true
  },
  {
    id: 3,
    category: "Web",
    image: require('../img/portfolio/primalcode/lexstays/lexstays.png'),
    title: "Lexstays",
    description: "Lexstays is a hotel booking website for the people to book the hotels.",
    other_images: [
      require('../img/portfolio/primalcode/lexstays/lexstays.png'),
    ],
    is_active: false
  },
];

export const categories = [];

export const SKILLS_PARA = `
    When I'm not exactly brainstorming an idea, I'm turning ideas into incredible digital experiences! 
    Building powerful back-end systems or maybe just making something look sleek and intuitive on the front-end, 
    my tool belt is ready to deliver. My work covers the whole development journey-be it architecture, code, 
    or finishing touches. Let's team up and create something amazing—for when great code meets creativity, 
    the possibilities are endless!
`

export const FACT_NOTE = `
    What an incredible journey it’s been! From coding and debugging to creating solutions that truly make a difference, 
    I’ve loved every moment of it. It’s not just about writing code for me; 
    it’s about crafting experiences that help people and businesses thrive. 
    I’m excited to keep building, learning, and growing together
`

export const PORTFOLIO_PARA = `
I help businesses grow online by building custom web apps, e-commerce platforms, and SaaS solutions. 
I also offer cloud infrastructure support, branding, and end-to-end digital services tailored to your needs.
`
export const ABOUT = {
    name: "Sreeshanth Thekkedath",
    title: "Software Engineer",
    description: `
        I am a software engineer with a passion for creating innovative solutions. 
        My expertise lies in full-stack development, cloud computing, and digital transformation. 
        I thrive on challenges and enjoy collaborating with teams to deliver high-quality software products.
    `,
    skills: [
        { name: "Python", level: "Intermediate" },
        { name: "Django", level: "Intermediate" },
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Intermediate" }
    ],
    location: "Malappuram, Kerala, 676317",
    email: "sreeshanththekkedath8@gmail.com",
    phone: "+91 9947242749",
}