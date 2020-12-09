import styled from 'styled-components';

export const  Container = styled.div` 
    //controla todo o conteudo]
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    .about{
        margin-bottom: 1rem;
        .txt{
            color: #000;
            h1{
                font-size: 2rem;
                margin: 1.5rem 1rem;
                font-weight: bold;
            }
            p{
                color: #000;
                margin: 1rem 2rem;
            }
        }
       
        h1{
            margin: 1.5rem 1rem;
            font-size: 1.3rem;
            font-weight: bold;
            color: #000;
        }
        .html{
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            background: #000;
            color: #fff;
            width: 99%;
            height: 2.5rem;
            border: 3px solid red;
            border-left: none;
            p{
                margin-top: .3rem;
                font-weight: bold;
                margin-left: .5rem;
                margin-right: .5rem;
            }
        }
        .css{
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            background: #000;
            color: #fff;
            width: 99%;
            height: 2.5rem;
            border: 3px solid red;
            border-left: none;
            p{
                margin-top: .3rem;
                font-weight: bold;
                margin-left: .5rem;
                margin-right: .5rem;
            }
        }
        .js{
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            background: #000;
            color: #fff;
            width: 70%;
            height: 2.5rem;
            border: 3px solid red;
            border-left: none;
            p{
                margin-top: .3rem;
                font-weight: bold;
                margin-left: .5rem;
                margin-right: .5rem;
            }
        }
        .react{
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            background: #000;
            color: #fff;
            width: 80%;
            height: 2.5rem;
            border: 3px solid red;
            border-left: none;
            p{
                margin-top: .3rem;
                font-weight: bold;
                margin-left: .5rem;
                margin-right: .5rem;
            }
        }
        .photoshop{
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            background: #000;
            color: #fff;
            width: 75%;
            height: 2.5rem;
            border: 3px solid red;
            border-left: none;
            p{
                margin-top: .3rem;
                font-weight: bold;
                margin-left: .5rem;
                margin-right: .5rem;
            }
        }
    }

    @media (min-width: 500px){
        .about{
            h1{
            font-size: 30px;
        }
        }
    }

`;