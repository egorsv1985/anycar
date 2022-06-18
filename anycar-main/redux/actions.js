import {
  USD_COURSE,
  FETCH_PAGE,
  FETCH_MENU,
  FETCH_FOOTER,
  FETCH_AGREEMENT,
  FETCH_POLICY,
  FETCH_POSTS,
  FETCH_POST
} from './types'

export const usdCourse = () => {
  return async dispatch => {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    const json = await response.json()
    dispatch({
      type: USD_COURSE,
      payload: json.filter(el => el.cc === 'USD')[0].rate
    })
  }
}

export const fetchPage = (id) => {
  return async dispatch => {
    const response = await fetch(`https://anycar.rent/wp-json/anycar/page/${id}`)
    const json = await response.json()
    dispatch({
      type: FETCH_PAGE,
      payload: json
    })
  }
}

export const fetchMenu = (lang) => {
  return async dispatch => {
    const response = await fetch(`https://anycar.rent/wp-json/anycar/menu?lang=${lang}`)
    const json = await response.json()
    dispatch({
      type: FETCH_MENU,
      payload: json
    })
  }
}

export const fetchFooter = (lang) => {
  return async dispatch => {
    const response = await fetch(`https://anycar.rent/wp-json/anycar/footer?lang=${lang}`)
    const json = await response.json()
    dispatch({
      type: FETCH_FOOTER,
      payload: json
    })
  }
}

export const fetchPolicy = (lang) => {
  return async dispatch => {
    const response = await fetch(`https://anycar.rent/wp-json/anycar/page/${lang === 'ru' ? 3 : 202}`)
    const json = await response.json()
    dispatch({
      type: FETCH_POLICY,
      payload: json
    })
  }
}

export const fetchAgreement = (lang) => {
  return async dispatch => {
    const response = await fetch(`https://anycar.rent/wp-json/anycar/page/${lang === 'ru' ? 210 : 212}`)
    const json = await response.json()
    dispatch({
      type: FETCH_AGREEMENT,
      payload: json
    })
  }
}

export const fetchPosts = (lang) => {
  return async dispatch => {
    const response = await fetch(`https://anycar.rent/wp-json/anycar/posts/limits/0?lang=${lang}`)
    const json = await response.json()
    dispatch({
      type: FETCH_POSTS,
      payload: json
    })
  }
}

export const fetchPost = (id) => {
  return async dispatch => {
    const response = await fetch(`https://anycar.rent/wp-json/anycar/posts/${id}`)
    const json = await response.json()
    dispatch({
      type: FETCH_POST,
      payload: json
    })
  }
}