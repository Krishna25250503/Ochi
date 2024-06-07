import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cardAnimation1 = useAnimation();
  const cardAnimation2 = useAnimation();

  const handleHover = (animation, shouldHover) => {
    animation.start({ y: shouldHover ? "0" : "100%" });
  };

  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full py-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl tracking-tight font-["Founders_Grotesk_X-Condensed"]'>
          Featured Projects
        </h1>
        <div className="px-20">
          <div className="cards w-full flex gap-10 mt-10">
            <div
              className="cardcontainer relative rounded-xl w-1/2 h-[75vh]"
              onMouseEnter={() => handleHover(cardAnimation1, true)}
              onMouseLeave={() => handleHover(cardAnimation1, false)}
            >
              <h1 className="absolute flex text-[#CDEA68] z-[9] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter font-['Founders_Grotesk_X-Condensed'] text-8xl">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardAnimation1}
                    transition={{
                      ease: [0.22, 1, 0.036, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover overflow-hidden"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div
              className="cardcontainer relative rounded-xl w-1/2 h-[75vh]"
              onMouseEnter={() => handleHover(cardAnimation2, true)}
              onMouseLeave={() => handleHover(cardAnimation2, false)}
            >
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter font-['Founders_Grotesk_X-Condensed'] text-8xl">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardAnimation2}
                    transition={{
                      ease: [0.22, 1, 0.036, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
