import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET
} from '../constants/userConstants'

export const userRegisterReducer = (state={}, action) =>{
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {...state, loading: true}

    case USER_REGISTER_SUCCESS: 
      return {...state, loading: false, user: action.payload, success: true}

    case USER_REGISTER_FAIL: 
      return {...state, loading: false, error: action.payload}

    case USER_LOGOUT:
      return {}
  
    default:
      return state;
  }
}


export const userLoginReducer = (state={ user:{}}, action) =>{
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {...state, loading: true}

    case USER_LOGIN_SUCCESS: 
      return {...state, loading: false, user: action.payload}

    case USER_LOGIN_FAIL: 
      return {...state, loading: false, error: action.payload}
  
    default:
      return state;
  }
}


export const protectedLoginReducer = (state={ user:{}}, action) =>{
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {...state, loading: true}

    case USER_PROFILE_SUCCESS: 
      return {...state, loading: false, user: action.payload}

    case USER_PROFILE_FAIL: 
      return {...state, loading: false, error: action.payload}

    case USER_PROFILE_RESET:
      return {}
  
    default:
      return state;
  }
}
