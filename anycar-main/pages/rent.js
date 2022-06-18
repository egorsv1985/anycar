
import styles from '../styles/Rent.module.scss'
import { useEffect } from 'react';

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
import Loader from "../components/Loader";

//Libs
import {useState} from "react";
import Popup from "../components/Popup";
import { Range, getTrackBackground } from 'react-range';
import Requirements from "../components/Requirements";
import Steps from "../components/Steps";
import Advantages from "../components/Advantages";
import Benefits from "../components/Benefits";
import GetPdf from "../components/GetPdf";
import Owner from "../components/Owner";

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)

  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [monthly, setMonthly] = useState([50000])
  const [brand, setBrand] = useState([5000])
  const [auto, setAuto] = useState([50])

  const [lang, setLang] = useState("ru");

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    dispatch(fetchPage(88));
    setTimeout(() => setLoader(false), 1000)
  },[])

  return (
    <>
      {Object.keys(page).length > 0 &&
        <div>
          <Header lang={lang} white={true} translateLink={page.translation_url} />

          <main className={styles.main}>
            <section className={styles.top}>
              <div className="container">
                <div className={styles.top__left} uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                  <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.titleh1carinvest}} />
                  <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.desccarinvest}} />
                  <div className={`uk-scrollspy-class ${styles.top__left_bottom}`}>
                    <Button text={page.post_custom.button1carinvest} white={true} onClick={() => setIsModalOpen(true)} />
                    <div className={styles.video} onClick={() => setOpen(true)}>
                      <img alt="" src="/images/icons/play-white.png" />
                      {page.post_custom.buttonplayvideotitlecarinvest}
                    </div>
                  </div>
                </div>

                <img alt="" className={styles.top__right} src={page.post_custom.picture1carinvest} style={{width: "50%", maxWidth: "800px"}} />
              </div>
            </section>

            <section className={styles.videoBlock}>
              <VideoBlock 
                title={page.post_custom.titlevideo2titlecarinvest}
                image={page.post_custom.picturevideo2carinvest}
                video={page.post_custom.linkvideo2carinvest}
              />
            </section>

            <section className={styles.calculator}>
              <div className="container">
                <h2 uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: page.post_custom.title1calculatorcarinvest}} />
                <div className={styles.calc} uk-scrollspy="cls: uk-animation-fade">
                  <div className={styles.calc__left}>
                    <div className={styles.calc__left_top}>
                      <p>Выручка за месяц, грн.</p>
                      <div className={styles.calc__range_numbers}>
                        <span>20 000</span>
                        <span>100 000</span>
                      </div>
                      <Range
                        step={500}
                        min={20000}
                        max={100000}
                        values={monthly}
                        onChange={(value) => setMonthly(value)}
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
                                  values: monthly,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 20000,
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
                            <span>{monthly[props.key]}</span>
                          </div>
                        )}
                      />

                      <p>Бонус за брендирование, грн.</p>
                      <div className={styles.calc__range_numbers}>
                        <span>3 000</span>
                        <span>8 000</span>
                      </div>
                      <Range
                        step={500}
                        min={3000}
                        max={8000}
                        values={brand}
                        onChange={(value) => setBrand(value)}
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
                                  values: brand,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 3000,
                                  max: 8000
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
                            <span>{brand[props.key]}</span>
                          </div>
                        )}
                      />

                      <p>Количество автомобилей</p>
                      <div className={styles.calc__range_numbers}>
                        <span>3</span>
                        <span>100</span>
                      </div>
                      <Range
                        step={1}
                        min={3}
                        max={100}
                        values={auto}
                        onChange={(value) => setAuto(value)}
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
                                  values: auto,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 3,
                                  max: 100
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
                            <span>{auto[props.key]}</span>
                          </div>
                        )}
                      />
                    </div>
                    <ul className={styles.calc__left_bottom}>
                      <li>
                        <span>{Math.round(((+monthly + +brand) * 0.1) * +auto).toLocaleString()}</span>
                        Чистая прибыль партнера в месяц (грн)
                      </li>
                      <li>
                        <span>{(auto * 7500).toLocaleString()}</span>
                        Средний пробег в мес (км)
                      </li>
                    </ul>
                  </div>
                  <div className={styles.calc__right}>
                    <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title2calculatorcarinvest}} />
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.desccalculatorcarinvest}} />
                    <Button text={page.post_custom.buttoncalculatorcarinvest} arrow={true} white={true} onClick={() => setIsModalOpen(true)} />

                    <img alt="" src={page.post_custom.picturecalculatorcarinvest} />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.advantages}>
              <Advantages 
                title={page.post_custom.titlebenefitscarsforinvest}
                data={[
                  {
                    icon: page.post_custom.icon1benefitscarsforinvest, 
                    title: page.post_custom.title1benefits1carsforinvest,
                    subtitle: page.post_custom.desc1benefits1carsforinvest
                  },
                  {
                    icon: page.post_custom.icon2benefitscarsforinvest, 
                    title: page.post_custom.title2benefits2carsforinvest,
                    subtitle: page.post_custom.desc2benefits2carsforinvest
                  },
                  {
                    icon: page.post_custom.icon3benefitscarsforinvest, 
                    title: page.post_custom.title3benefits3carsforinvest,
                    subtitle: page.post_custom.desc3benefits3carsforinvest
                  },
                  {
                    icon: page.post_custom.icon4benefitscarsforinvest, 
                    title: page.post_custom.title4benefits4carsforinvest,
                    subtitle: page.post_custom.desc4benefits4carsforinvest
                  },
                  {
                    icon: page.post_custom.icon5benefitscarsforinvest, 
                    title: page.post_custom.title5benefits5carsforinvest,
                    subtitle: page.post_custom.desc5benefits5carsforinvest
                  },
                  {
                    icon: page.post_custom.icon6benefitscarsforinvest, 
                    title: page.post_custom.title6benefits6carsforinvest,
                    subtitle: page.post_custom.desc6benefits6carsforinvest
                  },
                ]}
              />
            </section>

            <section className={styles.steps}>
              <Steps 
                setOpen={setIsModalOpen} 
                title={page.post_custom.title1ctacarinvest}
                subtitle={page.post_custom.desccta1carinvest}
                button={page.post_custom.button1ctacarinvest}
                image={page.post_custom.pic1ctacarinvest}
                data={[
                  page.post_custom.tit1ctacarinvest,
                  page.post_custom.tit2ctacarinvest,
                  page.post_custom.tit3ctacarinvest,
                  page.post_custom.tit4ctacarinvest,
                  page.post_custom.tit5ctacarinvest,
                ]}
              />
            </section>

            <section className={styles.autoPrices}>
              <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                <h2 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.titlecarsforinvest}} />
                <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.desccarsforinvest}} />

                <ul className="uk-scrollspy-class">
                  <li>
                    <img alt="" src={page.post_custom.picture1carsforinvest} />

                    <ul dangerouslySetInnerHTML={{__html: page.post_custom.desc1carsforinvest}} />

                    <p dangerouslySetInnerHTML={{__html: page.post_custom.price1carsforinvest}} />
                    <Button text={page.post_custom.but1carsforinvest} onClick={() => setIsModalOpen(true)} />
                  </li>

                  <li>
                    <img alt="" src={page.post_custom.picture2carsforinvest} />

                    <ul dangerouslySetInnerHTML={{__html: page.post_custom.desc2carsforinvest}} />

                    <p dangerouslySetInnerHTML={{__html: page.post_custom.price2carsforinvest}} />
                    <Button text={page.post_custom.but2carsforinvest} onClick={() => setIsModalOpen(true)} />
                  </li>

                  <li>
                    <img alt="" src={page.post_custom.picture3carsforinvest} />

                    <ul dangerouslySetInnerHTML={{__html: page.post_custom.desc3carsforinvest}} />

                    <p dangerouslySetInnerHTML={{__html: page.post_custom.price3carsforinvest}} />
                    <Button text={page.post_custom.but3carsforinvest} onClick={() => setIsModalOpen(true)} />
                  </li>
                </ul>
              </div>
            </section>

            <section className={styles.benefits}>
              <Benefits 
                image={page.post_custom.picturemainadvcarsforinvest} 
                title={page.post_custom.titlmainadvcarsforinvest}
                data={[
                  {
                    icon: page.post_custom.picture1advcarsforinvest,
                    title: page.post_custom.adv1carsforinvest,
                    subtitle: page.post_custom.des1carsforinvest
                  },
                  {
                    icon: page.post_custom.picture2advcarsforinvest,
                    title: page.post_custom.adv2carsforinvest,
                    subtitle: page.post_custom.des2carsforinvest
                  },
                  {
                    icon: page.post_custom.picture3advcarsforinvest,
                    title: page.post_custom.adv3carsforinvest,
                    subtitle: page.post_custom.des3carsforinvest
                  },
                  {
                    icon: page.post_custom.picture4advcarsforinvest,
                    title: page.post_custom.adv4carsforinvest,
                    subtitle: page.post_custom.des4carsforinvest
                  }
                ]}
              />
            </section>

            <GetPdf
              lang={lang}
              title={page.post_custom.titlefilecarsforinvest}
              data={[
                page.post_custom.desc1filecarsforinvest,
                page.post_custom.desc2filecarsforinvest,
                page.post_custom.desc3filecarsforinvest,
              ]}
              image={page.post_custom.picture1filecarsforinvest}
              imageMobile={page.post_custom.picture2filecarsforinvest}
              formTitle={page.post_custom.title2filecarsforinvest}
              formSocial={page.post_custom.buttonfilecarsforinvest}
              policy={page.post_custom.descbuttonfilecarsforinvest}
            />

            <section className={styles.owner}>
              <Owner
                image={page.post_custom.picturecta3carsforinvest}
                title={page.post_custom.titlecta3carsforinvest}
                subtitle={page.post_custom.desccta3carsforinvest}
                button={page.post_custom.button1cta3carsforinvest}
                link={page.post_custom.button1cta3linkcarsforinvest}
              />
            </section>

            {page.reviews.length > 0 &&
              <section className={styles.reviews}>
                <Reviews 
                  title={page.post_custom.titlevideocarsforinvest}
                  description={page.post_custom.descvideocarsforinvest}
                  data={page.reviews}
                />
              </section>
            }

            <section className={styles.info}>
              <Info data={page.post_custom.seotextcarsforinvest}/>
            </section>

            <section className={styles.questions}>
              <Questions title={page.post_custom.titlefaqcarsforinvest} data={page.faqs} />
            </section>

            <section className={styles.feedback }>
              <Feedback 
                image={page.post_custom.piccta4carsforinvest}
                title={page.post_custom.titcta4carsforinvest}
                subtitle={page.post_custom.descta4carsforinvest}
                button={page.post_custom.buttoncta4carsforinvest}
                phone={page.post_custom.phonecta4carsforinvest}
                link={page.post_custom.buttoncta4linkcarsforinvest}
                owner={true}
                lang={lang}
              />
            </section>
          </main>

          <Footer lang={lang} />
          <Popup open={open} setOpen={setOpen} video={page.post_custom.buttonplayvideolinkcarinvest} />
          <Modal open={isModalOpen} setOpen={setIsModalOpen} title="Оставьте заявку" name={true} phone={true} lang={lang} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
