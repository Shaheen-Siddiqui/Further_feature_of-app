import React, { useState, useContext } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-in.style.scss';
import Button, { BUTTON_TYPE_CLASS } from '../button/button.component'
import { setCurrentUser } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const inputFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const dispatch = useDispatch()
    const [formFields, setFormFields] = useState(inputFields);
    const { email, password, } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields, [name]: value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let { user } = await signInAuthUserWithEmailAndPassword(email, password)
            dispatch(setCurrentUser(user))
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


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    return (
        <div className='sign-up-container'>
            <h2>already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput label='E-mail' id='userEmail' type="email" onChange={handleChange} name='email' value={email} />

                <FormInput label='password' id='userId' type="password" onChange={handleChange} name='password' value={password} />

                <div className="buttons-div">

                    <Button type='submit'>sign in </Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASS.google} onClick={logGoogleUser} >google sign-in </Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn
    ;