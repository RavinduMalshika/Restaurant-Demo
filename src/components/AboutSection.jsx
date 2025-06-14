import { motion, useInView, AnimatePresence, transform } from "framer-motion";
import aboutImage1 from "../assets/images/about-1.jpg";
import aboutImage2 from "../assets/images/about-2.jpg";
import aboutImage3 from "../assets/images/about-3.jpg";
import borderImage from "../assets/images/border.png";
import { useEffect, useRef, useState } from "react";
import AboutItem from "./AboutItem";
import { useNavigate } from "react-router-dom";

const AboutSection = ({ reserveClicked }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-y-10 my-20">
            <AboutItem
                variant={"right"}
                image={aboutImage1}
                title={"About Lumière Bistro"}
                description={"Welcome to Lumière Bistro, where elegance meets comfort in a dining experience like no other. Nestled in a warm and inviting ambiance, our venue blends modern sophistication with a touch of timeless charm."}
                buttonText={"Learn More"}
                buttonClick={() => navigate("/about-us")}
            />

            <AboutItem
                variant={"left"}
                image={aboutImage2}
                title={"Exquisite Cuisine"}
                description={"At Lumière Bistro, we take pride in crafting dishes that celebrate fresh, high-quality ingredients. From gourmet entrées to decadent desserts, every plate is a masterpiece designed to satisfy both the heart and the palate."}
                buttonText={"View Menu"}
                buttonClick={() => navigate("/menu")}
            />

            <AboutItem
                variant={"right"}
                image={aboutImage3}
                title={"Meet the Chef"}
                description={"Our talented chef brings years of culinary expertise, blending classic techniques with innovative flavors. Passionate about creating unforgettable dining experiences, they ensure that every dish reflects a commitment to excellence and artistry."}
                buttonText={"Make a Reservation"}
                buttonClick={reserveClicked}
            />
        </div>
    );
}

export default AboutSection;