const cityReducer = (prevState = { city: "山东" }, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'city':
      newState.city = action.value
      return newState
    default:
      return prevState
  }
}


export default cityReducer