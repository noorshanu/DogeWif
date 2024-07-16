import React from "react";

function Subtoke() {
  return (
    <section className=" py-2">
      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center">
          <div className=" flex flex-col justify-center items-center ">
            <img
              src="images/tax.jpeg"
              alt=""
              className=" h-auto sm:h-[300px] w-auto shadow-2xl rounded-xl box-s2 border-2"
            />

            <h2 className=" text-6xl font-dream font-bold text-center"> TAX</h2>

            <p className=" text-center text-xl font-bold"> 0% Tax</p>
          </div>


          <div className=" flex flex-col justify-center items-center ">
            <img
              src="images/burn.jpeg"
              alt=""
              className=" h-auto sm:h-[300px] w-auto shadow-2xl rounded-xl box-s2 border-2"
            />

            <h2 className=" text-6xl font-dream font-bold text-center"> LP</h2>

            <p className=" text-center text-xl font-bold"> 100% Burn</p>
          </div>




          <div className=" flex flex-col justify-center items-center ">
            <img
              src="images/supply.jpeg"
              alt=""
              className=" h-auto sm:h-[300px] w-auto shadow-2xl rounded-xl box-s2 border-2"
            />

            <h2 className=" text-6xl font-dream font-bold text-center">SUPPLY</h2>

            <p className=" text-center text-xl font-bold"> 1 Billion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subtoke;
