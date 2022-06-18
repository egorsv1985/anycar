import {useState, useEffect} from "react";
import styles from '../../styles/About.module.scss'

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";
import VideoBlock from "../../components/VideoBlock";
import Owners from "../../components/Owners";
import Feedback from "../../components/Feedback";
import Reviews from "../../components/Reviews";
import Info from "../../components/Info";
import Questions from "../../components/Questions";
import Loader from "../../components/Loader";

//Libs
import { motion } from "framer-motion"

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../../redux/actions";

export default function About() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)

  const [open, setOpen] = useState(false);

  const [lang, setLang] = useState("uk");

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    dispatch(fetchPage(103));
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

              style={{top: "70px", left: "-550px"}}
              className="decor" src="/images/bg-decor/4.png" 
            />
            
            <section className={styles.about}>
              <motion.img 
                initial={{ translateY: "40px", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1}}
                transition={{ duration: 1 }}
                alt=""

                style={{top: "150px", left: "50%"}}
                className="decor" src="/images/bg-decor/3.png" 
              />

              <motion.img 
                initial={{ translateY: "40px", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1}}
                transition={{ duration: 1 }}
                alt=""

                style={{width: "700px", top: "100px", left: "70%"}}
                className="decor" src="/images/bg-decor/2.png" 
              />
              <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.maintitleabout}} />
                <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.maindescabout}} />
                <div className={styles.about__info}>
                  <div className={styles.about__info_left} uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 100;">
                    <div className={styles.column}>
                      <div uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.titleadv1about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.descadv1about}} />
                      </div>
                      <div uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.titleadv2about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.descadv2about}} />
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.titleadv3about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.descadv3about}} />
                      </div>
                      <div uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.titleadv4about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.descadv4about}} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.about__info_right} uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 100;">
                    <p uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: page.post_custom.title2adv2about2}} />
                    <ul>
                      <li uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.title2adv1about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.desc2adv1about}} />
                      </li>
                      <li uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.title2adv2about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.desc2adv2about}} />
                      </li>
                      <li uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.title2adv3about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.desc2adv3about}} />
                      </li>
                      <li uk-scrollspy-class="uk-animation-fade">
                        <span dangerouslySetInnerHTML={{__html: page.post_custom.title2adv4about}} />
                        <p dangerouslySetInnerHTML={{__html: page.post_custom.desc2adv4about}} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.success}>
              <div className="container">
                <h2 uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: page.post_custom.titlehistoryabout}} />
                <ul className={styles.stepsTop} uk-scrollspy="cls: uk-animation-slide-right-medium">
                  <li className={styles.step}>
                    <span className={styles.step__year}>{page.post_custom.year1historyabout}</span>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title1historyabout}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desc1historyabout}} />
                  </li>
                  <li className={styles.step}>
                    <span className={styles.step__year}>{page.post_custom.year2historyabout}</span>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title2historyabout}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desc2historyabout}} />
                  </li>
                  <li className={styles.step}>
                    <span className={styles.step__year}>{page.post_custom.year3historyabout}</span>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title3historyabout}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desc3historyabout}} />
                  </li>
                  <li className={styles.step}>
                    <span className={styles.step__year}>{page.post_custom.year4historyabout}</span>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title4historyabout}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desc4historyabout}} />
                  </li>
                </ul>
              </div>
              <div className="container">
                <ul className={styles.stepsBottom} uk-scrollspy="cls: uk-animation-slide-left-medium">
                  <li className={styles.step}>
                    <span className={styles.step__year}>{page.post_custom.year5historyabout}</span>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title5historyabout}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desc5historyabout}} />
                  </li>
                  <li className={styles.active}>
                    <span className={styles.active__year}>{page.post_custom.year6historyabout}</span>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title6historyabout}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desc6historyabout}} />
                  </li>
                </ul>
              </div>
            </section>
            
            <section className={styles.feedback}>
              <Feedback 
                title={page.post_custom.titlequastions1}
                subtitle={page.post_custom.descquastions1}
                button={page.post_custom.buttonquastions1}
                phone={page.post_custom.numberquastions1}
                image={page.post_custom.picturequastions1}
                lang={lang}
              />
            </section>

            <section className={styles.videoBlock}>
              <VideoBlock 
                title={page.post_custom.titlevideoabout} 
                image={page.post_custom.picturevideoabout}
                video={page.post_custom.linkyoutubevideoabout}
              />
            </section>

            <section className={styles.owners}>
              <Owners 
                owner1={{
                  image: page.post_custom.pictureowner1about,
                  name: page.post_custom.nameowner1about,
                  position: page.post_custom.positionowner1about,
                  description: page.post_custom.descowner1about,
                  instagram: page.post_custom.instowner1about,
                  facebook: page.post_custom.fbowner1about,
                }}

                owner2={{
                  image: page.post_custom.pictureowner2about,
                  name: page.post_custom.nameowner2about,
                  position: page.post_custom.positionowner2about,
                  description: page.post_custom.descowner2about,
                  instagram: page.post_custom.instowner2about,
                  facebook: page.post_custom.fbowner2about,
                }}
              />
            </section>

            <section className={styles.feedback}>
              <Feedback 
                title={page.post_custom.titleworkabout}
                subtitle={page.post_custom.descworkabout}
                button={page.post_custom.buttonworkabout}
                phone={page.post_custom.numberworkabout}
                image={page.post_custom.pictureworkabout}
                lang={lang}
              />
            </section>

            {page.reviews.length > 0 &&
              <section className={styles.reviews}>
                <Reviews 
                  title={page.post_custom.titlereviewsabout} 
                  description={page.post_custom.desc_reviewsabout} 
                  data={page.reviews}
                />
              </section>
            }

            <section className={styles.info}>
              <Info data={page.post_custom.seotextabout} />
            </section>

            <section className={styles.questions}>
              <Questions title={page.post_custom.titlefaqabout} data={page.faqs} />
            </section>
          </main>

          <Footer lang={lang} />
          <Popup open={open} setOpen={setOpen} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
