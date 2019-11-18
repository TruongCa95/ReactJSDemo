import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import MemberReducer from './MemberReducer'

const rootReducer = combineReducers({
	login: LoginReducer,
	member: MemberReducer
})

export default rootReducer
