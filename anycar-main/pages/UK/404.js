
import {useEffect, useState} from "react";
import styles from '../../styles/404.module.scss'

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from '../../components/Button';
import Loader from "../../components/Loader";

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../../redux/actions";


export default function Article() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)

  const [lang, setLang] = useState("uk");

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    dispatch(fetchPage(197));
    setTimeout(() => setLoader(false), 1000)
  },[])

  return (
    <>
      {Object.keys(page).length > 0 &&
        <div>
          <Header lang={lang} translateLink={page.translation_url} />

          <main className={styles.main}>
            <section className={styles.error}>
              <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                <img alt="" src={page.post_custom.picture404} />
                <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.title404}} />
                <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.desc404}} />
                <a className="uk-scrollspy-class" href="/uk/">
                  <Button text={page.post_custom.buttonname404} />
                </a>
              </div>
            </section>
          </main>

          <Footer lang={lang} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
