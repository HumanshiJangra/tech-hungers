import { FileCheck2, Globe, Laptop } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import laptop from "@/assets/images/laptop.jpg";
import Image from "next/image";
import Contact from "./components/Contact";
import Marquee from "react-fast-marquee";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Industries from "./components/Industries";
import { title } from "process";
import Button from "./components/Button";


export default function Home() {
  const content = [
    {
      id: 1,
      title: "We are global.",
      subtitle: `No matter where you are, we've got you covered.`,
      icons: <Globe width={100} height={100} color="#4480bd" />,
    },
    {id: 2, title: "Expertise & Innovation", subtitle: " Our team stays ahead with the latest technologies, ensuring your website, app, and marketing strategies are innovative and future-ready.",
    icons: <Globe width={100} height={100} color="#4480bd" />
    },

    {
      id: 3,
      title: "We value our clients.",
      subtitle: "Virtual assistance. Talk to us about any concerns, 24/7.",
      icons: <FileCheck2 width={100} height={100} color="#4480bd" />,
    },
    {
      id: 4,
      title: "We use top-rate systems.",
      subtitle: "Easy peasy UI. Our interface is simple and easy to use.",
      icons: <Laptop width={100} height={100} color="#4480bd" />,
    },
  ];

  return (
    <div>
      <div className="banner z-[1] relative py-[80px] bg-[url(../assets/images/img2.jpg)] bg-no-repeat bg-cover bg-center  ">
        <div className="container">
          <h1 className="text-[60px] font-bold text-white text-center capitalize    ">
            Innovative IT Solutions <br />
            for a Digital World
          </h1>
          <p className="text-center text-lg text-white mt-3">
            Let’s Build Something Great Together
          </p>
          <div className="flex justify-center mt-8">
            <Button text="Learn More"/>
            {/* <Link href="/" className="button">
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
      <div className="py-[80px]">
        <div className="container">
          <h2 className="heading-h2 text-center mb-10 ">Why Choose Us</h2>
          <div className="grid grid-cols-4 gap-5">
            {content.map((item, index) => (
              <div key={index} className="text-center border-[#4480bd] rounded-lg border py-[30px] px-5 ">
                <h3 className="text-2xl color-blue ">{item.title}</h3>
                <div className="flex justify-center my-8">{item.icons}</div>
                <p className="text-[#222222] max-w-[220px] mx-auto ">
                  {item.subtitle}
                </p>
              </div>
            ))}
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

