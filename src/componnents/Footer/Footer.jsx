import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1C1E53]">
        <div className="container pt-32 sm:pt-0 grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div className="pt-28">
            <img src="./logo.png" alt="" />
            <p className="py-8 text-white/80 w-96 text-xl">
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className="flex gap-x-5 border border-blue-500 mt-10 bg-yellow-500 w-96 p-4">
              <div>
                <h3 className="text-lg text-[#1C1E53] font-semibold">
                  Email me at
                </h3>
                <p>contact@website.com</p>
              </div>
              <div>
                <h3 className="text-lg text-[#1C1E53] font-semibold">
                  Call Us
                </h3>
                <p>0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white text-3xl font-bold pt-28">Lets Talk!</h2>
            <p className="text-white text-xl py-6 w-96">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="flex gap-x-3">
              <FaFacebook className="text-white text-2xl" />
              <FaInstagram className="text-white text-2xl" />
              <FaTwitter className="text-white text-2xl" />
              <FaLinkedin className="text-white text-2xl" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="container py-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="order-2 sm:order-1">
          <h2 className="text-base text-center">Copyright 2024, Roman.com</h2>
        </div>
        <div className="order-1 sm:order-2">
          <ul className="flex flex-wrap gap-x-4 justify-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
