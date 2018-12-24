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
    default:
      return state
  } 
}

export default authReducer