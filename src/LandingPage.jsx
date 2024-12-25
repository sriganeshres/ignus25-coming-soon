import React, { useState } from "react";
import Fire from "./Fire.json"
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Birds from "./Birds.json"

const LandingPage = () => {
    const images = [
        { src: "/Frame 22.png", depth: 100 },
        { src: "/Coming_Soon.png", depth: -1200 },
        { src: "/Frame 10.png", depth: -1100 },
        { src: "/Frame 11.png", depth: -1000 },
        { src: "/Frame 12.png", depth: -900 },
        { src: "/Frame 13.png", depth: -800 },
        { src: "/Frame 14.png", depth: -700 },
        { src: "/Frame 15.png", depth: -600 },
        { src: "/Frame 18.png", depth: -500 },
        { src: "/Frame 8.png", depth: -400 },
        { src: "/Frame 9.png", depth: -300 },
        { src: "/Frame 7.png", depth: -200 },
        { src: "/Frame 19.png", depth: -100 },
        { src: "/Frame 5.png", depth: 0 },
    ];


    const [currentPage, setCurrentPage] = useState(0);

    const [timeRemaining, setTimeRemaining] = useState('');
    const targetDate = new Date('Feb 9, 2025 00:00:00').getTime();
    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        if (timeLeft <= 0) {
            setTimeRemaining({ ended: true });
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            setTimeRemaining(`${days}`);
        }
    };

    useEffect(() => {
        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval);
    }, []);

    const handleScroll = (event) => {
        if (event.deltaY > 0 && currentPage === 0) {
            setCurrentPage(1);
        } else if (event.deltaY < 0 && currentPage === 1) {
            setCurrentPage(0);
        }
    };

    const sunVariant = {
        initial: {
            y: "100vh", x: "-50vh", scale: [1, 0.9],
            transition: {
                duration: 3,
                ease: "easeInOut"
            }
        },
        enter: { y: 0, x: 0, transition: { duration: 2, ease: "easeInOut" } },
        exit: {
            y: "-100vh", x: "-70vh", scale: [1, 0.9],
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        },
        // exit: { y: 0, transition: { duration: 2, ease: "easeInOut" } },
    };

    const bottomUpVariant = {
        initial: {
            y: "-100vh", x: "-50vh", scale: [1, 0.9],
            transition: {
                duration: 3,
                ease: "easeInOut"
            }
        },
        enter: { y: 0, x: 0, transition: { duration: 2, ease: "easeInOut" } },
        exit: { y: "-100vh", transition: { duration: 2, ease: "easeInOut" } },
        // exit: { y: 0, transition: { duration: 2, ease: "easeInOut" } },
    };

    const [flag, setFlag] = useState(0);

    const changeFlag = () => {
        setFlag(1);
    };

    const initialState = flag === 0 ? { y: "-100vh" } : { y: 0 };

    if (flag === 0) {
        changeFlag();
    }

    const slideVariantsFirsttoSecond = {
        initial: initialState,
        enter: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
        exit: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
    };


    const slideVariantsSecondtoFirst = {
        initial: { y: 0 },
        enter: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
        exit: { y: "0", transition: { duration: 1, ease: "easeInOut" } },
    };

    const leftToRight = {
        initial: {
            y: 0, x: "-5vh", scale: [1, 0.9],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        enter: { y: 0, x: 0, transition: { duration: 2, ease: "easeInOut" } },
        exit: { y: 0, x: "-5vw", transition: { duration: 2, ease: "easeInOut" } },
    };

    const rightToLeft = {
        initial: {
            y: 0, x: "5vh", scale: [1, 0.9],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        enter: { y: 0, x: 0, transition: { duration: 2, ease: "easeInOut" } },
        exit: { y: 0, x: "5vw", transition: { duration: 2, ease: "easeInOut" } },
    };

    const moonVariant = {
        initial: {
            y: "100vh", x: "-50vh", scale: [1, 0.9],
            transition: {
                duration: 3,
                ease: "easeInOut"
            }
        },
        enter: { y: 0, x: 0, zIndex: -600, transition: { duration: 2, ease: "easeInOut" } },
        exit: {
            y: "100vh", x: "-70vh", scale: [1, 0.9],
            transition: {
                duration: 3,
                ease: "easeInOut"
            }
        },
    }

    const fireVariant = {
        initial: { scale: 1 },
        enter: { scale: 1, transition: { duration: 1, ease: "easeInOut" } },
        exit: {
            scale: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        },
    }

    const opacityVariants = {
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 1 } },
    };

    const perspectiveVariants = {
        initial: { scale: 1, y: 0 },
        enter: { scale: 1, y: 0, transition: { duration: 0, ease: "easeInOut" } },
        exit: {
            scale: 0.9,
            y: -50,
            transition: { duration: 0, ease: [0.76, 0, 0.24, 1] },
        },
    };

    return (
        <div
            onWheel={handleScroll}
            style={{
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                position: "relative",
            }}
        >

            <AnimatePresence>
                {currentPage === 0 && (
                    <motion.div
                        key="firstPage"
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={slideVariantsFirsttoSecond}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                        }}
                    >
                        <motion.div
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={perspectiveVariants}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={opacityVariants}
                            >
                                <div style={{
                                    height: "100vh",
                                    width: "100vw",
                                    margin: 0,
                                    padding: 0,
                                    overflow: "hidden",
                                    position: "relative"
                                }}>

                                    <img
                                        src="/Frame 20.png"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            zIndex: 0
                                        }}
                                        alt="Coming Soon"
                                    />

                                    <motion.div
                                        key="sun"
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                        // animate="animate"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100vw",
                                            height: "100vh",
                                        }}
                                        variants={sunVariant}
                                    >
                                        <img
                                            src="/Frame 21.png"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: "5%",
                                                zIndex: 1,
                                            }}
                                            alt="Sun"
                                        />
                                    </motion.div>


                                    <div style={{
                                        position: "absolute",
                                        top: "-15%",
                                        left: "10%",
                                        width: "100%",
                                        zIndex: 2,
                                        display: "flex",
                                    }}>
                                        <div style={{
                                            width: "1000px",
                                            height: "1000px"
                                        }}>
                                            <Lottie
                                                loop={true}
                                                animationData={Birds}
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{
                                        position: "absolute",
                                        top: "-10%",
                                        left: "50%",
                                        width: "100%",
                                        zIndex: 2,
                                        display: "flex",
                                    }}>
                                        <div style={{
                                            width: "1000px",
                                            height: "1000px"
                                        }}>
                                            <Lottie
                                                loop={true}
                                                animationData={Birds}
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
                {currentPage === 1 && (

                    <div style={{
                        position: "relative",
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden"
                    }}>
                        <motion.div
                            key="remainingTime"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={slideVariantsSecondtoFirst}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={opacityVariants}
                            >
                                <div style={{
                                    top: "47%",
                                    left: "50%",
                                    position: "absolute",
                                    zIndex: 1400,
                                    fontFamily: "'Irish Grover', cursive",
                                    color: " #900C3F",
                                    fontSize: "3rem",
                                    transform: "translate(-50%, -50%)",
                                    textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
                                }}
                                >
                                    <h2>{timeRemaining}</h2>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="fire"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={fireVariant}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={opacityVariants}
                            >
                                <div style={{
                                    position: "absolute",
                                    top: "67%",
                                    left: "40%",
                                    width: "100%",
                                    zIndex: 100,
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <div style={{
                                        height: "300px"
                                    }}>
                                        <Lottie
                                            loop={true}
                                            animationData={Fire}
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame22"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={leftToRight}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={0}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[0].depth,
                                        }}
                                    >
                                        <img
                                            src={images[0].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={slideVariantsSecondtoFirst}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={1}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[1].depth,
                                        }}
                                    >
                                        <img
                                            src={images[1].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame10"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={slideVariantsSecondtoFirst}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={2}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[2].depth,
                                        }}
                                    >
                                        <img
                                            src={images[2].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame11"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={leftToRight}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={3}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[3].depth,
                                        }}
                                    >
                                        <img
                                            src={images[3].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame12"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={rightToLeft}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                            onAnimationComplete={(definition) => {
                                if (definition === "exit") {
                                  console.log("Exit animation for frame12 completed.");
                                }
                              }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={4}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[4].depth,
                                        }}
                                    >
                                        <img
                                            src={images[4].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame13"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={leftToRight}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={5}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[5].depth,
                                        }}
                                    >
                                        <img
                                            src={images[5].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame14"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={rightToLeft}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={6}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[6].depth,
                                        }}
                                    >
                                        <img
                                            src={images[6].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame15"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={moonVariant}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={7}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[7].depth,
                                        }}
                                    >
                                        <img
                                            src={images[7].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame18"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={slideVariantsSecondtoFirst}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={8}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[8].depth,
                                        }}
                                    >
                                        <img
                                            src={images[8].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame8"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={rightToLeft}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={9}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[9].depth,
                                        }}
                                    >
                                        <img
                                            src={images[9].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame9"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={leftToRight}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={10}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[10].depth,
                                        }}
                                    >
                                        <img
                                            src={images[10].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame7"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={rightToLeft}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={11}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[11].depth,
                                        }}
                                    >
                                        <img
                                            src={images[11].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame19"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={leftToRight}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={12}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[12].depth,
                                        }}
                                    >
                                        <img
                                            src={images[12].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            key="frame5"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={rightToLeft}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            }}
                        >
                            <motion.div
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                variants={perspectiveVariants}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    variants={opacityVariants}
                                >
                                    <div
                                        key={13}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: images[13].depth,
                                        }}
                                    >
                                        <img
                                            src={images[13].src}
                                            alt={`Background layer ${0 + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;