import React, { useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import img1 from "../assets/images/admlogo.svg";
import img2 from "../assets/images/fsrlogo.svg";
import img3 from "../assets/images/emiterslogo.svg";
import img4 from "../assets/images/centeralbanklogo.svg";
import nextIcon from "../assets/images/nexticon.svg";
import prevIcon from "../assets/images/previcon.svg";

const options = {
  loop: true,
  responsiveClass: true,
  nav: true,
  dots: true,
  margin: 10,
  autoplayTimeout: 4000,
  autoplay: true,
  smartSpeed: 400,
  center: true,
  navText: [
    `<img src="${prevIcon}" alt="Previous" style="width: 8px; height: 14px;"/>`,
    `<img src="${nextIcon}" alt="Next" style="width: 8px; height: 14px;"/>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const cardData = [
  {
    id: 1,
    img: img1,
    text: "“I am going to study at UCL and Supreet from Amber did an excellent job in helping me. I do not have doubt to recommend Supreet as a student helper. I hope to receive his help in future. The room is in an excellent location.”",
    title: "General Manger",
    subtitle: "UAE",
  },
  {
    id: 2,
    img: img2,
    text: "“I am going to study at UCL and Supreet from Amber did an excellent job in helping me. I do not have doubt to recommend Supreet as a student helper. I hope to receive his help in future. The room is in an excellent location.”",
    title: "DGM",
    subtitle: "UAE",
  },
  {
    id: 3,
    img: img3,
    text: "“I am going to study at UCL and Supreet from Amber did an excellent job in helping me. I do not have doubt to recommend Supreet as a student helper. I hope to receive his help in future. The room is in an excellent location.”",
    title: "CEO",
    subtitle: "UAE",
  },
  {
    id: 4,
    img: img4,
    text: "“I am going to study at UCL and Supreet from Amber did an excellent job in helping me. I do not have doubt to recommend Supreet as a student helper. I hope to receive his help in future. The room is in an excellent location.”",
    title: "Engineer",
    subtitle: "UAE",
  },
];

const WorkExperience = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (carouselRef.current) {
        if (event.keyCode === 37) {
          carouselRef.current.prev();
        } else if (event.keyCode === 39) {
          carouselRef.current.next();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="section-padding milestoneexperiences_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-center">Milestone Experiences</h3>
              <OwlCarousel
                ref={carouselRef}
                className="screenshot_slider owl-carousel"
                {...options}
              >
                {cardData.map((card) => (
                  <div key={card.id} className="item milestoneexperience_item">
                    <div className="card milestoneexperiences_card text-center">
                      <div className="card-body">
                        <img src={card.img} alt="" />
                        <p className="mt-3 mb-3">{card.text}</p>
                        <h6>{card.title}</h6>
                        <span>{card.subtitle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkExperience;
