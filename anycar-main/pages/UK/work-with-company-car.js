
import styles from '../../styles/TaxiRent.module.scss'
import { useEffect } from 'react';

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import VideoBlock from "../../components/VideoBlock";
import Feedback from "../../components/Feedback";
import Reviews from "../../components/Reviews";
import Info from "../../components/Info";
import Questions from "../../components/Questions";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

//Libs
import {useState} from "react";
import Popup from "../../components/Popup";
import { Range, getTrackBackground } from 'react-range';
import Requirements from "../../components/Requirements";
import Steps from "../../components/Steps";
import Advantages from "../../components/Advantages";
import Benefits from "../../components/Benefits";
import Owner from "../../components/Owner";
import Cars from "../../components/Cars";

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../../redux/actions";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fuelConsumption, setFuelConsumption] = useState([13])
  const [orders, setOrders] = useState([25])
  const [workingDays, setWorkingDays] = useState([3])

  const [carClass, setCarClass] = useState(54)
  const [fuel, setFuel] = useState(18)

  const [lang, setLang] = useState("uk");

  //Api
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)

  const [loader, setLoader] = useState(true)
  
  useEffect(() => {
    dispatch(fetchPage(271));
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
                  <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.titleh1workintaxi}} />
                  <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.desch2workintaxi}} />
                  <div className={`uk-scrollspy-class ${styles.top__left_bottom}`}>
                    <a href="#cars">
                      <Button text={page.post_custom.button1workintaxi} white={true} />
                    </a>
                    <a href={`tel: ${page.post_custom.phone1workintaxi}`}>
                      {page.post_custom.phone1workintaxi}
                      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#fff"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <img alt="" className={styles.top__right} src={page.post_custom.picturemainworkintaxi} />
              </div>
              <div className="container" uk-scrollspy="cls: uk-animation-fade">
                <ul>
                  <li>
                    <img alt="" src={page.post_custom.picture1workintaxi} />
                    {page.post_custom.adv1workintaxi}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.picture2workintaxi} />
                    {page.post_custom.adv2workintaxi}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.picture3workintaxi} />
                    {page.post_custom.adv3workintaxi}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.picture4workintaxi} />
                    {page.post_custom.adv4workintaxi}
                  </li>
                </ul>
              </div>
            </section>
            <section className={styles.cars} id="cars">
              <Cars 
                setOpen={setIsModalOpen} 
                lang={lang}
                cars={page.cars}
                title={page.post_custom.carstitle}
                subtitle={page.post_custom.carssubtitle}
              />
            </section>

            <section className={styles.advantages}>
              <Advantages 
                title={page.post_custom.titlebenefitsworkintaxi}
                data={[
                  {
                    icon: page.post_custom.icon1benefits1workintaxi, 
                    title: page.post_custom.title1benefits1workintaxi,
                    subtitle: page.post_custom.desc1benefits1workintaxi
                  },
                  {
                    icon: page.post_custom.icon2benefits2workintaxi, 
                    title: page.post_custom.title2benefits2workintaxi,
                    subtitle: page.post_custom.desc2benefits2workintaxi
                  },
                  {
                    icon: page.post_custom.icon3benefits3workintaxi, 
                    title: page.post_custom.title3benefits3workintaxi,
                    subtitle: page.post_custom.desc3benefits3workintaxi
                  },
                  {
                    icon: page.post_custom.icon4benefits4workintaxi, 
                    title: page.post_custom.title4benefits4workintaxi,
                    subtitle: page.post_custom.desc4benefits4workintaxi
                  },
                  {
                    icon: page.post_custom.icon5benefits5workintaxi, 
                    title: page.post_custom.title5benefits5workintaxi,
                    subtitle: page.post_custom.desc5benefits5workintaxi
                  },
                  {
                    icon: page.post_custom.icon6benefits6workintaxi, 
                    title: page.post_custom.title6benefits6workintaxi,
                    subtitle: page.post_custom.desc6benefits6workintaxi
                  },
                ]}
              />
            </section>


            <section className={styles.videoBlock}>
              <VideoBlock 
                title={page.post_custom.titvideoworkintaxi} 
                image={page.post_custom.picturevideoworkintaxi}
                video={page.post_custom.linkvideoworkintaxi}
              />
            </section>

            <section className={styles.calculator} id="calc">
              <div className="container">
                <h2 uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: page.post_custom.titlecalculatorworkintaxi}} />
                <div className={styles.calc} uk-scrollspy="cls: uk-animation-fade">
                  <div className={styles.calc__left}>
                    <div className={styles.calc__left_top}>
                      <p>Клас автомобіля</p>
                      <ul>
                        <li 
                          className={carClass === 54 ? styles.active : ''}
                          onClick={() => setCarClass(54)}
                        >
                          Економ
                          </li>
                        <li
                          className={carClass === 66 ? styles.active : ''}
                          onClick={() => setCarClass(66)}
                        >
                          Комфорт
                          </li>
                      </ul>
                      <p>Паливо</p>
                      <ul>
                        <li
                          className={fuel === 18 ? styles.active : ''}
                          onClick={() => setFuel(18)}
                        >
                          Газ
                        </li>
                        <li
                          className={fuel === 30 ? styles.active : ''}
                          onClick={() => setFuel(30)}
                        >
                          Бензин
                        </li>
                      </ul>
                      <p>Витрата палива на 100 км</p>
                      <div className={styles.calc__range_numbers}>
                        <span>2</span>
                        <span>25</span>
                      </div>
                      <Range
                        step={1}
                        min={2}
                        max={25}
                        values={fuelConsumption}
                        onChange={(value) => setFuelConsumption(value)}
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
                                  values: fuelConsumption,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 2,
                                  max: 25
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
                            <span>{fuelConsumption[props.key]}</span>
                          </div>
                        )}
                      />

                      <p>Кількість замовлень на добу</p>
                      <div className={styles.calc__range_numbers}>
                        <span>1</span>
                        <span>50</span>
                      </div>
                      <Range
                        step={1}
                        min={1}
                        max={50}
                        values={orders}
                        onChange={(value) => setOrders(value)}
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
                                  values: orders,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 1,
                                  max: 50
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
                            <span>{orders[props.key]}</span>
                          </div>
                        )}
                      />

                      <p>Робочих днів у тиждень</p>
                      <div className={styles.calc__range_numbers}>
                        <span>1</span>
                        <span>7</span>
                      </div>
                      <Range
                        step={1}
                        min={1}
                        max={7}
                        values={workingDays}
                        onChange={(value) => setWorkingDays(value)}
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
                                  values: workingDays,
                                  colors: ['#52DAAC', '#FDFDFD'],
                                  min: 1,
                                  max: 7
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
                            <span>{workingDays[props.key]}</span>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.calc__right}>
                    <ul className={styles.calc__right_top}>
                      <li>
                        <span>{orders * workingDays * 4}</span>
                        Приблизна кількість замовлень на місяць
                      </li>
                      <li>
                        <span>
                          {Math.round((carClass * orders * workingDays * 4) - (fuelConsumption * fuel / 100 * 7 * orders * workingDays * 4))} грн
                        </span>
                        В місяць з вирахуванням комісії і використаного палива
                      </li>
                    </ul>
                    <div className={styles.calc__right_bottom}>
                      <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title2calculatorworkintaxi}} />
                      <p dangerouslySetInnerHTML={{__html: page.post_custom.desc2calculatorworkintaxi}} />
                      <Button text={page.post_custom.buttoncalculatorworkintaxi} arrow={true} white={true} onClick={() => setIsModalOpen(true)} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className={styles.requirements}>
              <Requirements 
                image={page.post_custom.picturescheduleworkintaxi} 
                title={page.post_custom.titlescheduleworkintaxi}
                data={[
                  {icon: page.post_custom.icon1scheduleworkintaxi, title: page.post_custom.desc1scheduleworkintaxi},
                  {icon: page.post_custom.icon2scheduleworkintaxi, title: page.post_custom.desc2scheduleworkintaxi},
                  {icon: page.post_custom.icon3scheduleworkintaxi, title: page.post_custom.desc3scheduleworkintaxi},
                  {icon: page.post_custom.icon4scheduleworkintaxi, title: page.post_custom.desc4scheduleworkintaxi},
                  {icon: page.post_custom.icon5scheduleworkintaxi, title: page.post_custom.desc5scheduleworkintaxi},
                  {icon: page.post_custom.icon6scheduleworkintaxi, title: page.post_custom.desc6scheduleworkintaxi},
                  {icon: page.post_custom.icon7scheduleworkintaxi, title: page.post_custom.desc7scheduleworkintaxi},
                  {icon: page.post_custom.icon8scheduleworkintaxi, title: page.post_custom.desc8scheduleworkintaxi},
                ]}
              />
            </section>

            <section className={styles.steps}>
              <Steps 
                setOpen={setIsModalOpen} 
                title={page.post_custom.titcta2workintaxi}
                subtitle={page.post_custom.descta2workintaxi}
                button={page.post_custom.buttcta2workintaxi}
                image={page.post_custom.pictcta2workintaxi}
                data={[
                  page.post_custom.cta2workintaxi1,
                  page.post_custom.cta2workintaxi2,
                  page.post_custom.cta2workintaxi3,
                  page.post_custom.cta2workintaxi4,
                  page.post_custom.cta2workintaxi5,
                ]}
              />
            </section>

            <section className={styles.benefits}>
              <Benefits 
                image={page.post_custom.pictureagreworkintaxi} 
                title={page.post_custom.titleagreworkintaxi}
                data={[
                  {
                    icon: page.post_custom.icon1agreworkintaxi,
                    title: page.post_custom.title1agre1workintaxi,
                    subtitle: page.post_custom.desc1agre1workintaxi
                  },
                  {
                    icon: page.post_custom.icon2agreworkintaxi,
                    title: page.post_custom.title2agre2workintaxi,
                    subtitle: page.post_custom.desc2agre2workintaxi
                  },
                  {
                    icon: page.post_custom.icon3agreworkintaxi,
                    title: page.post_custom.title3agre3workintaxi,
                    subtitle: page.post_custom.desc3agre3workintaxi
                  },
                  {
                    icon: page.post_custom.icon4agreworkintaxi,
                    title: page.post_custom.title4agre4workintaxi,
                    subtitle: page.post_custom.desc4agre4workintaxi
                  },
                ]}
              />
            </section>

            <section className={styles.owner}>
              <Owner
                image={page.post_custom.picturecta2workintaxi}
                title={page.post_custom.titlecta2workintaxi}
                subtitle={page.post_custom.desccta2workintaxi}
                button={page.post_custom.buttoncta2workintaxi}
                link={page.post_custom.linkcta2workintaxi}
              />
            </section>

            {page.reviews.length > 0 &&
              <section className={styles.reviews}>
                <Reviews 
                  title={page.post_custom.titlevideoworkintaxi}
                  description={page.post_custom.desc_reviewsworkintaxi}
                  data={page.reviews}
                />
              </section>
            }

            <section className={styles.info}>
              <Info data={page.post_custom.seotextworkintaxi}/>
            </section>

            <section className={styles.questions}>
              <Questions title={page.post_custom.titlefaqworkintaxi} data={page.faqs} />
            </section>

            <section className={styles.feedback}>
              <Feedback 
                title={page.post_custom.titcta4workintaxi}
                subtitle={page.post_custom.descta4workintaxi}
                button={page.post_custom.buttoncta4workintaxi}
                phone={page.post_custom.phonecta4workintaxi}
                image={page.post_custom.piccta4workintaxi}
                lang={lang}
              />
            </section>
          </main>

          <Footer lang={lang} />
          <Popup open={open} setOpen={setOpen} />
          <Modal open={isModalOpen} setOpen={setIsModalOpen} title="Залиште заявку" name={true} phone={true} lang={lang} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
