"use client";
import React from "react";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
// import { toast } from "sonner";
// import { axiosInstance } from "@/utils/axios";
import { Facebook, Instagram, Logo, TopButton, Linkedin } from "@/utils/svgIcons";
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [email, setEmail] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   const response = await axiosInstance.post('/landing/latest-updates', {
    //     email
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   if (response.data.success) {
    //     setEmail("");
    //     toast.success('You are subscribed successfully')
    //   } else {
    //     toast.warning('You are already subscribed');
    //   }
    // } catch (error: any) {
    //    toast.error('Form submission failed something went wrong');
    // }
  };

  return (
    <footer className="px-[9px] mt-[40px] ">
      <div className="rounded-t-[20px] bg-[#cacfea] pt-[40px] md:pt-[70px] ">
        <div className="footer-top container flex flex-wrap lg:flex-nowrap !pb-[60px] ">
          <div className="w-[100%] md:w-[50%] lg:w-[40%]">
            <h2 className="text-[#15172a] text-xl font-bold mb-3 md:mb-7">
              Explore
            </h2>
            <ul className="p-0 m-0 flex flex-wrap gap-y-2 md:gap-y-5">
              <li className="w-1/2">
                <Link href="/" className="text-[#212f33] text-base ">
                  Home
                </Link>
              </li>
              <li className="w-1/2">
                <Link href="/about" className="text-[#212f33] text-base ">
                  About Us
                </Link>
              </li>
              <li className="w-1/2">
                <Link href="/#use-case" className="text-[#212f33] text-base ">
                  Services
                </Link>
              </li> 
              <li className="w-1/2">
                <Link href="/pricing" className="text-[#212f33] text-base ">
                  FAQ
                </Link>
              </li>
              <li className="w-full">
                <Link href="/#contact-us" className="text-[#212f33] text-base ">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[100%] pt-[20px] md:pt-0 md:w-[50%] lg:w-[35%]">
            <h2 className="text-[#15172a] text-xl font-bold mb-3 md:mb-7">
              Visit us
            </h2>
            <p className="text-[#212f33] text-base mb-2 md:mb-5">
            Sector 74, Mohali,
            </p>
            <p className="text-[#212f33] text-base mb-2 md:mb-5">
            +91 8699882341
            </p>
            <p className="text-[#212f33] text-base ">techhungers@gmail.com</p>
          </div>
          <div className="w-[100%] pt-[20px] lg:w-[25%] lg:pt-0">
            <h2 className="text-[#15172a] text-xl font-bold mb-3 md:mb-7">
              Social
            </h2>
            <div className="flex items-center gap-[15px]">
          <Facebook/> <Instagram/> <Linkedin/>
            </div>
            {/* <p className="text-[#212f33] text-base mb-2 md:mb-[17px]">
              Enter your email address to get the latest updates.
            </p>
            <form onSubmit={handleSubmit}
              className="flex flex-col items-center justify-between p-1 rounded-[10px] border border-[#b8b8b8] bg-white md:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={handleChange}
                id=""
                placeholder="Your Email Address..."
                className="h-full px-[18px] py-3  w-full placeholder:tracking-[2px]"
              />
              <button type="submit"  className="button !h-[47px] tracking-[1px] leading-[25px] !py-[10px] w-full md:w-auto ">
                Subscribe</button>
            </form> */}
          </div>
        </div>
        <div className="copyright pt-[31px] pb-[20.5px] px-[15px] bg-[radial-gradient(at_top_left,_#15172a_0%,_#212542_100%)] mx-[15px] rounded-t-[20px] text-center gap-2 justify-center flex flex-wrap lg:flex-nowrap items-center md:justify-between md:px-[40px] lg:px-[70px] md:mx-[32px]">
          <Link href="/" className="nav-logo-link">
            <Logo className="w-[250px] h-[50px] " />
          </Link>
          <p className="text-center text-white text-base leading-[25px] tracking-wide w-full md:w-auto">
            Copyright © 2025 TechHungers
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white text-base ">Back To Top</p>
            <button onClick={scrollToTop} className="cursor-pointer ">
              <TopButton />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
