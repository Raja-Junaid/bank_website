import { Navbar, Hero, Stats, Features, Pricing, Companies, Testimonials, GetStarted, Footer } from './components';

import styles from './style';

const App = () => {
  return (
    <div>
      <section className={`${styles.paddingX} py-8`}>
        <Navbar />
      </section>
      <section className={`${styles.paddingX} py-5 xl:py-4 2xl:py-8`}>
        <Hero />
      </section>
      <section className={`${styles.paddingX} py-10 md:py-14 lg:py-6`}>
        <Stats />
      </section>
      <section className={`${styles.paddingX} py-7 lg:py-16 xl:py-[4.7rem] 2xl:py-[4.9rem]`}>
        <Features />
      </section>
      <section className={`${styles.paddingX} py-8 lg:py-16`}>
        <Pricing />
      </section>
      <section>
        <Companies />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <GetStarted />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default App