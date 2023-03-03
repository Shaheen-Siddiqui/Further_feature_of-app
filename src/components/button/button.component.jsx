import React from 'react';
import { BaseButtonSty, GoogleSignInSty, InvertedSty } from './button.styles.jsx';

export const BUTTON_TYPE_CLASS = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const defaultButton = (buttonType = BUTTON_TYPE_CLASS.base) => (
    {
        [BUTTON_TYPE_CLASS.base]: BaseButtonSty,
        [BUTTON_TYPE_CLASS.google]: GoogleSignInSty,
        [BUTTON_TYPE_CLASS.inverted]: InvertedSty,

    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
    
    const CustomButton = defaultButton(buttonType);
    return (
        <CustomButton {...otherProps}>{children} </CustomButton>
    )
}

export default Button
