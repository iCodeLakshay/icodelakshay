"use client";
import React, { useState } from 'react'
import HeroSectionBG from '../Hero section/HeroSectionBG';
import toast from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';

export default function Contact() {
    const [IsSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        if(result.success){
            toast.success("Message sent successfully !");
            e.target.reset();
        }else{
            toast.error("Failed to send message")
        }

    } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Something went wrong");
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <div className="min-h-screen relative pt-16 sm:pt-25" style={{ background: "radial-gradient(ellipse at bottom, #2b1055 0%, #000000 100%)" }}>
            <Navbar />
            <HeroSectionBG />
            <div  data-aos="zoom-in-up" className="relative z-10 max-w-4xl mx-auto mt-4">
                <h2 className="font-[Bricolage_Grotesque] text-2xl sm:text-3xl w-fit mx-auto font-bold text-white px-4 py-2 rounded-2xl mb-4 bg-[#6826ce]">
                    Get In Touch
                </h2>

                <div className="w-full max-w-md mx-auto">
                    <div className="backdrop-blur-sm bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">            
                            <div>
                            <label htmlFor="name" className="text-sm text-gray-300 ml-2 mb-1 block">Your Name</label>
                            <input
                                className="w-full bg-white/10 border border-white/20 p-3 rounded-xl outline-none text-white placeholder-gray-400 focus:border-[#6826ce] transition-colors"
                                type="text"
                                name="full_name"
                                
                                placeholder="Enter your name"
                                
                            />
                        </div>

                            <div>
                                <label htmlFor="email" className="text-sm text-gray-300 ml-2 mb-1 block">Your Email</label>
                                <input
                                    className="w-full bg-white/10 border border-white/20 p-3 rounded-xl outline-none text-white placeholder-gray-400 focus:border-[#6826ce] transition-colors"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-sm text-gray-300 ml-2 mb-1 block">Message</label>
                                <textarea
                                    className="w-full bg-white/10 border border-white/20 p-3 rounded-xl outline-none text-white placeholder-gray-400 focus:border-[#6826ce] transition-colors min-h-[120px]"
                                    name="message"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <button type='submit' className="bg-[#6826ce] w-full sm:w-1/2 mx-auto px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:bg-[#7b3ad3] focus:ring-2 focus:ring-[#6826ce] focus:ring-offset-2 focus:ring-offset-[#2b1055] focus:outline-none">
                                {IsSubmitting ? "Sending..." :"Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}