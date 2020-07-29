import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './FormSchemaLogin';
// import { }
import './App.css';

const initialFormValues = {
  "username": '',
  "password": '',
}

const initialFormErrors = {
  "username": '',
  "password": '',
}
const initialDisabled = true;

export default function Login() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const changeHandler = (name, value) => {
    yup 
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        console.log(valid)
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((e) => {
        setFormErrors({
          ...formErrors, 
          [name]: e.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onChange = evt => {
    setFormValues({...formValues, [evt.target.name]: evt.target.value})
    const { name, value } = evt.target
    changeHandler(name,value)
  }

  const onSubmit = evt => {
    const logUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    console.log(logUser);
   axios.post('https://kmcgeeka-airbnboptimal.herokapp.com/login', logUser)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      debugger;
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then((valid) => {
        setDisabled(!valid)
      })
  }, [formValues])


  return (
    <div className='Login'>
      <div className='login-inputs'>
        <label htmlFor='username'>Username:
          <input
            id='username'
            name='username'
            type='text'
            placeholder='Enter username'
            maxLength='20'
            value={formValues.username}
            onChange={onChange}
          />
        </label>

        <label htmlFor='password'>Password:
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Enter password'
            maxLength='20'
            value={formValues.password}
            onChange={onChange}
          />
        </label>

      </div>
      <div className='form-group submit'>
        <button disabled={disabled} onClick={onSubmit}>Login</button>
      </div> 
     
     <div>
       {formErrors.username}
       {formErrors.password}
     </div>
    </div>
  );
}


