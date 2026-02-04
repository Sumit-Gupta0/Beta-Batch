import React , {useState} from 'react'

const Form = () => {
    const [username,setUsername] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("submitted")
    }
  return (
    <div>
        <form onSubmit={(e) =>{
            submitHandler(e)
         } }>
            <input  onChange={(e)=>{setUsername(e.target.value)}} value={username} className='px-4 py-3 text-2xl rounded m-5 bg-black text-blue-200' type="text" placeholder='Enter you name' />
            <button className='px-4 py-3 text-xl rounded m-5 font-semibold bg-emerald-600' >Submit</button>
        </form>
    </div>
  )
}

export default Form