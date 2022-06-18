import styles from '../styles/Owners.module.scss'

export default function Owners({owner1, owner2}) {
  return (
    <div className={styles.owners}>
      <img alt="" style={{width: "700px", top: "-300px", left: "70%"}} className="decor" src="/images/bg-decor/2.png" />
      <div className="container">
        <div className={styles.owner} uk-scrollspy="cls: uk-animation-slide-left-medium">
          <img alt="" src={owner1.image} />
          <div className={styles.owner__info}>
            <h3 dangerouslySetInnerHTML={{__html: owner1.name}} />
            <span dangerouslySetInnerHTML={{__html: owner1.position}} />
            <p dangerouslySetInnerHTML={{__html: owner1.description}}/>
            <div className={styles.owner__socials}>
              <a href={owner1.instagram} target="_blank" rel="noopener">INSTAGRAM</a>
              <span>-</span>
              <a href={owner1.facebook} target="_blank" rel="noopener">FACEBOOK</a>
            </div>

            <img alt="" src="/images/mainPage/owner-decor.png"  className={styles.owner__decor}/>
          </div>
        </div>
        <div className={styles.owner} uk-scrollspy="cls: uk-animation-slide-right-medium">
          <img alt="" src={owner2.image} />
          <div className={styles.owner__info}>
            <h3 dangerouslySetInnerHTML={{__html: owner2.name}} />
            <span dangerouslySetInnerHTML={{__html: owner2.position}} />
            <p dangerouslySetInnerHTML={{__html: owner2.description}}/>
            <div className={styles.owner__socials}>
              <a href={owner2.instagram} target="_blank" rel="noopener">INSTAGRAM</a>
              <span>-</span>
              <a href={owner2.facebook} target="_blank" rel="noopener">FACEBOOK</a>
            </div>

            <img alt="" src="/images/mainPage/owner-decor.png"  className={styles.owner__decor}/>
          </div>
        </div>
      </div>
    </div>
  )
}