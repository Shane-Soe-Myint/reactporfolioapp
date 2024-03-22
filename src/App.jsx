import { useEffect, useRef, useState } from "react";
import { Contact } from "./Contact";
import {ProjectCards} from "./Projects";
import { Footer } from "./Footer";
import shane from "./images/shane.png";
// import {CV} from "./CV";
import cv from "./images/CVMyanmar.jpg";
import cvPdf from "./images/CVMyanmarPDF.pdf";

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
            <div className={`myCv ${isFollow?null:"myCVcontainer"}`}>
                <a href={cvPdf} download><button className="cvBtn followBtn downloadCV"><i class="fa-solid fa-arrow-down"></i></button></a>
                <button className="cvBtn followBtn" onClick={followBtnClick}>X</button>
                <img src={cv} />
            </div>

            <div className="homeContainer" id="home">
                <div className="navBar" ref={navBarMenuRef}>
                    <h4 className="navLogo">Mr.Shane</h4>

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
                                View CV
                            </button>
                        </div>

                        <div className="postFlow">
                            <h4>Html <span>(Middle Level)</span> <i style={{color:"#E86228"}} className="fa-brands fa-html5"></i></h4>
                            <h4>Css <span>(Middle Level)</span> <i style={{color:"#2862E9"}} className="fa-brands fa-css3-alt"></i></h4>
                            <h4>Js <span>(Middle Level)</span> <i style={{color:"#E8D44D"}} className="fa-brands fa-js"></i></h4>
                            <h4>Reactjs <span>(Middle Level)</span> <i style={{color:"#5ED4F3"}} className="fa-brands fa-react"></i></h4>
                        </div>

                        <div className="homeP">
                            <h3>
                                   I am learned from youtube html, css, js and Reactjs at 2020 to 2023.I am working photoshop job that this
                                times my age is 29 years old now 32 years old, now i have photoshop design job but i am wanted settled down frontend web development,
                                also need junior frontend web developer job for me that expected upper 300000 MMK.(apologize for my bad English skill)
                            </h3>
                            <div className="moreAboutMe">
                                <div className={`moreAboutP ${moreAbout?"visibleV":"hiddenH"}`}>
                                    I succesed hight school but have not Degree, because of i am English major that stoped first year.
                                </div>
                            </div>
                        </div>

                        <div className="homeMoreBtn">
                            <button className={`moreAboutMeBtn ${moreAbout?"hidden":"visible"}`} onClick={moreAboutBtn}>{moreAbout?"LESS ABOUT ME":"MORE ABOUT ME"} <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={`myCVcontainer ${isFollow?"myCVcontianerView":null}`}>
                <CV />
            </div> */}

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