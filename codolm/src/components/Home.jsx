import photo_of_me from "../assets/image/photo_of_me.jpeg";
import {
  HomeH1Container,
  HomeH2Container,
  HomeAboutContainer,
  HomeAboutContent,
  HomeMainContainer,
  HomeImg,
  HomeIntroContainer,
  HomeImgContainer,
  HomeButtonsContainer,
  HomeButtonLeft,
  HomeButtonRight,
  HomeAboutContainerSummary,
} from "./Home.style";

export default function Home() {
  return (
    <>
      <HomeMainContainer>
        <HomeIntroContainer>
          <HomeH1Container>
            <span style={{ fontWeight: 900 }}>🙋‍♂️ Hi, my name is Mike!</span>{" "}
            Discover the beauty of coding with me! Join course and unlock a
            world of wonders.
          </HomeH1Container>
          <HomeButtonsContainer>
            <HomeButtonLeft>
              <a href="https://github.com/3n0wd3n">GitHub</a>
            </HomeButtonLeft>
            <HomeButtonRight>
              <a href="https://www.linkedin.com/in/michael-hajn%C3%BD-262614228/">
                Linked In
              </a>
            </HomeButtonRight>
          </HomeButtonsContainer>
        </HomeIntroContainer>
        <HomeImgContainer>
          <HomeImg src={photo_of_me} alt="Water Flow" />
        </HomeImgContainer>
      </HomeMainContainer>
      <HomeAboutContainer>
        <HomeAboutContent>
          <HomeH2Container>About</HomeH2Container>
          <p>I am a fresh graduate from UP in Olomouc where I studied in the Faculty of Natural Sciences field of Informational Technologies. My leisure time is composed of various things and activities. I like to expand my knowledge of health and fitness as well as about new web tech features and also programming in general.</p>
        </HomeAboutContent>
        <HomeAboutContainerSummary>
          <HomeH2Container>About</HomeH2Container>
          <p>I am a fresh graduate from UP in Olomouc where I studied in the Faculty of Natural Sciences field of Informational Technologies. My leisure time is composed of various things and activities. I like to expand my knowledge of health and fitness as well as about new web tech features and also programming in general.</p>
        </HomeAboutContainerSummary>
      </HomeAboutContainer>
    </>
  );
}
