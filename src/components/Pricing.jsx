import { pricing } from "../constants";
import styles from "../style";
import Button from "./Button";
import 'remixicon/fonts/remixicon.css'

const Pricing = () => {
  return (
    <div id="pricing" className="relative">
      <div className="bg-gradient-2 rounded-full w-[400px] h-[400px] absolute top-20 -right-[99%] opacity-[80%] md:opacity-100 -z-20 md:-right-[30%] md:top-10 xl:top-16 xl:-right-[35%] min-[1920px]:hidden"></div>

      <div className="max-container flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16 text-center xl:gap-y-[4.2rem]">
      <div className="mx-auto">
        <h2 className={`${styles.heading2} mb-2 lg:mb-2.5 leading-[40px]`}>Grab Our Mega Deposit Package</h2>
        <p className={`${styles.paragraph} max-w-[600px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque fusce ipsum orci rhoncus aliporttitor.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-12  gap-y-10 lg:gap-y-20 justify-center items-center mx-auto my-0">
        {pricing.map((price, index) => (
          <div key={price.id} className={`${index === pricing.length - 2 ? 'pricingCardBg' : 'bg-white'} flex flex-col justify-center items-center gap-y-8 w-[300px] sm:w-[350px] 2xl:w-[360px] my-0 mx-auto border py-10 border-darkTeal rounded-xl`}>
            <div>
              <h4 className={`${index === pricing.length - 2 ? 'text-gray-100' : 'text-darkGray'} text-2xl mb-1 font-semibold font-poppins`}>{price.category}</h4>
              <div className="flex justify-center items-center gap-x-0.5 mb-1">
                <h3 className={`text-6xl font-light font-markazi ${index === pricing.length - 2 ? 'text-white' : 'text-black'}`}>{price.price}</h3>
                <p className={`text-xl font-medium ${index === pricing.length - 2 ? 'text-gray-300' : 'text-gray-900'}`}>{price.month}</p>
              </div>
              <div className={`flex justify-center items-center gap-x-[5px] text-[17px] ${index === pricing.length - 2 ? 'text-gray-200' : 'text-darkGray'}`}>
                <p className="tracking-wide">{price.desc1}</p>
                <p className="font-bold">{price.num}</p>
                <p className="tracking-wide">{price.desc2}</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 mb-2">
              {price.list.map((lists) => (
                <div key={lists.id} className="flex items-center gap-x-2">
                  <div className="px-1 bg-gray-800 rounded-full scale-90">
                    <i className="ri-check-fill font-bold text-white"></i>
                  </div>
                  <p className={`${index === pricing.length - 2 ? 'text-gray-200' : 'text-darkGray'}`}>{lists.title}</p>
                </div>
              ))}
            </div>

            <div>
              <Button label="Start Free Trial" width="w-[200px]" bgColor={`${index === pricing.length - 2 ? 'btnBgColorWhite' : 'btnBgColor'}`} textColor={`${index === pricing.length - 2 ? 'text-darkGray' : 'text-white'}`} fontWeight={`${index === pricing.length - 2 ? 'font-semibold' : 'font-medium'}`} />
            </div>
          </div>          
        ))}
      </div>
    </div>
    </div>
  )
}

export default Pricing