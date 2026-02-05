import React, { useState } from 'react'

function Contact() {

    // const [form, formData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     message: "",
    // })
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const showData = (e) => {
        e.preventDefault();
        // formData({
        //     name: "name",
        //     email: "email",
        //     phone: "phone",
        //     message: "message",
        // })

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("phone",phone);
        localStorage.setItem("message",message);
    }


    return (
        <>
            <div>
                <h1 className='flex justify-center items-center font-bold text-4xl m-10 mt-16'>Form</h1>

                <form action="" id='Form' className='flex flex-col justify-center items-center'>
                    <input type="text" onChange={e=>setName(e.target.value)} placeholder='Full Name' className='p-3 w-100 border-black border-2 m-4 rounded-md' />
                    <input type="text" onChange={e=>setEmail(e.target.value)} placeholder='Email ID' className='p-3 w-100 border-black border-2 rounded-md' />
                    <input type="text" onChange={e=>setPhone(e.target.value)} placeholder='Phone No.' className='p-3 w-100 border-black border-2 m-4 rounded-md' />
                    <textarea name="message" onChange={e=>setMessage(e.target.value)} id="" cols={50} rows={10} placeholder='Enter Your Message' className='p-3 w-100 border-black border-2 m-4 rounded-md'></textarea>
                    <button onClick={showData} className='p-3 w-100 border-black border-2 m-4 rounded-md'>Submmit Form</button>
                </form>

                <table border=" ">
                    <tbody>
                        <tr>
                        <td>Full Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Message</td>
                    </tr>
                    <tr>
                        <td>{localStorage.getItem('name')}</td>
                        <td>{localStorage.getItem('email')}</td>
                        <td>{localStorage.getItem('phone')}</td>
                        <td>{localStorage.getItem('message')}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Contact