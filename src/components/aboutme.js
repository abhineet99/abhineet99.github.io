import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import myImage from '../img/me_pval.png';

import { Link } from 'react-router-dom';
class about extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}} className="about-main-div">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img
                        src={myImage}
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h5>Do you know what <a href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank" rel="noopener noreferrer">Collatz Conjecture</a> is? It is a beautiful little(or maybe not?) thing.</h5>
                            <hr/>
                            <h4>Anyway, I'm Abhineet, currently in the pre-final year of my B.Tech. in Computer Science at IIT Ropar. I take interest in Deep Learning and Software Development.</h4>

                        </div>
                    </Cell>
                        
                    <Cell col={12}>
                        <h2 class="education-head">Education</h2>
                        <hr/>
                        <Grid className="edu-grid">
                            <Cell col={2} style={{margin:'auto'}}>
                                <i class="fa fa-4x fa-graduation-cap" aria-hidden="true"></i>
                                <h3>Degree</h3>
                                <p>Bachelor of Technology in Computer Science from 
                                <a href="https://www.iitrpr.ac.in/" rel="noopener noreferrer" target="_blank"> IIT Ropar</a></p>
                            </Cell>
                            <Cell col={2} style={{margin:'auto'}}>
                                <i class="fa fa-4x fa-code" aria-hidden="true"></i>
                                <h3>Languages</h3>
                                <p>C/C++, Python, JavaScript, Dart</p>                                
                            </Cell>
                            <Cell col={2} style={{margin:'auto'}}>
                                <i class="fa fa-4x fa-file-code-o" aria-hidden="true"></i>
                                <h3>Skills</h3>
                                <p>Keras, Tensorflow, Android, PyTorch</p>                                 
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col={12}>
                        <div className="see-books">
                            <h1>Bored already? Checkout the 
                                <Link to="/books">
                                    books I've read.
                                </Link> 
                            </h1>
                        </div>
                    </Cell>
                </Grid>
         </div>
        )
    }
}

export default about;
