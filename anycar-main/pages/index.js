
import {useEffect, useState} from "react";

//Styles
import styles from '../styles/Home.module.scss'

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import VideoBlock from "../components/VideoBlock";
import Owners from "../components/Owners";
import Cars from "../components/Cars";
import Feedback from "../components/Feedback";
import Reviews from "../components/Reviews";
import Info from "../components/Info";
import Questions from "../components/Questions";
import Modal from "../components/Modal";
import Income from "../components/Income";
import Loader from "../components/Loader";

//Libs
import { motion } from "framer-motion"

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)
  
  const [open, setOpen] = useState(false);

  const [lang, setLang] = useState("ru");

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    dispatch(fetchPage(64));
    setTimeout(() => setLoader(false), 1000)
  },[])

  return (
    <>
      {Object.keys(page).length > 0 &&
        <div>
          <Header lang={lang} translateLink={page.translation_url} />

          <main className={styles.main}>
            <motion.img 
              initial={{ translateY: "40px", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1}}
              transition={{ duration: 1 }}
              alt=""

              style={{top: "-350px", right: "-200px"}}
              className="decor" src="/images/bg-decor/2.png" 
            />

            <motion.img 
              initial={{ translateY: "40px", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1}}
              transition={{ duration: 1 }}
              alt=""

              style={{top: "500px", left: "-500px"}}
              className="decor" src="/images/bg-decor/4.png" 
            />

            <section className={styles.top} style={{backgroundImage: `url(${page.post_custom.mainpicture})`}}>
              <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                <div className={styles.top__left}>
                  <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.block_1_title }} />
                  <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.block_1_desc }} />
                  <div className={`uk-scrollspy-class ${styles.top__left_bottom}`}>
                    <Button text="Оставить заявку" onClick={() => setOpen(true)} />
                    <a href={`tel: ${page.post_custom.phone}`}>
                      <span>{page.post_custom.phone}</span>
                      <img alt="" src="/images/icons/arrow.svg" />
                    </a>
                  </div>
                </div>
                <img alt="" className={styles.top__right} src={page.post_custom.mainpicture} />
              </div>
              <motion.img 
                initial={{ translateY: "40px", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1}}
                transition={{ duration: 1 }}
                alt=""

                style={{top: 0, left: "-100px"}}
                className="decor" src="/images/bg-decor/1.png" 
              />

              <div className="container" uk-scrollspy="cls: uk-animation-fade">
                <ul>
                  <li>
                    <img alt="" src={page.post_custom.iconadv1} />
                    {page.post_custom.adv_1}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.iconadv2} />
                    {page.post_custom.adv_2}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.iconadv3} />
                    {page.post_custom.adv_3}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.iconadv4}/>
                    {page.post_custom.adv_4}
                  </li>
                </ul>
              </div>
            </section>

            <section className={styles.opportunities}>
              <div className="container">
                <h2 uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: page.post_custom.title2}} />
                {page.post_custom.linkcard2.length > 0 &&
                  <ul className={styles.opportunities__list} uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 100;">
                    <li className={styles.opportunity}>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__big}>
                        <a href={page.post_custom.linkcard1}>
                          <img alt="" src={page.post_custom.picture1} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard1}} />
                          <p dangerouslySetInnerHTML={{__html: page.post_custom.desccard1}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard1}} />
                        </a>
                      </div>

                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__small}>
                        <a href={page.post_custom.linkcard2}>
                          <img alt="" src={page.post_custom.picture2} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.desccard2}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard2}} />
                        </a>
                      </div>
                    </li>

                    <li className={styles.opportunity}>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__small}>
                        <a href={page.post_custom.linkcard3}>
                          <img alt="" src={page.post_custom.picture3} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard3}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard3}} />
                        </a>
                      </div>

                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__big}>
                        <a href={page.post_custom.linkcard4}>
                          <img alt="" src={page.post_custom.picture4} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard4}} />
                          <p dangerouslySetInnerHTML={{__html: page.post_custom.desccard4}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard4}} />
                        </a>
                      </div>
                    </li>

                    <li className={styles.opportunity}>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__big}>
                        <a href={page.post_custom.linkcard5}>
                          <img alt="" src={page.post_custom.picture5} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard5}} />
                          <p dangerouslySetInnerHTML={{__html: page.post_custom.desccard5}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard5}} />
                        </a>
                      </div>

                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__small}>
                        <a href={page.post_custom.linkcard6}>
                          <img alt="" src={page.post_custom.picture6} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard6}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard6}} />
                        </a>
                      </div>
                    </li>
                  </ul>
                }

                {page.post_custom.linkcard2.length === 0 &&
                  <ul className={`${styles.opportunities__list} ${styles.five}`} uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 100;">
                    <li className={styles.opportunity}>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__big}>
                        <a href={page.post_custom.linkcard1}>
                          <img alt="" src={page.post_custom.picture1} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard1}} />
                          <p dangerouslySetInnerHTML={{__html: page.post_custom.desccard1}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard1}} />
                        </a>
                      </div>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__big}>
                        <a href={page.post_custom.linkcard4}>
                          <img alt="" src={page.post_custom.picture4} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard4}} />
                          <p dangerouslySetInnerHTML={{__html: page.post_custom.desccard4}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard4}} />
                        </a>
                      </div>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__big}>
                        <a href={page.post_custom.linkcard5}>
                          <img alt="" src={page.post_custom.picture5} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard5}} />
                          <p dangerouslySetInnerHTML={{__html: page.post_custom.desccard5}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard5}} />
                        </a>
                      </div>
                    </li>

                    <li className={styles.opportunity}>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__small}>
                        <a href={page.post_custom.linkcard3}>
                          <img alt="" src={page.post_custom.picture3} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard3}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard3}} />
                        </a>
                      </div>
                      <div uk-scrollspy-class="uk-animation-fade" className={styles.opportunity__small}>
                        <a href={page.post_custom.linkcard6}>
                          <img alt="" src={page.post_custom.picture6} />
                          <h3 dangerouslySetInnerHTML={{__html: page.post_custom.titlecard6}} />
                          <span dangerouslySetInnerHTML={{__html: page.post_custom.buttoncard6}} />
                        </a>
                      </div>
                    </li>
                  </ul>
                }
              </div>
            </section>

            <section className={styles.income}>
              <Income 
                image={page.post_custom.picturecta1} 
                title={page.post_custom.titlecta1}
                subtitle={page.post_custom.desccta1}
                buttonText={page.post_custom.buttoncta1}
                buttonLink={page.post_custom.linkcta1}
              />
            </section>

            <section className={styles.videoBlock}>
              <VideoBlock 
                title={page.post_custom.titlevideo}
                image={page.post_custom.picturevideo}
                video={page.post_custom.linkvideo}
              />
            </section>

            <section className={styles.owners}>
              <Owners 
                owner1={{
                  image: page.post_custom.Picture_owner1,
                  name: page.post_custom.name1,
                  position: page.post_custom.position1,
                  description: page.post_custom.desc1,
                  instagram: page.post_custom.instagram1,
                  facebook: page.post_custom.facebook1,
                }}

                owner2={{
                  image: page.post_custom.Picture_owner2,
                  name: page.post_custom.name2,
                  position: page.post_custom.position2,
                  description: page.post_custom.desc2,
                  instagram: page.post_custom.instagram2,
                  facebook: page.post_custom.facebook2,
                }}
              />
            </section>

            <section className={styles.cars}>
              <Cars 
                setOpen={setOpen} 
                lang={lang}
                cars={page.cars}
                title={page.post_custom.carstitle}
                subtitle={page.post_custom.carssubtitle}
              />
            </section>

            <section className={styles.feedback}>
              <Feedback 
                image={page.post_custom.Picture_СТА}
                title={page.post_custom.Title_CTA}
                subtitle={page.post_custom.Desc_CTA}
                button={page.post_custom.Button_CTA}
                phone={page.post_custom.phonenumber}
                lang={lang}
              />
            </section>

            {page.reviews.length > 0 &&
              <section className={styles.reviews}>
                <Reviews 
                  title={page.post_custom.Title_video_home} 
                  description={page.post_custom.Desc_reviews_home} 
                  data={page.reviews}
                />
              </section>
            }

            <section className={styles.info}>
              <Info data={page.post_custom.SEO_text_home} lang={lang} />
            </section>

            <section className={styles.questions}>
              <Questions title={page.post_custom.Title_faq_home} data={page.faqs} />
            </section>

          </main>

          <Footer lang={lang} />
          <Modal open={open} setOpen={setOpen} title="Оставьте заявку" name={true} phone={true} lang={lang} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
