import React from 'react';

import Logo from '../../img/gitYuri.png';

import { Header } from './styles';

const header: React.FC = () => {
  return (
      <>
        <Header>
            <div className="menu">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="lista">
                    <ul>
                        <a href="home">Home</a>
                        <a href="about" >About</a>
                        <a href="contact">Contact</a>
                    </ul>
                </div>
            </div>
        </Header>
      </>
  );
}

export default header;