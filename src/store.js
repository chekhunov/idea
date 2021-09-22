import { createStore, applyMiddleware } from 'redux'
//позволяет следить за всеми изменениями и экшенами которые происходят
import logger from "redux-logger"
//эта штука обьеденяет наши редбюсеры в один
import rootReducer from './redux/reducer'

export default () => {
const store = createStore(rootReducer, applyMiddleware(logger))
    return store
};