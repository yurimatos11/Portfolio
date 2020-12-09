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
        margin-top: 2rem;

        img{
            width: 12rem;
        }

        strong{
            color: #000;
            width: 9.6rem;
            font-size: 0.8rem;
            display: flex;
            justify-content: center;
        }
    }

    .contact{
        p{
            font-weight: bold;
            color: #000;
            margin: 1rem;
            font-size: .8rem
        }
        a{
            display: flex;
            justify-content: center;
            text-decoration: none;
            color: #000;
            &:hover{
                color: red;
                transition: 1s;
                font-weight: bold;
            }
        }
        .gmail{
            margin-bottom: 2.5rem;
        }
    }

    @media (min-width: 500px){
        .card{
        strong{
            font-size: 15px;
        }
    }
    .contact{
        p{
            display: flex;
            justify-content: center;
            font-size: 20px;
        }
        .gmail{
            margin-bottom: 35px;
        }
    }
}
`;