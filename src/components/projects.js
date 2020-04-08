import React, { Component } from 'react';
import {Grid, Cell, Card, CardActions, CardTitle, CardText} from 'react-mdl';
class projects extends Component{
    firstRow(){
            return(
                <div  className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '193px', background: 'url(https://preview.redd.it/nhmwgbvj3l601.jpg?width=960&crop=smart&auto=webp&s=e3bb5f0878858f0c6be1bd54654e6afcd72e35c8) center / cover'}}>Recommender Systems</CardTitle>
                    <CardText>
                        Implemented and compared algorithms that power recommender systems .
                        <br>
                        </br>
                    </CardText>
                    <CardActions border>
                        <div className="project-links">
                            <a href="https://github.com/abhineet99/Recommender-Systems" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                        </div>
                    </CardActions>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.mathworks.com/help/examples/vision/win64/CreatePointCloudObjectAndInspectPropertiesExample_01.png) center / cover'}}>3-D Point Cloud Registration</CardTitle>
                    <CardText>
                        Used autoencoder to get matching features between clouds, and then performed registration.
                    </CardText>
                    <CardActions border>
                        <div className="project-links">
                            <a href="https://github.com/abhineet99/3D-Point-Cloud-Registration" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                        </div>
                    </CardActions>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://inyangenewss.com/wp-content/uploads/2017/01/Tool.jpg) center / cover'}}>Media Monitoring System</CardTitle>
                    <CardText>
                        Developed for Ministry of Railways under SIH '19, to scrape and classify news relevant to them.
                    </CardText>
                    <CardActions border>
                        <div className="project-links">
                            <a href="https://github.com/abhineet99/News-sentiment-SIH19" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                        </div>
                    </CardActions>
                </Card>

                </div>
            )
    }
    secondRow(){
        return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', fontWeight: "bolder" , height: '176px', background: 'url(https://www.researchgate.net/profile/Rashmi_Chinnappa/post/where_to_get_the_training_and_pixel_labelled_images_of_high_resolution_satellite_images/attachment/5bdd722ecfe4a76455ff5524/AS%3A688821880487936%401541239342336/image/high1.png) center / cover'}}>Satellite Image Segementation</CardTitle>
        <CardText>
            Used u-net architecture to segment Satellite image pixels into different classes.
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://github.com/abhineet99/interiit_techmeet" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true"/>
                </a>
            </div>
        </CardActions>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#black', height: '176px', background: 'url(https://www.humantouchllc.com/hs-fs/hubfs/Icons/portal-04.jpg?width=1668&name=portal-04.jpg) center / cover'}}>Faculty Leave Portal</CardTitle>
        <CardText>
            Developed a leave portal relevant to academic institutions for its employees.
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://github.com/abhineet99/faculty_leave_portal" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true"/>
                </a>
            </div>
        </CardActions>
    </Card>

    </div>)
    }
    seeLatest(){
        return(
            <div className="see-more">
                <h1>Find latest and more: 
                    <a href="https://github.com/abhineet99/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"/>
                        abhineet99
                    </a> 
                </h1>
            </div>
        )
    }
    render(){
        return(
         <div className="category-tabs">
            <Grid>
                <Cell col={12}>
                    <div className="content">{this.firstRow()}</div>
                </Cell>
            </Grid>   
            <Grid>
                <Cell col={12}>
                    <div className="content">{this.secondRow()}</div>
                </Cell>
            </Grid>     
            <Grid>
            <Cell col={12}>
                <div className="content">{this.seeLatest()}</div>
            </Cell>
        </Grid>                

         </div>
        )
    }
}

export default projects;