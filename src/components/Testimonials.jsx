import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { testimonials } from '../constants';
import styles from '../style';

const Testimonials = () => {
  const breakpoints = {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <div className='relative max-container'>
      <div className="mx-auto">
        <h2 className={`${styles.heading2} mb-12 lg:mb-[4.5rem] leading-[40px] text-center`}>Reviews That Speak Volumes</h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={breakpoints}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testi) => (
          <SwiperSlide key={testi.id} className='flex flex-col gap-y-6 px-8 py-6 rounded-lg border hover:border-darkTeal transition-all ease-in-out hover:shadow-xl md:h-[430px] lg:h-[420px] xl:h-[370px] 2xl:h-[346px] xl:pt-7'>
            <img src={testi.icon} alt="Quotes Icon" className='w-[55px] h-[55px] object-contain' />
            <p className='font-poppins leading-[32px]'>{testi.content}</p>
            <div className='flex flex-row gap-x-3'>
              <img src={testi.avatar} alt="Avatar" className='w-[50px] h-[50px]' />
              <div className='flex flex-col'>
                <p className='font-poppins font-semibold'>{testi.name}</p>
                <p className='text-sm font-poppins text-gray-600'>{testi.work}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials