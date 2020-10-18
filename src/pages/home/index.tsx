import React from 'react';

import Logo from '../../img/gitYuri.png';

import Carousel1 from '../../img/images1.jpeg';
import Carousel2 from '../../img/images2.jpeg';
import Carousel3 from '../../img/images3.jpeg';

import { Container, Header, Content} from './styles';

const dashboard = () => {
    return (
        <>
            <Container>
                <Header>
                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <ul>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </ul>
                </Header>
                <Content>
                    <div className="submit">
                        <input type="text" placeholder="Type here"/>
                        <button className="press">Press</button>
                    </div>


                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Carousel1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Carousel2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Carousel3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <small>Ignores randomness and bad image</small> 
                </Content>
            </Container>
        </>
    );
};


export default dashboard;