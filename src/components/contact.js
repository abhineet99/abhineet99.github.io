import React, { Component } from 'react';
import myImage from '../img/me_pval.png';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class contact extends Component{
    render(){
        return(
         <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                        <h2>Abhineet Pandey</h2>
                        <img 
                            src={myImage}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        
                        <p style={{width: '50%', margin: 'auto', paddingTop: '2em'}}>Hey there! You may contact me if you have some interesting opportunity for me, or maybe to discuss books and politics?</p>
                        
                </Cell>
                <Cell col={6}>
                    <h2> Contact Me </h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Oswald'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (+91)-9888000379
                            </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Oswald'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                    abhineetp99 - at - gmail.com
                            </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Oswald'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    <a href="https://www.linkedin.com/in/abhineet-pandey/" rel="noopener noreferrer" target="_blank">
                                        Abhineet Pandey
                                    </a>
                            </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
                    
            </Grid>
         </div>
        )
    }
}

export default contact;
