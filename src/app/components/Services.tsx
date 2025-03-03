import * as React from 'react';
import Image from 'next/image';
import laptop from "@/assets/images/laptop.jpg";
import Link from 'next/link';

 const Services = ()=> {
 const service = [
    { id: 1, title: "lorem", subtitle: "lorem ipsum", image: laptop },
    { id: 2, title: "lorem", subtitle: "lorem ipsum", image: laptop },
    { id: 3, title: "lorem", subtitle: "lorem ipsum", image: laptop },
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
              height={200}
              className="mx-auto "
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