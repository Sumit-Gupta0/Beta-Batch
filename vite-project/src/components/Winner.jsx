import React from 'react'

function Winner() {
    return (
        <>

            <div className="winners flex flex-col items-center justify-center mt-10 mb-10 "></div>

            <div className='upper flex justify-center items-center box-border-yellow-500 border-r-amber-300'>
                <div className='rank1 inline-block m-5 border-5 border-yellow-500  shadow-lg h-80 bg-[url("https://csr.heromotocorp.com/winnerbg2.png")]  bg-cover bg-center '>
                    <button className='bg-yellow-300 text-white mt-1'>1st RANK</button>
                    <img src="/images/rankholder.png " className="w-84 h-70" alt="rank" />
                    <div className="bottom bg-gray-900 text-white justify-center text-center   flex flex-col italic ">
                        <h1 className='text-2xl'>Student Name Here</h1>
                        <p className='text-1xl'  >Class 5th | B | Roll No.32</p>
                        <p className='1xl'>Delhi Public School R.K. Puram, New Delhi</p>
                    </div>
                </div>




                <div className='rank2 inline-block m-5 border-5 border-gray-300  shadow-lg h-80 bg-[url("https://csr.heromotocorp.com/winnerbg2.png")] bg-cover bg-center '>
                    <button className='bg-gray-600 text-white mt-1'>2nd RANK</button>
                    <img src="/images/rankholder.png " className="w-84 h-70" alt="rank" />
                    <div className="bottom bg-gray-900 text-white justify-center text-center   flex flex-col italic ">
                        <h1 className='text-2xl'>Student Name Here</h1>
                        <p className='text-1xl'  >Class 5th | B | Roll No.32</p>
                        <p className='1xl'>Delhi Public School R.K. Puram, New Delhi</p>
                    </div>
                </div>

                {/* <div className='rank1 inline-block m-5 border-5 border-gray-300  shadow-lg h-70 border-gray-400  bg-[url("https://csr.heromotocorp.com/winnerbg2.png")] bg-coverbg-center'>
                    <button className='bg-gray-600 text-white mt-2'>2nd RANK</button>
                    <img src="/images/rankholder.png " className="w-84 h-60" alt="rank" />
                    <div className="bottom bg-gray-900 text-white justify-center text-center flex rounded-lg flex-col italic">
                        <h1 className='text-2xl'>Student Name Here</h1>
                        <p className='text-1xl'  >Class 5th | B | Roll No.32</p>
                        <p className='1xl'>Delhi Public School R.K. Puram, New Delhi</p>
                    </div>
                </div> */}


                <div className='rank1 inline-block m-5 border-5 border-orange-500  shadow-lg h-80 bg-[url("https://csr.heromotocorp.com/winnerbg2.png")] bg-cover bg-center '>
                    <button className='bg-orange-500 text-white mt-1'>3rd RANK</button>
                    <img src="/images/rankholder.png " className="w-84 h-70" alt="rank" />
                    <div className="bottom bg-gray-900 text-white justify-center text-center   flex flex-col italic ">
                        <h1 className='text-2xl'>Student Name Here</h1>
                        <p className='text-1xl'  >Class 5th | B | Roll No.32</p>
                        <p className='1xl'>Delhi Public School R.K. Puram, New Delhi</p>
                    </div>
                </div>




                {/* <div className='rank1 inline-block m-5 border-5 border-gray-300 rounded-lg shadow-lg h-68 border-orange-500  bg-[url("https://csr.heromotocorp.com/winnerbg2.png")] bg-coverbg-center'>
                    <button className='bg-orange-500 text-white mt-1'>3rd RANK</button>
                    <img src="/images/rankholder.png " className="w-84 h-60" alt="rank" />
                    <div className="bottom bg-gray-900 text-white justify-center text-center rounded-lg flex flex-col italic">
                        <h1 className='text-2xl'>Student Name Here</h1>
                        <p className='text-1xl'  >Class 5th | B | Roll No.32</p>
                        <p className='1xl'>Delhi Public School R.K. Puram, New Delhi</p>
                    </div>
                </div> */}
            </div>





            <div className='lower mt-14 justify-center items-center flex'>
                <div className='rank1 inline-block m-5 border-5 border-green-800  shadow-lg h-80 bg-[url("https://csr.heromotocorp.com/winnerbg2.png")] bg-cover bg-center '>
                    <button className='bg-green-800 text-white mt-1'>4th RANK</button>
                    <img src="/images/rankholder.png " className="w-84 h-70" alt="rank" />
                    <div className="bottom bg-gray-900 text-white justify-center text-center   flex flex-col italic ">
                        <h1 className='text-2xl'>Student Name Here</h1>
                        <p className='text-1xl'  >Class 5th | B | Roll No.32</p>
                        <p className='1xl'>Delhi Public School R.K. Puram, New Delhi</p>
                    </div>
                </div>
                {/* <div className='rank1 inline-block m-5 border-5 border-gray-300 rounded-lg shadow-lg h-68 border-green-800  bg-[url("https://csr.heromotocorp.com/winnerbg2.png")] bg-coverbg-center'>
                    <button className='bg-green-800 text-white mt-1'>4th RANK</button>
                    <img src="/images/rankholder.png " className="w-84 h-60" alt="rank" />
                    <div className="bottom bg-gray-900 text-white justify-center text-center  rounded-lg flex flex-col italic">
                        <h1 className='text-2xl'>Student Name Here</h1>
                        <p className='text-1xl'  >Class 5th | B | Roll No.32</p>
                        <p className='1xl'>Delhi Public School R.K. Puram, New Delhi</p>
                    </div> */}
            </div>
        
        </>

    )
}

export default Winner