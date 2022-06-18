import React, {useState, useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import styles from '/styles/Modal.module.scss'
import Zoom from "@material-ui/core/Zoom";
import Backdrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core";
import Button from "./Button";
import InputMask from "react-input-mask";
import { useFormik, FormikProvider  } from 'formik';
import {useRouter} from "next/router";

export default function Modall({open, setOpen, title, name, phone, email, lang}) {
  const [disabledBtn, setDisabledBtn] = useState(true)
  const router = useRouter()

  const validate = values => {
    const errors = {};

    if (name) {
      if (!values.name.trim()) {
        errors.name = lang === 'ru' ? 'Заполните это поле' : 'Заповніть це поле';
      }
    }

    if (phone) {
      if (!values.phone.trim()) {
        errors.phone = lang === 'ru' ? 'Заполните это поле' : 'Заповніть це поле';
      } else if (values.phone.replace(/-|_/g, "").length !== 19) {
        errors.phone = lang === 'ru' ? 'Неверный формат номера телефона': 'Невірний формат номера телефону';
      }
    }

    if (email) {
      if (!values.email.trim()) {
        errors.email = lang === 'ru' ? 'Заполните это поле' : 'Заповніть це поле';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = lang === 'ru' ? 'Неверный адрес электронной почты' : 'Неправильна адреса електронної пошти';
      }
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (name && phone) {
        fetch("https://anycar.rent/wp-json/contact-form-7/v1/contact-forms/112/feedback", {
          "headers": {
            "accept": "application/json, */*;q=0.1",
            "accept-language": "uk,ru;q=0.9,en;q=0.8,de;q=0.7,sv;q=0.6",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryLt7UXudVlaQlVAtU"
          },
          "referrer": "/",
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": `------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7\"\r\n\r\n335\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_version\"\r\n\r\n5.4.2\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_locale\"\r\n\r\nru_RU\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_unit_tag\"\r\n\r\nwpcf7-f335-o1\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_container_post\"\r\n\r\n0\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"_wpcf7_posted_data_hash\"\r\n\r\n\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"text-829\"\r\n\r\n${values.name}\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU\r\nContent-Disposition: form-data; name=\"tel-936\"\r\n\r\n${values.phone}\r\n------WebKitFormBoundaryLt7UXudVlaQlVAtU--\r\n`,
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
      }
      if (email) {
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
      }
      setOpen(false)
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

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));

  const classes = useStyles();


  const body = (
    <div className={styles.modal}>
      <svg className={styles.modal__close} onClick={() => setOpen(false)}  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1L7.5 7.5M1 14L7.5 7.5M7.5 7.5L1 1L14 14" stroke="#A2A2A2" strokeWidth="2"/>
      </svg>

      <h2>{title}</h2>

      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          {name &&
            <label>
              {lang === 'ru' &&
                "Ваше имя"
              }
              {lang === 'uk' &&
                "Ваше ім'я"
              }
              <input
                type="text"
                name="name"
                placeholder={lang === 'ru' ? "Андрей" : "Андрій"}
                className={formik.errors.name ? styles.error : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name ?
                <div className={styles.error__message}>{formik.errors.name}</div> : null
              }
            </label>
          }
        {phone &&
          <label>
            Ваш телефон
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
        }
        {email &&
          <label>
            Ваш E-mail
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
        }

          <Button text={lang === 'ru' ? "Отправить" : "Відправити"} disabled={disabledBtn} />
        </form>
      </FormikProvider>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      style={{overflowY: 'auto'}}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
    >
      <Zoom in={open}>
        {body}
      </Zoom>
    </Modal>
  );
}