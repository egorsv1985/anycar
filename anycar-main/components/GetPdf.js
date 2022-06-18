import styles from '../styles/GetPdf.module.scss'
import {useState, useEffect} from "react";
import Button from "./Button";
import { useFormik, FormikProvider  } from 'formik';
import InputMask from "react-input-mask";
import {useRouter} from "next/router";

export default function GetPdf({title, data, image, imageMobile, formTitle, formSocial, lang, policy}) {
  const [social, setSocial] = useState('viber')
  const [disabledBtn, setDisabledBtn] = useState(true)
  const router = useRouter()

  const validate = values => {
    const errors = {};

    if (!values.phone.trim()) {
      errors.phone = lang === 'ru' ? 'Заполните это поле' : 'Заповніть це поле';
    } else if (values.phone.replace(/-|_/g, "").length !== 19) {
      errors.phone = lang === 'ru' ? 'Неверный формат номера телефона': 'Невірний формат номера телефону';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      fetch("https://anycar.rent/wp-json/contact-form-7/v1/contact-forms/800/feedback", {
        "headers": {
          "accept": "application/json, */*;q=0.1",
          "accept-language": "uk,ru;q=0.9,en;q=0.8,de;q=0.7,sv;q=0.6",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryLt7UXudVlaQlVAtU"
        },
        "referrer": "/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7\"\r\n\r\n335\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_version\"\r\n\r\n5.4.2\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_locale\"\r\n\r\nru_RU\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_unit_tag\"\r\n\r\nwpcf7-f335-o1\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_container_post\"\r\n\r\n0\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_posted_data_hash\"\r\n\r\n\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"text-829\"\r\n\r\n${social}\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"tel-936\"\r\n\r\n${values.phone}\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
      router.push(lang === 'ru' ? '/stranicza-blagodarnosti/' : '/storinka-podyaky/')
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
  }, [])

  return (
    <div className={styles.getPdf}>
      <div className="container" uk-scrollspy="cls: uk-animation-fade">
        <div className={styles.getPdf__left}>
          <h2 dangerouslySetInnerHTML={{__html: title}} />
          <ul>
            {data.map(el => (
              <li key={el}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dddi)">
                    <circle cx="11.5" cy="11.5" r="11.5" fill="#F6F8FB"/>
                  </g>
                  <path d="M15.2693 8.91143C15.1906 8.9138 15.1159 8.94663 15.061 9.00313L10.4291 13.6351L8.52307 11.7291C8.44712 11.6499 8.33428 11.6181 8.22817 11.6457C8.12199 11.6734 8.03909 11.7563 8.01144 11.8625C7.98378 11.9686 8.01565 12.0814 8.09477 12.1573L10.2149 14.2775C10.3333 14.3957 10.5249 14.3957 10.6432 14.2775L15.4893 9.43142C15.5789 9.34431 15.6059 9.21121 15.5571 9.09615C15.5085 8.98109 15.3942 8.90774 15.2693 8.91143Z" fill="url(#paint0_linear)"/>
                  <defs>
                    <filter id="filter0_dddi" x="-105" y="-76" width="208" height="183" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="-16" dy="-16"/>
                      <feGaussianBlur stdDeviation="20"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="16" dy="4"/>
                      <feGaussianBlur stdDeviation="32"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.239216 0 0 0 0 0.396078 0 0 0 0.13 0"/>
                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="-25" dy="4"/>
                      <feGaussianBlur stdDeviation="40"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="-8" dy="-6"/>
                      <feGaussianBlur stdDeviation="40"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
                      <feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
                    </filter>
                    <linearGradient id="paint0_linear" x1="8.00164" y1="11.6387" x2="15.5811" y2="11.6387" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4CB7CC"/>
                      <stop offset="1" stopColor="#52DAAC"/>
                    </linearGradient>
                  </defs>
                </svg>
                {el}
              </li>
            ))}
          </ul>

          <img alt="" src={imageMobile} className={styles.getPdf__mobile} />

          <div className={styles.getPdf__left_form}>
            <h3 dangerouslySetInnerHTML={{__html: formTitle}} />
            <p dangerouslySetInnerHTML={{__html: formSocial}} />

            <ul className={styles.socials}>
              <li onClick={() => setSocial('viber')} className={social === 'viber' ? styles.active : ''}>
                <img alt="" src="/images/icons/viber.png" />
                Viber
              </li>
              <li onClick={() => setSocial('whatsApp')} className={social === 'whatsApp' ? styles.active : ''}>
                <img alt="" src="/images/icons/whatsApp.png" />
                What’s app
              </li>
              <li onClick={() => setSocial('telegram')} className={social === 'telegram' ? styles.active : ''}>
                <img alt="" src="/images/icons/telegram.png" />
                Telegram
              </li>
            </ul>

            <FormikProvider value={formik}>
              <form onSubmit={formik.handleSubmit}>
                <label>
                  <p>Ваш телефон<span>*</span></p>
                  <InputMask
                    type="tel"
                    placeholder="+38 (099) 999 99 99"
                    mask="+38 (099) 999 99 99"
                    name="phone"
                    autoComplete="off"
                    className={formik.errors.phone ? styles.error : ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.errors.phone ?
                    <div className={styles.error__message}>{formik.errors.phone}</div> : null
                  }
                </label>

                <Button text="Отправить" disabled={disabledBtn} />
              </form>
            </FormikProvider>
            <p className={styles.policy} dangerouslySetInnerHTML={{__html: policy}} />
          </div>
        </div>
        <img alt=""  src={image} className={styles.getPdf__right} />
      </div>
    </div>
  )
}