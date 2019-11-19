const APIURL='https://localhost:44390'
export const Login = authendiacate =>{
    debugger;
    return (dispatch, getState)=>{
        fetch(APIURL+'/api/users/login',
        {

            method: 'POST',
            headers: {
				'Content-Type': 'application/json'
			},
            body: JSON.stringify(authendiacate)
        })
        .then(result=>result.json()).then(data=>
            {
                debugger;
                if(data != null)
                dispatch({type:'LOGIN_SUCCESS',data})
            })
            .catch (e=>{
                dispatch({type: 'EXCEPTION',e})
            })
    }
} 