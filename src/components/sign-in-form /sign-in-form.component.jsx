// import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useContext } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component";
import './sign-in-form.styles.scss'

import { UserContext } from "../../contexts/user.context";

//creating an object instead of 4 useStates
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields]  = useState(defaultFormFields);
    const {email, password} = formFields;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            resetFormFields();
        }catch(error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email!');
                    break;
                case 'auth/user-not-found':
                    alert('Email not linked to any account!');
                    break;
                default: 
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>
                
                <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    {/* by default, buttons in forms are of type submit, so to prevent form submission when google sign in is clicked, change the button type to button */}
                    <Button type='submit' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm