const initState={}
const loginReducer = (state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isAuthenticated: true,
                email: action.data.email,
                token: action.data.token
            }
        default:
            return state
    }
}
export default loginReducer