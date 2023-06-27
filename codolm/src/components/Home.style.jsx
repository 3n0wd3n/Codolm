import styled from 'styled-components'

export const HomeMainContainer = styled.section`
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

export const HomeFlagContainer = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
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

    @media (max-width: 400px) {
        width: 100vw;
        height: 58vh;
    }
`;

export const HomeH1Intro = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    color: #627C85;
    text-align: center;
    margin: 0 2rem 0 2rem;
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }

`;

export const HomeH2About = styled.h2`
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

    @media (max-width: 400px) {
        width: 100vw;
        height: 42vh;
    }
    
`;

export const HomeImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const HomeAboutContainer = styled.section`
    background-image: linear-gradient(to right, #012241, rgba(56, 125, 122, .9));    
    min-height: 60vh;
    width: 100%;
    margin-top: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeAboutContent = styled.article`
    padding: 3rem;
    background-color: #fff;
    color: black;
    box-shadow: 0 1px 4px rgba(255,255,255,.6);
    border-radius: 25px;
    width: 40vw;
    font-size: 1.5rem;
    margin: 2rem;
    /* & > p:nth-of-type(2){
        margin: 1rem 0 0 0;
        color: rgba(0, 0, 10, .2);
    } */
    & > cite{
        margin: 1rem 0 0 0;
        color: rgba(0, 0, 10, .2);
    }
    @media (max-width: 800px) {
        padding: 2rem;
        width: 60vw;
        font-size: 1rem;
    }

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

export const HomeOffersContainer = styled.main`
    background-color: #fff;
    min-height: 70vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const HomeH2Offers = styled.h2`
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 2rem 0 2rem;
    text-align: center;
`;

export const HomeOffersContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    margin: 2rem 2rem 0 2rem;
    flex-wrap: wrap;
`;

export const HomeCourseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0 2rem 0;
    /* background-color: #fff; */
    background-image: linear-gradient(to right, rgba(255, 255, 255), rgba(255, 255, 255), rgba(255, 255, 255), rgba(56, 125, 122, .2));
    width: 300px;
    height: 400px;
    box-shadow: 2px 3px 10px #8888;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.7s;
    &:hover{
        box-shadow: 4px 5px 25px #8888;
    }
`;


export const HomeCourseContainerRotation = styled(HomeCourseContainer)`
    & > img {
        @keyframes rotation{
            from {
                transform:rotate(0deg);
            }     

            to {
                transform:rotate(360deg);
            }
        }
        animation: rotation infinite 15s linear;
    }
`;

export const HomeH3Offers = styled.h3`
    font-size: 1.5;
    font-weight: 300;
`;

export const HomeCoursesButton = styled.button`
    border: 1px solid;
    color: #fff;
    width: 150px;
    height: 45px;
    border-radius: 25px;
    background-color: #DEA82B;
    margin: 2rem 0 2rem 0;
    cursor: pointer;
    transition: .7s;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
        background-color: #fff;
        color: #DEA82B;
    }
`;

export const HomeCourseButton = styled(HomeCoursesButton)`
    border: 1px solid;
    color: #fff;
    width: 120px;
    height: 40px;
    border-radius: 25px;
    background-color: rgba(56, 125, 122);
    margin: 2rem 0 2rem 0;
    cursor: pointer;
    transition: .7s;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
        background-color: #fff;
        color: rgba(56, 125, 122);
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

export const HomeContactContainer = styled.footer`
  min-height: 30vh;
  max-width: 100vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to top, rgba(3, 125, 122), rgba(56, 125, 122, .95));
`;
