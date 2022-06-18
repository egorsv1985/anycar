import styles from '../styles/Steps.module.scss'
import Button from "./Button";

export default function Steps({image, setOpen, title, subtitle, button, data}) {
  return (
    <div className={styles.steps}>
      <div className="container" uk-scrollspy="cls: uk-animation-fade">
        <img alt="" src={image} />

        <h2 dangerouslySetInnerHTML={{__html: title}} />

        <ul>
          {data.map(el => {
            if (el.length > 0) {
              return (
                <li key={el}>
                  <span>{data.indexOf(el)+1}</span>
                  {el}
                </li>
              )
            }
          })}
        </ul>

        <p dangerouslySetInnerHTML={{__html: subtitle}} />

        <Button text={button} white={true} onClick={() => setOpen(true)} />
      </div>
    </div>
  )
}