const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('로그인 실패')
      return {
        ...state,
        authError: '로그인 실패'
      }

    case 'LOGIN_SUCCESS':
      console.log('로그인 성공')
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('로그아웃 성공')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('회원가입 성공')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('회원가입 실패')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  } 
}

export default authReducer