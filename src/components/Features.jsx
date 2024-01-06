import { features } from "../constants";
import styles from "../style";
import Feature from "./Feature";

const Features = () => {
  return (
    <div id="features" className="max-container flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16 text-center xl:gap-y-[4.8rem]">
      <div className=" mx-auto">
        <h2 className={`${styles.heading2} mb-1 lg:mb-2.5`}>Features We Provide</h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>With the right credit card, you can improve your financial life by building credit and earning rewards</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-y-8 md:gap-y-10 md:gap-x-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4 xl:gap-x-14">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default Features