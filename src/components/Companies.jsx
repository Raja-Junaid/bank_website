import { companies } from "../constants";

const Companies = () => {
  return (
    <div className="max-container flex flex-col justify-center items-center flex-wrap gap-y-14 md:flex-row md:gap-x-6 lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32">
      {companies.map((company) => (
        <img key={company.id} src={company.logo} alt="Company Logo" className="w-[180px] object-contain grayscale opacity-90 lg:w-[200px]" />
      ))}
    </div>
  )
}

export default Companies