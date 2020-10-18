import styled from 'styled-components';

export const  Container = styled.div` 
    //controla todo o conteudo]
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    background: #000;
    .logo{
        background: #fff;
        display: flex;
        justify-content: center;
        
        img{
            height: 6.0rem;
        }
    }

    ul{
        border-top: solid red;
        border-bottom: solid red;
        display: flex; 
        justify-content: center;
        a{
            color: #fff;
            text-decoration: none;
            padding: 0.6rem 1.5rem;
            font-size: 1.2rem;
            font-weight: bold;
        }
        
        a:hover{
            color: red;
        }
    }
`;

export const Content = styled.div`
    .about{
        display: flex;
        justify-content: center;
        h1{
            font-size: 2.0rem;
            font-weight: bold;
            margin-top: 7.0rem;
        }
    }

`;