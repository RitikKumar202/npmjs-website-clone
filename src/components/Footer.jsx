import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white mt-10 border-t">
            <div className="container mx-auto py-20 px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <img
                            src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4"
                            alt="Npm logo"
                            className="h-12 w-12"
                        />
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="Github logo"
                            className="h-16 w-16"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-2 md:text-left">
                    <h2 className="text-lg font-bold">Support</h2>
                    <ul className="space-y-1">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Help</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Advisories</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Status</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Contact npm</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-2 md:text-left">
                    <h2 className="text-lg font-bold">Company</h2>
                    <ul className="space-y-1">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Blog</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Press</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-2 md:text-left">
                    <h2 className="text-lg font-bold">Terms & Policies</h2>
                    <ul className="space-y-1">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Policies</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Code of Conduct</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Privacy</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-[10px] bg-footer-gradient"></div>
        </footer>
    );
};

export default Footer;
