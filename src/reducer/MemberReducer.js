const initState ={}
const MemberReducer = (state= initState, action)=>{
    //debugger;
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
            case 'BINDING_USER':
			return {
				...state,
                currentUser:{...state.currentUser,[action.data.name]:action.data.value}
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