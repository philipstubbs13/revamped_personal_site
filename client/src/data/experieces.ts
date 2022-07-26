import burnsvilleLogo from '../images/bhs.jpg';
import umn from '../images/umn.jpg';
import oracle from '../images/oracle.png';
import medtronic from '../images/medtronic.jpg';
import walmart from '../images/walmart.jpg';
import parallax from '../images/parallax.jpg';

export interface Experience {
  key?: string;
  title: string;
  description: string;
  start: string;
  end: string;
  avatar: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Burnsville High School',
    description: '',
    start: '2006',
    end: '2009',
    avatar: burnsvilleLogo,
    details: [
      'GPA 3.882',
      'Activities: National Society of High School Scholars, National Honor Society, Chess Club, Baseball, Soccer, Basketball',
    ],
  },
  {
    title: 'University of Minnesota',
    description: 'Scientific and Technical Communication',
    start: '2009',
    end: '2013',
    avatar: umn,
    details: [
      "Dean's List: Fall 2009, Spring 2010, Fall 2010, Spring 2011, Fall 2011, Spring 2012, Fall 2012, Spring 2013",
      'GPA: 3.974',
      'Obtained research skills and experience in writing and editing usability test plans and test reports. Acquired project management and editing skills. Acquired visual rhetoric knowledge and information design skills.',
    ],
  },
  {
    title: 'Walmart',
    description: 'Meat Sales Associate',
    start: '2011',
    end: '2014',
    avatar: walmart,
    details: [
      'Effectively communicated and interacted with customers daily to help find what they need by providing a clean, friendly environment and by answering questions in a courteous manner.',
      'Maintained the meat department of a fast-paced retail store using interpersonal and teamwork skills to collaborate with co-workers, solve challenging problems, and make operations more efficient.',
      'Developed teamwork skills by listening to and respecting the diverse opinions and ideas of fellow co-workers and managers and by responding to the needs of employees in a professional, helpful manner.',
    ],
  },
  {
    title: 'Oracle',
    description: 'Technical Writer',
    start: '2014',
    end: '2016',
    avatar: oracle,
    details: [
      'Implemented content reuse strategies using DITA and CCMS authoring tools, such as Arbortext and SDL Publication Manager, to independently create, edit, and develop software documentation (online help, user guides, install guides, release notes, etc) that helps users quickly reach their end goals of installing and using the software.',
      'Researched, gathered, and analyzed information about a new product or feature by interviewing key subject matter experts and working hands-on with the product to quickly learn and validate new technical concepts and procedures.',
      'Ensured documentation deliverables were accurate, readable, and usable by testing and validating the installation and configuration procedures for each release.',
    ],
  },
  {
    title: 'Medtronic',
    description: 'Technical Writer',
    start: '2017',
    end: '2019',
    avatar: medtronic,
    details: [
      'Built the online help, user manual, and installation manual using XMetaL for the Medtronic Paceart Optima System (a patient and device management software application).',
      "Collaborated with engineering and human factors team members to create a patient manual that describes how to use a remote monitor that receives information from a patient's implanted heart device and sends that information to the patient's doctor or clinic automatically.",
      "Worked closely with the software development team to quickly update and test the online help for the Medtronic Reveal LINQ Mobile Manager application (an app used by healthcare professionals to program and interrogate a patient's Reveal LINQ Insertable Cardiac Monitor) .",
    ],
  },
  {
    title: 'University of Minnesota',
    description: 'Full Stack Web Development',
    start: '2017',
    end: '2018',
    avatar: umn,
    details: [
      'Web development program dedicated to learning front end and back end technologies to design and build web applications.',
    ],
  },
  {
    title: 'University of Minnesota',
    description: 'Data Analytics and Visualization',
    start: '2019',
    end: '2020',
    avatar: umn,
    details: [
      'A program dedicated to learning about different data science technologies used to analyze big data, visualize that data, and tell stories about real world problems and how we might solve them.',
    ],
  },
  {
    title: 'Parallax',
    description: 'Software Engineer',
    start: '2019',
    end: '2022',
    avatar: parallax,
    details: [
      'Diagnosed and resolved  customer issues in a timely manner as a member of the external rapid response team.',
      'Built React components using Storybook and helped create a reusable, easy to maintain user interface component library.',
      'Followed the test driven development (TDD) process by writing unit tests with Jest, which helped identify errors and problems quickly, reduce the time spent on rework, and increase the confidence and quality of the software application.',
    ],
  },
];
