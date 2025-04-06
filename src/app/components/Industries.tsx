import { BusFront, GraduationCap, HeartPulse, Wallet } from 'lucide-react';
import React from 'react';

const Industries = () => {
  const industry = [
    {id: 1 , name: 'Health', description: 'Scalable, secure and device agnostic service', icon: <HeartPulse width={50} height={50} color='#cacfea'/>},
    {id: 2 , name: 'Education', description: 'A digital solution for your educational institution', icon: <GraduationCap width={50} height={50} color='#cacfea'/>},
    {id: 3 , name: 'Automobile', description: 'Delivering real-time actionable and accurate data', icon: <BusFront width={50} height={50} color='#cacfea'/>},
    {id: 4 , name: 'Finance', description: 'Increased efficiency and fast decision for an enterprise', icon: <Wallet width={50} height={50} color='#cacfea'/>},
  ]
  return (
    <div className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-2 gap-5 items-center my-10 '>
          <div className=' max-w-[500px]'>
        <h2 className='heading-h2  '>Industries We Specialize In</h2>
          <h3 className='font-bold text-2xl my-4 text-[#99a5ff] '>Managed IT Services customized for your Industry</h3>
          <p className='leading-7 '>Our vertical solutions expertise allows your Business to streamline workflow, and increase productivity. No matter the Business, Infraveo Technologies has you covered with industry compliant solutions, customized to your company’s specific needs.</p>
          </div>
        <div>
          <div className='grid grid-cols-2 gap-5'>
            {industry.map((item) => (
              <div key={item.id} className='text-center border-2 border-[#232746] rounded-2xl  py-5 px-8 hover:border-[#535989]'>
                 <div className="flex justify-center">{item.icon}</div>
                <div>
                  <h3 className='text-2xl text-[#99a5ff] mt-3 mb-2'>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
