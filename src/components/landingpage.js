import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component{
    render(){
        return(
         <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                    src="https://lh3.googleusercontent.com/proxy/Wb-8wGYgcMmU0g0aPL685qVJ0sS22J7ZrpYEuUMkpIVdwbqkbGycw7AZc5yXgm9nGfvj1r3nzMg7jZaklx_och1FZmw4a88A11xzcKjjynnedMyQ9zOpM5K9ZcSc"
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