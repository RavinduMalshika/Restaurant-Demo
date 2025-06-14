import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import borderImage from "../assets/images/border.png";
import { filter } from "motion/react-client";
import { transform } from "motion";
import labelImage from "../assets/utils/label.svg";
import { useNavigate } from "react-router-dom";

const AboutItem = ({ image, title, description, variant, buttonText, buttonClick }) => {
    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, { once: false, margin: "0px 0px -50px 0px" });
    const textRef = useRef(null);
    const isTextInView = useInView(textRef, { once: false, margin: "-20% 0px -20% 0px" });
    const navigate = useNavigate();

    const imageVariants = {
        offScreenRight: {
            scale: 0.3,
            y: '100px',
            opacity: 0,
            rotate: 5
        },
        onScreenRight: {
            scale: 1,
            y: '0px',
            opacity: 1,
            rotate: -5
        },
        offScreenLeft: {
            scale: 0.3,
            y: '100px',
            opacity: 0,
            rotate: -5
        },
        onScreenLeft: {
            scale: 1,
            y: '0px',
            opacity: 1,
            rotate: 5
        },
    }

    const imageTransition = {
        duration: 0.8,
        delay: 0.1,
    }

    const imageRotateTransition = {
        duration: 0.3,
        delay: 0.1,
    }

    const textVariants = {
        offScreen: {
            filter: "blur(10px)"
        },
        onScreen: {
            filter: "blur(0px)"
        }
    }

    const textTransition = {
        duration: 0.3,
        delay: 0.1,
    }

    switch (variant) {
        case "right":
            return (
                <div className="flex flex-col md:flex-row items-center gap-y-10">
                    <motion.div
                        ref={imageRef}
                        variants={imageVariants}
                        animate={isImageInView ? 'onScreenRight' : 'offScreenRight'}
                        whileHover={{ rotate: 0 }}
                        transition={{
                            default: imageTransition,
                            rotate: imageRotateTransition
                        }}
                        className="flex basis-1/2 justify-center"
                    >
                        <div className="relative min-w-80 w-80">
                            <img src={borderImage} className="absolute w-full" />
                            <img src={image} alt="Restaurant" className="object-cover w-full aspect-5/7" />
                        </div>
                    </motion.div>

                    <motion.div
                        ref={textRef}
                        variants={textVariants}
                        animate={isTextInView ? 'onScreen' : 'offScreen'}
                        transition={textTransition}
                        className="flex flex-col basis-1/2 gap-y-10 px-5 md:pe-32"
                    >
                        <h2 className="text-4xl">{title}</h2>

                        <p className="text-xl">{description}</p>

                        <div className="flex flex-row justify-center">
                            <button className="relative font-great-vibes" onClick={buttonClick}>
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-beige whitespace-nowrap">{buttonText}</p>
                                <img src={labelImage} className="w-96" />
                            </button>
                        </div>
                    </motion.div>
                </div >
            );
        case "left":
            return (
                <div className="flex flex-col-reverse md:flex-row items-center gap-y-10">
                    <motion.div
                        ref={textRef}
                        variants={textVariants}
                        animate={isTextInView ? 'onScreen' : 'offScreen'}
                        transition={textTransition}
                        className="flex flex-col basis-1/2 gap-y-10 px-5 md:ps-32 items-start"
                    >
                        <h2 className="text-4xl">{title}</h2>

                        <p className="text-xl">{description}</p>

                        <div className="flex flex-row justify-center">
                            <button className="relative font-great-vibes" onClick={buttonClick}>
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-beige whitespace-nowrap">{buttonText}</p>
                                <img src={labelImage} className="w-96" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={imageRef}
                        variants={imageVariants}
                        animate={isImageInView ? 'onScreenLeft' : 'offScreenLeft'}
                        whileHover={{ rotate: 0 }}
                        transition={{
                            default: imageTransition,
                            rotate: imageRotateTransition
                        }}
                        className="flex basis-1/2 justify-center"
                    >
                        <div className="relative min-w-80 w-80">
                            <img src={borderImage} className="absolute w-full" />
                            <img src={image} alt="Restaurant" className="object-cover w-full aspect-5/7" />
                        </div>
                    </motion.div>
                </div >
            );
        default:
            break;
    }

}

export default AboutItem;