import React from 'react'
import img1 from "./images/movieslist.PNG";
import img2 from "./images/shaneporfolio.PNG";
import img3 from "./images/civilproject.PNG";
import img4 from "./images/form.PNG";
import img5 from "./images/reactporfolioapp.PNG"
import img6 from "./images/reactbeginnercourse.PNG";

export const ProjectCards = () => {
  return (
    <div className="projectsContainer">
        <h1>My Projects</h1>

        <div className="pjCardsContainer">
          <div className="cardOne">
            <a href="https://movieslist-good-change.netlify.app/">
                <img src={img1} alt="img1"/>
            </a>

            <div className="pjCardBtns">
              <a href="https://github.com/Shane-Soe-Myint/mymovies"><button>Source Code</button></a>
              <a href="https://movieslist-good-change.netlify.app/"><button>Live</button></a>
            </div>
            
            <h1>Movies List <i className="fa-brands fa-react"></i></h1>
            <span>
                This my Movies Project but it is not finished
                beacuse i am working Photoshop Designer that
                full time.You will need VPN internet for enter
                it is.(Sorry, i am bad English speaking)
            </span>
          </div>

          <div className="cardOne">
            <a href="https://shaneportfolio.netlify.app">
                <img src={img2} className="img2" alt="img2"/>
            </a>

            <div className="pjCardBtns">
              <a href="https://github.com/Shane-Soe-Myint/shaneportfolio.github.io"><button>Source Code</button></a>
              <a href="https://shaneportfolio.netlify.app"><button>Live</button></a>
            </div>

            <h1>My Porfolio <i style={{color:"#E86228"}} className="fa-brands fa-html5"></i> <i style={{color:"#2862E9"}} className="fa-brands fa-css3-alt"></i> <i style={{color:"#E8D44D"}} className="fa-brands fa-js"></i></h1>
            <span>
                My Porfolio Project is littled animation includes,but also this
                project is not finished about my another work.You will need this
                project VPN.
            </span>
          </div>

          <div className="cardOne">
            <a href="https://civilproject.netlify.app">
                <img src={img3} alt="img3"/>
            </a>

            <div className="pjCardBtns">
              <a href="https://github.com/Shane-Soe-Myint/civilproject"><button>Source Code</button></a>
              <a href="https://civilproject.netlify.app"><button>Live</button></a>
            </div>

            <h1>Civil Project <i style={{color:"#E86228"}} className="fa-brands fa-html5"></i> <i style={{color:"#2862E9"}} className="fa-brands fa-css3-alt"></i> <i style={{color:"#E8D44D"}} className="fa-brands fa-js"></i></h1>
            <span>
                I am try Civil Project.This project design is get google website.
                I have not more time in my days but i am really try.
            </span>
          </div>

          <div className="cardOne">
            <a href="https://shanenewsletter.netlify.app">
                <img src={img4} alt="img4"/>
            </a>

            <div className="pjCardBtns">
              <a href="https://github.com/Shane-Soe-Myint/shanenewsletter"><button>Source Code</button></a>
              <a href="https://shanenewsletter.netlify.app"><button>Live</button></a>
            </div>

            <h1>Form <i style={{color:"#E86228"}} className="fa-brands fa-html5"></i> <i style={{color:"#2862E9"}} className="fa-brands fa-css3-alt"></i></h1>
            <span>
                This Form Project is Frontend Mentro websit design.
                Small Form but you will really login that is not really world
                because it is not include backend.
                This is a small form.
            </span>
          </div>

          <div className="cardOne">
            <a href="https://reactporfolioapp.netlify.app/#projects">
                <img src={img5} alt="img5"/>
            </a>

            <div className="pjCardBtns">
              <a href="https://github.com/Shane-Soe-Myint/reactporfolioapp"><button>Source Code</button></a>
              <a href="https://reactporfolioapp.netlify.app/#projects"><button>Live</button></a>
            </div>

            <h1>React Porfolio App <i className="fa-brands fa-react"></i></h1>
            <span>
                This react porfolio project is really not good but i am try.
                This project is over 15 days that one day 1.5hours beacuse of
                i have job photoshop design, i am writted when my age is 32 years old.
                I wanted to Fronted web developer job.
            </span>
          </div>

          <div className="cardOne">
            <a href="https://reactbeginnercourse.netlify.app/">
                <img src={img6} alt="img6"/>
            </a>

            <div className="pjCardBtns">
              <a href="https://github.com/Shane-Soe-Myint/reactbeginnercourse"><button>Source Code</button></a>
              <a href="https://reactbeginnercourse.netlify.app/"><button>Live</button></a>
            </div>

            <h1>React Beginner Course <i className="fa-brands fa-react"></i></h1>
            <span>
                This react porfolio project is really not good but i am try.
                This project is over 1 months over that one day 1.5hours beacuse of
                i have job photoshop design, i am writted when my age is near 33 years old.
                I wanted to Fronted web developer job.
            </span>
          </div>
        </div>
    </div>
  )
}
