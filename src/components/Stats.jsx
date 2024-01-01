import { stats } from '../constants';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-x-3 lg:gap-x-5">
      {stats.map((stat) => (
        <div id={stat.id} className='flex flex-col xl:flex-row xl:gap-x-5'>
          <h2 className='text-3xl font-poppins text-darkGray font-bold md:text-4xl xl:text-[40px]'>{stat.number}</h2>
          <p className='textGradient text-[20px] font-semibold md:text-[22px] xl:font-bold'>{stat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats