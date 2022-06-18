
import {useState, useEffect} from "react";
import styles from '../styles/Policy.module.scss'

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPolicy, fetchAgreement} from "../redux/actions";

export default function Policy() {
  const dispatch = useDispatch()
  const policy = useSelector((state) => state.policy)
  const agreement = useSelector((state) => state.agreement)

  const [active, setActive] = useState("policy")

  const [lang, setLang] = useState("ru");

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    dispatch(fetchPolicy(lang));
    dispatch(fetchAgreement(lang));
    setTimeout(() => setLoader(false), 1000)
  },[])

  return (
    <>
      {Object.keys(policy).length > 0 && Object.keys(agreement).length > 0 &&
        <div>
          <Header lang={lang} translateLink={policy.translation_url} />

          <main className={styles.main}>
            <section className={styles.policy}>
              <div className="container">
                <div className={styles.policy__toggle}>
                  <li className={active === "policy" ? styles.active : ''} onClick={() => setActive("policy")}>Политика конфиденциальности</li>
                  <li className={active === "agreement" ? styles.active : ''} onClick={() => setActive("agreement")}>Пользовательское соглашение</li>
                </div>
                
              {active === "policy" &&
                <>
                  <h1 dangerouslySetInnerHTML={{__html: policy.post_title}} />
                  <div dangerouslySetInnerHTML={{__html: policy.post_content}} />
                </>
              }

              {active === "agreement" &&
                <>
                  <h1 dangerouslySetInnerHTML={{__html: agreement.post_title}} />
                  <div dangerouslySetInnerHTML={{__html: agreement.post_content}} />
                </>
              }
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