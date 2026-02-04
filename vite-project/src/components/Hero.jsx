

function Hero() {
  return (
    <>
      <main className="w-full bg-[url('/images/background.png')] bg-cover bg-center h-screen flex items-center justify-center py-24 object-cover object-bottom-right ">
        {/* <img src="/images/home.png" alt="home"  className="h-full w-full object-cover"/> */}
        <div className="text-center max-w-3xl px-4">

          <p className="text-sm tracking-widest uppercase text-gray-700 mb-4 ">My Family, My Safety</p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Shaping <span className="bg-red-600 text-white px-3 py-1 mx-2 inline-block [clip-path:polygon(5%_0%,100%_0%,95%_100%,0%_100%)] ">Safer</span > Roads <br /> <span className="bg-red-600 text-white px-4 py-1 m-2 inline-block  [clip-path:polygon(5%_0%,100%_0%,95%_100%,0%_100%)]">One Child</span> at a Time</h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-8">A national-level road safety and traffic awareness drawing <br />connection for students, encouraging families to pledge for safer roads and responsible behaviour.</p>
          
          {/* <div className="border-black">
          <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-3 rounded-md shadow-lg">Take The Pledge</button>
          </div> */}

        </div>
        
      </main>



    </>

  )
}

export default Hero