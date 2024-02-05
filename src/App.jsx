import { useEffect, useRef, useState } from "react";
import { Contact } from "./Contact";
import {ProjectCards} from "./Projects";
import { Footer } from "./Footer";
import shane from "./images/shane.png";

function App() {
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);
    const navBarMenuRef = useRef(null);
    const [isOpen, setIsOpen] = useState("");
    const [isFollow, setIsFollow] = useState(false);
    const [moreAbout, setMoreAbout] = useState(false);

    const followBtnClick = () => {
        setIsFollow(!isFollow);
    }

    useEffect(() => {
        const navBarMenuClass = document.querySelector(".navBarMenu");

        const clickOutSide = (event) => {
          if (
            navBarMenuRef.current &&
            !navBarMenuRef.current.contains(event.target)
          ) {
            navBarMenuClass.classList.remove("open");
          }
        };

        document.addEventListener("click", clickOutSide);
        return () => {
            document.removeEventListener("click", clickOutSide);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const showNavBar = scrollPosition < navBarMenuRef.current.clientHeight;
            setIsNavBarVisible(showNavBar);
        }
        
        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const hamburgerHandler = () => {
        const navBarMenuClass = document.querySelector(".navBarMenu");
        navBarMenuClass.classList.toggle("open");
        setIsOpen(!isOpen);
    };

    const moreAboutBtn = () => {
        setMoreAbout(!moreAbout);
    }

    return (
        <div>


            <div className="homeContainer" id="home">
                <div className="navBar" ref={navBarMenuRef}>
                    <h4>Logo Simple</h4>

                    <div className={`navBarMenu ${isNavBarVisible?"visible":"hidden"}`}>
                        <a href="#home"><h4>Home</h4></a>
                        <a href="#projects"><h4>Projects</h4></a>
                        <a href="#contact"><h4>Contact Me</h4></a>
                    </div>

                    <div className={`hamburger ${isOpen?"open":null}`} onClick={hamburgerHandler}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                <div className="homeColor"></div>
                <div className="homeInside">
                    <img className="homeImg" src={shane} alt="image"/>
                    <div>
                        <div className="homeNameBtn">
                            <h1>Shane Soe Myint</h1>
                            <button className="followBtn" onClick={followBtnClick}>
                                {isFollow? 'Unfollow' : 'Follow'}
                            </button>
                        </div>

                        <div className="postFlow">
                            <h4>50 <span>Posts</span></h4>
                            <h4>1.1k <span>Followsers</span></h4>
                            <h4>50 <span>Following</span></h4>
                        </div>

                        <div className="homeP">
                            <h3>
                                   I am learned from youtube html, css, js and Reactjs at 2020 to 2023.I am working photoshop job that this
                                times my age is 29 years old now 32 years old, now i have photoshop design job but i am wanted settled down frontend web development,
                                also need junior frontend web developer job for me.(apologize for my bad English skill)
                            </h3>
                            <div className="moreAboutMe">
                                <div className={`moreAboutP ${moreAbout?"visibleV":"hiddenH"}`}>
                                    I succesed hight school but have not Degree, so i am English major that stoped first year.
                                </div>
                            </div>
                        </div>

                        <div className="homeMoreBtn">
                            <button className={`moreAboutMeBtn ${moreAbout?"hidden":"visible"}`} onClick={moreAboutBtn}>{moreAbout?"LESS ABOUT ME":"MORE ABOUT ME"} <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projectCardsContainer" id="projects">
                <ProjectCards />
            </div>

            <div className="contactContainer" id="contact">
                <Contact />
            </div>

            <div className="footerContainer">
                <Footer />
            </div>
        </div>
    )
}



export default App;