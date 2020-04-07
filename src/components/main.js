import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import about from './aboutme';
import contact from './contact';
import projects from './projects';
import books from './books';

const Main = () => (
    <Switch>
        <Route exact path = "/" component={Landing} />
        <Route path = "/aboutme" component={about} />
        <Route path = "/contact" component={contact} />
        <Route path = "/projects" component={projects} />
        <Route path ="/books" component={books}/>

    </Switch>
)

export default Main;