import React from 'react';
import BackgroundImage from "../assets/background.png";

const HomePage = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    filter: 'brightness(0.8)',
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Build amazing things</h1>
                <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
                    We're GitHub, the company behind the npm Registry and npm CLI. We
                    offer those to the community for free, but our day job is building and
                    selling useful tools for developers like you.
                </p>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                    Take your JavaScript development up a notch
                </h2>
                <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
                    Get started today for free, or step up to npm Pro to enjoy a premium
                    JavaScript development experience, with features like private packages.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-full text-lg hover:bg-yellow-300 transition duration-300 shadow-2xl">
                        Sign up for free
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-red-500 transition duration-300">
                        Learn about Pro
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomePage;