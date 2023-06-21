import styled from 'styled-components'

export const HomeMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 100vw;
    flex-direction: row;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const HomeH1 = styled.h1`
    font-size: 3.5rem;
    color: white;
    font-weight: 300;
    margin: 0rem 3.5rem 1rem 3.5rem ;
    @media (max-width: 850px) {
        font-size: 3rem;
    }
`;

export const HomeUlContainer = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border: 1px solid #FBCE37;
    padding: .5rem 2rem .5rem 2rem;
    border-radius: 25px;
    background-color: #FBCE37;
    box-shadow: -4px 4px 12px rgba(0, 0, 0, .35);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
    margin: 1rem 3.5rem 0rem 3.5rem;
    @media (max-width: 850px) {
        margin: 1rem 0rem 0rem 0rem;
        padding: .5rem 0rem .5rem 0rem;
        width: 100%;
        border-radius: 0px;
    }
    @media (max-width: 800px) {
        margin: 1rem 3.5rem 0rem 3.5rem;
        padding: .5rem 1rem .5rem 1rem;
        width: auto;
        border-radius: 18px;
    }
`;

export const HomeLiContainer = styled.li`
    & > a {
        color: black;
    }
    &:hover {
        & > a {
            color: rgba(0, 0, 0, .60);
        }
    }
`;

export const HomeIntroContainer = styled.div`
    background-color: #026451;
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const HomeImgContainer = styled.div`
    height: 100vh;
    width: 50%;
    overflow: hidden;
    @media (max-width: 800px) {
        display: none;
    }
    
`;

export const HomeImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

