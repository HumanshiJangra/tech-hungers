import { FileCheck2, Globe, Laptop } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import laptop from '@/assets/images/laptop.jpg'
import Image from 'next/image';


export default function Home() {
  const content = [
    {id: 1, title: 'We are global.', subtitle: `No matter where you are, we've got you covered.`, icons: <Globe width={100} height={100} color='#3977B7'/>},
    {id: 3, title: 'We value our clients.', subtitle: 'Virtual assistance. Talk to us about any concerns, 24/7.', icons: <FileCheck2 width={100} height={100} color='#3977B7'/>},
    {id: 4, title: 'We use top-rate systems.', subtitle: 'Easy peasy UI. Our interface is simple and easy to use.', icons: <Laptop width={100} height={100} color='#3977B7'/>},
  ]
  const service =[
    {id: 1, title:"lorem", subtitle: 'lorem ipsum', image: laptop},
    {id: 2, title:"lorem", subtitle: 'lorem ipsum', image: laptop},
    {id: 3, title:"lorem", subtitle: 'lorem ipsum', image: laptop},
  ]
  return (
    <div>
      <div className="banner z-[1] relative py-[80px] bg-[url(../assets/images/img2.jpg)] bg-no-repeat bg-cover bg-center  ">
        <div className="container">
        <h1 className="text-[60px] font-bold text-white text-center capitalize    ">Innovative IT Solutions <br />for a Digital World</h1>
       <p className='text-center text-lg text-white mt-3'>Let’s Build Something Great Together</p>
        <div className="text-center mt-8">
        <Link href='/' className="button">Learn More</Link>
        </div>
        </div>
      </div>
      <div className='pt-[80px] '>
        <div className="container">
      <h3 className='mb-3'>What We OFFER</h3>
      <div className='flex justify-between items-center '>
        <h2 className='heading-h2'>Excellent It Services</h2>
        <Link href='/' className="button">View All Services</Link>
      </div>
      <div className='grid grid-cols-3 gap-5 mt-10'>
        {service.map((item, index) => (
          <div key={index} className='text-center '>
            
            <Image src={item.image} alt={item.title} width={300} height={200} className='mx-auto'/>
            <h3 className='text-2xl color-blue '>{item.title}</h3>
            <p className='text-[#222222] max-w-[220px] mx-auto '>{item.subtitle}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
      <div className='py-[80px]'>
        <div className="container">
          <h2 className='heading-h2 text-center mb-10 '>Why Choose Us</h2>
    <div className='grid grid-cols-3 gap-5'>
      {content.map((item, index) => (
        <div key={index} className='text-center border-[#3977B7] rounded-lg border py-[30px] px-5 '>
          <h3 className='text-2xl color-blue '>{item.title}</h3>
          <div className='flex justify-center my-8'>{item.icons}</div>
          <p className='text-[#222222] max-w-[220px] mx-auto '>{item.subtitle}</p>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
}
