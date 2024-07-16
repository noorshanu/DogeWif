function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#77cdf2] bg-m">
      <div className="container-wrapper lg:h-full flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img
          src="images/cloud1.png"
          alt=""
          className="x1 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[160px]  "
        />
        {/* <img
          src="images/star2.png"
          alt=""
          className="floating  absolute top-[20%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[100px] "
        /> */}
        {/* <img
          src="images/star2.png"
          alt=""
          className="floating  absolute top-4 sm:top-[46%] right-[10%] w-auto h-[100px] "
        /> */}
        <img
          src="images/cloud2.png"
          alt=""
          className="x2 absolute w-auto h-[170px] hidden sm:block"
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x4 absolute w-auto h-[150px] hidden sm:block"
        />
        <img
          src="images/cloud1.png"
          alt=""
          className="x3 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[170px]  "
        />
        <img
          src="/images/hero.png"
          className="w-full lg:w-[40%] lg:h-full  mt-0 sm:mt-[8rem] floating "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          alt=""
        />
           <div className=" flex   sm:hidden  justify-center items-center  mt-7 sm:mt-8">
          <div className=" relative">
            <a
              href="/"
              className="   font-bold text-xs text-center"
            >
         Contract : Coming soon...
            </a>
          </div>
     
        </div>
        <div className=" text-center mt-4 sm:mt-0 box-s2 border-2 bg-white py-1 rounded-xl">
          <p className="max-w-3xl  text-[#000000] text-xl mx-auto my-2 hidden sm:block">Contract : Coming soon</p>
          <h1 className="text-center text-[#000000] text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl mx-auto">  Dogewif: The Lambo-Loving Dog of Solana </h1>
          <p className=" max-w-3xl  text-[#000000] text-xl mx-auto">
          DogeWif is the Solana's silliest dog! This roddy zooms in a Lambo, wearing a party hat and shades. With bullish zoomies and a goofy grin, DogeWif fetches gains like a pro. Join the fun with the wackiest pup on Solana! Bow-wow! 
          </p>
        </div>
        <div className=" hidden pb-2   sm:flex  justify-center items-center gap-6 mt-7 sm:mt-8">
        <a href="http://t.me/dogewif_solana" target="_blank" rel="noreferrer">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
             </a>
             <a href="https://x.com/DogeWif_sol" target="_blank" rel="noreferrer">
              <img src="X.png" alt="" className="w-auto h-[55px]" />
             </a>

          <div className=" relative">
            <a
           href="/" target="_blank"
              className=" "
            >
            <img src="images/dextool.png" alt="" className="h-[45px] bg-white box-s2    font-bold text-sm sm:text-xl rounded-full px-8 py-2" />
            </a>
          </div>
     
        </div>
         
      
      </div>
    </section>
  );
}

export default Hero;
