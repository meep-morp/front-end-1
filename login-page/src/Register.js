import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './FormSchema';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

const initialFormValues = {
  "username": '',
  "password": '',
  "primaryemail": '',
}

const initialFormErrors = {
  "username": '',
  "password": '',
  "primaryemail": '',
}
const initialDisabled = true;

export default function Register() {

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
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      primaryemail: formValues.primaryemail.trim(),
    }
    console.log(newUser);
   axios.post('https://kmcgeeka-airbnboptimal.herokapp.com/createnewuser', newUser)
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
        <Form>
            <div className='login-inputs'>
            <FormGroup>
                <Label htmlFor='username'>Username:
                <Input
                    id='username'
                    name='username'
                    type='text'
                    placeholder='Enter username'
                    maxLength='20'
                    value={formValues.username}
                    onChange={onChange}
                />
                </Label>
             </FormGroup>
             <FormGroup>
                <Label htmlFor='password'>Password:
                <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    maxLength='20'
                    value={formValues.password}
                    onChange={onChange}
                />
                </Label>
            </FormGroup>
             <FormGroup>
                <Label htmlFor='primaryemail'>Primary Email:
                <Input
                    id='primaryemail'
                    name='primaryemail'
                    type='text'
                    placeholder='Enter email'
                    maxLength='30'
                    value={formValues.primaryemail}
                    onChange={onChange}
                />
                </Label>
            </FormGroup>
            </div>
            <div className='form-group submit'>
                <Button disabled={disabled} onClick={onSubmit}>Register</Button>
            </div> 
        </Form>
     <div>
       {formErrors.username}
       {formErrors.password}
       {formErrors.primaryemail}
     </div>
    </div>
  );
}

