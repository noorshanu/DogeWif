import Title from "components/Title";

function Tokenomics() {
  return (
    <section  id="token" className="container-wrapper mt-4 border-2 box-s2  bg-[#ffffff] rounded-2xl py-10 sm:py-14 px-4 sm:px-10 relative z-10">
     
     
     
  
      
       <Title
        className="text-[#8431d6] mb-4 text-center"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        Tokenomics
      </Title>



      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <img
          src="/images/about/img8.jpeg"
          className="w-full rounded-full border-4  white-shadow"
          alt=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        />
        <div
          className=""
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <div className="bg-[#c6f2ff] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Total Supply = 1,000,000,000</p>
          </div>
          <div className="bg-[#dbffc6] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Symbol = $DOGEW</p>
          </div>
          <div className="bg-[#e9cdff] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Tax = 0%</p>
          </div>

          <div className="bg-[#ffcbdf] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Burn LP </p>
          </div>
          <div className="bg-[#ffcbdf] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Revoke Authority</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
