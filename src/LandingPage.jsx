import { useEffect, useState } from "react";
import "./App.css";
import ignusLogo from "./assets/IGNUS25.svg";
import layer1 from "./assets/layer1.png";
import layer1svg from "./assets/layer1.svg";
import layer2 from "./assets/layer2.png";
import layer2svg from "./assets/layer2.svg";
import layer3 from "./assets/layer3.png";
import layer3svg from "./assets/layer3.svg";
import layer4 from "./assets/layer4.png";
import layer4svg from "./assets/layer4.svg";
import layer5 from "./assets/layer5.png";
import layer5svg from "./assets/layer5.svg";
import sunlayer from "./assets/sunlayer.svg";
import camel1 from "./assets/camel1.svg";
import camel2 from "./assets/camel2.svg";
import group3 from "./assets/group3.svg";
import group16 from "./assets/group16.svg";
import group13 from "./assets/group13.svg";
import group21 from "./assets/group21.svg";
import group10 from "./assets/group10.svg";
import group8 from "./assets/group8.svg";
import group9 from "./assets/group9.svg";
import group18 from "./assets/group18.svg";
import ignusdate from "./assets/ignusdate.svg";
import comingsoon from "./assets/comingsoon.svg";
import moon from "./assets/moon.svg";
import getready from "./assets/getready.svg";

function LandingPage() {
  const [timeRemaining, setTimeRemaining] = useState("");

  // const targetDate = new Date('Feb 9, 2025 00:00:00').getTime();

  // const updateCountdown = () => {
  //     const now = new Date().getTime();
  //     const timeLeft = targetDate - now;

  //     if (timeLeft <= 0) {
  //         setTimeRemaining("Countdown Ended!");
  //     } else {
  //         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  //         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  //         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //         setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  //     }
  // };

  // useEffect(() => {
  //     const countdownInterval = setInterval(updateCountdown, 1000);
  //     return () => clearInterval(countdownInterval); // Cleanup the interval on unmount
  // }, []);
//   gsap.to(".coming-soon", {
//     duration: 2, // Show "Coming Soon" for 2 seconds
//     opacity: 1,
//     onComplete: () => {
//       // Hide "Coming Soon" and reveal logo and date
//       gsap.to(".coming-soon", { duration: 0.5, opacity: 0 });
//       document.querySelector(".coming-soon").style.display = "none";
//       document.querySelector(".ignus-logo").style.display = "block";
//       document.querySelector(".ignus-date").style.display = "block";

//       gsap.fromTo(
//         [".ignus-logo", ".ignus-date"],
//         { opacity: 0 },
//         { duration: 1, opacity: 1, stagger: 0.2 }
//       );
//     }
//   });

  return (
    // <div className="countdown-container">
    //     <div className="countdown">{timeRemaining} {" "} to go !!</div>
    // </div>
    <>
      <div className="home-container">
        <div className="camel-1">
          <img src={camel1} alt="camel1" />
        </div>
        <div className="camel-2">
          <img src={camel2} alt="camel2" />
        </div>
        <div className="group-3">
          <img src={group3} alt="group3" />
        </div>
        <div className="group-16">
          <img src={group16} alt="group16" />
        </div>
        <div className="ignus-logo">
          <img src={ignusLogo} alt="ignus-logo" />
        </div>
        <div className="ignus-date">
          <img src={ignusdate} alt="ignusdate" />
        </div>
        <div className="ignus-countdown"></div>
        <div className="sun-layer">
          <img src={sunlayer} alt="sunlayer" />
        </div>
        <div className="moon">
            <img src={moon} alt="moon" />
        </div>
        <div className="layer-5">
          <img src={layer5} alt="layer5" className="desktop-screen" />
          <img src={layer5svg} alt="layer5svg" className="mobile-screen" />
        </div>
        <div className="layer-4">
          <img src={layer4} alt="layer4" className="desktop-screen" />
          <img src={layer4svg} alt="layer4svg" className="mobile-screen" />
        </div>
        <div className="group-18">
          <img src={group18} alt="group18" />
        </div>
        <div className="layer-3">
          <img src={layer3} alt="layer3" className="desktop-screen" />
          <img src={layer3svg} alt="layer3svg" className="mobile-screen" />
        </div>
        <div className="group-21">
          <img src={group21} alt="group21" />
        </div>
        <div className="group-10">
          <img src={group10} alt="group10" />
        </div>
        <div className="group-8">
          <img src={group8} alt="group8" />
        </div>
        <div className="group-9">
          <img src={group9} alt="group9" />
        </div>
        <div className="layer-2">
          <img src={layer2} alt="layer2" className="desktop-screen" />
          <img src={layer2svg} alt="layer2svg" className="mobile-screen" />
        </div>
        <div className="group-13">
          <img src={group13} alt="group13" />
        </div>
        <div className="get-ready">
            <img src={getready} alt="getready" />
        </div>
        <div className="layer-1">
          <img src={layer1} alt="layer1" className="desktop-screen" />
          <img src={layer1svg} alt="layer1svg" className="mobile-screen" />
        </div>
        <div className="coming-soon">
          <img src={comingsoon} alt="comingsoon" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
