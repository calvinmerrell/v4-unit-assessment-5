import Axios from 'axios'


const initialState = {
    userName: '',
    profile_pic: '',
  }

const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
const LOGOUT_USER = 'LOGOUT_USER'

export const updateUser = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
      type: UPDATE_USER_DATA,
      payload: data
    }
  }

  export const logoutUser = () => {
      let data = axios.get('/auth/user-data').then(res => res.data)
      return {
          type: LOGOUT_USER,
          payload: data
      }
  }

  export default function reducer(state = initialState, action) {
      switch (action.type){
          case UPDATE_USER_DATA + '_PENDING':
              return {...state, loading: true}
          case UPDATE_USER_DATA + '_FULFILLED':
              return {...state, ...action.payload, loading: false}
          case LOGOUT_USER + '_PENDING' :
              return {...state, loading: true}
          case LOGOUT_USER + '_FULFILLED':
              return {initialState} 
            default:
            return state;
      }
  }