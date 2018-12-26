export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // 데이타베이스에 비동기 호출
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createAt: new Date()
      })
      .then(() => {
        dispatch({type: 'CREATE_PROJECT', project})
      })
      .catch((err) => {
        dispatch({type: 'CREATE_PROJECT_ERROR', err})
      })
  }
}
