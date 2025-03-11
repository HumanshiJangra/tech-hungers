import * as React from 'react';
import Image from 'next/image';
import laptop from "@/assets/images/laptop.jpg";
import image1 from '@/assets/images/bg.png';
import image2 from '@/assets/images/img1.png';
import image3 from '@/assets/images/img2.jpg';
import Link from 'next/link';
import Button from './Button';
import { MoveRight } from 'lucide-react';

 const Services = ()=> {
 const service = [
    { id: 1, title: "Web Designing", subtitle: "Design the Future of Your Business with Tech Hungers.", image: image1 },
    { id: 2, title: "Web Development", subtitle: "Meet your Web Development Experts from Tech Hungers.", image: image2 },
    { id: 3, title: "Digital Marketing", subtitle: "lBoost your business with an online presence today.", image: image3 },
    { id: 4, title: "Visual Identity", subtitle: "Vision to Visual: Design a Brand Identity That represents your business.", image: image2 },
    { id: 5, title: "Consultation", subtitle: "Your Ideas & Our Expertise: Get Consultation for Growth from Tech Hungers.", image: image3 },
  ];
  return (  
    <div className="py-[40px] ">
    <div className="container"> 
      <div className="text-center ">
      <h3 className="mb-3 text-[#99a5ff] ">What We OFFER</h3>
        <h2 className="heading-h2">Excellent It Services</h2>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {service.map((item, index) => (
          <div key={index} className="p-8 bg-[radial-gradient(at_top_left,_#212542_0%,_#15172a_100%)] border border-[#232746] rounded-[20px] ">
            <Image
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              className="aspect-square object-cover "
            />
            <h3 className="text-2xl text-white mt-5 mb-2">{item.title}</h3>
            <p className="text-[#979bb1] mb-3 ">
              {item.subtitle}
            </p>
            <button className='text-[#99a5ff] flex items-center gap-2 '>learn More <MoveRight color='#99a5ff'/> </button>
          </div>
        ))}
        <div className='grid place-items-center p-8 text-center'>
          <p className='tex mb-4'>We have a lot of powerful service that you can get. Check for more of our available services in our product. </p>
          <Button text='View More' />
        </div>
      </div>
    </div>
  </div>
  )
}
export default Services