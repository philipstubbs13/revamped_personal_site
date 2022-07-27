import sheltrImage from '../images/sheltr-b2.svg';
import adoptMeImage from '../images/adoptme.png';
import artImage from '../images/art.png';
import bamazonImage from '../images/bamazon.jpg';
import burgerImage from '../images/burger.png';
import carpoolImage from '../images/carpool.png';
import clickmeImage from '../images/clickme.png';
import crystalImage from '../images/crystal.png';
import eduVentsImage from '../images/edue_logo.png';
import giffinderImage from '../images/giffinder.png';
import hangmanImage from '../images/hangman.png';
import swagImage from '../images/swag.png';
import pizzaImage from '../images/pizza.png';
import scraperImage from '../images/scraper.png';
import healthTrackerImage from '../images/healthtracker.png';
import myTrainBuilderImage from '../images/mytrainbuilder.png';
import newsImage from '../images/news.png';
import skylineImage from '../images/skyline.jpg';
import stadiumImage from '../images/stadium.jpg';
import starwarsImage from '../images/starwars.png';
import twitterImage from '../images/twitter.jpg';
import awesomeBurgerImage from '../images/burger2.png';
import australiaFiresImage from '../images/australia_fires.png';
import youtubeImage from '../images/youtube.png';
import mentalHealthImage from '../images/mental_health.png';
import d3DataJournalismImage from '../images/d3_data_journalism.png';
import tableauImage from '../images/tableau.png';
import marsWebScrapingImage from '../images/mars_web_scraping.png';
import personalBlogImage from '../images/personalBlog.png';
import ghReleaseMonitorImage from '../images/gh_release_monitor.png';

export interface IProject {
  key?: string;
  image: string;
  title: string;
  githubRepo: string;
  website?: string;
  technologies: string[];
  type: string;
  description: string;
}

export const projects: IProject[] = [
  {
    image: mentalHealthImage,
    title: 'Mental Health and ML',
    githubRepo: 'https://github.com/abbylemon/mental_health_ML',
    website: 'https://mental-health-in-tech.herokuapp.com/',
    technologies: [
      'AWS S3',
      'AWS RDS',
      'Postgres',
      'Python',
      'Google Colab',
      'Pandas',
      'PySpark',
      'Flask',
      'Swagger',
      'HTML',
      'CSS',
      'TextBlob',
      'VADER',
    ],
    type: 'data',
    description:
      'Using data, natural language processing, and machine learning to analyze and improve mental health conversations in the tech community.',
  },
  {
    image: australiaFiresImage,
    title: 'Australia Fire Dashboard',
    githubRepo: 'https://github.com/philipstubbs13/australia-fire-api-and-dashboard',
    website: 'https://australia-fire-api-dashboard.herokuapp.com/',
    technologies: [
      'Flask',
      'MongoDB Atlas',
      'Jupyter Notebook',
      'Python',
      'Pandas',
      'Beautiful Soup',
      'D3',
      'd3-timeseries',
      'Leaflet',
    ],
    type: 'data',
    description:
      'An exploration of how wildfires have affected Australia over time through data visualizations, including interactive time series charts, plots and a map.',
  },
  {
    image: youtubeImage,
    title: 'YouTube Data Analysis',
    githubRepo: 'https://github.com/philipstubbs13/team_hopper',
    website: 'https://philipstubbs13.github.io/Web-Design-Challenge/#/youtube-insights',
    technologies: ['YouTube API', 'Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib'],
    type: 'data',
    description:
      'Using a public dataset powered by the YouTube API, this project uncovers  insights into trending videos for one of the largest search engines and one of the largest social media platforms.',
  },
  {
    image: ghReleaseMonitorImage,
    title: 'GitHub Release Monitor',
    githubRepo: 'https://github.com/philipstubbs13/gh-release-monitor',
    website: 'https://gh-release-monitor.vercel.app',
    technologies: ['Next.js', 'Material UI', 'React', 'IndexedDB', 'GitHub API', 'TypeScript'],
    type: 'web_development',
    description:
      'Never miss a release for your favorite GitHub organizations and repositories ever again.',
  },
  {
    image: personalBlogImage,
    title: 'The mind of phil',
    githubRepo: 'https://github.com/philipstubbs13/next-netlify-blog',
    website: 'https://the-mind-of-phil.vercel.app/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Netlify',
      'Halfmoon CSS',
      'MongoDB',
      'Material UI',
      'Express',
    ],
    type: 'web_development',
    description:
      'A personal blog to share what is going on inside the mind of phil. Built and deployed using next and netlify.',
  },
  {
    image: d3DataJournalismImage,
    title: 'D3 Data Journalism',
    githubRepo: 'https://github.com/philipstubbs13/D3-challenge',
    website: 'https://d3-data-journalism-9cb59.web.app/',
    technologies: ['D3', 'JavaScript', 'Firebase'],
    type: 'data',
    description:
      'A visualization built using D3 intended to show various health risks facing particular demographics across different states in the U.S. (for example, access to healthcare vs median household income).',
  },
  {
    image: tableauImage,
    title: 'Citi Bike Dashboard',
    githubRepo: 'https://github.com/philipstubbs13/tableau-challenge',
    website:
      'https://public.tableau.com/profile/phil.stubbs#!/vizhome/CitiBikeAnalytics_15879541754520/NewYorkCitiBikeAnalyticsandInsights',
    technologies: ['Tableau'],
    type: 'data',
    description:
      'A data visualization project that helps publicize and share information about the New York Citi Bike program from March 2019 to March 2020. Built using Tableau.',
  },
  {
    image: marsWebScrapingImage,
    title: 'Mars Web Scraping',
    githubRepo: 'https://github.com/philipstubbs13/web-scraping-challenge',
    technologies: [
      'MongoDB',
      'Flask',
      'Splinter',
      'Requests',
      'Jupyter Notebook',
      'Python',
      'Beautiful Soup',
    ],
    type: 'data',
    description:
      'A web application that scrapes various websites for data related to Mars and displays the information in a single HTML page.',
  },
  {
    image: sheltrImage,
    title: 'Shelter',
    githubRepo: 'https://github.com/philipstubbs13/tcsw-sheltrus',
    website: 'https://tcsw-homeless.firebaseapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Material UI',
      'Google Maps',
      'Firebase',
      'Twilio API',
      'Express',
    ],
    type: 'web_development',
    description:
      'The project is a mobile and web based app intended for homeless people to use in Minneapolis as a resource and intended to help streamline the process of checking into a shelter. ',
  },
  {
    image: swagImage,
    title: 'Running with Swag',
    githubRepo: 'https://github.com/philipstubbs13/running-with-swag',
    website: 'https://running-with-swag.firebaseapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'PrimeReact',
      'Node',
      'Firebase',
      'Tumblr API',
      'CSS Grid',
    ],
    type: 'web_development',
    description:
      'An online community created by runners, for runners. Whether you are a competitive runner, running enthusiast, or just a beginner, this site has something for you.',
  },
  {
    image: pizzaImage,
    title: 'MyCookinAssistant',
    githubRepo: 'https://github.com/philipstubbs13/Project-Longshot',
    website: 'https://longshotauth.firebaseapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Materialize',
      'jQuery',
      'Firebase',
      'Edamam Recipe Search API',
    ],
    type: 'web_development',
    description:
      'A search engine that returns the most relevant recipes from the most popular sites on the web.',
  },
  {
    image: burgerImage,
    title: 'Sequelized Burger',
    githubRepo: 'https://github.com/philipstubbs13/sequelizedBurger',
    website: 'https://hidden-shelf-25357.herokuapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'jQuery',
      'Handlebars',
      'Node',
      'MySQL',
      'Express',
      'ORM',
    ],
    type: 'web_development',
    description:
      'A full stack, MVC (Model-View-Controller) application that allows you to create burgers (POST), view a list of burgers available to eat (GET), devour burgers (PUT), and throw them away after devoured (DELETE).',
  },
  {
    image: awesomeBurgerImage,
    title: 'Awesome Burger',
    githubRepo: 'https://github.com/philipstubbs13/burger',
    website: 'https://gentle-caverns-56054.herokuapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'jQuery',
      'Handlebars',
      'Node',
      'MySQL',
      'Express',
      'ORM',
    ],
    type: 'web_development',
    description:
      'A full stack, MVC (Model-View-Controller) application that allows you to create burgers (POST), view a list of burgers available to eat (GET), devour burgers (PUT), and throw them away after devoured (DELETE).',
  },
  {
    image: adoptMeImage,
    title: 'AdoptMeNow',
    githubRepo: 'https://github.com/philipstubbs13/PetMatch',
    website: 'https://pet-match-app.herokuapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Semantic UI',
      'jQuery',
      'Handlebars',
      'Node',
      'MySQL',
      'Express',
      'Sequelize ORM',
      'Facebook auth',
    ],
    type: 'web_development',
    description:
      'A full stack, MVC (Model-View-Controller) application that connects people with animal welfare organizations (AWO) in their area and helps streamline and simplify the pet adoption process.',
  },
  {
    image: eduVentsImage,
    title: 'EduVents',
    githubRepo: 'https://github.com/melinda-schmitz/CodeSwitch2018',
    website: 'https://learner-47455.firebaseapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Firebase',
      'Material UI',
      'react-big-calendar',
    ],
    type: 'web_development',
    description:
      'A platform for helping parents and schools find after school events and activities for their students to get involved in.',
  },
  {
    image: artImage,
    title: 'ArtOwl',
    githubRepo: 'https://github.com/philipstubbs13/',
    website: 'http://artowl.co/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Material UI',
      'AWS Amplify',
      'google-map-react',
      'React',
      'react-chartkick',
    ],
    type: 'web_development',
    description: 'A web app for local artists to showcase their artwork to their community.',
  },
  {
    image: clickmeImage,
    title: 'ClickMe',
    githubRepo: 'https://github.com/philipstubbs13/ClickMe',
    website: 'https://clickme-d27eb.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
    type: 'web_development',
    description:
      'A memory skill application built using React. The objective of the game is to be able to go through and click each player image once.',
  },
  {
    image: giffinderImage,
    title: 'Athlete hall of gifs',
    githubRepo: 'https://github.com/philipstubbs13/Giphy-API-Project',
    website: 'https://philipstubbs13.github.io/Giphy-API-Project/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX', 'GIPHY API'],
    type: 'web_development',
    description:
      'This website uses the GIPHY API to populate the site with gifs of your favorite athletes.',
  },
  {
    image: hangmanImage,
    title: 'Hangman',
    githubRepo: 'https://github.com/philipstubbs13/Hangman-Game',
    website: 'https://philipstubbs13.github.io/Giphy-API-Project/index.html',
    technologies: ['HTML', 'CSs', 'JavaScript', 'Bootstrap', 'jQuery'],
    type: 'web_development',
    description: 'The classic hangman game built using JavaScript.',
  },
  {
    image: carpoolImage,
    title: 'Carpool Buddy',
    githubRepo: 'https://github.com/philipstubbs13/FriendFinder',
    website: 'https://blooming-lowlands-71441.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node', 'Express'],
    type: 'web_development',
    description:
      'A full stack application that matches you up with another user so that you can take advantage of the carpool lane and have someone to ride with to and from work.',
  },
  {
    image: bamazonImage,
    title: 'Bamazon',
    githubRepo: 'https://github.com/philipstubbs13/Bamazon',
    website: '',
    technologies: ['Node', 'JavaScript', 'MySQL'],
    type: 'web_development',
    description:
      'A command line application built using Node.js, Javascript, the inquirer npm package, and a MySQL database. It is an Amazon-like storefront that takes in customer orders on various sporting goods and outdoor items through the Bamazon Customer Portal.',
  },
  {
    image: crystalImage,
    title: 'Crystal Collectors',
    githubRepo: 'https://github.com/philipstubbs13/week-4-game',
    website: 'https://philipstubbs13.github.io/week-4-game/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    type: 'web_development',
    description: 'A simple game built using jQuery and JavaScript.',
  },
  {
    image: twitterImage,
    title: 'LIRI',
    githubRepo: 'https://github.com/philipstubbs13/liri-node-app',
    website: '',
    technologies: ['Node'],
    type: 'web_development',
    description:
      'A command line node app that takes in parameters and gives you back tweets, songs, and movies.',
  },
  {
    image: scraperImage,
    title: 'BasketballScraper',
    githubRepo: 'https://github.com/philipstubbs13/NewsScrape',
    website: 'https://hoops-scraper.herokuapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'jQuery',
      'Handlebars',
      'Node',
      'MongoDB',
      'Express',
      'Mongoose ORM',
    ],
    type: 'web_development',
    description:
      'An application that scrapes all the major news articles related to college basketball.',
  },
  {
    image: healthTrackerImage,
    title: 'HealthTracker',
    githubRepo: 'https://github.com/philipstubbs13/MedLog',
    website: 'https://myhealthtracker.herokuapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Material UI',
      'React',
      'FusionCharts',
      'Node',
      'MongoDB',
      'Express',
      'Mongoose ORM',
      'AWS S3',
    ],
    type: 'web_development',
    description:
      'A MERN stack application that allows you to log and keep track of your health information so that you can easily share and discuss that information with your doctor at your next visit',
  },
  {
    image: myTrainBuilderImage,
    title: 'myTrainBuilder',
    githubRepo: 'https://github.com/philipstubbs13/Firebase-Train-Scheduler',
    website: 'https://fir-train-scheduler-7f4a9.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Firebase', 'Moment'],
    type: 'web_development',
    description:
      'A train schedule application that incorporates Firebase to host arrival and departure data.',
  },
  {
    image: newsImage,
    title: 'NYT React Search',
    githubRepo: 'https://github.com/philipstubbs13/NYT-React-Search',
    website: 'https://react-nytimes-search.herokuapp.com/',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'reactstrap',
      'React',
      'Node',
      'MongoDB',
      'Express',
      'Mongoose ORM',
      'New York Times Article Search API',
    ],
    type: 'web_development',
    description:
      'A React application that uses the New York Times Article Search API to retrieve news articles by topic and year.',
  },
  {
    image: skylineImage,
    title: 'Constructor Hangman',
    githubRepo: 'https://github.com/philipstubbs13/constructor-hangman',
    website: '',
    technologies: ['Node', 'JavaScript constructors'],
    type: 'web_development',
    description:
      'A command line version of the classic Hangman game built using JavaScript constructors.',
  },
  {
    image: stadiumImage,
    title: 'Trivia Game',
    githubRepo: 'https://github.com/philipstubbs13/TriviaGame',
    website: 'https://philipstubbs13.github.io/TriviaGame/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    type: 'web_development',
    description: 'A sports trivia game built using JavaScript',
  },
  {
    image: starwarsImage,
    title: 'Star Wars RPG Game',
    githubRepo: 'https://github.com/philipstubbs13/Star-Wars-RPG-Game',
    website: 'https://philipstubbs13.github.io/Star-Wars-RPG-Game/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    type: 'web_development',
    description: 'A simple Star Wars role playing game built using JavaScript',
  },
];
