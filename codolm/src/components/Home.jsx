import photo_of_me from "../assets/image/photo_of_me.jpeg";
import React, { useState } from 'react';

import {
  HomeH1Intro,
  HomeH2About,
  HomeAboutContainer,
  HomeAboutContent,
  HomeMainContainer,
  HomeImg,
  HomeIntroContainer,
  HomeImgContainer,
  HomeButtonsContainer,
  HomeButtonLeft,
  HomeButtonRight,
  HomeOffersContainer,
  HomeOffersContent,
  HomeH2Offers,
  HomeContactContainer,
  HomeCourseContainer,
  HomeCourseButton
} from "./Home.style";

export default function Home() {
  const [open, setOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  return (
    <>
      <HomeMainContainer>
        <HomeIntroContainer>
          <HomeH1Intro>
            <span style={{ fontWeight: 900 }}>🙋‍♂️ Hi, my name is Mike!</span>{" "}
            Discover the beauty of coding with me! Join course and unlock a
            world of wonders.
          </HomeH1Intro>
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
          <HomeH2About>About</HomeH2About>
          <p>I am a fresh graduate from UP in Olomouc where I studied in the Faculty of Natural Sciences field of Informational Technologies. My leisure time is composed of various things and activities. I like to expand my knowledge of health and fitness as well as about new web tech features and also programming in general.</p>
        </HomeAboutContent>
      </HomeAboutContainer>
      <HomeOffersContainer>
        <HomeH2Offers>Offers</HomeH2Offers>
        <HomeOffersContent>

          <HomeCourseContainer>

          </HomeCourseContainer>

          <HomeCourseContainer>

          </HomeCourseContainer>

          <HomeCourseContainer>

          </HomeCourseContainer>

        </HomeOffersContent>
        {
          open &&
          <HomeOffersContent>

            <HomeCourseContainer>

            </HomeCourseContainer>

            <HomeCourseContainer>

            </HomeCourseContainer>

            <HomeCourseContainer>

            </HomeCourseContainer>

          </HomeOffersContent>
        }
        <HomeCourseButton onClick={() => setOpen(!open)}>
          {
            open ?
            "See Less"
            :
            "See More"
          }
        </HomeCourseButton>
      </HomeOffersContainer>
      <HomeContactContainer>
      </HomeContactContainer>
    </>
  );
}
