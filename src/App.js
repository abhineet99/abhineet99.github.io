import React from 'react';
import './App.css';
import Main from './components/main.js';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Abhineet Pandey" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Abhineet Pandey">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contants</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/> 
        </Content>
    </Layout>
</div>
  );
}

export default App;
