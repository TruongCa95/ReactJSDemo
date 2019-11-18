const initState ={memberProfile:{
    id: 0,
    email:"",
    password: "",
    dob: "",
    emailOtpIn: "",
    gender: "0",
    mobileNumber: "",
    name: "",
}}
const MemberReducer = (state= initState, action)=>{
    switch(action.type){
        case 'REGISTER_MEMBER':
        return{
                ...state,
                isAuthenticated: true,
                email: action.data.email,
                token: action.data.token
            }
        case 'UPDATE_MEMBER':
            return{
                ...state,
                isUpdated:true
                
            }
        case 'FETCH_PROFILE':
            return{
                ...state,
                memberProfile: action.data
            }
        default:
            return state    
        }
}
export default MemberReducer