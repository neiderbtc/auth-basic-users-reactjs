import React, { FC, useEffect, useReducer } from 'react'
import { getLocalStorage } from '../helpers/localStorage/getLocalStorage'
import { removeLocalStorage } from '../helpers/localStorage/removeLocalStorage'
import AuthContext from './AuthContext'



type ActionTypes =
  | {
    type: 'login_user'
    payload: {
      isLogin: boolean;
      user: object;
    }
  }
  | { type: 'close_session' }

type Tstate = {
  isLogin: boolean;
  user: object | null;
}

const contadorReducer = (state: Tstate, action: ActionTypes) => {
  switch (action.type) {
    case 'login_user':
      return {
        ...state,
        ...action.payload,
      }
    case 'close_session':
      return {
        ...state,
        isLogin: false,
        user: null
      }
    default:
      return state
  }
}

type Props = {
  children: JSX.Element
}
const AuthState: FC<Props> = ({ children }) => {
  const initialState = {
    isLogin: false,
    user: null,
  }
  const [state, dispatch] = useReducer(contadorReducer, initialState);

  useEffect(() => {
    const token = getLocalStorage('token');
    if (token) {
      const listUsers = getLocalStorage('users');

      const user = listUsers.find((item: { token: string; }) => item.token === token);
      if (user)
        dispatch({
          type: 'login_user',
          payload: {
            isLogin: true,
            user: user,
          },
        })
    }
  }, [])

  const setIsLogin = (user: { email: string; password: string }) => {
    dispatch({
      type: 'login_user',
      payload: {
        isLogin: true,
        user: user,
      },
    })
  }

  const closeSession = () => {
    removeLocalStorage('token')
    dispatch({
      type: 'close_session'
    })
  }


  return (
    <AuthContext.Provider
      value={{
        isLogin: state.isLogin,
        user: state.user,
        setIsLogin,
        closeSession
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
