const initState={}
const loginReducer = (state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isAuthenticated: true,
                email: action.data.email,
                id:action.data.id,
                token: action.data.token,
                user:action.data
            }
        default:
            return state
    }
}
export default loginReducer