import { useState } from 'react'
import styles from '../styles/Info.module.scss'

export default function Info({data, lang}) {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className={styles.info} uk-scrollspy="cls: uk-animation-fade">
      <div className={`${showMore ? styles.open : ''} container`} dangerouslySetInnerHTML={{__html: data}} />

      <div className="container">
        <span className={styles.info__showMore} onClick={() => setShowMore(!showMore)}>
          {!showMore ? `${lang === 'ru' ? "Показать больше" : "Показати більше"}` : `${lang === 'ru' ? "Скрыть" : "Приховати"}`}
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 4L7 1" stroke="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="1" y1="2.5" x2="7" y2="2.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4CB7CC"/>
            <stop offset="1" stopColor="#52DAAC"/>
            </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  )
}