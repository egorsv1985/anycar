import styles from '../styles/Subscribe.module.scss'
import Button from "./Button";
import Modal from "./Modal";
import {useEffect, useState} from "react";

export default function Subscribe({title, subtitle, button, lang, shadow}) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <section className={styles.subscribe}>
      <div className={`container ${shadow === 'false' ? styles.withoutShadow : '' }`}>
        <div className={styles.subscribe__left}>
          <h2 dangerouslySetInnerHTML={{__html: title}} />
          <p dangerouslySetInnerHTML={{__html: subtitle}} />
        </div>
        <Button text={button} onClick={() => setOpen(true)} />
      </div>
    </section>
    <Modal open={open} setOpen={setOpen} title={lang === 'ru' ? "Подписаться на новости" : "Підписатись на новини"} email={true} lang={lang} />
    </>
  )
}