import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Welcome</span> to{" "}
            <span className="text-white">codetick.in</span>
          </p>
        </div>

        <div className="flex items-center justify-center  w-full">
          {/* <h1 className="flex items-center justify-center font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Master Coding in <br />
            <span className="text-gradient">Malayalam</span>
          </h1> */}
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Master Coding in <span className="text-gradient">Malayalam</span>.
        </h1>
        <h2 className={`${styles.heading3} mt-5`}>
          Learn <span className="text-gradient">HTML, CSS & Javascript</span> in
          30 Days.
        </h2>
      </div>
      {/* 
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      > */}
      {/* <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        /> */}

      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      {/* gradient end */}
      {/* </div> */}

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
