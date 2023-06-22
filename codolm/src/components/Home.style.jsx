import styled from 'styled-components'

export const HomeMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 100vw;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`;

export const HomeIntroContainer = styled.div`
    background-color: #fff;
    height: 100vh;
    width: 55vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 100vw;
        height: 50vh;
    }
`;

export const HomeH1Container = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    color: #627C85;
    text-align: center;
    margin: 0 2rem 0 2rem;
    @media (max-width: 800px) {
        font-size: 2rem;
    }
`;

export const HomeH2Container = styled.h2`
    font-size: 2.5rem;
    font-weight: 300;
    @media (max-width: 800px) {
        font-size: 2rem;
    }
`;

export const HomeImgContainer = styled.div`
    height: 100vh;
    width: 45vw;
    overflow: hidden;
    @media (max-width: 800px) {
        height: 50vh;
        width: 100vw;
    }
    
`;

export const HomeImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const HomeAboutContainer = styled.div`
    background-color: #012241;    
    min-height: 100vh;
    width: 100%;
    margin-top: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeAboutContent = styled.div`
    padding: 3rem;
    background-color: #fff;
    color: black;
    box-shadow: 0 1px 4px rgba(255,255,255,.6);
    border-radius: 25px;
    margin: 3rem;
    font-size: 1.5rem;
`;

export const HomeButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 2rem 0 0 0;
`;

export const HomeButtonLeft = styled.button`
    color: #fff;
    background-color: #012241;
    border-radius: 20px;
    border: 1px solid #012241;
    font-size: 1.5rem;
    width: 150px;
    height: 45px;
    transition: .7s;
    cursor: pointer;
    & > a:hover, a:visited, a:link, a:active {
        color: #fff;
        text-decoration: none;
    }
    &:hover{
        transform: translateY(-5px);
    }
`;

export const HomeButtonRight = styled(HomeButtonLeft)`
    color: #012241;
    background-color: white;
    & > a:hover, a:visited, a:link, a:active {
        color: #012241;
        text-decoration: none;
    }
`;
