import React from 'react';

import { Container, Content} from './styles';

const about = () => {
    return (
        <>
            <Container>
                <Content>
                   <div className="about">
                        <div className="txt">
                            <h1>Who am I?</h1>
                                <p>My name is Yuri Matos, and I'm going to talk a little bit about myself, I'm currently studying computer science with training for 12/2022, my main qualities in web development are: ReactJs, HTML, CSS, JS, Bootstrap, Figma, TypeScript ... I'm always looking to qualify and learn more to become a good front-end developer.
                                I have other qualities like photoshop, office package and Linux.
                                There's a lot about me to talk about, but I won't say everything here, if you want to know more about me go to the "Contacts" tab, to contact me ...</p>
                        </div>
                        <h1>Here I will talk about my qualities ...</h1>
                        <div className="html">
                            <p>HTML</p>
                            <p>99%</p>
                        </div>
                        <div className="css">
                            <p>CSS</p>
                            <p>99%</p>
                        </div>
                        <div className="js">
                            <p>JS</p>
                            <p>70%</p>
                        </div>
                        <div className="react">
                            <p>ReactJS</p>
                            <p>80%</p>
                        </div>
                        <div className="photoshop">
                            <p>Photoshop</p>
                            <p>75%</p>
                        </div>
                   </div>
                </Content>
            </Container>
        </>
    );
};


export default about;