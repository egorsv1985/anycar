import styles from '../styles/Benefits.module.scss'

export default function Benefits({image, title, data}) {
  return (
    <div className={styles.benefits}>
      <div className="container">
        <h2 uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: title}} />
        <div className={styles.benefits__content}>
          <img alt="" uk-scrollspy="cls: uk-animation-slide-bottom-medium" className={styles.benefits__content_left} src={image} />

          <ul className={styles.benefits__content_right} uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
            {data.map(el => {
              if (el.title.length > 0) {
                return (
                  <li className={`${styles.benefit} uk-scrollspy-class`} key={el.title}>
                    <div className={styles.benefit__icon}>
                      <img src={el.icon} alt=""  />
                    </div>
    
                    <div className={styles.benefit__text}>
                      <h3 dangerouslySetInnerHTML={{__html: el.title}} />
                      <p dangerouslySetInnerHTML={{__html: el.subtitle}} />
                    </div>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}