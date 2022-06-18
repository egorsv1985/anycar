
import styles from '../styles/TaxiRent.module.scss'
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
import Owner from "../components/Owner";
import Cars from "../components/Cars";
import Income from "../components/Income";

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)

  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fuelConsumption, setFuelConsumption] = useState([13])
  const [orders, setOrders] = useState([50])
  const [workingDays, setWorkingDays] = useState([3])

  const [carClass, setCarClass] = useState(90)
  const [fuel, setFuel] = useState(18)

  const [lang, setLang] = useState("ru");

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    dispatch(fetchPage(138));
    setTimeout(() => setLoader(false), 1000)
  },[])

  return (
    <>
      {Object.keys(page).length > 0 &&
        <div>
          <Header lang={lang} white={true} translateLink={page.translation_url} />

          <main className={styles.main}>
            <section className={styles.top}>
              <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                <div className={styles.top__left}>
                  <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.titleh1workintaxiwithbuycar}} />
                  <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.desch2workintaxiwithbuycar}} />
                  <div className={`uk-scrollspy-class ${styles.top__left_bottom}`}>
                    <a href="#cars">
                      <Button text={page.post_custom.button1workintaxiwithbuycar} white={true} />
                    </a>
                    <a href={`tel: ${page.post_custom.phone1workintaxiwithbuycar}`}>
                      {page.post_custom.phone1workintaxiwithbuycar}
                      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#fff"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <img alt="" className={styles.top__right} src={page.post_custom.picturemainworkintaxiwithbuycar} />
              </div>
              <div className="container" uk-scrollspy="cls: uk-animation-fade">
                <ul>
                  <li>
                    <img alt="" src={page.post_custom.picture1workintaxiwithbuycar} />
                    {page.post_custom.adv1workintaxiwithbuycar}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.picture2workintaxiwithbuycar} />
                    {page.post_custom.adv2workintaxiwithbuycar}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.picture3workintaxiwithbuycar} />
                    {page.post_custom.adv3workintaxiwithbuycar}
                  </li>
                  <li>
                    <img alt="" src={page.post_custom.picture4workintaxiwithbuycar} />
                    {page.post_custom.adv4workintaxiwithbuycar}
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

            <section className={styles.videoBlock}>
              <VideoBlock 
                title={page.post_custom.title1videoworkintaxiwithbuycar}
                image={page.post_custom.picturevideoworkintaxiwithbuycar}
                video={page.post_custom.linkvideoworkintaxiwithbuycar}
              />
            </section>

            <section className={styles.income}>
              <Income 
                title={page.post_custom.titlectacalcworkintaxiwithbuycar}
                subtitle={page.post_custom.descctacalcworkintaxiwithbuycar}
                buttonText={page.post_custom.buttonctacalcworkintaxiwithbuycar}
                buttonLink="#calc"
                image={page.post_custom.picturectacalcworkintaxiwithbuycar}
              />
            </section>

          <section className={styles.advantages}>
            <Advantages 
              title={page.post_custom.titlebenefitsworkintaxiwithbuycar}
              data={[
                {
                  icon: page.post_custom.icon1benefits1workintaxiwithbuycar, 
                  title: page.post_custom.title1benefits1workintaxiwithbuycar,
                  subtitle: page.post_custom.desc1benefits1workintaxiwithbuycar
                },
                {
                  icon: page.post_custom.icon2benefits2workintaxiwithbuycar, 
                  title: page.post_custom.title2benefits2workintaxiwithbuycar,
                  subtitle: page.post_custom.desc2benefits2workintaxiwithbuycar
                },
                {
                  icon: page.post_custom.icon3benefits3workintaxiwithbuycar, 
                  title: page.post_custom.title3benefits3workintaxiwithbuycar,
                  subtitle: page.post_custom.desc3benefits3workintaxiwithbuycar
                },
                {
                  icon: page.post_custom.icon4benefits4workintaxiwithbuycar, 
                  title: page.post_custom.title4benefits4workintaxiwithbuycar,
                  subtitle: page.post_custom.desc4benefits4workintaxiwithbuycar
                },
                {
                  icon: page.post_custom.icon5benefits5workintaxiwithbuycar, 
                  title: page.post_custom.title5benefits5workintaxiwithbuycar,
                  subtitle: page.post_custom.desc5benefits5workintaxiwithbuycar
                },
                {
                  icon: page.post_custom.icon6benefits6workintaxiwithbuycar, 
                  title: page.post_custom.title6benefits6workintaxiwithbuycar,
                  subtitle: page.post_custom.desc6benefits6workintaxiwithbuycar
                }
              ]}
            />
          </section>

            <section className={styles.calculator} id="calc">
              <div className="container">
                <h2 uk-scrollspy="cls: uk-animation-slide-bottom-medium" dangerouslySetInnerHTML={{__html: page.post_custom.titlecalculatorworkintaxiwithbuycar}} />
                <div className={styles.calc} uk-scrollspy="cls: uk-animation-fade">
                  <div className={styles.calc__left}>
                    <div className={styles.calc__left_top}>
                      <p>Класс автомобиля</p>
                      <ul>
                        <li 
                          className={carClass === 90 ? styles.active : ''}
                          onClick={() => setCarClass(90)}
                        >
                          Эконом
                          </li>
                        <li
                          className={carClass === 105 ? styles.active : ''}
                          onClick={() => setCarClass(105)}
                        >
                          Комфорт
                          </li>
                      </ul>
                      <p>Топливо</p>
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
                      <p>Расход топлива на 100 км</p>
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

                      <p>Количество заказов в сутки</p>
                      <div className={styles.calc__range_numbers}>
                        <span>1</span>
                        <span>100</span>
                      </div>
                      <Range
                        step={1}
                        min={1}
                        max={100}
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
                            <span>{orders[props.key]}</span>
                          </div>
                        )}
                      />

                      <p>Рабочих дней в неделю</p>
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
                        Примерное количество заказов в месяц
                      </li>
                      <li>
                        <span>
                          {Math.round((carClass * orders * workingDays * 4) - (fuelConsumption * fuel / 100 * 7 * orders * workingDays * 4))} грн
                        </span>
                        В месяц с вычетом комиссии и использованного топлива
                      </li>
                    </ul>
                    <div className={styles.calc__right_bottom}>
                      <h3 dangerouslySetInnerHTML={{__html: page.post_custom.title2calculatorworkintaxiwithbuycar}} />
                      <p dangerouslySetInnerHTML={{__html: page.post_custom.desc2calculatorworkintaxiwithbuycar}} />
                      <Button text={page.post_custom.buttoncalculatorworkintaxiwithbuycar} arrow={true} white={true} onClick={() => setIsModalOpen(true)} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.requirements}>
              <Requirements 
                image={page.post_custom.picturescheduleworkintaxiwithbuycar} 
                title={page.post_custom.titlescheduleworkintaxiwithbuycar}
                data={[
                  {icon: page.post_custom.icon1scheduleworkintaxiwithbuycar, title: page.post_custom.desc1scheduleworkintaxiwithbuycar},
                  {icon: page.post_custom.icon2scheduleworkintaxiwithbuycar, title: page.post_custom.desc2scheduleworkintaxiwithbuycar},
                  {icon: page.post_custom.icon3scheduleworkintaxiwithbuycar, title: page.post_custom.desc3scheduleworkintaxiwithbuycar},
                  {icon: page.post_custom.icon4scheduleworkintaxiwithbuycar, title: page.post_custom.desc4scheduleworkintaxiwithbuycar},
                  {icon: page.post_custom.icon5scheduleworkintaxiwithbuycar, title: page.post_custom.desc5scheduleworkintaxiwithbuycar},
                  {icon: page.post_custom.icon6scheduleworkintaxiwithbuycar, title: page.post_custom.desc6scheduleworkintaxiwithbuycar},
                  {icon: page.post_custom.icon7scheduleworkintaxiwithbuycar, title: page.post_custom.desc7scheduleworkintaxiwithbuycar},
                  {icon: page.post_custom.icon8scheduleworkintaxiwithbuycar, title: page.post_custom.desc8scheduleworkintaxiwithbuycar},
                ]}
              />
            </section>

            <section className={styles.steps}>
              <Steps 
                setOpen={setIsModalOpen} 
                title={page.post_custom.title2cta2workintaxiwithbuycar}
                subtitle={page.post_custom.desc22cta2workintaxiwithbuycar}
                button={page.post_custom.button2cta2workintaxiwithbuycar}
                image={page.post_custom.picture2cta2workintaxiwithbuycar}
                data={[
                  page.post_custom.cta2workintaxiwithbuycar1,
                  page.post_custom.cta2workintaxiwithbuycar2,
                  page.post_custom.cta2workintaxiwithbuycar3,
                  page.post_custom.cta2workintaxiwithbuycar4,
                  page.post_custom.cta2workintaxiwithbuycar5,
                ]}
              />
            </section>

            <section className={styles.benefits}>
              <Benefits 
                image={page.post_custom.pictureagreworkintaxiwithbuycar} 
                title={page.post_custom.titleagreworkintaxiwithbuycar}
                data={[
                  {
                    icon: page.post_custom.icon1agreworkintaxiwithbuycar,
                    title: page.post_custom.title1agre1workintaxiwithbuycar,
                    subtitle: page.post_custom.desc1agre1workintaxiwithbuycar
                  },
                  {
                    icon: page.post_custom.icon2agreworkintaxiwithbuycar,
                    title: page.post_custom.title2agre2workintaxiwithbuycar,
                    subtitle: page.post_custom.desc2agre2workintaxiwithbuycar
                  },
                  {
                    icon: page.post_custom.icon3agreworkintaxiwithbuycar,
                    title: page.post_custom.title3agre3workintaxiwithbuycar,
                    subtitle: page.post_custom.desc3agre3workintaxiwithbuycar
                  },
                  {
                    icon: page.post_custom.icon4agreworkintaxiwithbuycar,
                    title: page.post_custom.title4agre4workintaxiwithbuycar,
                    subtitle: page.post_custom.desc4agre4workintaxiwithbuycar
                  },
                ]}
              />
            </section>

            <section className={styles.owner}>
              <Owner
                image={page.post_custom.picturecta2workintaxiwithbuycar}
                title={page.post_custom.titlecta2workintaxiwithbuycar}
                subtitle={page.post_custom.desccta2workintaxiwithbuycar}
                button={page.post_custom.buttoncta2workintaxiwithbuycar}
                link={page.post_custom.linkcta2workintaxiwithbuycar}
              />
            </section>

            {page.reviews.length > 0 &&
              <section className={styles.reviews}>
                <Reviews 
                  title={page.post_custom.titlevideoworkintaxiwithbuycar}
                  description={page.post_custom.desc_reviewsworkintaxiwithbuycar}
                  data={page.reviews}
                />
              </section>
            }

            <section className={styles.info}>
              <Info data={page.post_custom.seotextworkintaxiwithbuycar}/>
            </section>

            <section className={styles.questions}>
              <Questions title={page.post_custom.titlefaqworkintaxiwithbuycar} data={page.faqs} />
            </section>

            <section className={styles.feedback}>
              <Feedback 
                image={page.post_custom.piccta4workintaxiwithbuycar}
                title={page.post_custom.titcta4workintaxiwithbuycar}
                subtitle={page.post_custom.descta4workintaxiwithbuycar}
                button={page.post_custom.buttoncta4workintaxiwithbuycar}
                phone={page.post_custom.phonecta4workintaxiwithbuycar}
                lang={lang}
              />
            </section>
          </main>

          <Footer lang={lang} />
          <Popup open={open} setOpen={setOpen} />
          <Modal open={isModalOpen} setOpen={setIsModalOpen} title="Оставьте заявку" name={true} phone={true} lang={lang} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
