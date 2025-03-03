"use client";
import { Facebook, Instagram, Linkedin } from "@/utils/svgIcons";
// import { axiosInstance } from "@/utils/axios";
// import { Facebook, FacebookIcon, Instagram, Linkedin } from "lucide-react";
import React, { useState } from "react";
// import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   const response = await axiosInstance.post('/landing/contact-us', {
    //     name: formData.name,
    //     email: formData.email,
    //     phoneNumber: formData.number,
    //     message: formData.description
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   if(response.data.success) {
    //     setFormData({
    //       name: '',
    //       number: '',
    //       email: '',
    //       description: ''
    //     });
    //     toast.success('Form submitted successfully')
    //   } else {
    //     toast.error('Form submission failed something went wrong');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };
  return (
    <div className="container">
      <div className="grid pt-10 gap-10 items-center lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)]">
        <div className="rounded-[20px] bg-[#d4dee7] px-[30px] py-7 ">
          <h2 className="text-[28px] text-[#4480bd] font-[700]  mb-[20px] md:mb-10 md:text-[48px]">
            Contact Us
          </h2>
          <h3 className="text-[#4480bd] text-sm mb-[10px] uppercase">
            Location
          </h3>
          <p className="text-[#222222] text-xl font-semibold mb-7">
            Sector 74, Mohali, <br /> India
          </p>
          <h3 className="text-[#4480bd] text-sm mb-[10px] uppercase">
            Call Us
          </h3>
          <p className="text-[#222222] text-xl font-semibold mb-7">
            (+49) 1512 8950 793
          </p>
          <h3 className="text-[#4480bd] text-sm mb-[10px] uppercase">
            Mail Us
          </h3>
          <p className="text-[#222222] text-xl font-semibold mb-7">
            techhungers@gmail.com
          </p>
          <h3 className="text-[#4480bd] text-sm mb-[10px] uppercase">
            Follow Us
          </h3>
          <p className="flex items-center gap-[15px]">
            <Facebook /> <Instagram /> <Linkedin />
          </p>
        </div>
        <form className="contact-section flex flex-wrap gap-5" onSubmit={handleSubmit}>
          <label htmlFor="name"
            className="w-[calc(50%-10px)] ">
            Full Name
            <input type="text" name="name" id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="number" className="w-[calc(50%-10px)]">Number
            <input
              type="number"
              name="number"
              id="number"
              placeholder="this phone number"
              value={formData.number}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="email"
            className="w-[calc(50%-10px)]"
          >Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="this email address"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name"
            className="w-[calc(50%-10px)] ">
            Organization
            <input type="text" name="name" id="name"
              placeholder="Organization"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="description"
            className="w-full"
          >How we can help you? 
         
          <textarea
            name="description"
            id="description"
            rows={3}
            placeholder="Type anything..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>
           </label>
          <button
            className="button mt-5 md:px-[40px]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
