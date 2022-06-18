import {useEffect, useState} from "react";
import styles from '../../styles/404.module.scss'

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from '../../components/Button';
import Loader from "../../components/Loader";

export default function Thank() {

  const [lang, setLang] = useState("uk");

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000)
  }, [])

  return (
    <>
      <div>
        <Header lang={lang} translateLink={"/stranicza-blagodarnosti/"} />

        <main className={styles.main}>
          <section className={styles.error}>
            <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
              <img alt="" src="/images/thank.png" style={{maxWidth: "270px"}} />
              <h1 className="uk-scrollspy-class">Ваші дані успішно відправлені!</h1>
              <p className="uk-scrollspy-class">Ми передзвонимо Вам протягом 15 хвилин</p>
              <a className="uk-scrollspy-class" href="/uk/">
                <Button text="Перейти до головної" />
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
