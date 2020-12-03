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

export interface IProject {
  key?: string,
  image: string,
  title: string,
  githubRepo: string,
  website?: string,
  technologies: string[]
}

export const projects: IProject[] = [
  {
    image: mentalHealthImage,
    title: 'Mental Health and ML',
    githubRepo: 'https://github.com/abbylemon/mental_health_ML',
    website: 'https://mental-health-in-tech.herokuapp.com/',
    technologies: ['AWS S3', 'AWS RDS', 'Postgres', 'Python', 'Google Colab', 'Pandas', 'PySpark', 'Flask', 'Swagger', 'HTML', 'CSS', 'TextBlob', 'VADER'],
  },
  {
    image: australiaFiresImage,
    title: 'Australia Fire Dashboard',
    githubRepo: 'https://github.com/philipstubbs13/australia-fire-api-and-dashboard',
    website: 'https://australia-fire-api-dashboard.herokuapp.com/',
    technologies: ['Flask', 'MongoDB Atlas', 'Jupyter Notebook', 'Python', 'Pandas', 'Beautiful Soup', 'D3', 'd3-timeseries', 'Leaflet'],
  },
  {
    image: youtubeImage,
    title: 'YouTube Data Analysis',
    githubRepo: 'https://github.com/philipstubbs13/team_hopper',
    website: 'https://philipstubbs13.github.io/Web-Design-Challenge/#/youtube-insights',
    technologies: ['YouTube API', 'Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib'],
  },
  {
    image: d3DataJournalismImage,
    title: 'D3 Data Journalism',
    githubRepo: 'https://github.com/philipstubbs13/D3-challenge',
    website: 'https://d3-data-journalism-9cb59.web.app/',
    technologies: ['D3', 'JavaScript', 'Firebase'],
  },
  {
    image: tableauImage,
    title: 'Citi Bike Dashboard',
    githubRepo: 'https://github.com/philipstubbs13/tableau-challenge',
    website: 'https://public.tableau.com/profile/phil.stubbs#!/vizhome/CitiBikeAnalytics_15879541754520/NewYorkCitiBikeAnalyticsandInsights',
    technologies: ['Tableau'],
  },
  {
    image: sheltrImage,
    title: 'Shelter',
    githubRepo: 'https://github.com/philipstubbs13/tcsw-sheltrus',
    website: 'https://tcsw-homeless.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Material UI', 'Google Maps', 'Firebase', 'Twilio API', 'Express'],
  },
  {
    image: swagImage,
    title: 'Running with Swag',
    githubRepo: 'https://github.com/philipstubbs13/running-with-swag',
    website: 'https://running-with-swag.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'PrimeReact', 'Node', 'Firebase', 'Tumblr API', 'CSS Grid'],
  },
  {
    image: pizzaImage,
    title: 'MyCookinAssistant',
    githubRepo: 'https://github.com/philipstubbs13/Project-Longshot',
    website: 'https://longshotauth.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Materialize', 'jQuery', 'Firebase', 'Edamam Recipe Search API'],
  },
  {
    image: burgerImage,
    title: 'Sequelized Burger',
    githubRepo: 'https://github.com/philipstubbs13/sequelizedBurger',
    website: 'https://hidden-shelf-25357.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Handlebars', 'Node', 'MySQL', 'Express', 'ORM'],
  },
  {
    image: awesomeBurgerImage,
    title: 'Awesome Burger',
    githubRepo: 'https://github.com/philipstubbs13/burger',
    website: 'https://gentle-caverns-56054.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Handlebars', 'Node', 'MySQL', 'Express', 'ORM'],
  },
  {
    image: adoptMeImage,
    title: 'AdoptMeNow',
    githubRepo: 'https://github.com/philipstubbs13/PetMatch',
    website: 'https://pet-match-app.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Semantic UI', 'jQuery', 'Handlebars', 'Node', 'MySQL', 'Express', 'Sequelize ORM', 'Facebook auth'],
  },
  {
    image: eduVentsImage,
    title: 'EduVents',
    githubRepo: 'https://github.com/melinda-schmitz/CodeSwitch2018',
    website: 'https://learner-47455.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase', 'Material UI', 'react-big-calendar'],
  },
  {
    image: artImage,
    title: 'ArtOwl',
    githubRepo: 'https://github.com/philipstubbs13/',
    website: 'http://artowl.co/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Material UI', 'AWS Amplify', 'google-map-react', 'React', 'react-chartkick'],
  },
  {
    image: clickmeImage,
    title: 'ClickMe',
    githubRepo: 'https://github.com/philipstubbs13/ClickMe',
    website: 'https://clickme-d27eb.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
  },
  {
    image: giffinderImage,
    title: 'Athlete hall of gifs',
    githubRepo: 'https://github.com/philipstubbs13/Giphy-API-Project',
    website: 'https://philipstubbs13.github.io/Giphy-API-Project/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX', 'GIPHY API'],
  },
  {
    image: hangmanImage,
    title: 'Hangman',
    githubRepo: 'https://github.com/philipstubbs13/Hangman-Game',
    website: 'https://philipstubbs13.github.io/Giphy-API-Project/index.html',
    technologies: ['HTML', 'CSs', 'JavaScript', 'Bootstrap', 'jQuery'],
  },
  {
    image: carpoolImage,
    title: 'Carpool Buddy',
    githubRepo: 'https://github.com/philipstubbs13/FriendFinder',
    website: 'https://blooming-lowlands-71441.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node', 'Express'],
  },
  {
    image: bamazonImage,
    title: 'Bamazon',
    githubRepo: 'https://github.com/philipstubbs13/Bamazon',
    website: '',
    technologies: ['Node', 'JavaScript', 'MySQL'],
  },
  {
    image: crystalImage,
    title: 'Crystal Collectors',
    githubRepo: 'https://github.com/philipstubbs13/week-4-game',
    website: 'https://philipstubbs13.github.io/week-4-game/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    image: twitterImage,
    title: 'LIRI',
    githubRepo: 'https://github.com/philipstubbs13/liri-node-app',
    website: '',
    technologies: ['Node'],
  },
  {
    image: scraperImage,
    title: 'BasketballScraper',
    githubRepo: 'https://github.com/philipstubbs13/NewsScrape',
    website: 'https://hoops-scraper.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Handlebars', 'Node', 'MongoDB', 'Express', 'Mongoose ORM'],
  },
  {
    image: healthTrackerImage,
    title: 'HealthTracker',
    githubRepo: 'https://github.com/philipstubbs13/MedLog',
    website: 'https://myhealthtracker.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Material UI', 'React', 'FusionCharts', 'Node', 'MongoDB', 'Express', 'Mongoose ORM', 'AWS S3'],
  },
  {
    image: myTrainBuilderImage,
    title: 'myTrainBuilder',
    githubRepo: 'https://github.com/philipstubbs13/Firebase-Train-Scheduler',
    website: 'https://fir-train-scheduler-7f4a9.firebaseapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Firebase', 'Moment'],
  },
  {
    image: newsImage,
    title: 'NYT React Search',
    githubRepo: 'https://github.com/philipstubbs13/NYT-React-Search',
    website: 'https://react-nytimes-search.herokuapp.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'reactstrap', 'React', 'Node', 'MongoDB', 'Express', 'Mongoose ORM', 'New York Times Article Search API'],
  },
  {
    image: skylineImage,
    title: 'Constructor Hangman',
    githubRepo: 'https://github.com/philipstubbs13/constructor-hangman',
    website: '',
    technologies: ['Node', 'JavaScript constructors'],
  },
  {
    image: stadiumImage,
    title: 'Trivia Game',
    githubRepo: 'https://github.com/philipstubbs13/TriviaGame',
    website: 'https://philipstubbs13.github.io/TriviaGame/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    image: starwarsImage,
    title: 'Star Wars RPG Game',
    githubRepo: 'https://github.com/philipstubbs13/Star-Wars-RPG-Game',
    website: 'https://philipstubbs13.github.io/Star-Wars-RPG-Game/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
];
