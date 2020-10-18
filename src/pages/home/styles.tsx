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
    .submit{
        display: flex;
        justify-content: center;
            input{
                display: flex;
                justify-content: center;
                border-top: solid; 
                border-bottom: none;
                border-right: none;
                border-left: none;
                height: 2.2rem;
                width: 50%;
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
    }

    .press{
        height: 2.2rem;
        width: 3.8rem;
        color: #fff;
        background: #000;
        border-radius: 15px;
        outline: 0;

       
    }
    .press:hover{
        color: red;
    }
    .carousel-inner{
        margin-top: 1.5rem;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }   

    small{
        display: flex;
        justify-content: center;
    }

`;