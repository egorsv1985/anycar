import styles from '../styles/Owner.module.scss'
import Button from "./Button";

export default function Owner({image, title, subtitle, button, link}) {
  return (
    <div className={styles.owner} uk-scrollspy="cls: uk-animation-slide-left-medium">
      <div className="container">
        <img alt="" src={image} />
        
        <div className={styles.owner__right}>
          <h2 dangerouslySetInnerHTML={{__html: title}} />

          <p dangerouslySetInnerHTML={{__html: subtitle}} />

          <a href={link}>
            <Button text={button}/>
          </a>
        </div>
      </div>
    </div>
  )
}