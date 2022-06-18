
import styles from '../styles/Rent.module.scss'
import {useEffect, useState} from "react";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import VideoBlock from "../components/VideoBlock";
import Feedback from "../components/Feedback";
import Reviews from "../components/Reviews";
import Info from "../components/Info";
import Questions from "../components/Questions";
import Modal from "../components/Modal";
import Popup from "../components/Popup";
import Steps from "../components/Steps";
import Advantages from "../components/Advantages";
import Benefits from "../components/Benefits";
import GetPdf from "../components/GetPdf";
import Owner from "../components/Owner";
import Cars from "../components/Cars";
import Loader from "../components/Loader";

//Libs
import { Range, getTrackBackground } from 'react-range';

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../redux/actions";

export default function Home() {
  const [open, setOpen] = useState(false);

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [investments, setInvestments] = useState([50000])
  const [years, setYears] = useState([3])

   //Api
   const dispatch = useDispatch()
   const page = useSelector((state) => state.page)
   
   const [lang, setLang] = useState("ru");

   const [loader, setLoader] = useState(true)
 
   useEffect(() => {
     dispatch(fetchPage(142));
     setTimeout(() => setLoader(false), 1000)
   }, [])

  return (
    <>
      {Object.keys(page).length > 0 &&
        <div>
          <Header lang={lang} white={true} translateLink={page.translation_url} />

          <main className={styles.main}>
            <section className={styles.top}>
              <div className="container">
                <div className={styles.top__left} uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                  <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.titleh1moneyinvest}} />
                  <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.descmoneyinvest}} />
                  <div className={`uk-scrollspy-class ${styles.top__left_bottom}`}>
                    <Button text={page.post_custom.button1titlemoneyinvest} white={true} onClick={() => setIsModalOpen(true)} />
                    <div className={styles.video} onClick={() => setOpen(true)}>
                      <img alt="" src="/images/icons/play-white.png" />
                      {page.post_custom.buttonplayvideotitlemoneyinvest}
                    </div>
                  </div>
                </div>

                <img alt="" className={styles.top__right} src={page.post_custom.picture1moneyinvest} />
              </div>
            </section>

            <section className={styles.videoBlock}>
              <VideoBlock 
                title={page.post_custom.titlevideo2titlemoneyinvest}
                image={page.post_custom.picturevideo2moneyinvest}
                video={page.post_custom.linkvideo2moneyinvest}
              />
            </section>

            <section className={styles.benefits}>
              <Benefits 
                image={page.post_custom.picturemainadvmoneyinvest} 
                title={page.post_custom.titlmainadvmoneyinvest}
                data={[
                  {
                    icon: page.post_custom.picture1advmoneyinvest,
                    title: page.post_custom.adv1moneyinvest,
                    subtitle: page.post_custom.des1moneyinvest
                  },
                  {
                    icon: page.post_custom.picture2advmoneyinvest,
                    title: page.post_custom.adv2moneyinvest,
                    subtitle: page.post_custom.des2moneyinvest
                  },
                  {
                    icon: page.post_custom.picture3advmoneyinvest,
                    title: page.post_custom.adv3moneyinvest,
                    subtitle: page.post_custom.des3moneyinvest
                  },
                  {
                    icon: page.post_custom.picture4advmoneyinvest,
                    title: page.post_custom.adv4moneyinvest,
                    subtitle: page.post_custom.des4moneyinvest
                  },
                ]}
              />
            </section>

            <section className={styles.calculator}>
              <div className="container">
                <h2 uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: page.post_custom.title1calculatormoneyinvest}} />
                <div className={styles.calc} uk-scrollspy="cls: uk-animation-fade">
                  <div className={styles.calc__left}>
                    <div className={styles.calc__left_top}>
                      <p>Ваши первоначальные инвестиции, $</p>
                      <div className={styles.calc__range_numbers}>
                        <span>3 000</span>
                        <span>100 000</span>
                      </div>
                      <Range
                        step={500}
                        min={3000}
                        max={100000}
                        values={investments}
                        onChange={(value) => setInvestments(value)}
                        renderTrack={({ props, children }) => (
                          <div
                            className={styles.calc__range}
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{...props.style}}
                          >
                            <div
                              className={styles.calc__range_track}
                              ref={props.ref}
                              style={{
                                borderRadius: "30px",
                                boxShadow: "0px 3px 7px rgba(82, 93, 255, 0.25)",
                                background: getTrackBackground({
                                  values: investments,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 3000,
                                  max: 100000
                                }),
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            className={styles.calc__range_thumb}
                            {...props}
                            style={{
                              ...props.style,
                              height: '16px',
                              width: '16px',
                              borderRadius: '50%',
                              background: 'linear-gradient(90deg, #4CB7CC 0%, #52DAAC 100%)',
                              border: '2px solid #FFFFFF'
                            }}
                          >
                            <span>{investments[props.key]}</span>
                          </div>
                        )}
                      />

                      <p>Cроки инвестирования, лет</p>
                      <div className={styles.calc__range_numbers}>
                        <span>1</span>
                        <span>5</span>
                      </div>
                      <Range
                        step={1}
                        min={1}
                        max={5}
                        values={years}
                        onChange={(value) => setYears(value)}
                        renderTrack={({ props, children }) => (
                          <div
                            className={styles.calc__range}
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{...props.style}}
                          >
                            <div
                              className={styles.calc__range_track}
                              ref={props.ref}
                              style={{
                                borderRadius: "30px",
                                boxShadow: "0px 3px 7px rgba(82, 93, 255, 0.25)",
                                background: getTrackBackground({
                                  values: years,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 1,
                                  max: 5
                                }),
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            className={styles.calc__range_thumb}
                            {...props}
                            style={{
                              ...props.style,
                              height: '16px',
                              width: '16px',
                              borderRadius: '50%',
                              background: 'linear-gradient(90deg, #4CB7CC 0%, #52DAAC 100%)',
                              border: '2px solid #FFFFFF'
                            }}
                          >
                            <span>{years[props.key]}</span>
                          </div>
                        )}
                      />
                    </div>
                    <ul className={styles.calc__left_bottom}>
                      <li>
                        <span>{investments} $</span>
                        Cумма ваших вложений
                      </li>
                      <li>
                        <span>{Math.round(investments * 0.15 * years).toLocaleString()} $</span>
                        Ориентировочная сумма накоплений
                      </li>
                    </ul>
                  </div>
                  <div className={styles.calc__right}>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title2calculatormoneyinvest}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desccalculatormoneyinvest}} />
                    <Button text={page.post_custom.buttoncalculatormoneyinvest} arrow={true} white={true} onClick={() => setIsModalOpen(true)} />

                    <img alt="" src={page.post_custom.picturecalculatormoneyinvest} />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.cars}>
              <Cars 
                setOpen={setIsModalOpen} 
                lang={lang}
                cars={page.cars}
                title={page.post_custom.carstitle}
                subtitle={page.post_custom.carssubtitle}
              />
            </section>

            <section className={styles.advantages1}>
              <Advantages 
                title={page.post_custom.titlebenefitsmoneyinvest}
                data={[
                  {
                    icon: page.post_custom.icon1benefitsmoneyinvest, 
                    title: page.post_custom.title1benefits1moneyinvest,
                    subtitle: page.post_custom.desc1benefits1moneyinvest
                  },
                  {
                    icon: page.post_custom.icon2benefitsmoneyinvest, 
                    title: page.post_custom.title2benefits2moneyinvest,
                    subtitle: page.post_custom.desc2benefits2moneyinvest
                  },
                  {
                    icon: page.post_custom.icon3benefitsmoneyinvest, 
                    title: page.post_custom.title3benefits3moneyinvest,
                    subtitle: page.post_custom.desc3benefits3moneyinvest
                  },
                  {
                    icon: page.post_custom.icon4benefitsmoneyinvest, 
                    title: page.post_custom.title4benefits4moneyinvest,
                    subtitle: page.post_custom.desc4benefits4moneyinvest
                  },
                  {
                    icon: page.post_custom.icon5benefitsmoneyinvest, 
                    title: page.post_custom.title5benefits5moneyinvest,
                    subtitle: page.post_custom.desc5benefits5moneyinvest
                  },
                  {
                    icon: page.post_custom.icon6benefitsmoneyinvest, 
                    title: page.post_custom.title6benefits6moneyinvest,
                    subtitle: page.post_custom.desc6benefits6moneyinvest
                  },
                ]}
              />
            </section>

            <GetPdf
              lang={lang}
              title={page.post_custom.titlefilemoneyinvest}
              data={[
                page.post_custom.desc1filemoneyinvest,
                page.post_custom.desc2filemoneyinvest,
                page.post_custom.desc3filemoneyinvest,
              ]}
              image={page.post_custom.picture1filemoneyinvest}
              imageMobile={page.post_custom.picture2filemoneyinvest}
              formTitle={page.post_custom.title2filemoneyinvest}
              formSocial={page.post_custom.buttonfilemoneyinvest}
              policy={page.post_custom.descbuttonfilemoneyinvest}
            />

            <section className={styles.steps1}>
              <Steps 
                setOpen={setIsModalOpen} 
                title={page.post_custom.title1ctamoneyinvest}
                subtitle={page.post_custom.desccta1moneyinvest}
                button={page.post_custom.button1ctamoneyinvest}
                image={page.post_custom.pic1ctamoneyinvest}
                data={[
                  page.post_custom.tit1ctamoneyinvest,
                  page.post_custom.tit2ctamoneyinvest,
                  page.post_custom.tit3ctamoneyinvest,
                  page.post_custom.tit4ctamoneyinvest,
                  page.post_custom.tit5ctamoneyinvest,
                ]}
              />
            </section>

            <section className={styles.owner1}>
              <Owner
                image={page.post_custom.picturecta3moneyinvest}
                title={page.post_custom.titlecta3moneyinvest}
                subtitle={page.post_custom.desccta3moneyinvest}
                button={page.post_custom.button1cta3moneyinvest}
                link={page.post_custom.button1cta3linkmoneyinvest}
              />
            </section>

            {page.reviews.length > 0 &&
              <section className={styles.reviews}>
                <Reviews 
                  title={page.post_custom.titlevideomoneyinvest}
                  description={page.post_custom.descvideomoneyinvest}
                  data={page.reviews}
                />
              </section>
            }

            <section className={styles.info}>
              <Info data={page.post_custom.seotextmoneyinvest}/>
            </section>

            <section className={styles.questions}>
              <Questions title={page.post_custom.titlefaqmoneyinvest} data={page.faqs} />
            </section>

            <section className={styles.feedback }>
              <Feedback 
                image={page.post_custom.piccta4moneyinvest}
                title={page.post_custom.titcta4moneyinvest}
                subtitle={page.post_custom.descta4moneyinvest}
                button={page.post_custom.buttoncta4moneyinvest}
                phone={page.post_custom.phonecta4moneyinvest}
                link={page.post_custom.buttoncta4linkmoneyinvest}
                owner={true}
                lang={lang}
              />
            </section>
          </main>

          <Footer lang={lang} />
          <Popup open={open} setOpen={setOpen} video={page.post_custom.buttonplayvideolinkmoneyinvest} />
          <Modal open={isModalOpen} setOpen={setIsModalOpen} title="Оставьте заявку" name={true} phone={true} lang={lang} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}