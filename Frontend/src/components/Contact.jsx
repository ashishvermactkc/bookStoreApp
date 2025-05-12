import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className='flex h-screen items-center justify-center ' >
                <div className=" ">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <h3 className="font-bold text-2xl">Contact Us</h3>
                            {/* name  */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span><br />
                                <input type='text' placeholder='Enter your name' className='w-[400px]-md px-3 py-1 border rounded-md outline-none'
                                    
                                />
                               

                            </div>
                            {/* email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input type='email' placeholder='Email address' className='w-[400px]-md px-3 py-1 border rounded-md outline-none'
                                    
                                />
                             

                            </div>
                            {/* password */}
                            <div className='mt-4 space-y-2'>
                                <span>Message</span><br />
                                <input type='text' placeholder='Type your message' className='w-[400px]-md h-20 px-3 py-1 border rounded-md outline-none'
                                    
                                />
                        

                            </div>
                            {/* button  */}
                            <div className='mt-4'>
                                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
