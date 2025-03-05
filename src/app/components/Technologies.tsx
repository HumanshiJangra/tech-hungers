'use client'
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Image
 from 'next/image';
const Technologies = () => {
  const [activeTab, setActiveTab] = useState('UI-UX');

  const technology: any = {
    'UI-UX': [
      { id: 10, image: '/assets/figma.png', title: 'FIGMA' },
    ],
    Frontend: [
      { id: 1, image: '/assets/HTML.png', title: 'HTML' },
      { id: 2, image: '/assets/CSS.png', title: 'CSS' },
      { id: 3, image: '/assets/JS.png', title: 'JS' },
      { id: 4, image: '/assets/React-icon.png', title: 'ReactJS' },
      { id: 5, image: '/assets/Next.png', title: 'Next js' },
      { id: 8, image: '/assets/Angular.png', title: 'Angular' },
    ],
    Backend: [
      { id: 6, image: '/assets/nodejs.png', title: 'NodeJs' },
    ],
    Mobile: [
      { id: 9, image: '/assets/React-icon.png', title: 'React Native' },
    ],
    Database: [
      { id: 7, image: '/assets/mongodb.png', title: 'Mongo db' },
    ],
    Collaboration: [
      { id: 11, image: '/assets/postman.png', title: 'Postman' },
      { id: 12, image: '/assets/AWS.png', title: 'AWS' },
      { id: 13, image: '/assets/github.png', title: 'Github' },
    ],
  };
  return (
        <div className="container">
          <h2 className="heading-h2 text-center mb-10">Our Technology Spark</h2>
          <div className="tabs flex flex-wrap justify-between gap-[5px] bg-[#4480bd] p-2 rounded-[47px] mb-10 ">
          {Object.keys(technology).map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active text-orange bg-white ' : 'text-white   '} rounded-[34px] px-[16px] py-[10px] w-[calc(16.66%-5px)] `}
                onClick={() => setActiveTab(tab)}
              >{tab}</button>
            ))}
          </div>
          <div className="tab-content flex flex-wrap gap-6 pb-10">
          {technology[activeTab] ? (
            technology[activeTab].map((tech: any) => (
              <div key={tech.id} className="tech-item flex flex-col items-center">
                <Image src={tech.image} alt={tech.title} width={100} height={100} />
                <p className="text-center mt-2">{tech.title}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No technologies available</p>
          )}
        </div>
        </div>
  );
}

export default Technologies;


{/* <Marquee pauseOnHover autoFill>
{technology.map((technique)=>(
  <div key={technique.id} className="text-center mx-4">
    <Image src={technique.image} alt={technique.title} width={100} height={100} />
    <p className="mt-2">{technique.title}</p>
  </div>
))}
</Marquee> */}