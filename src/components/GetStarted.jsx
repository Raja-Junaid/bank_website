import Button from "./Button";

const GetStarted = () => {
  return (
    <div className="max-container px-7 py-8 flex flex-col gap-y-9 customShadow rounded-xl md:flex-row md:gap-y-0 md:justify-between md:items-center md:px-12 md:py-12">
      <div>
        <h3 className="text-4xl font-poppins font-semibold leading-[42px] text-darkTeal mb-2 lg:text-[40px] lg:font-bold lg:mb-3">Let’s try our service now!</h3>
        <p className="text-[17px] max-w-[400px] lg:max-w-[450px] lg:text-[18px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div>
        <Button label="Get Started" width="w-[200px] md:w-[170px]" bgColor="btnBgColor" textColor="text-white" fontWeight="font-medium" />
      </div>
    </div>
  )
}

export default GetStarted