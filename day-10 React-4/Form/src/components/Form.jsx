import React, { useState } from 'react'

function Form() {

    // const [name, useName] = useState("");
    // const handleNmae = (event) =>{
    //     useName(event.target.value)
    // }
    // const [email, useEmail] = useState("");
    // const handleEmail = (event) =>{
    //     useName(event.target.value)
    // }
    // const [phone, usePhone] = useState("");
    // const handlePhone = (event) =>{
    //     useName(event.target.value)
    // }
    // const [message, useMessage] = useState("");
    // const handleMessage = (event) =>{
    //     useName(event.target.value)
    // }

    // const showName = (e) =>{
    //     e.preventDefault();
    //     localStorage.setItem("name", name);
    //     console.log(name)
    // }

    const [form, formData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const showName = (e) => {
        e.preventDefault();
        formData({
            name : "name",
            email : "email",
            phone : "phone",
            message : "message",
        })
    }

    return (
        <>
            <div>
                <h1 className='flex justify-center items-center font-bold text-4xl m-10 mt-16'>Form</h1>

                <form action="" id='Form' className='flex flex-col justify-center items-center'>
                    <input type="text" placeholder='Full Name' onChange={(e)=>{setName.target.value}} className='p-3 w-100 border-black border-2 m-4 rounded-md' />
                    <input type="text" placeholder='Email ID' onChange={setEmail.target.value} className='p-3 w-100 border-black border-2 rounded-md' />
                    <input type="text" placeholder='Phone No.' onChange={setPhone.target.value} className='p-3 w-100 border-black border-2 m-4 rounded-md' />
                    <textarea name="message" id="" cols={50} rows={10} onChange={setMessage.target.value} placeholder='Enter Your Message' className='p-3 w-100 border-black border-2 m-4 rounded-md'></textarea>
                    <button onClick={showName} className='p-3 w-100 border-black border-2 m-4 rounded-md'>Submmit Form</button>
                </form>

                <table border={1}>
                    <tr>
                        <td>
                            Full name
                        </td>
                        <td>
                            Email ID
                        </td>
                        <td>
                            Phone No.
                        </td>
                        <td>
                            Message
                        </td>

                    </tr>
                </table>
            </div>
        </>
    )
}

export default Form