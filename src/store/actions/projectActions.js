export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // 데이타베이스에 비동기 호출
    const firestore = getFirestore()
    firestore.collection('projects').add({
      ...project,
      authorFirstName: '황김',
      authorLastName: '순광',
      authorId: 7777777,
      createAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', project})
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
    
  }
}