import styles from '../styles/Advantages.module.scss'

export default function Advantages({title, data}) {
  return (
    <div className={styles.advantages}>
      <div className="container">
        <h2  uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: title}} />

        <ul uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 100;">
          {data.map(el => {
            if (el.title.length > 0) {
              return (
                <li uk-scrollspy-class="uk-animation-fade" key={el.title} className={styles.advantage}>
                  <div className={styles.advantage__icon}>
                    <img src={el.icon} alt="" />
                  </div>
    
                  <h3 dangerouslySetInnerHTML={{__html: el.title}} />
                  <p dangerouslySetInnerHTML={{__html: el.subtitle}} />
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}