import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

const configureStore = (initState = {}) => {
  const middlewres = [thunk, logger]

  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(...middlewres)
  )

  return store
}

export default configureStore