import { createStore,applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as snake from 'store/ducks/snake'
import * as map from 'store/ducks/map'

const rootReducer = combineReducers({
    snake: snake.default,
    map : map.default
})



const store = createStore(rootReducer,applyMiddleware(thunk))

export default store