import React, { useState } from 'react';
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
}


function App(props) {

  const { values, update, submit } = props

  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value } = evt.target
    update(name,value)
  }

  function validateForm() {
    return username.length > 0 && email.length > 0 && password.length > 0;
  }

  return (
    <div className='Login'>
     <form onSubmit={onSubmit}>
      <div className='login-inputs'>
        <label htmlFor='usernameInput'>Username:
          <input
            id='usernameInput'
            name='username'
            type='text'
            placeholder='Enter username'
            maxLength='20'
            value={values.username}
            onChange={onChange}
          />
        </label>

        <label htmlFor='emailInput'>Email:
          <input
            id='emailInput'
            name='email'
            type='text'
            placeholder='Enter email'
            maxLength='20'
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label htmlFor='passwordInput'>Password:
          <input
            id='passwordInput'
            name='password'
            type='text'
            placeholder='Enter password'
            maxLength='20'
            value={values.password}
            onChange={onChange}
          />
        </label>
      </div>
      <div className='form-group submit'>
        <button disabled={!values.username || !values.email || !values.password}>Login</button>
      </div> 
     </form>
    </div>
  );
}

export default App;
