import Button from "./Button";
import { heroImage, rightArrow } from "../assets";

const Hero = () => (
  <div id="home" className="relative max-container flex justify-center items-center flex-col md:flex-row gap-y-8 md:gap-y-0">
    <div className="bg-gradient-1 rounded-full w-[400px] h-[400px] absolute top-36 -left-[90%] opacity-[50%] md:opacity-[100%] lg:top-20 lg:-left-[50%] xl:top-52 xl:-left-[30%] -z-10 min-[1920px]:hidden"></div>

    <div className="flex flex-col gap-y-3 lg:-mt-12 xl:-mt-16 2xl:w-full">
      <h1 className="max-w-xl text-4xl lg:text-5xl xl:text-6xl 2xl:text-[68px] font-poppins font-semibold text-gray-900 leading-[48px] tracking-[0.09px] lg:leading-[65px] xl:leading-[84px] 2xl:leading-[92px]">
        The <span className="text-darkGreen">Best Bank</span> To Manage Your Finances.
      </h1>
      <p className="text-gray-600 text-[17px] xl:text-[18px] xl:leading-[30px] mb-2 max-w-md xl:max-w-[30rem] 2xl:max-w-[32rem]">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      <div className="flex items-center gap-x-4 xl:mt-2 lg:gap-x-6">
        <Button label="Get Started" />
        <a href="/" className="flex justify-center items-center gap-x-1 text-gray-500 cursor-pointer">
          <p className="text-[17px]">Learn more</p>
          <img src={rightArrow} alt="Right Arrow" className="w-[18px] h-[18px] mt-1" />
        </a>
      </div>
    </div>

    <div>
      <img src={heroImage } alt="Image" className="w-[750px] 2xl:max-w-2xl" />
    </div>
  </div>
)

export default Hero