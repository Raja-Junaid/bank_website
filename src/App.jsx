import { Navbar, Hero, Stats, Features, Pricing, Companies, Testimonials, GetStarted, Footer } from './components';

import styles from './style';

const App = () => {
  return (
    <div>
      <section className={`${styles.paddingX} py-8`}>
        <Navbar />
      </section>
      <section className={`${styles.paddingX} py-5 xl:py-2`}>
        <Hero />
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <Features />
      </section>
      <section>
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