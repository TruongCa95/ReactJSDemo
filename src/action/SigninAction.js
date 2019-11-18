const APIURL='https://localhost:44390'
export const Login = authendiacate =>{
    return (dispatch, getState)=>{
        fetch(APIURL+'/api/users/login',
        {
            method: 'POST',
            body: JSON.stringify(authendiacate)
        })
        .then(()=>
            {
                dispatch(data=>dispatch({type:'LOGIN_SUCCESS',data}))
            })
            .catch (e=>{
                dispatch({type: 'EXCEPTION',e})
            })
    }
} 