import styled from 'styled-components';

export const Container = styled.div`
border-top: 5px #000 solid;
strong{
    display: flex;
    justify-content: center;
    margin-top: .5rem;
    color: #000;
}
p{
    display: flex;
    justify-content: center;
    font-size: .8rem;
    color: #000;
}
  .socias{
        display: flex;
        justify-content: center;
        padding: .2rem;
        .fa-linkedin-in{
            margin-right: 1rem;
            margin-left: 1rem;
        }

        .fa-github{
            margin-right: 1rem;
            margin-left: 1rem; 
            color: #000;
        }
        
        .fa-whatsapp{
            margin-right: 1rem;
            margin-left: 1rem; 
            color: green;
        }
    }
`;
