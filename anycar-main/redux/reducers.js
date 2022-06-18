import {
  USD_COURSE,
  FETCH_PAGE,
  FETCH_MENU,
  FETCH_FOOTER,
  FETCH_AGREEMENT,
  FETCH_POLICY,
  FETCH_POSTS,
  FETCH_CARS,
  FETCH_POST
} from './types'

const initialState = {
  usdCourse: '',
  page: {},
  menu: [],
  footer: [],
  agreement: {},
  policy: {},
  posts: [],
  cars: [],
  post: {}
}

// OBJECTS REDUCER
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case USD_COURSE:
      return {...state, usdCourse: action.payload}
    case FETCH_PAGE:
      return {...state, page: action.payload}
    case FETCH_MENU:
      return {...state, menu: action.payload}
    case FETCH_FOOTER:
      return {...state, footer: action.payload}
    case FETCH_AGREEMENT:
      return {...state, agreement: action.payload}
    case FETCH_POLICY:
      return {...state, policy: action.payload}
    case FETCH_POSTS:
      return {...state, posts: action.payload}
    case FETCH_CARS:
      return {...state, cars: action.payload}
      case FETCH_POST:
        return {...state, post: action.payload}
    default:
      return state
  }
}
