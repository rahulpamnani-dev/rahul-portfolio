const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration for development and production
const allowedOrigins = [
  'http://localhost:4200',
  'https://rahul-portfolio-mngu.vercel.app'
];

app.use(cors({ 
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());

// Portfolio data
const portfolioData = {
  personal: {
    name: 'Rahul Pamnani',
    title: 'Lead Frontend Engineer',
    email: 'rahultechweb@gmail.com',
    phone: '+917042153624',
    location: 'Noida, India',
    summary: 'Experienced Frontend Lead with 12 years of expertise in Angular, React.js, TypeScript, and modern UI frameworks. Passionate about building scalable micro-frontend architectures and high-performance applications.',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }
  },
  experience: [
    {
      id: 1,
      company: 'HCLTech',
      role: 'Lead Consultant',
      period: 'Feb 2022 – Present',
      location: 'Noida',
      highlights: [
        'Strong expertise in RxJS and Angular CLI, leveraging reactive programming patterns for API orchestration and state synchronization.',
        'Implemented performance optimizations: Lazy loading, Tree shaking, AOT compilation, and OnPush Change Detection.',
        'Designed and implemented React + TypeScript modules for scalable enterprise interfaces.',
        'Built distributed UI architecture using Module Federation and micro-frontend principles.',
        'Wrote and maintained unit tests using Jasmine and Karma with high code coverage.'
      ]
    },
    {
      id: 2,
      company: 'Tech Mahindra',
      role: 'Tech Lead',
      period: 'Oct 2020 – Feb 2022',
      location: 'Noida',
      highlights: [
        'Built new Angular components for customer-facing webapp, improving time-on-page by 2 minutes.',
        'Worked within agile team to prioritize and scope feature requests by business impact.',
        'Collaborated with product team, UX designers, and software architects to deliver software meeting business requirements.'
      ]
    },
    {
      id: 3,
      company: 'Johnson Controls',
      role: 'Senior Software Engineer',
      period: 'Aug 2019 – Oct 2020',
      location: 'Gurgaon',
      highlights: [
        'Developed and refactored existing products, providing enhancements and resolving defects.',
        'Built reusable code and libraries for future use.',
        'Collaborated with UI and UX teams.'
      ]
    },
    {
      id: 4,
      company: 'Tata Consultancy Services',
      role: 'Systems Engineer',
      period: 'Jul 2013 – Aug 2019',
      location: 'Gurgaon',
      highlights: [
        'Writing front-end code using Angular and other JavaScript frameworks.',
        'Deep understanding of API Communication and RESTful APIs.',
        'Single page app development using MVC architecture.',
        'Strong debugging skills with Chrome Developer Tools.'
      ]
    }
  ],
  skills: {
    frameworks: ['Angular 20', 'ReactJS', 'NgRx', 'RxJS'],
    languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS/LESS'],
    tools: ['Webpack Module Federation', 'Angular CLI', 'Node.js', 'jQuery', 'GitHub', 'JIRA', 'VS Code'],
    concepts: ['Micro-frontends', 'Monorepo', 'Unit Testing', 'RESTful APIs', 'Agile/Scrum']
  },
  projects: [
    {
      id: 1,
      name: 'CITI Bank – Payment Portal',
      company: 'HCLTech @ Citi',
      description: 'Designed and implemented a user-friendly UI for initiating and managing payments with micro-frontend and metadata-based architecture for modular scalability.',
      highlights: [
        'Micro-frontend + metadata-based modular architecture',
        'NgRx state management for efficient data handling',
        'Optimized recurring payment template workflows',
        'RESTful API integration'
      ],
      tags: ['Angular', 'NgRx', 'Micro-frontend', 'TypeScript']
    },
    {
      id: 2,
      name: 'Rogers Connected Home',
      company: 'Tech Mahindra @ Rogers Communications',
      description: 'Customer-facing web application for Rogers Communications Inc., a leading Canadian communications and media company.',
      highlights: [
        'Built UI from mock-ups using Angular, HTML, CSS, TypeScript',
        'Agile iterative development with estimations and design sessions',
        'Bug identification and testing pre/post deployment',
        'GitHub-based workflow management'
      ],
      tags: ['Angular', 'TypeScript', 'CSS', 'Agile']
    },
    {
      id: 3,
      name: 'C-Cure 9000 Webclient',
      company: 'Johnson Controls',
      description: 'Security management system providing protection for people, buildings and assets. Accessible on workstations, laptops or mobile devices.',
      highlights: [
        'Designed views/templates on NodeJS with Angular Material',
        'Shared components with Angular Forms, RxJS, Custom Directives',
        'Lazy loading implementation',
        'Technical leadership on UI architecture decisions'
      ],
      tags: ['Angular Material', 'NodeJS', 'RxJS', 'Security']
    }
  ],
  education: {
    degree: 'Bachelor of Engineering',
    branch: 'Information Technology',
    college: 'Jabalpur Engineering College (RGPV)',
    period: '2009 – 2013',
    location: 'Jabalpur'
  }
};

// Routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/portfolio/personal', (req, res) => res.json(portfolioData.personal));
app.get('/api/portfolio/experience', (req, res) => res.json(portfolioData.experience));
app.get('/api/portfolio/skills', (req, res) => res.json(portfolioData.skills));
app.get('/api/portfolio/projects', (req, res) => res.json(portfolioData.projects));
app.get('/api/portfolio/education', (req, res) => res.json(portfolioData.education));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }
  // Configure your SMTP here; currently just returns success for demo
  console.log(`Contact form: ${name} <${email}> – ${message}`);
  res.json({ success: true, message: 'Message received! Rahul will get back to you shortly.' });
});

app.listen(PORT, () => console.log(`Portfolio API running on http://localhost:${PORT}`));
