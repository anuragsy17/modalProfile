import {createStore, compose, applyMiddleware} from 'redux'
import  ThunkMiddleware  from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { reducer } from '../Reducer/reducer'


const composeEnhancer = compose(applyMiddleware(ThunkMiddleware), devToolsEnhancer({trace: true}))
const store = createStore(
    reducer,
    composeEnhancer
    // applyMiddleware,
    // devToolsEnhancer({trace: true})
)

export default store