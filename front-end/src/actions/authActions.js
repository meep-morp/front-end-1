import {axiosWithAuth} from '../utils/axiosWithAuth';

export const registerAction = (credentials, setSignupError, history) => {
    axiosWithAuth()
      .post('', credentials)
      .then(res => {
      
        window.localStorage.setItem('token', res.data.token);
   
        history.push('/login')
      })
      .catch(err => {
        setSignupError(err)
        history.push('/login')
      })
}

export const loginAction = (credentials, setLoginError, history) => {
    axiosWithAuth()
      .post('', credentials)
      .then(res => {
     
        console.log(res)
        window.localStorage.setItem('token', res.data.token);
        history.push('/listings')
      })
      .catch(err => setLoginError(err))
}


export const logoutAction = (history) => {
  window.localStorage.removeItem('token');
  history.push('/login')
}