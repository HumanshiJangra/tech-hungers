import React from 'react';
import banner from '@/assets/images/img2.jpg'
import Image from 'next/image';

const Page = () => {
  return (
    <div className='py-[60px] '> 
    {/* banner h-[600px] rounded-[30px]  bg-[url(../assets/images/img2.jpg)] bg-no-repeat bg-cover bg-center  */}
    <div className=" z-[1] relative container ">
      <Image src={banner} alt='' width={1000} height={500} className='w-full max-h-[500px] object-cover rounded-[30px] ' />
    <div className="bg-[radial-gradient(at_top_left,_#15172a_0%,_#15172aed_100%)] rounded-[30px] opacity-[0.9] absolute top-0 left-0 w-full h-full ">
    </div>
    <div className='absolute inset-0 text-center flex flex-col items-center justify-center '>
      <h1 className='text-[60px] font-bold text-white text-center capitalize   '>Web Development</h1>
    </div>
    </div>

    </div>
  );
}

export default Page;
