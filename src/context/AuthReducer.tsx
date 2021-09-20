type InitialState = {
    isLogin: boolean
    user: object
  }
  
  type ActionsTypes = { type: 'login_user'; payload: string }
  
  const AuthReducer = (state: InitialState, action: ActionsTypes) => {
    switch (action.type) {
      case 'login_user':
        return {
          ...state,
          token: action.payload,
        }
      default:
        return true
    }
  }
  
  export default AuthReducer
  