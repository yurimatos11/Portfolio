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
                   <div className="about">
                       <h1>
                           Hello World
                       </h1>
                   </div>

                </Content>
            </Container>
        </>
    );
};


export default home;