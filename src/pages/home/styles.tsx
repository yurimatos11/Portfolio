import styled from 'styled-components';

export const  Container = styled.div` 
    //controla todo o conteudo]
    width: 100%;
    height: 100%;
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
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }   

    small{
        display: flex;
        justify-content: center;
    }

    @media (min-width: 500px){
        .submit{
            margin-top: 0px;
            background: #000;
            padding: 10px 0;
            input{
                border-top: none red; 
                border-radius: 20px;
                color: #000;
                width: 300px;
                font-size: 20px;
                font-weight: bold;
                margin-right: 30px;
            }

            input::placeholder{ 
                color: #000;
                font-size: 15px;
                font-weight: bold;
            }     
    }

    .press{
        height: 35px;
        width: 60px;
        color: #fff;
        background: #000;

       
    }

    .carousel-inner{
        margin-top: 30px;
        width: 80%;
    }   

    }

`;
