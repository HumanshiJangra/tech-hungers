import * as React from 'react';
import Image from 'next/image';
import laptop from "@/assets/images/laptop.jpg";
import image1 from '@/assets/images/bg.png';
import image2 from '@/assets/images/img1.png';
import image3 from '@/assets/images/img2.jpg';
import Link from 'next/link';

 const Services = ()=> {
 const service = [
    { id: 1, title: "lorem", subtitle: "lorem ipsum", image: image1 },
    { id: 2, title: "lorem", subtitle: "lorem ipsum", image: image2 },
    { id: 3, title: "lorem", subtitle: "lorem ipsum", image: image3 },
  ];
  return (
    <div className="py-[40px] ">
    <div className="container">
      <h3 className="mb-3">What We OFFER</h3>
      <div className="flex justify-between items-center ">
        <h2 className="heading-h2">Excellent It Services</h2>
        <Link href="/services" className="button">
          View All Services
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {service.map((item, index) => (
          <div key={index} className="text-center ">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="mx-auto aspect-square object-cover "
            />
            <h3 className="text-2xl color-blue mt-5 mb-2">{item.title}</h3>
            <p className="text-[#222222] max-w-[220px] mx-auto ">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
export default Services