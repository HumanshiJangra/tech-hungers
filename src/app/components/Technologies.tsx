import React from 'react';
import Marquee from 'react-fast-marquee';
import Image
 from 'next/image';
const Technologies = () => {
  const technology = [
    {id: 1, image: '/assets/HTML.png', title: "HTML"},
    {id: 2, image: '/assets/Css.png', title: "CSS"},
    {id: 3, image: '/assets/JS.png', title: "JS"},
    {id: 4, image: '/assets/React-icon.png', title: "ReactJS"},
    {id: 5, image: '/assets/Next.png', title: "Next js"},
    {id: 6, image: '/assets/nodejs.png', title: "NodeJs"},
    {id: 7, image: '/assets/mongodb.png', title: "Mongo db"},
    {id: 8, image: '/assets/Angular.png', title: "Angular"},
    {id: 4, image: '/assets/React-icon.png', title: "React Native"},
    {id: 9, image: '/assets/figma.png', title: "FIGMA"},
    {id: 10, image: '/assets/postman.png', title: "Postman"},
    {id: 11, image: '/assets/AWS.png', title: "AWS"},
    {id: 12, image: '/assets/github.png', title: "Github"},
  
  ]
  return (
        <div className="">
          <h2 className="heading-h2 text-center mb-10">Our Technology Spark</h2>
          <Marquee pauseOnHover autoFill>
           {technology.map((technique)=>(
             <div key={technique.id} className="text-center mx-4">
               <Image src={technique.image} alt={technique.title} width={100} height={100} />
               <p className="mt-2">{technique.title}</p>
             </div>
           ))}
          </Marquee>
        </div>
  );
}

export default Technologies;
