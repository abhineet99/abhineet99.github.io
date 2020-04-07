import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component{
    render(){
        return(
         <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                    src="https://icon-library.net/images/icon-programmer/icon-programmer-14.jpg"
                    alt="avatar"
                    className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Undergrad, CSE IIT Ropar</h1>
                        <hr/>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/abhineet-pandey-32664515b/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/abhineet99" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                            <a href="mailto:abhineetp99@gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-square"  aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
         </div>
        )
    }
}

export default Landing;