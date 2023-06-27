import photo_of_me from "../assets/image/photo_of_me.jpeg";
import usa from "../assets/image/america.png";
import cz from "../assets/image/czech-republic.svg";
import python from "../assets/image/python_3.10.png";
import basic_fe from "../assets/image/html_css_js.png"
import react from "../assets/image/react.png"
import next from "../assets/image/next.png"
import bash from "../assets/image/bash.png"
import { Fade, Zoom } from "react-awesome-reveal";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

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
  HomeCoursesButton,
  HomeFlagContainer,
  HomeH3Offers,
  HomeCourseContainerRotation,
  HomeCourseButton
} from "./Home.style";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [translate, setTranslate] = useState(false);
  return (
    <>
      <Intro translate={translate} setTranslate={setTranslate} />
      <About translate={translate} />
      <Main open={open} setOpen={setOpen} translate={translate} />
      <Footer />
    </>
  );
}

function Intro({ translate, setTranslate }) {

  return (
    <>
      <HomeMainContainer>
        <Zoom duration={2000}>
          <HomeIntroContainer>
            <HomeFlagContainer>
              {
                translate ?
                  <img onClick={() => setTranslate(!translate)} src={usa} alt="USA Flag" height="30px" width="30px" />
                  :
                  <img onClick={() => setTranslate(!translate)} src={cz} alt="CZ Flag" height="30px" width="30px" />
              }
            </HomeFlagContainer>
            {
              translate ?
                <HomeH1Intro>
                  <span style={{ fontWeight: 900 }}>🙋‍♂️ Ahoj, sem Michal!</span>{" "}
                  Objev se mnou krásu kódování! Připoj se ke kurzu a otevři tak bránu do světa neomezených možností a řešení.
                </HomeH1Intro>
                :
                <HomeH1Intro>
                  <span style={{ fontWeight: 900 }}>🙋‍♂️ Hi, my name is Mike!</span>{" "}
                  Discover the beauty of coding with me! Join course and unlock a
                  world of wonders.
                </HomeH1Intro>
            }


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
        </Zoom>
        <HomeImgContainer>
          <HomeImg src={photo_of_me} alt="Water Flow" />
        </HomeImgContainer>
      </HomeMainContainer>
    </>
  );
}

function About({ translate }) {
  return (
    <HomeAboutContainer>
      <Fade>
        {
          translate ?
            <HomeAboutContent>
              <HomeH2About>O kurzu</HomeH2About>
              <p>Jsem absolventem UP v Olomouci, kde jsem studoval na Přírodovědecké fakultě obor Informační technologie. Cítím potřebu předávat to, co jsem se za 6 let programování naučil, a přidat do výuky i kus sebe.</p>
              <p>Každý by měl umět programovat počítač, protože vás to naučí myslet. (Steve Jobs)</p>
            </HomeAboutContent>
            :
            <HomeAboutContent>
              <HomeH2About>About</HomeH2About>
              <p>I am a graduate from UP in Olomouc where I studied in the Faculty of Natural Sciences field of Informational Technologies. I feel the need to pass on what I have learned plus add a piece of me to the teaching.</p>
              <cite>Everyone should know how to program a computer, because it teaches you how to think. - Steve Jobs</cite>
            </HomeAboutContent>

        }
      </Fade>
    </HomeAboutContainer>)
}

function Main({open, setOpen, translate}) {
  return (
    <HomeOffersContainer>
      {
        translate ?
          <HomeH2Offers>Co mohu nabídnout</HomeH2Offers>
          :
          <HomeH2Offers>Offers</HomeH2Offers>
      }
      <HomeOffersContent>
        <Fade duration={2000}>
          <HomeCourseContainer>
            <HomeH3Offers>Python</HomeH3Offers>
            <img src={python} alt="Python Img" height="200px" width="200px" />
            <HomeCourseButton><Link to="/Python">Show</Link></HomeCourseButton>
          </HomeCourseContainer>
        </Fade>
        <Fade duration={2000}>
          <HomeCourseContainer>
            <HomeH3Offers>HTML, CSS, JS</HomeH3Offers>
            <img src={basic_fe} alt="Front End Img" height="150px" width="auto" />
            <HomeCourseButton><Link to="/BasicFE">Show</Link></HomeCourseButton>
          </HomeCourseContainer>
        </Fade>
        <Fade duration={2000}>
          <HomeCourseContainerRotation>
            <HomeH3Offers>React</HomeH3Offers>
            <img src={react} alt="Front End React Img" height="150px" width="auto" />
            <HomeCourseButton><Link to="/AdvancedFE">Show</Link></HomeCourseButton>
          </HomeCourseContainerRotation>
        </Fade>
      </HomeOffersContent>
      {
        open &&
        <HomeOffersContent>

          <Fade duration={2000}>
            <HomeCourseContainer>
              <HomeH3Offers>Terminal Scripting</HomeH3Offers>
              <img src={bash} alt="Terminal Scripting Img" height="235px" width="auto" />
              <HomeCourseButton>Show</HomeCourseButton>
            </HomeCourseContainer>
          </Fade>
          <Fade duration={2000}>
            <HomeCourseContainer>
              <HomeH3Offers>Full Stack</HomeH3Offers>
              <img src={next} alt="Full Stack Scripting Img" height="120px" width="auto" />
              <HomeCourseButton>Show</HomeCourseButton>
            </HomeCourseContainer>
          </Fade>
          {/* <Fade duration={2000}>
              <HomeCourseContainer>

              </HomeCourseContainer>
            </Fade> */}

        </HomeOffersContent>
      }
      <HomeCoursesButton onClick={() => setOpen(!open)}>
        {
          open ?
            "See Less"
            :
            "See More"
        }
      </HomeCoursesButton>
    </HomeOffersContainer>
  )

}

function Footer() {
  return (
    <HomeContactContainer>
      <p>Michael Hajný</p>
      <p>&copy; Copyright 2023</p>
      <p>michaelhajny@outlook.cz</p>
    </HomeContactContainer>
  )
}
