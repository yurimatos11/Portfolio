import React from 'react';

import { Container } from './styles';

const footer: React.FC = () => {
  return(
      <>
        <Container>
            <strong>
                Portfolio V1.0.1
            </strong>
            <div className="socias">
                <a href="https://www.linkedin.com/in/yuri-matos-82954717a/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/yurimatos11"><i className="fab fa-github"></i></a>
                <a href="https://api.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
            </div>
            <p>Create by Yuri Matos 2020</p>
        </Container>
      </>
  );
}

export default footer;