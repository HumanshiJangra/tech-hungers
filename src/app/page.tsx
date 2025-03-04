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


export default function Home() {
  const content = [
    {
      id: 1,
      title: "We are global.",
      subtitle: `No matter where you are, we've got you covered.`,
      icons: <Globe width={100} height={100} color="#4480bd" />,
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
          <div className="text-center mt-8">
            <Link href="/" className="button">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="py-[80px]">
        <div className="container">
          <h2 className="heading-h2 text-center mb-10 ">Why Choose Us</h2>
          <div className="grid grid-cols-3 gap-5">
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
    <Contact />
    </div>
  );
}

