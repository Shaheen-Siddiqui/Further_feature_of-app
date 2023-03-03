import React, { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { BUTTON_TYPE_CLASS } from "../button/button.component";
import { SignInContainer, ButtonsContainer } from './sign-in.style';


const inputFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(inputFields);
    const { email, password, } = formFields;
    
    const logGoogleUser = async () => {
         await signInWithGooglePopup();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields, [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            setFormFields(inputFields)

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email')
                    break;

                case 'auth/user-not-found':
                    alert('no user associated with this e-mail')
                    break;

                default:
                    console.log(error);
                    break;
            }
        }
    }



    return (
        <SignInContainer>

            <h2>already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput label='E-mail' id='userEmail' type="email" onChange={handleChange} name='email' value={email} />

                <FormInput label='password' id='userId' type="password" onChange={handleChange} name='password' value={password} />

                <ButtonsContainer>
                    <Button type='submit'>sign in </Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASS.google} onClick={logGoogleUser} >google sign-in </Button>
                </ButtonsContainer>

            </form>
        </SignInContainer>

    );
}

export default SignIn
    ;