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
                        <strong>random photo</strong> 
                    </div>
                    <div className="contact">
                        <p>Below I will leave two emails of mine for contact ...</p>
                        <a href="https://outlook.live.com/mail/0/inbox">yuri.cabello@hotmail.com</a>
                        <a className="gmail" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">yuri2001.ym@gmail.com</a>
                    </div>
                </Content>
            </Container>
        </>
    );
};


export default contact;