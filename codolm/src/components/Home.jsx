import { Link } from "react-router-dom";
import water_flow from "../assets/image/water_flow.jpg"
import { HomeH1, HomeLiContainer, HomeMainContainer, HomeImg, HomeUlContainer, HomeIntroContainer, HomeImgContainer } from './Home.style'

export default function Home() {
    return (
        <HomeMainContainer>
            <HomeIntroContainer>
                <HomeH1><span style={{ color: "#FBCE37", fontWeight: 600 }}>Welcome 👋!</span></HomeH1>
                <HomeH1> I'm here to help you master programming languages.</HomeH1>
                <Links_ />
            </HomeIntroContainer>
            <HomeImgContainer>
                <HomeImg src={water_flow} alt="Water Flow" />
            </HomeImgContainer>
        </HomeMainContainer>
    );
}

export const Links_ = function Links() {
    return (
        <HomeUlContainer>
            <HomeLiContainer>
                <Link to="/">Home</Link>
            </HomeLiContainer>
            <HomeLiContainer>
                <Link to="/About">About</Link>
            </HomeLiContainer>
            <HomeLiContainer>
                <Link to="/Courses">Courses</Link>
            </HomeLiContainer>
            <HomeLiContainer>
                <Link to="/Contact">Contact</Link>
            </HomeLiContainer>
        </HomeUlContainer>
    );
}
