import styled from 'styled-components';

export const Header = styled.div`
  .menu{
        background: #000;

        .logo{
            background: #fff;
            display: flex;
            justify-content: center;
            
            img{
                height: 6.0rem;
            }
        }

        .lista{
            ul{
                border-top: solid red;
                border-bottom: solid red;
                display: flex; 
                justify-content: center;
            }
            
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
    }

    @media (min-width: 500px){
        .menu{
            background: #fff;
            display: flex;
            justify-content: space-between;
            border-bottom: solid red;

        .logo{
            img{
                height: 100px;
            }
        }

        .lista{
            ul{
                border-top: none;
                border-bottom: none;
                margin-top: 40px;
            }
            
            a{
                color: #000;
                text-decoration: none;
                padding: 0 15px;
                font-size: 20px;
                font-weight: bold;
            }
            
            a:hover{
                color: red;
            }
        }
    }
`;
