import React from 'react';

import Logo from '../../img/gitYuri.png';

import Yuri from '../../img/yuri.jpeg'

import { Container, Header, Content} from './styles';

const home = () => {
    return (
        <>
            <Container>
                <Header>
                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <ul>
                        <a href="home">Home</a>
                        <a href="about">About</a>
                        <a href="contact">Contact</a>
                    </ul>
                </Header>
                <Content>
                <div className="card">
                        <img src={Yuri} alt="eu"/>
                        <strong>random photo even</strong>
                        <p>I'll leave it here in the portfolio, but I won't be stuffing sausage...</p>
                   </div>
                    <div className="socias">
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-whatsapp"></i>
                    </div>
                </Content>
            </Container>
        </>
    );
};


export default home;