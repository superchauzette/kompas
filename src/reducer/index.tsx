const todos = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}

export default todos