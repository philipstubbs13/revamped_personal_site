import burnsvilleLogo from '../images/bhs.jpg';
import umn from '../images/umn.jpg';
import oracle from '../images/oracle.png';
import medtronic from '../images/medtronic.jpg';
import walmart from '../images/walmart.jpg';
import parallax from '../images/parallax.jpg';

export interface Experience {
  title: string,
  description: string,
  start: string,
  end: string,
  avatar: string,
}

export const experiences: Experience[] = [
  { title: 'Burnsville High School', description: '', start: '2006', end: '2009', avatar: burnsvilleLogo },
  { title: 'University of Minnesota', description: 'Scientific and Technical Communication', start: '2009', end: '2013', avatar: umn },
  { title: 'Walmart', description: 'Meat Sales Associate', start: '2011', end: '2014', avatar: walmart },
  { title: 'Oracle', description: 'Technical Writer', start: '2014', end: '2016', avatar: oracle },
  { title: 'Medtronic', description: 'Technical Writer', start: '2017', end: '2019', avatar: medtronic },
  { title: 'University of Minnesota', description: 'Full Stack Web Development', start: '2017', end: '2018', avatar: umn },
  { title: 'University of Minnesota', description: 'Data Analytics and Visualization', start: '2019', end: '2020', avatar: umn },
  { title: 'Parallax', description: 'Software Engineer', start: '2019', end: '', avatar: parallax },

]