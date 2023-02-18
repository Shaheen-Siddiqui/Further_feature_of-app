
import React, { useState, useContext } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../../components/form-input/form-input.component'
import './sign-up.style.scss';
import Button,{BUTTON_TYPE_CLASS} from '../button/button.component';
import { userContext } from '../../contexts/user.contexts'

const inputFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(inputFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser} = useContext(userContext)

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
            setCurrentUser(user);   
           ;setFormFields(inputFields)

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert('user alreadu exits');

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

                <Button buttonType={BUTTON_TYPE_CLASS.google} type='submit'>sign up </Button>
            </form>
        </div>
    );
}

export default SignUp
    ;