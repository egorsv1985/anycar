import styles from '../styles/Income.module.scss'
import Button from "./Button";

export default function Income({image, title, subtitle, buttonText, buttonLink, paddingBottom}) {
  return (
    <div className={styles.income} style={{paddingBottom: paddingBottom}} uk-scrollspy="cls: uk-animation-fade">
       <img alt="" style={{top: "-300px", right: "-600px"}} className="decor" src="/images/bg-decor/4.png" />
      <div className="container">
        <div className={styles.income__left}>
          <h2 dangerouslySetInnerHTML={{__html: title}} />

          <p dangerouslySetInnerHTML={{__html: subtitle}} />
          
          <a href={buttonLink}>
            <Button text={buttonText} white={true} />
          </a>
        </div>

        <img alt="" className={styles.income__right} src={image} />
      </div>
    </div>
  )
}