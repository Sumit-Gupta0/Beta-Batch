function Services1() {
    return (
        <section>
            <p className="text-red-600 uppercase tracking-wide text-2xl pl-11 font-bold mt-3 " >PARTS AND ACCESSORIES</p>
            <h1 className="text-7xl font-medium leading -tight pl-10">Upgrade Your Style</h1>
            {/* <ul className="text-white-500  flex items-center justify-between gap-1 mt-10 block-inline
">
                <li href="#">All</li>
                <li href="#">Helmets</li>
                <li href="#">Luggages</li>
                <li href="#">Parts</li>
                <li href="#">Others</li>
            </ul> */}

            <div className="all flex gap-2 justify-evenly mt-4">

                <div className="card1 w-[280px] h-[320px] bg-gray-300 rounded-1xl p-4 flex flex-col justify-between  ">


                    <div className="card h-52 flex-col items-center justify-center" >
                        <img src="/images/card1.png" alt="card" className=" h-full object-contain" />
                        <div className="">
                            <p className="text-xs tracking-widest text-gray-500 uppercase ">SPLENDOR PLUS <br /> FIREFLY GOLDEN <br /> GRAPHICS</p>
                            <p className="my-2 text-xl font-semibold">Rupee 1399</p>
                        </div>
                    </div>
                </div>

                <div className="card2 w-[280px] h-[320px] bg-gray-300 rounded-1xl p-4 flex flex-col justify-between  ">


                    <div className="card h-52 flex-col items-center justify-center" >
                        <img src="/images/card2.png" alt="card" className=" h-full object-contain" />
                        <div className="">
                            <p className="text-xs tracking-widest text-gray-500 uppercase ">GOD IDOL-LORD <br /> GANESHA</p>
                            <p className="my-2 text-xl font-semibold">Rupee 233</p>
                        </div>
                    </div>
                </div>


                <div className="card3 w-[280px] h-[320px] bg-gray-300 rounded-1xl p-4 flex flex-col justify-between  ">


                    <div className="card h-52 flex-col items-center justify-center" >
                        <img src="/images/card3.png" alt="card" className=" h-full object-contain" />
                        <div className="">
                            <p className="text-xs tracking-widest text-gray-500 uppercase ">KIT REAR HUGGER</p>
                            <p className="my-2 text-xl font-semibold">Rupee 424</p>
                        </div>
                    </div>
                </div>


                <div className="card4 w-[280px] h-[320px] bg-gray-300 rounded-1xl p-4 flex flex-col justify-between  ">


                    <div className="card h-52 flex-col items-center justify-center" >
                        <img src="/images/card4.png" alt="card" className=" h-full object-contain" />
                        <div className="">
                            <p className="text-xs tracking-widest text-gray-500 uppercase ">MATT PHANTOM <br /> KARIZMA XMR SEAT</p>
                            <p className="my-2 text-xl font-semibold">Rupee 690</p>
                        </div>
                    </div>
                </div>




            </div>



                  <button className=" mt-6 border border-red-600 text-red-600 px-7 py-3 w-fit hover:bg-red-600 hover:text-white transition ml-5">
                            Explore All Products
                        </button>
        </section>
    )
}

export default Services1;