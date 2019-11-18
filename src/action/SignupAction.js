const APIURL='https://localhost:44390'
export const Register = users=>{
return (dispatch, getState)=>{
    fetch(APIURL+'/api/users/register',{
        method: 'POST',
        body: JSON.stringify(users)
        
    })
    .then(()=>
    {
        dispatch({type:'REGISTER_MEMBER', users})
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
            body:JSON.stringify(users)
        })
        .then(()=>
        {
            dispatch({type: 'UPDATE_MEMBER'},users)
        })
        .catch (e=>{
            dispatch({type: 'EXCEPTION',e})
        })
    }
}
export const GetUsers = (users) =>{
    return (dispatch, getState)=>{
        fetch(APIURL+'api/Users/id',
        {
            method: 'GET',
            body: JSON.stringify(users)
        })
        .then(()=>      
            {
                dispatch({type: 'FETCH_PROFILE'},users)
            })
            .catch (e=>{
                dispatch({type: 'EXCEPTION',e})
            })
        
    }
}