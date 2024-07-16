

function About() {
  return (
    <section className=" relative py-4">
      <div className=" container-wrapper">

        <div className=" flex flex-col sm:flex-row justify-between items-center gap-4">

          <div className=" w-full sm:w-1/2">
            <img src="images/about.jpeg" alt=""  className=" rounded-xl h-[400px] w-auto box-s2 border-2 border-black"/>
          </div>

          <div className=" w-full sm:w-1/2">
            <h1 className=" font-dream font-bold text-5xl py-2">About DogeWif</h1>
          
            <div>
              <p className=" text-lg"> Dogewif, the fun-loving, lambo-riding, ultimate meme coin of Solana! This energetic and charismatic dog is more than just a token—it's the spirit of the bullish community. </p>
            
              <p className=" text-lg pt-2">  Classic, bold, and always on the move, Dogewif is for the true OGs with diamond hands ready to become the next crypto millionaires. Hop on, hold tight, and ride with Dogewif to the moon!</p>
            </div>
          </div>
          
        </div>

      </div>

      <img src="images/wave.svg" alt="" className="w-full rotate-180" />
    </section>
  );
}

export default About;
