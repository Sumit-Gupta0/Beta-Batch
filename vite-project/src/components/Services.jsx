const Services = () => {
    return (

        <>
            <section>
                <div classname="pl-4">

                    <p className="text-red-600 uppercase tracking-wide text-2xl pl-11 font-bold mt-2" >Our Range</p>
                    <div className="flex justify-between">
                        <h1 className="text-6xl font-medium leading -tight pl-10">Discover Your Hero   </h1>

                        <button className=" mt-6 border border-red-600 text-red-600 px-7 py-3 w-fit hover:bg-red-600 hover:text-white transition mr-3">
                            Explore All Products
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-4 h-[520px] mt-5">

                   
                    <div className="col-span-1 rounded-1xl overflow-hidden justify-evenly">
                        <img src="/images/bike1.png" className="w-full h-full object-cover ml-4" />
                    </div>

                    
                    <div className="col-span-1 rounded-1xl overflow-hidden relative">
                        <img src="/images/bike2.png" className="w-full h-full object-cover" />
                        <span className="absolute left-4 bottom-4 text-white text-3xl font-bold">Xtreme</span>
                    </div>


                    <div className="col-span-1 rounded-1xl overflow-hidden">
                        <img src="/images/bike3.png" className="w-full h-full object-cover mr-4" />
                    </div>

                </div>
            </section>





        </>
    )
}
export default Services;
