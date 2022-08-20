
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form /sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {
    //this is how redirected login will work
    // useEffect(() => {
    //     async function asyncRedirctResult() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //     }
    //     asyncRedirctResult();
    // },[])


    //redirecting leads to unmounting of the app, so we can't implement redirect login like pop-up login. Following won't work - 
    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    // }

    return(
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm/>
        </div>
    )
}

export default Authentication
