import TopBar from "../components/TopBar";
import bannerImage1 from "../assets/images/banner-1.jpg";
import bannerImage2 from "../assets/images/banner-2.jpg";
import bannerImage3 from "../assets/images/banner-3.jpg";
import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const Home = () => {
    const [bannerImageIndex, setBannerImageIndex] = useState(0);

    const bannerImages = [
        bannerImage1,
        bannerImage2,
        bannerImage3
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerImageIndex((prev) => (prev + 1) % bannerImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="max-w-screen overflow-hidden">
            <TopBar />

            <div className="relative banner w-screen h-screen bg-black overflow-hidden">
                <div className="absolute flex flex-col justify-center items-center top-0 left-0 min-w-full min-h-full bg-black/30 z-20">
                    <p className="text-beige text-5xl md:text-banner font-great-vibes -indent-10 md:-indent-16">A Taste of Luxury,</p>
                    <p className="text-beige text-5xl md:text-banner font-great-vibes indent-10 md:indent-16">a Touch of Home.</p>
                </div>
                {bannerImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Banner Image"
                        className={`absolute left-0 top-0 z-10 w-full h-screen object-cover transition-opacity duration-1000 animate-zoomIn ${index === bannerImageIndex ? "" : "hidden"}`}
                    />
                ))}
            </div>

            <AboutSection />

            <Footer />
        </div>
    );
}

export default Home;