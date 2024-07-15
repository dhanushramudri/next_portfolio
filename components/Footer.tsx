import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Footer = () => {
  return (
    <footer
      className="w-full md:mb-5 mb-[100px] pb-5 text-blue-100 "
      id="contact "
    >
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span>digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          React out to me today and let&apos;s discuss how can i help you
          achieve your goals{" "}
        </p>
        <a href="mailto:ramudridhanush@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex lg:my-10 gap-2.5 md:flex-row  flex-col justify-between items-center ">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Copyright ©2024 Dhanush
        </p>
        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
