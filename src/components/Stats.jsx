import { stats } from '../constants';

const Stats = () => {
  return (
    <div className="max-container grid grid-cols-1 sm:grid-cols-3 gap-y-8 lg:gap-y-0 lg:flex lg:justify-between py-8 lg:py-11 xl:py-12 border-t border-b border-gray-400">
      {stats.map((stat) => (
        <div key={stat.id} className={`flex flex-col gap-y-[-2rem] lg:flex-row lg:items-center lg:gap-x-2.5`}>
          <h2 className='text-3xl font-poppins text-darkGray font-semibold md:text-4xl xl:text-[40px]'>{stat.number}</h2>
          <p className='textGradient text-[20px] font-semibold md:text-[22px] xl:font-bold xl:uppercase'>{stat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats