import styles from '../styles/Requirements.module.scss'

export default function Requirements({image, title, data}) {
  return (
    <div className={styles.requirements}>
      <div className="container">
        <h2 uk-scrollspy="cls: uk-animation-fade" dangerouslySetInnerHTML={{__html: title}} />
        <div className={styles.requirements__content}>
          <img alt="" uk-scrollspy="cls: uk-animation-fade" src={image} />
          
          <ul uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
            {data.map(el => {
              if (el.title.length > 0) {
                return (
                  <li className="uk-scrollspy-class" key={el.title}>
                    <img alt="" src={el.icon} />
                    {el.title}
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