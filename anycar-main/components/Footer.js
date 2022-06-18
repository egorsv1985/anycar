import styles from '../styles/Footer.module.scss'
import Subscribe from './Subscribe'
import { useEffect } from 'react'

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchFooter} from "../redux/actions";

export default function Footer({lang, shadow}) {
  const dispatch = useDispatch()
  const footer = useSelector((state) => state.footer)

  useEffect(() => {
    dispatch(fetchFooter(lang));
  },[])

  return (
    <>
      {footer.length > 0 &&
        <footer className={styles.footer}>
          <Subscribe 
            title={footer[4][0].title}
            subtitle={footer[4][1].title}
            button={footer[4][2].title}
            lang={lang}
            shadow={shadow}
          />
          <div className="container">
            <div className={styles.footer__block}>
              <a className={styles.footer__block_top} href={lang === 'ru' ? '/' : '/uk/'}>
                <img src="/images/logo.png" alt="logo" />
              </a>
              <ul className={styles.footer__block_links}>
                {footer[0].slice(0,2).map(el => (
                  <li key={el.ID}>
                    <a href={el.url}>{el.title}</a>
                  </li>
                ))}
                <li>{footer[0][2].title}</li>
              </ul>
            </div>
    
            <div className={styles.footer__block}>
              <span className={styles.footer__block_top}>{lang === 'ru' ? "Страницы" : "Сторінки"}</span>
              <ul className={styles.footer__block_links}>
                {footer[1].map(el => (
                  <li key={el.ID}>
                    <a href={el.url}>{el.title}</a>
                  </li>
                ))}
              </ul>
            </div>
    
            <div className={styles.footer__block}>
              <span className={styles.footer__block_top}>{lang === 'ru' ? "Адрес" : "Адреса"}</span>
              <ul className={styles.footer__block_links}>
                {footer[2].map(el => (
                  <li key={el.ID}>
                    <a href={el.url} target="_blank" rel="noopener">{el.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footer__block}>
              <span className={styles.footer__block_top}>{lang === 'ru' ? "Контакты" : "Контакти"}</span>
              <ul className={styles.footer__block_links}>
                {footer[3].slice(0,2).map(el => (
                  <li key={el.ID}>
                    <a href={el.url}>{el.title}</a>
                  </li>
                ))}
              </ul>
    
              <ul className={styles.socials}>
                {footer[3][2].url.length > 0 &&
                  <li>
                    <a href={footer[3][2].url} target="_blank" rel="noopener">
                      <img alt="" src="/images/icons/instagram.png" />
                    </a>
                  </li>
                }
                {footer[3][3].url.length > 0 &&
                <li>
                  <a href={footer[3][3].url} target="_blank" rel="noopener">
                    <img alt="" src="/images/icons/facebook.png" />
                  </a>
                </li>
                }
              </ul>
            </div>
          </div>
          <p className={styles.developedBy}>Developed by <a href="https://zigzag.team" target="_blank" rel="noopener">ZIGZAG</a></p>
          <div className={styles.gradientLine} />
        </footer>
      }
    </>
  )
}
