
import React, {useState, useEffect} from 'react';
import styles from '../styles/Blog.module.scss'
import {useRouter} from "next/router";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Loader from "../components/Loader";

//Libs
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useFormik, FormikProvider  } from 'formik';
import Pagination from '@material-ui/lab/Pagination';

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage, fetchPosts} from "../redux/actions";

export default function Blog() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)
  const posts = useSelector((state) => state.posts)

  const [pageNum, setPageNum] = useState(1)
  const [currentPosts, setCurrentPosts] = useState(null)

  const [open, setOpen] = useState(false);

  const [disabledBtn, setDisabledBtn] = useState(true)

  const [lang, setLang] = useState("ru");

  const [loader, setLoader] = useState(true)

  const router = useRouter()

  const validate = values => {
    const errors = {};
    
    if (!values.email.trim()) {
      errors.email = 'Заполните это поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неверный адрес электронной почты';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      fetch("https://anycar.rent/wp-json/contact-form-7/v1/contact-forms/113/feedback", {
        "headers": {
          "accept": "application/json, */*;q=0.1",
          "accept-language": "uk,ru;q=0.9,en;q=0.8,de;q=0.7,sv;q=0.6",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryiIgw1zWe3DFazP7k"
        },
        "referrer": "/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryiIgw1zWe3DFazP7k\r\nContent-Disposition: form-data; name=\"_wpcf7\"\r\n\r\n252\r\n------WebKitFormBoundaryiIgw1zWe3DFazP7k\r\nContent-Disposition: form-data; name=\"_wpcf7_version\"\r\n\r\n5.4.1\r\n------WebKitFormBoundaryiIgw1zWe3DFazP7k\r\nContent-Disposition: form-data; name=\"_wpcf7_locale\"\r\n\r\nru_RU\r\n------WebKitFormBoundaryiIgw1zWe3DFazP7k\r\nContent-Disposition: form-data; name=\"_wpcf7_unit_tag\"\r\n\r\nwpcf7-f252-o2\r\n------WebKitFormBoundaryiIgw1zWe3DFazP7k\r\nContent-Disposition: form-data; name=\"_wpcf7_container_post\"\r\n\r\n0\r\n------WebKitFormBoundaryiIgw1zWe3DFazP7k\r\nContent-Disposition: form-data; name=\"_wpcf7_posted_data_hash\"\r\n\r\n\r\n------WebKitFormBoundaryiIgw1zWe3DFazP7k\r\nContent-Disposition: form-data; name=\"email-603\"\r\n\r\n${values.email}\r\n------WebKitFormBoundaryiIgw1zWe3DFazP7k--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
      router.push('/stranicza-blagodarnosti/')
      resetForm();
    },
  });

  useEffect(() => {
    if (Object.keys(formik.errors).length > 0) {
      setDisabledBtn(true)
    } else {
      setDisabledBtn(false)
    }
  }, [formik.errors])

  useEffect(() => {
    setDisabledBtn(true);
    dispatch(fetchPage(183));
    dispatch(fetchPosts(lang));
    setTimeout(() => setLoader(false), 1000)
  }, [])

  useEffect(() => {
    let arr = [...posts];
    setCurrentPosts(arr.slice(0, 9));
  },[posts])

  return (
    <>
      {Object.keys(page).length > 0 && posts.length > 0 &&
        <ParallaxProvider>
          <div>
            <Header lang={lang} translateLink={page.translation_url} />

            <main className={styles.main}>
              <section className={styles.top}>
                <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
                  <div className={styles.top__left}>
                    <h1 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.titleblog}} />
                    <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.descblog}} />
                    
                    <FormikProvider value={formik}>
                      <form className="uk-scrollspy-class">
                        <label>
                          <input
                            placeholder={page.post_custom.titleinputblog}
                            type="text"
                            name="email"
                            className={formik.errors.email ? styles.error : ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            autoComplete="off"
                          />
                          
                          <div className={disabledBtn ? styles.disabled : ''} onClick={formik.handleSubmit}>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.9375 5.62617H12.0563L8.65312 1.53867C8.49399 1.34722 8.41744 1.1004 8.44029 0.852496C8.46315 0.604596 8.58355 0.375929 8.775 0.216799C8.96645 0.0576691 9.21328 -0.018889 9.46118 0.00396703C9.70908 0.026823 9.93775 0.147221 10.0969 0.338674L14.7844 5.96367C14.8159 6.00842 14.8441 6.05542 14.8688 6.1043C14.8688 6.15117 14.8687 6.1793 14.9344 6.22617C14.9769 6.33367 14.9991 6.44809 15 6.56367C14.9991 6.67926 14.9769 6.79368 14.9344 6.90117C14.9344 6.94805 14.9344 6.97617 14.8688 7.02305C14.8441 7.07193 14.8159 7.11893 14.7844 7.16367L10.0969 12.7887C10.0087 12.8945 9.89835 12.9796 9.77358 13.0379C9.64882 13.0963 9.51273 13.1264 9.375 13.1262C9.15595 13.1266 8.94367 13.0503 8.775 12.9105C8.68007 12.8318 8.6016 12.7352 8.54408 12.6261C8.48656 12.517 8.45113 12.3977 8.43981 12.2749C8.42849 12.1521 8.4415 12.0283 8.47811 11.9105C8.51471 11.7928 8.57419 11.6834 8.65312 11.5887L12.0563 7.50117H0.9375C0.68886 7.50117 0.450402 7.4024 0.274587 7.22659C0.0987711 7.05077 0 6.81231 0 6.56367C0 6.31503 0.0987711 6.07658 0.274587 5.90076C0.450402 5.72495 0.68886 5.62617 0.9375 5.62617Z" fill="#555371"/>
                            </svg>
                          </div>
                        </label>
                      </form>
                    </FormikProvider>
                  
                    <span className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: page.post_custom.descinputblog}} />
                  </div>

                  <div className={styles.top__right}>
                    <img alt="" src="/images/blog/top.png" />
                    <Parallax y={[15, -15]} x={[0, 25]}>
                      <img alt="" src="/images/blog/plane.png" style={{"max-width": "540px"}} />
                    </Parallax>
                  </div>

                  <img alt="" className={styles.top__right_mobile} src="/images/blog/top-mobile.png" />
                </div>
              </section>
              <section className={styles.articles}>
                <div className="container">
                  <ul>
                    {currentPosts.map(post => (
                      <li className={styles.article} key={post.ID}>
                        <a href={post.url}>
                          <img alt="" src={post.thumbnail} />
                          <div className={styles.article__info}>
                            <span className={styles.article__info_date}>{post.post_date.split(' ')[0].replace(/-/g, '.')}</span>
                            <p dangerouslySetInnerHTML={{__html: post.post_title}} />
                            <span className={styles.article__info_link}>
                              Узнать больше
                              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="url(#paint0_linear)"/>
                                <defs>
                                  <linearGradient id="paint0_linear" x1="-5.58793e-08" y1="4.5" x2="15" y2="4.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4CB7CC"/>
                                    <stop offset="1" stopColor="#52DAAC"/>
                                  </linearGradient>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>

                  {posts.length > 9 &&
                    <Pagination
                      className={styles.pagination}
                      count={Math.ceil(posts.length / 9)}
                      page={pageNum}
                      onChange={(e, n) => {
                        setTimeout(() => {
                          setPageNum(n)
                          setCurrentPosts(posts.slice((n - 1) * 9, ((n - 1) * 9) + 9))
                        }, 500)
                      }}
                    />
                  }
                </div>
              </section>
            </main>

            <Footer lang={lang} />
            <Popup open={open} setOpen={setOpen} />
          </div>
        </ParallaxProvider>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
