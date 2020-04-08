import React from 'react';
import './App.css';
import Main from './components/main.js';
import Pdf from './docs/resume.pdf';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Abhineet Pandey" scroll>
            <Navigation className="header-nav">
                <Link to="/" style={{color: 'black'}}>Home</Link>    
                <Link to="/aboutme" style={{color: 'black'}}>About Me</Link>
                <Link to="/projects" style={{color: 'black'}}>Projects</Link>
                <a href={Pdf} target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>Resume</a>                
                <Link to="/contact" style={{color: 'black'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Abhineet Pandey" className="drawer">
            <Navigation>
                <Link to="/">Home</Link>    
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>                
                <Link to="/contact">Contact</Link>
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
