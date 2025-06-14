import TopBar from "../components/TopBar";
import headerImage from "../assets/images/about-us-header.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import ReserveDialog from "../components/ReserveDialog";

const AboutUs = () => {
    const [showReserveDialog, setShowReserveDialog] = useState(false);

    return (
        <div className="flex flex-col min-h-screen max-w-screen overflow-hidden">
            <TopBar reserveClick={() => setShowReserveDialog(true)} />

            <div className="block relative w-full h-fit object-cover">
                <img className="object-cover w-full aspect-3/2 lg:aspect-3/1 object-center" src={headerImage} />
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/30">
                </div>

                <h1 className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 font-great-vibes text-5xl md:text-banner text-beige">About Us</h1>
            </div>

            <div className="grow flex flex-col p-10 text-xl gap-y-3">
                <p><strong className="font-great-vibes text-3xl">Welcome to Lumière Bistro</strong> where tradition meets creativity in the heart of Paris.</p>

                <p className="indent-8">Founded in <strong>2017</strong>, Lumière Bistro began as a humble dream: to bring people together over simple, beautiful food. Nestled on the charming <strong>Rue de la Paix,</strong> our restaurant was born from a deep love for French cuisine and a passion for storytelling through flavor.</p>

                <p className="indent-8">At the heart of Lumière is <strong>Chef Éloïse Marchand</strong>, a Paris native with roots in Provence. From a young age, she was inspired by her grandmother’s rustic cooking and the rich aromas of local markets. After years of training at renowned culinary schools and working in Michelin-starred kitchens across Europe, Chef Éloïse returned home to create a place where <strong>elegance and comfort live on the same plate.</strong></p>

                <p className="indent-8">Our mission is simple:
                    <br />
                    To offer an experience that delights the senses, nourishes the soul, and celebrates the art of dining. Every dish at Lumière is thoughtfully prepared with fresh, seasonal ingredients — and a touch of love.
                </p>

                <p className="indent-8">Whether you're joining us for a quiet morning croissant or a candlelit dinner, we invite you to slow down, savor, and enjoy the warmth of French hospitality.</p>

                <p>Bienvenue chez nous.
                    <br />
                    <strong>Lumière Bistro — A Taste of Luxury, A Touch of Home.</strong>
                </p>
            </div>

            <Footer />

            {showReserveDialog &&
                <ReserveDialog handleClose={() => setShowReserveDialog(false)} />
            }
        </div>
    );
};

export default AboutUs;