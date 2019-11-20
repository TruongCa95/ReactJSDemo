const APIURL='https://localhost:44390'
export const Register = users=>{
return (dispatch, getState)=>{
    //debugger
    fetch(APIURL+'/api/users/register',{
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
        
    })
    .then(result=>result.json()).then(data=>
        {
            //debugger;
            if(data != null)
            dispatch({type:'REGISTER_MEMBER',data})
        })
        .catch (e=>{
            dispatch({type: 'EXCEPTION',e})
        })
}
}

export const Update = users =>{
    return (dispatch, getState)=>{
        fetch(APIURL+'/api/users/edit',
        {
            method:'PUT',
            headers: {
				'Content-Type': 'application/json'
			},
            body:JSON.stringify(users)
        })
        .then(()=>
        {
            dispatch({type: 'UPDATE_MEMBER',users})
        })
        .catch (e=>{
            dispatch({type: 'EXCEPTION',e})
        })
    }
}
export const GetUsers = () =>{
    return (dispatch, getState)=>{
        //debugger;
        fetch(APIURL+`api/Users/${getState().login.id}}`,
        {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json'
			},
        })
        .then((res)=>      
            {
                //debugger
                console.log(res);
                dispatch({type: 'FETCH_PROFILE'},res)
            })
            .catch (e=>{
                dispatch({type: 'EXCEPTION',e})
            })
        
    }
}