import { FileCheck2, Globe, Laptop } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import laptop from "@/assets/images/demo.png";
import Image from "next/image";
import Contact from "./components/Contact";
import Marquee from "react-fast-marquee";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Industries from "./components/Industries";
import { title } from "process";
import Button from "./components/Button";
import VideoPlayer from "./components/VideoPlayer";


export default function Home() {
  const content = [
    {
      id: 1,
      title: "We are global.",
      subtitle: `No matter where you are, we've got you covered.`,
      icons: <Globe width={80} height={80}  />,
    },
    {id: 2, title: "Expertise & Innovation", subtitle: " Our team stays ahead with the latest technologies, ensuring your website, app, and marketing strategies are innovative and future-ready.",
    icons: <Globe width={80} height={80}  />
    },

    {
      id: 3,
      title: "We value our clients.",
      subtitle: "Virtual assistance. Talk to us about any concerns, 24/7.",
      icons: <FileCheck2 width={80} height={80} />,
    },
    {
      id: 4,
      title: "We use top-rate systems.",
      subtitle: "Easy peasy UI. Our interface is simple and easy to use.",
      icons: <Laptop width={80} height={80} />,
    },
  ];

  return (
    <div>
      <div className="relative  ">
      <div className="w-full">
        <VideoPlayer url='/assets/video/video.mp4'/>
        </div>
      <div className="bg-[radial-gradient(at_top_left,_#15172a_0%,_#15172aed_100%)] opacity-[0.7] absolute top-0 left-0 w-full h-full ">
      </div>
        <div className="container  absolute top-0 left-0 right-0 bottom-0 z-10 h-full flex flex-col justify-center ">
          <h1 className="text-[60px] font-bold text-white text-center capitalize    ">
            Innovative IT Solutions <br />
            for a Digital World
          </h1>
          <p className="text-center text-xl text-white mt-3">🔍 Smarter Decisions | ⚙️ Intelligent Automation | 🚀 Future-Focused Tech 
          </p>
          {/* <p className="text-center text-lg text-white mt-3">
          👉 Let’s Build Something Great Together
          </p> */}
          <div className="flex justify-center mt-8">
            <Button text="Learn More"/>
            {/* <Link href="/" className="button">
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
      <div className="py-[100px]">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-5">
            <div className="h-full relative">
              <div className="">
                <Image src={laptop} alt="dvdg" height={400} width={400} className="object- aspect-square mx-auto" />
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[-1] w-[520px] h-[520px] bg-[radial-gradient(at_top_left,_#353C71_0%,_#15172a_100%)] rounded-full "></div>
              </div>
            </div>
          <div>
          <h2 className="heading-h2 mb-5">Why Choose Us</h2>
            {content.map((item, index) => (
              <div key={index} className="flex items-center gap-5 mb-5 ">
                <div className="flex justify-center ">{item.icons}</div>
                <div>
                <h3 className="text-2xl text-white mb-2 ">{item.title}</h3>
                <p className="text-[#cacfea]  ">
                  {item.subtitle}
                </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    <Technologies/>
    <Services/>
    <Industries/>
    <FAQ/>
    {/* <Contact /> */}
    <div className="container ">
      <div className="py-[60px] my-[60px] relative text-center bg-[url(../assets/images/contact.jpg)] bg-no-repeat  bg-[position:bottom_center] bg-cover rounded-[20px]">
        <div className="bg-[radial-gradient(at_top_left,_#212542_0%,_#15172a_100%)] opacity-[0.9] absolute top-0 left-0 w-full h-full  rounded-[20px]"></div>
        <div className="relative z-10 max-w-[700px] mx-auto">
        <h3 className="text-[#99a5ff] font-bold ">Let’s start a new journey</h3>
        <h2 className="heading-h2 my-4 leading-[normal] ">Are you ready for a better, more productive business?</h2>
        <p className="text-lg mb-6 text-[#cacfea]  ">Stop worrying about technology problems. Focus on your business.
        Let us provide the support you deserve.</p>
        <div className="flex justify-center">
          <Button href='/contact' text="Contact us Now"/>
          {/* <Link href='/contact' className="button">Contact us Now</Link> */}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

