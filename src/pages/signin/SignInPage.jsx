import './signInPage.css'
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
    return (
        <div className="signin">
            <SignIn path='/sign-in' signUpUrl='/sign-up' forceRedirectUrl='/dashboard' />
        </div>
    )
}

export default SignInPage