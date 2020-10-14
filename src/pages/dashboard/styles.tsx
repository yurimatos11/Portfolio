import styled from 'styled-components';

export const  Container = styled.div` 
    //controla todo o conteudo]
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    background: #000;
    h1{
        color: #fff;
        padding: 1.5rem;
        display: flex;
        justify-content: center;
    }

    ul{
        border-top: 2px solid red;
        display: flex; 
        justify-content: center;
        a{
            color: red;
            text-decoration: none;
            padding: 0.8rem 1.5rem;
            font-size: 1.2rem;
        }
    }
`;

export const Content = styled.div`
`;