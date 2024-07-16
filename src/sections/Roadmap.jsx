import Title from "components/Title";

const Grid = ({ direction = "left" }) => {
  return (
    <div
      className={`absolute top-0 w-1/2 h-full -z-20 pointer-events-none select-none ${
        direction === "right" ? "right-0" : "left-0"
      }`}
    >
      <div
        className={`absolute top-0 ${
          direction === "right" ? "right-[-2px]" : "left-[-2px]"
        } w-full h-full opacity-50 z-10`}
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>

      <div
        className={`absolute z-20 w-full h-full top-0 left-0 from-transparent to-primary ${
          direction === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        }`}
      ></div>
    </div>
  );
};

function Roadmap() {
  return (
    <section className="relative z-10 bg-[#77cdf2] -mt-4 py-4 " id="road">
    

      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000000] mb-10 pt-8">
          OUR ROADMAP
        </Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="bg-[#ffeeb9] py-5 px-5   rounded-md w-full mx-auto h-full sm:h-[300px] box-s2 border-2 ">
            <div>
              <h1 className="font-dream text-[#00708f]  text-center  text-3xl mb-2 pb-2 border-b-2">
                Phase 1
              </h1>
              {/* <h1 className="font-dream text-[#8431d6]  text-lg mb-2">
                The SolSon Beat Begins
              </h1> */}
            </div>
            <p className=" text-base font-popins font-normal lh-1_7 uppercase">
              • Branding and Create Socials
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • LAUNCH TOKEN.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • BUILD TELEGRAM COMMUNITY.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • DEXTOOLS/ DEXSCREENER/ BIRDSEYE SOCIALS UPDATES.
            </p>
         
         
          
          </div>

          <div className="bg-[#ffeeb9] py-5 px-5  rounded-md w-[100%] h-full sm:h-[300px] border-2 box-s2">
            <div>
              <h1 className="font-dream   text-[#00708f]  text-center  text-3xl mb-2 pb-2 border-b-2">
                Phase 2
              </h1>
              {/* <h1 className="font-dream text-[#8431d6]  text-lg mb-2">
                The Bongo Band Assembles
              </h1> */}
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Expanding Community Reach.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Implementing Global Marketing Strategies.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Introducing Staking Platform .
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Establishing Dapp Partnerships.
            </p>
          </div>
          <div className="bg-[#fbcbe6] py-5 px-5  rounded-md w-[100%] h-full sm:h-[300px] box-s2 border-2">
            <div>
              <h1 className="font-dream text-[#00708f]  text-center  text-3xl mb-2 pb-2 border-b-2">
                Phase 3
              </h1>
              {/* <h1 className="font-dream text-[#8431d6] text-center text-lg mb-2">
                Bongo's Worldwide Tour
              </h1> */}
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Non Stop Memes & Nft Launch  .
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Pursuing New DEX & CEX Listings.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Reach 10k Holders & 100Million Mcap.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Events and Big Partnerships .
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • .further development{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
