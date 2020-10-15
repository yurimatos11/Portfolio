import React from 'react';

import Logo from '../../img/gitYuri.png';

import Carousel3 from '../../img/boa3.jpeg';

import { Container, Header, Content} from './styles';

const dashboard = () => {
    return (
        <>
            <Container>
                <Header>
                    <div className="logo">
                        <img src={Logo} alt="Logo" height="100px"/>
                    </div>
                    <ul>
                        <a href="">Home</a>
                        <a href="">Sobre</a>
                        <a href="">Contanto</a>
                    </ul>
                </Header>
                <Content>
                    <div className="press">
                        <input type="text" placeholder="Digite Aqui"/>
                        <button>Press</button>
                    </div>

                    <div className="boa3">
                            <img src={Carousel3} alt="boa3" width="80%"/>
                    </div>     
                    <small>Ignora a aleatoriedade e péssima imagem </small> 

                   
                </Content>
            </Container>
        </>
    );
};


export default dashboard;