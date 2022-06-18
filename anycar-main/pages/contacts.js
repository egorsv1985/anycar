
import styles from '../styles/Contacts.module.scss'
import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Loader from "../components/Loader";

//Libs
import { useFormik, FormikProvider  } from 'formik';

//Api
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "../redux/actions";

export default function Contacts() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)

  const [disabledBtn, setDisabledBtn] = useState(true)

  const [lang, setLang] = useState("ru");

  const [loader, setLoader] = useState(true)
  const router = useRouter()

  const validate = values => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = 'Заполните это поле';
    }

    if (!values.email.trim()) {
      errors.email = 'Заполните это поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неверный адрес электронной почты';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      info: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      fetch("https://anycar.rent/wp-json/contact-form-7/v1/contact-forms/843/feedback", {
        "headers": {
          "accept": "application/json, */*;q=0.1",
          "accept-language": "uk,ru;q=0.9,en;q=0.8,de;q=0.7,sv;q=0.6",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryLt7UXudVlaQlVAtU"
        },
        "referrer": "/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7\"\r\n\r\n335\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_version\"\r\n\r\n5.4.2\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_locale\"\r\n\r\nru_RU\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_unit_tag\"\r\n\r\nwpcf7-f335-o1\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_container_post\"\r\n\r\n0\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_posted_data_hash\"\r\n\r\n\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"text-859\"\r\n\r\n${values.name}\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"email-603\"\r\n\r\n${values.email}\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"textarea-240\"\r\n\r\n${values.info}\r\n`,
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
    setDisabledBtn(true)
    dispatch(fetchPage(90));
    setTimeout(() => setLoader(false), 1000)
  }, [])

  return (
    <>
      {Object.keys(page).length > 0 &&
        <div>
          <Header lang={lang} white={true} translateLink={page.translation_url} />

          <main className={styles.main}>
            <section className={styles.contacts}>
              <div className="container">
                <div className={styles.contacts__left}>
                  <h1 dangerouslySetInnerHTML={{__html: page.post_custom.titlecontacts}} />
                  <p dangerouslySetInnerHTML={{__html: page.post_custom.schedulecontacts}} />
                  <p dangerouslySetInnerHTML={{__html: page.post_custom.adress1}} />
                  <p dangerouslySetInnerHTML={{__html: page.post_custom.adress2}} />

                  <div className={styles.phones}>
                    <a href={`tel: ${page.post_custom.phone1contacts}`}>{page.post_custom.phone1contacts}</a>
                    <a href={`tel: ${page.post_custom.phone2contacts}`}>{page.post_custom.phone2contacts}</a>
                  </div>

                  <ul className={styles.emails}>
                    <li>
                      <span dangerouslySetInnerHTML={{__html: page.post_custom.titlecontactsmail1}} />
                      <a href={`mailto: ${page.post_custom.contactsmail1}`}>{page.post_custom.contactsmail1}</a>
                    </li>
                    <li>
                      <span dangerouslySetInnerHTML={{__html: page.post_custom.titlecontactsmail2}} />
                      <a href={`mailto: ${page.post_custom.contactsmail2}`}>{page.post_custom.contactsmail2}</a>
                    </li>
                    <li>
                      <span dangerouslySetInnerHTML={{__html: page.post_custom.titlecontactsmail3}} />
                      <a href={`mailto: ${page.post_custom.contactsmail3}`}>{page.post_custom.contactsmail3}</a>
                    </li>
                    <li>
                      <span dangerouslySetInnerHTML={{__html: page.post_custom.titlecontactsmail4}} />
                      <a href={`mailto: ${page.post_custom.contactsmail4}`}>{page.post_custom.contactsmail4}</a>
                    </li>
                  </ul>

                  <div className={styles.socials}>
                    <p dangerouslySetInnerHTML={{__html: page.post_custom.title2contacts}} />
                    <ul>
                      {page.post_custom.fblinkcontacts &&
                        <li>
                          <a href={page.post_custom.fblinkcontacts} target="_blank" rel="noopener">
                            <img alt="" src="/images/icons/facebook.png" />
                          </a>
                        </li>
                      }

                      {page.post_custom.twlinkcontacts &&
                        <li>
                          <a href={page.post_custom.twlinkcontacts} target="_blank" rel="noopener">
                            <img alt="" src="/images/icons/twitter.png" />
                          </a>
                        </li>
                      }

                      {page.post_custom.instlinkcontacts &&
                        <li>
                          <a href={page.post_custom.instlinkcontacts} target="_blank" rel="noopener">
                            <img alt="" src="/images/icons/instagram.png" />
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                <div className={styles.contacts__right}>
                  <h2>Остались вопросы?</h2>
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                    <label>
                      <p>Ваше имя<span>*</span></p>
                      <input
                        type="text"
                        name="name"
                        placeholder="Андрей"
                        className={formik.errors.name ? styles.error : ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                      {formik.errors.name ?
                        <div className={styles.error__message}>{formik.errors.name}</div> : null
                      }
                    </label>
                      <label>
                        <p>Ваш E-mail<span>*</span></p>
                        <input
                          type="text"
                          placeholder="email@address.com"
                          name="email"
                          className={formik.errors.email ? styles.error : ''}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.errors.email ?
                          <div className={styles.error__message}>{formik.errors.email}</div> : null
                        }
                      </label>
                      <label>
                        Комментарии
                        <textarea
                          name="info"
                          placeholder="Ваш комментарий"
                          onChange={formik.handleChange}
                          value={formik.values.info}
                        />
                      </label>

                      <Button text="Отправить" disabled={disabledBtn}/>
                    </form>
                  </FormikProvider>
                  <p className={styles.policy} dangerouslySetInnerHTML={{__html: page.post_custom.policy}} />
                </div>
              </div>
            </section>
          </main>

          <Footer lang={lang} shadow={'false'} />
        </div>
      }

      {loader &&
        <Loader />
      }
    </>
  )
}
