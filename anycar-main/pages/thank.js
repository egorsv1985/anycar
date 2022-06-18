import {useEffect, useState} from "react";
import styles from '../styles/404.module.scss'

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from '../components/Button';
import Loader from "../components/Loader";

export default function Thank() {

  const [lang, setLang] = useState("ru");
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000)
  }, [])

  return (
    <>
      <div>
        <Header lang={lang} translateLink={"/storinka-podyaky/"} />

        <main className={styles.main}>
          <section className={styles.error}>
            <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
              <img alt="" src="/images/thank.png" style={{maxWidth: "270px"}} />
              <h1 className="uk-scrollspy-class">Ваши данные успешно отправленны!</h1>
              <p className="uk-scrollspy-class">Мы перезвоним Вам в течении 15 минут</p>
              <a className="uk-scrollspy-class" href="/">
                <Button text="Перейти к главной" />
              </a>
            </div>
          </section>
        </main>

        <Footer lang={lang} />
      </div>

      {loader &&
        <Loader />
      }
    </>
  )
}