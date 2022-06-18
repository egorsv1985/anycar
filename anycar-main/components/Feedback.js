import styles from '../styles/Feedback.module.scss'
import {useState} from "react";
import Button from "./Button";
import Modal from "../components/Modal";

export default function Feedback({title, subtitle, button, phone, image, link, owner, lang}) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className={`${styles.feedback} ${owner ? styles.owner : ''}`} uk-scrollspy="cls: uk-animation-fade">
      <div className="container">
        <img alt="" className={styles.feedback__left} src={image} />
        <div className={styles.feedback__right}>
          <h2 dangerouslySetInnerHTML={{__html: title}} />

          <p dangerouslySetInnerHTML={{__html: subtitle}} />

          <div className={styles.feedback__right_bottom}>
            {!link &&
              <Button text={button} white={true} onClick={() => setOpen(true)} />
            }

            {link &&
              <a href={link}>
                <Button text={button} white={true} />
              </a>
            }
            
            <a href={`tel: ${phone}`}>
              {phone}
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#ffffff"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Modal open={open} setOpen={setOpen} title="Оставьте заявку" name={true} phone={true} lang={lang} />
    </>
  )
}