import React from 'react'
import Navigation from '../components/Navigation'
// import Form2 from '../components/Form2'
import Footer from '../components/Footer'
import {useForm } from 'react-hook-form'
import { data } from 'react-router-dom';
// if url is changing then rounting is happening

function Login() {
    
    const {register,handleSubmit,watch,formState:{errors ,isSubmitting}}=useForm();

     function onSubmit(data){
        console.log("submitted data:",data);
     }  


    return (
        <div>
            <div className='mt-6 relative'>
                <Navigation />
                <main className="w-full bg-[url('/images/login.png')] bg-cover bg-center h-screen flex items-center  justify-center py-24 object-cover object-bottom-right relative blur-xs"></main>
               


            
                    <div className="min-h-screen flex items-center justify-between pl-40 absolute top-0 left-0  w-full h-full">
                        <div className="w-full max-w-md bg-white p-8 shadow-lg">
                           
                            <p className="text-xs tracking-widest text-red-500 mb-2">
                                PARENTS' LOGIN
                            </p>

                            <h1 className="text-3xl font-light mb-2">Welcome</h1>

                            <p className="text-sm text-black mb-6">
                                Enter your child's details to download the certificate.
                            </p>

                           
                            <div className="flex gap-3 mb-6">
                                <div className="w-16 h-1 bg-gray-800"></div>
                                <div className="w-16 h-1 bg-red-500"></div>
                            </div>

                           
                            <form onSubmit={handleSubmit(onSubmit)}className="space-y-5">
                               
                                <div>
                                    <label className="block text-xs text-black mb-1">
                                        SCHOOL
                                    </label>
                                    <select {...register('school')} className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black">
                                        <option>Select School</option>
                                        <option>St. Mary's School</option>
                                        <option>Greenwood Academy</option>
                                        <option>Riverside High School</option>  

                                    </select>
                                </div>

                               
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs text-black mb-1">
                                            CLASS
                                        </label>
                                        <select {...register('grade')}className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black">
                                            <option>Select Class</option>
                                            <option>1st Grade</option>
                                            <option>2nd Grade</option>
                                            <option>3rd Grade</option>  
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-black mb-1">
                                            SECTION
                                        </label>
                                        <input {...register('section')}
                                            type="text"
                                            placeholder="Enter Section"
                                            className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black"
                                        />
                                    </div>
                                </div>

                               
                                <div>
                                    <label  className="block text-xs text-black mb-1">
                                        ROLL NO.
                                    </label>
                                    <input {...register('rollno')}
                                        type="text"
                                        placeholder="Enter Roll No."
                                        className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black"
                                    />
                                </div>

                               
                                <button
                                    type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting..." : "Submit"}
                                    className="w-full bg-red-600 text-white py-3 font-semibold tracking-wide hover:bg-red-700 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                   
                
            </div>
            <div className='pt-0 mt-0'>
           
            </div>
             <Footer />
        </div>
    )
}

export default Login