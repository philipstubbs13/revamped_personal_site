/* eslint-disable prettier/prettier */
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../layout/not-found/NotFound';
import { Contact } from '../layout/contact/Contact';
import { About } from '../layout/about/About';
import { Projects } from '../layout/projects/Projects';
import { TechnicalWriting } from '../layout/technical-writing/TechnicalWriting';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/technical-writing" component={TechnicalWriting} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};
