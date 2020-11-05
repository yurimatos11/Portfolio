import styled from 'styled-components';

export const  Container = styled.div` 
    //controla todo o conteudo]
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    .card{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        img{
            width: 12rem;
        }

        strong{
            border-top: solid red;
            border-bottom: solid red;
            border-right: none;
            border-left: none;
            background-color: #000;
            color: #fff;
            width: 9.6rem;
            font-size: 0.8rem;
            display: flex;
            justify-content: center;
        }

        p{
            margin-top: 4.0rem;
            border-top: solid red;
        }
    }

    .socias{
        display: flex;
        justify-content: center;
        border-top: solid red;
        .fa-linkedin-in{
            width: 2.0rem;
        }

        .fa-github{
            width: 2.0rem; 
            color: #000;
        }
        
        .fa-whatsapp{
            width: 2.0rem; 
            color: green;
        }
    }

    @media (min-width: 500px){
        .card{
            margin-top: 30px;

        strong{
            font-size: 15px;
        }

        p{
            margin-top: 80px;
        }
    }

    .socias{

        .fa-linkedin-in{
            width: 50px;
        }

        .fa-github{
            width: 50px; 
        }
        
        .fa-whatsapp{
            width: 50px; 
        }
    }

    }
`;