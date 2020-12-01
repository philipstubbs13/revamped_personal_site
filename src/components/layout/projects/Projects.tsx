import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Project } from '../../project/Project';
import sheltrImage from '../../../images/sheltr-b2.svg';
import adoptMeImage from '../../../images/adoptme.png';
import artImage from '../../../images/art.png';
import bamazonImage from '../../../images/bamazon.jpg';
import burgerImage from '../../../images/burger.png';
import carpoolImage from '../../../images/carpool.png';
import clickmeImage from '../../../images/clickme.png';
import crystalImage from '../../../images/crystal.png';
import eduVentsImage from '../../../images/edue_logo.png';
import giffinderImage from '../../../images/giffinder.png';
import hangmanImage from '../../../images/hangman.png';
import swagImage from '../../../images/swag.png';
import pizzaImage from '../../../images/pizza.png';
import scraperImage from '../../../images/scraper.png';
import healthTrackerImage from '../../../images/healthtracker.png';
import myTrainBuilderImage from '../../../images/mytrainbuilder.png';
import newsImage from '../../../images/news.png';
import skylineImage from '../../../images/skyline.jpg';
import stadiumImage from '../../../images/stadium.jpg';
import starwarsImage from '../../../images/starwars.png';
import twitterImage from '../../../images/twitter.jpg';
import awesomeBurgerImage from '../../../images/burger2.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    title: {
      fontWeight: 'bold',
    },
    body: {
      lineHeight: 2,
      fontWeight: 'bold',
    },
    projectsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }),
);

export const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>projects</Typography>
      <Box m={3} textAlign="center">
        <Typography variant="h6" className={classes.body}>
          From full stack web development to data engineering...
      </Typography>
        <Typography variant="h6" className={classes.body}>
          Check out my latest projects
      </Typography>
      </Box>
      <div className={classes.projectsContainer}>
        <Project image={sheltrImage} title="Sheltr" githubRepo="https://github.com/philipstubbs13/tcsw-sheltrus" website="https://tcsw-homeless.firebaseapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'React', 'Material UI', 'Google Maps', 'Firebase', 'Twilio API', 'Express']} />
        <Project image={swagImage} title="Running with Swag" githubRepo="https://github.com/philipstubbs13/running-with-swag" website="https://running-with-swag.firebaseapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'React', 'PrimeReact', 'Node', 'Firebase', 'Tumblr API', 'CSS Grid']} />
        <Project image={pizzaImage} title="MyCookingAssistant" githubRepo="https://github.com/philipstubbs13/Project-Longshot" website="https://longshotauth.firebaseapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Materialize', 'jQuery', 'Firebase', 'Edamam Recipe Search API']} />
        <Project image={burgerImage} title="Sequelized Burger" githubRepo="https://github.com/philipstubbs13/sequelizedBurger" website="https://hidden-shelf-25357.herokuapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Handlebars', 'Node', 'MySQL', 'Express', 'ORM']} />
        <Project image={awesomeBurgerImage} title="Awesome Burger" githubRepo="https://github.com/philipstubbs13/burger" website="https://gentle-caverns-56054.herokuapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Handlebars', 'Node', 'MySQL', 'Express', 'ORM']} />
        <Project image={adoptMeImage} title="AdoptMeNow" githubRepo="https://github.com/philipstubbs13/PetMatch" website="https://pet-match-app.herokuapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Semantic UI', 'jQuery', 'Handlebars', 'Node', 'MySQL', 'Express', 'Sequelize ORM', 'Facebook auth']} />
        <Project image={eduVentsImage} title="EduVents" githubRepo="https://github.com/melinda-schmitz/CodeSwitch2018" website="https://learner-47455.firebaseapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'React', 'Firebase', 'Material UI', 'react-big-calendar']} />
        <Project image={artImage} title="ArtOwl" githubRepo="https://github.com/philipstubbs13/" website="http://artowl.co/" technologies={['HTML', 'CSS', 'JavaScript', 'Material UI', 'AWS Amplify', 'google-map-react', 'React', 'react-chartkick']} />
        <Project image={clickmeImage} title="ClickMe" githubRepo="https://github.com/philipstubbs13/ClickMe" website="https://clickme-d27eb.firebaseapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React']} />
        <Project image={giffinderImage} title="Athlete hall of gifs" githubRepo="https://github.com/philipstubbs13/Giphy-API-Project" website="https://philipstubbs13.github.io/Giphy-API-Project/index.html" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX', 'GIPHY API']} />
        <Project image={hangmanImage} title="Hangman" githubRepo="https://github.com/philipstubbs13/Hangman-Game" website="https://philipstubbs13.github.io/Giphy-API-Project/index.html" technologies={['HTML', 'CSs', 'JavaScript', 'Bootstrap', 'jQuery']} />
        <Project image={carpoolImage} title="Carpool Buddy" githubRepo="https://github.com/philipstubbs13/FriendFinder" website="https://blooming-lowlands-71441.herokuapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node', 'Express']} />
        <Project image={bamazonImage} title="Bamazon" githubRepo="https://github.com/philipstubbs13/Bamazon" technologies={['Node', 'JavaScript', 'MySQL']} />
        <Project image={crystalImage} title="Crystal Collectors" githubRepo="https://github.com/philipstubbs13/week-4-game" website="https://philipstubbs13.github.io/week-4-game/index.html" technologies={['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']} />
        <Project image={twitterImage} title="LIRI" githubRepo="https://github.com/philipstubbs13/liri-node-app" technologies={['Node']} />
        <Project image={scraperImage} title="BasketballScraper" githubRepo="https://github.com/philipstubbs13/NewsScrape" website="https://hoops-scraper.herokuapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Handlebars', 'Node', 'MongoDB', 'Express', 'Mongoose ORM']} />
        <Project image={healthTrackerImage} title="HealthTracker" githubRepo="https://github.com/philipstubbs13/MedLog" website="https://myhealthtracker.herokuapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Material UI', 'React', 'FusionCharts', 'Node', 'MongoDB', 'Express', 'Mongoose ORM', 'AWS S3']} />
        <Project image={myTrainBuilderImage} title="myTrainBuilder" githubRepo="https://github.com/philipstubbs13/Firebase-Train-Scheduler" website="https://fir-train-scheduler-7f4a9.firebaseapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Firebase', 'Moment']} />
        <Project image={newsImage} title="NYT React Search" githubRepo="https://github.com/philipstubbs13/NYT-React-Search" website="https://react-nytimes-search.herokuapp.com/" technologies={['HTML', 'CSS', 'JavaScript', 'reactstrap', 'React', 'Node', 'MongoDB', 'Express', 'Mongoose ORM', 'New York Times Article Search API']} />
        <Project image={skylineImage} title="Constructor Hangman" githubRepo="https://github.com/philipstubbs13/constructor-hangman" technologies={['Node', 'JavaScript constructors']} />
        <Project image={stadiumImage} title="Trivia Game" githubRepo="https://github.com/philipstubbs13/TriviaGame" website="https://philipstubbs13.github.io/TriviaGame/index.html" technologies={['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']} />
        <Project image={starwarsImage} title="Star Wars RPG Game" githubRepo="https://github.com/philipstubbs13/Star-Wars-RPG-Game" website="https://philipstubbs13.github.io/Star-Wars-RPG-Game/" technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery']} />
      </div>
    </div>
  )
}

Projects.propTypes = {

};

