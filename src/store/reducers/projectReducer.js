const initState = {
  projects: [
    {id: '1', title: '1타이틀', content: '1컨텐츠'},
    {id: '2', title: '2타이틀', content: '2컨텐츠'},
    {id: '3', title: '3타이틀', content: '3컨텐츠'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('프로젝트 생성: ', action.project)
  }
  return state
}

export default projectReducer