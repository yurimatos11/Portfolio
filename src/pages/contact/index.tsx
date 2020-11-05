import React from 'react';

import Yuri from '../../img/yuri.jpeg'

import { Container, Content} from './styles';

const contact = () => {
    return (
        <>
            <Container>
                <Content>
                <div className="card">
                        <img src={Yuri} alt="eu"/>
                        <strong>random photo even</strong>
                        <p>I'll leave it here in the portfolio, but I won't be stuffing sausage...</p>
                   </div>
                    <div className="socias">
                        <a href="https://www.linkedin.com/in/yuri-matos-82954717a/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/yurimatos11"><i className="fab fa-github"></i></a>
                        <a href="https://api.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </Content>
            </Container>
        </>
    );
};


export default contact;