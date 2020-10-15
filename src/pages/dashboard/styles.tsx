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
    }

    ul{
        border-top: 2px solid #fff;
        display: flex; 
        justify-content: center;
        a{
            color: #fff;
            text-decoration: none;
            padding: 0.8rem 1.5rem;
            font-size: 1.2rem;
            font-weight: bold;
        }
        
        a:hover{
            color: red;
        }
    }
`;

export const Content = styled.div`
    .press{
        display: flex;
        justify-content: center;
            input{
                border-top: solid;
                border-bottom: none;
                border-right: none;
                border-left: none;
                border-radius: 5px;
                height: 2.5rem;
                width: 18rem;
                color: #000;
                text-align: center;
                font-size: 1.2rem;
                font-weight: bold;
                margin-right: 2.0rem;
            }

            input::placeholder{ 
                color: #000;
                font-size: 1.2rem;
                font-weight: bold;
            }

            button{
                height: 2.2rem;
                width: 5.0rem;
                color: #fff;
                background: #000;
                border-radius: 15px;
                outline: 0;
            }

            button:hover{
                color: red;
            }
    }

    .boa3{
        display: flex;
        justify-content: center;
        margin-top: 2.0rem;
        
    }   

    small{
        display: flex;
        justify-content: center;
    }
`;