import React from 'react';

import Carousel1 from '../../img/images1.jpeg';
import Carousel2 from '../../img/images2.jpeg';
import Carousel3 from '../../img/images3.jpeg';

import { Container, Content} from './styles';

const home = () => {
    return (
        <>
            <Container>
                <Content>
                    <div className="submit">
                        <input type="text" placeholder="Type Here"/>
                        <button className="press">Press</button>
                    </div>

                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={Carousel1} className="d-block w-100" alt="Carousel1"/>
                        </div>
                        <div className="carousel-item">
                        <img src={Carousel2} className="d-block w-100" alt="Carousel2"/>
                        </div>
                        <div className="carousel-item">
                        <img src={Carousel3} className="d-block w-100" alt="Carousel3"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    <small>Ignores randomness and bad image</small> 
                    <div className="props">
                        <h1>Because I decided to create!</h1>
                        <p>I decided to create my <i>Portfolio</i>to talk a little about myself, and show my qualities...</p>
                    </div>
                    <div className="tools">
                        <h1>What tools did I use?</h1>
                        <p>For the creation of my Portfolio I used some tools, Font Awesome for icons, the bootstrap for carousel, and last but not least the translator. Yes I am not fluent in English, I used the translator to help me with some translations...</p>
                    </div>
                </Content>
            </Container>
        </>
    );
};


export default home;