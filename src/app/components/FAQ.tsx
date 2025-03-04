"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { title } from 'process';
import banner from "@/assets/images/banner-img1.png"; 
import { DropDown } from '@/utils/svgIcons';


const faqData = [
  {
    title: 'What is the therapy process and What happens next?',
    content: 'You will receive a personalized match to a qualified and licensed therapist. Your therapist will thoughtfully review what you have shared and reach out to you. You can begin communicating with your therapist online, and your therapy process begins.',
  },
  {
    title: 'Who will be my therapist?',
    content: 'We will look for a personalized therapist match based on your preferences of: A therapist who has experience.',
  },
  {
    title: 'How do I talk to my therapist?',
    content: 'You have many options for how you choose to communicate with your therapist. You can send messages to your therapist at any time in the messaging feature via Simple Practice or by email. You can also schedule weekly live sessions (30 to 60 min) with your therapist to communicate via phone, video, or live chat.',
  },
  {
    title: "What if I don't like the therapist that was matched to me?",
    content: "You can ask to be matched to a different therapist. Black Therapy Network has many therapists with different qualifications and areas of expertise that are available based upon your location, preferences, and therapist availability.",
  },
  {
    title: "How much will it cost?",
    content: "With the Black Therapy Network you can have professional therapy for only $85 per week, charged every 4 weeks. Unlike traditional in-office therapy, which can cost $150-$180 per session, your Black Therapy Network membership includes a weekly live session (video, phone, or chat), and the ability to message your therapist anytime, from anywhere. The subscription is billed and renewed every 4 weeks unless it is cancelled. It includes both the use of the secured site and the therapy service itself. If you can't afford therapy, you may be eligible to receive financial aid – contact our office for more information.",
  },
  {
    title: "How long will I use the service?",
    content: "As long as you need. You can manage your membership or cancel anytime from your Account Settings.",
  },
];

const FAQ: React.FC = () => {
 

  const [dropdownStates, setDropdownStates] = useState<boolean[]>(
    faqData.map((_, index) => index === 0)
  );

  const toggleDropdown = (index: number) => {
    setDropdownStates((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className=' md:py-[40px]'>
    <div className="about-dropdown container">
      <div className=''>
        <h2 className='heading-h2 text-center mb-3 md:mb-10'>Frequently Asked Questions</h2>
      </div>
      <div className="">
        <div className="">
          {faqData.map((dropdown, index) => (
            <div className={`md:mb-[10px] mb-3 bg-[#d4dee7] rounded-[20px] ${dropdownStates[index]? 'active': ''}`} key={index}>
              <h2
                className={`md:text-lg text-base py-[10px] px-3 md:p-5 bg-[#d4dee7] rounded-[20px] text-{#222222} cursor-pointer flex justify-between md:items-center ${
                    dropdownStates[index] ? 'active' : ''
                  }`}
                onClick={() => toggleDropdown(index)}
              >
                <span className='flex md:items-center gap-[10px] md:gap-5'> {dropdown.title}</span>
                <span className='drop mt-1 md:mt-0'><DropDown /></span>
              </h2>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  dropdownStates[index] ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className='text-base md:leading-7 mt-3 md:mt-5 text-[#686C78] px-3 pb-[20px] '>{dropdown.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
