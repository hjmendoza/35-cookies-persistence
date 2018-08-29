const __API_URL__ = 'http://localhost:3000';

//Actions


//Reducer
export default (state=null, action) => {
  let {type, payload} = action
  switch(type){
    case 'TOKEN_SET': return payload
    default: return state
  }
}


//Action Creators
export function logIn(user) {
  return dispatch => {
    return sugerpagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then(res => {
      const token = rest.text;
      const action = tokenSet(token);
      dispatch(action)
      return res
    })
  };
}

export const tokenSet = token => ({
  type: 'TOKEN_SET', 
  payload: token,
})