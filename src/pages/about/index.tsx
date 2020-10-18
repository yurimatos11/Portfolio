import React from 'react';

import Logo from '../../img/gitYuri.png';

import Yuri from '../../img/yuri.jpeg'

import { Container, Header, Content} from './styles';

const about = () => {
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
                       <strong>
                            I decided to create a responsive portfolio, to start my repository here on github. Hope you like it...
                            I'll leave it here without much for now, let's say it's in production kkkkkkk.
                       </strong>
                   </div>

                </Content>
            </Container>
        </>
    );
};


export default about;