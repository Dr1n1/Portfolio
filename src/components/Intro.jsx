import React from "react";
import "./index.css";

function Intro() {
  return (
    <div className="backgroundiamgee" id="home">
      <div className="backgroundcolor">
        <div className="content justify-center mx-10 sm:mx-20 lg:mx-0">
          <div className="text-left">
            <p>Since 2018</p>
          </div>
          <div className="text-left">
            <p className="text-xl">Drin Krasniqi Portfolio and work experience!</p>
          </div>
          <div className="my-12 text-center md:text-left">
            <a href="#about" style={{ transition: "ease-in 0.3s" }}>
              <button className="bg-white px-8 md:px-12 py-3 md:py-4 text-black">Explore</button>
            </a>
          </div>

          <div className="blockofdata ">
            <div className="flex flex-col md:flex-row">
              <div className="mx-auto md:mx-0 md:mr-4">
                <div className="px-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <figure className="text-sm">
                    <div className="text-neutral-300 &gt;*:relative &gt;:first-child:before:absolute &gt;:first-child:before:right-full &gt;:first-child:before:content-['“'] &gt;:last-child:after:content-['”']">
                      <p className="text-left">
                        Thanks to Drin, our accounting firm now has a sleek website that perfectly represents our services. Their attention to detail and expertise made the process effortless, enhancing our online presence significantly
                      </p>
                      <div className="mt-6 font-semibold text-white">
                        Lorik Retkoceri, CEO of Square Accounting
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="mx-auto md:mx-0 md:ml-4">
                <div className="px-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <figure className="text-sm">
                    <div className="text-neutral-300 &gt;*:relative &gt;:first-child:before:absolute &gt;:first-child:before:right-full &gt;:first-child:before:content-['“'] &gt;:last-child:after:content-['”']">
                      <p className="text-left">
                        Partnering with Drin has greatly improved our online presence and business performance. Their team's expertise and commitment to delivering quality results have been invaluable to our success.
                      </p>
                      <div className="mt-6 font-semibold text-white">
                        Genc Thaci, COO of DecPro
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="mx-auto md:mx-0 md:ml-4 md:mr-0">
                <div className="px-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <figure className="text-sm">
                    <div className="text-neutral-300 &gt;*:relative &gt;:first-child:before:absolute &gt;:first-child:before:right-full &gt;:first-child:before:content-['“'] &gt;:last-child:after:content-['”']">
                      <p className="text-left">
                        Collaborating with Drin on web visuals was a pleasure. His keen eye for design and dedication to achieving our vision made the process seamless, resulting in a website that truly stands out.
                      </p>
                      <div className="mt-6 font-semibold text-white">
                        Mike Deheart, CEO of GreenVision Media
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
