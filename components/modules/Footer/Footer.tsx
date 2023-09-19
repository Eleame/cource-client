/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/footer/index.module.scss'
import FooterLogo from './FooterLogo'
import OnlineStoreContent from './OnlineStoreContent'
import CompanyContent from './CompanyContent'
import MarkerSvg from '@/components/elements/MarkerSvg/MarkerSvg'
import Link from 'next/link'
import PhoneSvg from '@/components/elements/PhoneSvg/PhoneSvg'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Accordion from '@/components/elements/Accordion/Accordion'

const Footer = () => {
  const isMedia750 = useMediaQuery(750)
  const isMedia500 = useMediaQuery(500)

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          {!isMedia750 && <FooterLogo />}
          <div className={styles.footer__top__inner}>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>
                    Online store
                  </h3>
                  <OnlineStoreContent />
                </>
              )}
              {isMedia500 && (
                <Accordion
                  title="Online store"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <OnlineStoreContent />
                  <div style={{ height: 17 }} />
                </Accordion>
              )}
            </div>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>Company</h3>
                  <CompanyContent />
                </>
              )}
              {isMedia500 && (
                <Accordion
                  title="Company"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <CompanyContent />
                  <div style={{ height: 17 }} />
                </Accordion>
              )}
            </div>
          </div>
          <div className={styles.footer__top__item}>
            <h3 className={styles.footer__top__item__title}>Contacts</h3>
            <ul
              className={`${styles.footer__top__item__list} ${styles.footer__top__item__contacts}`}
            >
              <li className={styles.footer__top__item__list__item}>
                <Link href="/contacts" passHref legacyBehavior>
                  <a className={styles.footer__top__item__list__item__link}>
                    <span>Our address:</span>
                    <span>Birželio 23-iosios g. 29, LT-50201, Kaunas</span>
                    <span>
                      <MarkerSvg />
                    </span>
                  </a>
                </Link>
              </li>
              <li className={styles.footer__top__item__list__item}>
                <a
                  href="tel:+ 370-620-99111"
                  className={styles.footer__top__item__list__item__link}
                >
                  <span>Our contact phone:</span>
                  <span>+ 370-620-99111</span>
                  <span>
                    <PhoneSvg />
                  </span>
                </a>
              </li>
              <li className={styles.footer__top__item__list__item}>
                <a
                  href="mailto:info@aquajazz.lt"
                  className={styles.footer__top__item__list__item__link}
                >
                  <span>E-mail:</span>
                  <span>info@aquajazz.lt</span>
                  <span>
                    <MailSvg />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__block}>
            <div className={styles.footer__bottom__block__left}>
              <h3 className={styles.footer__bottom__block__title}>
                We accept for payment:
              </h3>
              <ul className={styles.footer__bottom__block__pay}>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/paysera.png" alt="paysera" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/pay.png" alt="apple-pay" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/gpay.png" alt="google-pay" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/master-card.png" alt="master-card" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/visa.png" alt="visa" />
                </li>
              </ul>
            </div>
            <div className={styles.footer__bottom__block__right}>
              <h3 className={styles.footer__bottom__block__title}>
                We are on social media:
              </h3>
              <ul className={styles.footer__bottom__block__social}>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="https://www.facebook.com/aquajazzuab/"
                    className={styles.footer__bottom__block__social__item_fb}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="https://www.youtube.com/channel/UC--qP5iX1PWhu_slAJt3MYA"
                    className={styles.footer__bottom__block__social__item_ytb}
                  />
                </li>
              </ul>
            </div>
          </div>
          {isMedia750 && <FooterLogo />}
          <div className={styles.footer__bottom__block}>
            <p className={styles.footer__bottom__block__copyright}>
              © Visos teisės saugomos 2013-2023 | AQUA JAZZ, UAB
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
