import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class contact extends Component{
    render(){
        return(
         <div className="contact-body">
            <Grid className="contect-grid">
                <Cell col={6}></Cell>
                <Cell col={6}></Cell>
            </Grid>
         </div>
        )
    }
}

export default contact;