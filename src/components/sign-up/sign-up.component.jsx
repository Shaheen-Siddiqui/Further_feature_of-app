import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../../components/form-input/form-input.component'
import './sign-up.style.scss';
import Button from '../button/button.component';


const inputFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(inputFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields, [name]: value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('passwor do not match')   
            return;
        }

        try {

            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
           ;setFormFields(inputFields)

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert('user already exits');

            } else {

                console.log(error);
            }
        }

    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' id="userName" type="text" onChange={handleChange} name='displayName' value={displayName} />

                <FormInput label='E-mail' id='userEmail' type="email" onChange={handleChange} name='email' value={email} />

                <FormInput label='password' id='userId' type="password" onChange={handleChange} name='password' value={password} />

                <FormInput label='confirm password' id='userConfirmPassword' type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <Button type='submit'>sign up </Button>
            </form>
        </div>
    );
}

export default SignUp
    ;