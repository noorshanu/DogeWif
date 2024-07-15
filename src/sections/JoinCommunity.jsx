import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";


function JoinCommunity() {
  return (
    <section className="pt-24 relative z-10 overflow-hidden ">
      <div className="container-wrapper">
          <div className=" box-s2 border-2 rounded-xl py-2 px-2 flex flex-col justify-center">
          <div className="flex justify-center items-center flex-shrink-0 mr-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.png" className="h-[105px]" alt=" Logo" />

          <h1 className="v font-dream text-2xl sm:text-3xl font-bold ">$DogeWif</h1>
        </a>

        </div>

        <div >
      <h1 className=" text-5xl font-bold font-dream text-center py-3">  Contract address</h1>
        <h2 className="text-3xl font-bold font-dream text-center py-1">
          Coming soon......
        </h2>

        <div className=" flex justify-center items-center gap-3">
        <a
                  href="https://x.com/"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitter />
                </a>
             
           

                <a
                  href="https://t.me/" target="_blank" rel="noreferrer"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>
        </div>

        <h1 className="font-dream text-2xl sm:text-3xl font-bold text-center">
        Disclaimer: DogeWif is a meme token with no intrinsic value advertised <br /> or expectation of financial return. The token is for entertainment purposes only.
        </h1>
        </div>
          </div>


      </div>
      <div className="flex  items-center justify-center border-t-2 mt-4 ">
          <p className="text-center text-sm  font-bold text-black py-1">
            All rights reserved | by DOGEWif 2024
          </p>
        </div>
    </section>
  );
}

export default JoinCommunity;
