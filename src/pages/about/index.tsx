import React from 'react';


import { Container, Content} from './styles';

const about = () => {
    return (
        <>
            <Container>
                
                <Content>
                   <div className="about">
                        <strong>Here I will talk about my qualities ...</strong>
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