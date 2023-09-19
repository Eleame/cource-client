/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/intro/index.module.scss'
import BrandsSlider from '@/components/modules/DashboardPage/BrandsSlider'

const DashboardIntro = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.intro}>
            <div className={`${styles.intro__info} ${darkModeClass}`}>
              <h2 className={`${styles.intro__title} ${darkModeClass}`}>
                The warmth of your home in the rhythm of modernity!
              </h2>
              <p>
                Here begins your journey to a comfortable, warm home where hot
                water is not just a convenience, but a bold statement of style.
                Dive into the world of high-quality boilers, where innovation
                meets elegance.
              </p>
              <p>
                Our team is ready to assist you in making the best choice. Allow
                UAB &quot;AQUA JAZZ&quot; to fill your home with the melody of
                warmth!
              </p>
            </div>
            <div className={`${styles.intro__img} ${styles.intro__img__top}`}>
              <img src="/img/intro-img.png" alt="image-1" />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.dashboard__brands}>
        <BrandsSlider />
      </div>
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.intro}>
            <div className={`${styles.intro__info_right} ${darkModeClass}`}>
              <h2 className={`${styles.intro__title} ${darkModeClass}`}>
                Efficiency in every element
              </h2>
              <p>
                Your home deserves the best and we are here to provide you with
                that. Heating systems UAB "AQUA JAZZ" not only provide
                continuous heat, but also reflect the latest trends in energy
                efficiency and design. Our products are designed to last long
                and reliably, providing your home with comfort at any time of
                the year.
              </p>
              <p>
                Choose the quality you deserve. Choose UAB "AQUA JAZZ" for the
                warmth of your home.
              </p>
            </div>
            <div
              className={`${styles.intro__img} ${styles.intro__img__bottom}`}
            >
              <img src="/img/intro-img-2.png" alt="image-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardIntro
