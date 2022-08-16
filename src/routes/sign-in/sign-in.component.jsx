
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    //this is how redirected login will work
    // useEffect(() => {
    //     async function asyncRedirctResult() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //     }
    //     asyncRedirctResult();
    // },[])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    //redirecting leads to unmounting of the app, so we can't implement redirect login like pop-up login. Following won't work - 
    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    // }

    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm/>
        </div>
    )
}

export default SignIn
