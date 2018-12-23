export const createProject = (project) => {
  return (dispatch, getState) => {
    // 데이타베이스에 비동기 호출
    dispatch({type: 'CREATE_PROJECT', project})
  }
}