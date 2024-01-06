import { Navbar, Hero, Stats, Features, Pricing, Companies, Testimonials, GetStarted, Faqs, Footer } from './components';

import styles from './style';

import { inject } from '@vercel/analytics';

inject();

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <section className={`${styles.paddingX} py-8`}>
        <Navbar />
      </section>
      <section className={`${styles.paddingX} py-5 xl:py-4 2xl:py-8`}>
        <Hero />
      </section>
      <section className={`${styles.paddingX} py-10 md:py-14 lg:py-6`}>
        <Stats />
      </section>
      <section className={`${styles.paddingX} py-7 lg:py-16 xl:py-20`}>
        <Features />
      </section>
      <section className={`${styles.paddingX} py-12 lg:py-[4.4rem]`}>
        <Pricing />
      </section>
      <section className={`${styles.paddingX} py-10 lg:py-14`}>
        <Companies />
      </section>
      <section className={`${styles.paddingX} py-16 lg:py-20 mt-16 md:mt-20 xl:py-[5.5rem] bg-slate-100 testi-container`}>
        <Testimonials />
      </section>
      <section className={`${styles.paddingX} py-20 lg:py-24`}>
        <GetStarted />
      </section>
      <section className={`${styles.paddingX} pb-28 pt-3 lg:pt-8 lg:pb-36 lg:mx-20 xl:mx-28`}>
        <Faqs />
      </section>
      <section className='bg-darkTeal'>
        <Footer />
      </section>
    </div>
  )
}

export default App