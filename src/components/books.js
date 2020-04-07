import React, { Component } from 'react';
import {Grid, Cell, Card, CardActions, CardTitle,CardMenu, CardText, Icon} from 'react-mdl';
import {Link} from 'react-router-dom';
class books extends Component{
    firstRow(){
            return(
                <div  className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.mos.cms.futurecdn.net/c630d2e738d3bb015c33a5a338108b21-970-80.jpg.webp) center / cover'}}>J.K. Rowling</CardTitle>
                    <CardText>
                        Harry Potter Series.
                        <br>
                        </br>
                    </CardText>
                    <CardActions border>
                        <div className="project-links">
                            <a href="https://www.amazon.com/Harry-Potter-Paperback-Box-Books/dp/0545162076/" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-amazon"/>
                            </a>
                        </div>
                    </CardActions>
                    <CardMenu style={{color: '#ffff'}}>
                        <Icon name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn3.whatculture.com/images/2020/03/86d431d0eb1ad4f8-600x338.jpg) center / cover'}}>George Martin</CardTitle>
                    <CardText>
                        A song of ice and fire. I'm reading the fourth book currently.
                    </CardText>
                    <CardActions border>
                        <div className="project-links">
                            <a href="https://www.amazon.com/George-Martins-Thrones-5-Book-Boxed-ebook/dp/B00957T6X6/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-amazon"/>
                            </a>
                        </div>
                    </CardActions>
                    <CardMenu style={{color: '#ffff'}}>
                        <Icon name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-cache-ak0.pinimg.com/736x/cf/9c/ed/cf9cedd4db8f1d18c4e9199c006dfabe.jpg) center / cover'}}>Amish Tripathi</CardTitle>
                    <CardText>
                        The Shiva Trilogy
                    </CardText>
                    <CardActions border>
                        <div className="project-links">
                            <a href="https://www.amazon.com/Amish-Tripathi-Trilogy-nagas-Mehula-Vayuputras/dp/B00BY3U5TS/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-amazon"/>
                            </a>
                        </div>
                    </CardActions>
                    <CardMenu style={{color: '#ffff'}}>
                        <Icon name="share"/>
                    </CardMenu>
                </Card>

                </div>
            )
    }
    secondRow(){
        return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', fontWeight: "bolder" , height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/a/af/George_Mallory_en_andere_leden_van_de_Engelse_Mt._Everest_expeditie_-_George_Mallory_and_other_members_of_the_English_Mt._Everest_expedition_%288866555993%29.jpg) center / cover'}}>Jeffrey Archer</CardTitle>
        <CardText>
            Paths of Glory.
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Paths-Glory-Jeffrey-Archer-ebook/dp/B001VLXNO2/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/media/Df8f6-DU0AAcr_4.jpg) center / cover'}}>Cecelia Ahern</CardTitle>
        <CardText>
            P.S. I Love You
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/PS-I-Love-You-Novel-ebook/dp/B000FC1AOI/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://pictures.abebooks.com/isbn/9780007538393-us.jpg) center / cover'}}>Cecelia Ahern</CardTitle>
        <CardText>
            Love, Rosie
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Love-Rosie-Cecelia-Ahern-ebook/dp/B000FCJZUO/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', fontWeight:'bold',height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51gB3SeX82L._SX307_BO1,204,203,200_.jpg) center / cover'}}>Sidney Sheldon</CardTitle>
        <CardText>
            Rage of Angels
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Rage-Angels-Sheldon-Sidney-Paperback/dp/B00NPNKKDQ/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://4.imimg.com/data4/VA/VY/GLADMIN-11836243/1-500x500.jpg) center / cover'}}>Robin Sharma</CardTitle>
        <CardText>
            The Monk Who Sold His Ferrari
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Monk-Who-Sold-His-Ferrari/dp/B01K2K37UM/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/5171w-4D2FL.jpg) center / cover'}}>Dan Brown</CardTitle>
        <CardText>
            The Da Vinci Code
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Vinci-Code-Novel-Robert-Langdon-ebook/dp/B000FA675C/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>

    </div>)
    }
    thirdRow(){
        return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', fontWeight: "bolder" , height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51bN7kzSlxL._SX296_BO1,204,203,200_.jpg) center / cover'}}>Dan Brown</CardTitle>
        <CardText>
            Angels and Demons
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Dan-Browns-Angels-Demons-Brown/dp/B00454ZX68/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51nHJ9lxKZL.jpg) center / cover'}}>Anne Frank</CardTitle>
        <CardText>
            Diary of a Young Girl.
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Diary-Young-Girl-Anne-Frank-ebook/dp/B06Y19N3NS/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51aRSJxtArL.jpg) center / cover'}}>Jonathan Swift</CardTitle>
        <CardText>
            Gulliver's Travels
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Gullivers-Travels-Complete-Unabridged-Illustrations-ebook/dp/B06ZXQTCYW/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51W8IWdCSKL._SX322_BO1,204,203,200_.jpg) center / cover'}}>Roald Dahl</CardTitle>
        <CardText>
            Charlie and the Chocolate Factory
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Charlie-Chocolate-Factory-Roald-Dahl/dp/0142410314/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#black', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51qAZk60G%2BL._SX331_BO1,204,203,200_.jpg) center / cover'}}>Mark Twain</CardTitle>
        <CardText>
            The Adventures of Tom Sawyer
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Adventures-Tom-Sawyer-Mark-Twain/dp/1514682052/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51nmv91F3iL._SX317_BO1,204,203,200_.jpg) center / cover'}}>Ashwin Sanghi</CardTitle>
        <CardText>
            The Krishna Key
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Krishna-Sanghi-Ashwin-1-May-2012-Paperback/dp/B012HTGMKS/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>

    </div>)
    }
    fourthRow(){
        return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', fontWeight: "bolder" , height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51kOW79Xv%2BL.jpg) center / cover'}}>Chetan Bhagat</CardTitle>
        <CardText>
            Three Mistakes of My Life
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/3-Mistakes-My-Life-ebook/dp/B013VO02MC/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51rS%2B6OVm-L._SX323_BO1,204,203,200_.jpg) center / cover'}}>Chetan Bhagat</CardTitle>
        <CardText>
            Five Point Someone
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Five-Point-Someone-Chetan-Bhagat-ebook/dp/B013VO02QI/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/512cBECZ5QL.jpg) center / cover'}}>Chetan Bhagat</CardTitle>
        <CardText>
            2 States
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/2-States-Story-My-Marriage-ebook/dp/B013VO02ZO/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/512EoUXKmsL._SX386_BO1,204,203,200_.jpg) center / cover'}}>Rhonda Byrne</CardTitle>
        <CardText>
            The Secret
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Secret-Rhonda-Byrne/dp/1582701709/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51NRPISnBuL._SX341_BO1,204,203,200_.jpg) center / cover'}}>J.K Rowling</CardTitle>
        <CardText>
            Harry Potter and the Cursed Child
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Harry-Potter-Cursed-Child-Parts/dp/133821666X/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>


    </div>)
    }
    moreRow(){
        return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', fontWeight: "bolder" , height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51VVpuxBh0L._SX331_BO1,204,203,200_.jpg) center / cover'}}>Bar-Zohar and Nissim Mishal</CardTitle>
        <CardText>
            Mossad: The Greatest Missions of the Israeli Secret Service
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Mossad-Greatest-Missions-Israeli-Service/dp/0062123416/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/41lZKXt1%2BML._SX332_BO1,204,203,200_.jpg) center / cover'}}>Yuval Noah Harari</CardTitle>
        <CardText>
            Sapiens: A Brief History of Humankind
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-na.ssl-images-amazon.com/images/I/51ui2QEBp3L._SX326_BO1,204,203,200_.jpg) center / cover'}}>Stephen Hawking</CardTitle>
        <CardText>
            A Brief History of Time
        </CardText>
        <CardActions border>
            <div className="project-links">
                <a href="https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168/" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-amazon"/>
                </a>
            </div>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
            <Icon name="share"/>
        </CardMenu>
    </Card>


    </div>)
    }
    seeLatest(){
        return(
            <div className="bucket-list">
                <h1>In the bucket-list !: 
                </h1>
            </div>
        )
    }
    tellMe(){
        return(
            <div className="bucket-list">
                <h1>Have suggestions ? 
                <Link to="/contact">Let me know! </Link>
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
                    <div className="content">{this.thirdRow()}</div>
                </Cell>
            </Grid> 
            <Grid>
                <Cell col={12}>
                    <div className="content">{this.fourthRow()}</div>
                </Cell>
            </Grid>     
            <Grid>
            <Cell col={12}>
                <div className="content">{this.seeLatest()}</div>
            </Cell>
            </Grid> 
            <Grid>
            <Cell col={12}>
                <div className="content">{this.moreRow()}</div>
            </Cell>
            </Grid> 
            <Grid>
            <Cell col={12}>
                <div className="content">{this.tellMe()}</div>
            </Cell>
            </Grid>                

         </div>
        )
    }
}

export default books;