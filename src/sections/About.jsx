

function About() {
  return (
    <section className=" relative py-4">
      <div className=" container-wrapper">

        <div className=" flex justify-between items-center gap-4">

          <div className=" w-full sm:w-1/2">
            <img src="images/about.jpeg" alt=""  className=" rounded-xl h-[400px] w-auto box-s2 border-2 border-black"/>
          </div>

          <div className=" w-full sm:w-1/2">
            <h1 className=" font-dream font-bold text-5xl py-2">About DogeWif</h1>
          
            <div>
              <p className=" text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolorem impedit, quod magnam, eligendi est adipisci cum saepe odit ducimus quisquam libero similique magni. Dolorum amet iste sit animi obcaecati error!</p>
            
              <p className=" text-lg pt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolorem impedit, quod magnam, eligendi est adipisci cum saepe odit ducimus quisquam libero similique magni. Dolorum amet iste sit animi obcaecati error!</p>
            </div>
          </div>
          
        </div>

      </div>

      <img src="images/wave.svg" alt="" className="w-full rotate-180" />
    </section>
  );
}

export default About;
