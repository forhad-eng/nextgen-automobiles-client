import React, { createContext } from 'react'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import githubLogo from '../../../Assets/logos/github.png'
import googleLogo from '../../../Assets/logos/google.png'
import { auth } from '../../../Firebase/firebase.init'
import useToken from '../../../hooks/useToken'

export const LoadingContext = createContext()

const SocialLogin = () => {
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth)
    const [signInWithGithub, gitUser] = useSignInWithGithub(auth)
    const [token] = useToken(googleUser?.user || gitUser?.user)
    const navigate = useNavigate()
    const location = useLocation()

    console.log(googleUser?.user);

    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })
    }

    return (
        <div className="md:w-1/2 mt-2 mb-5">
            <div className="flex items-center my-1 md:pl-14 md:pr-12 lg:pr-16">
                <hr className="w-1/2" />
                <p className="mx-3">Or</p>
                <hr className="w-1/2" />
            </div>

            <button
                onClick={() => signInWithGoogle()}
                className="md:w-2/3 mx-auto py-1 flex items-center drop-shadow-xl border-[1px] rounded-full"
            >
                <img className="ml-1" style={{ height: '32px' }} src={googleLogo} alt="" />
                <p className="text-center px-5 lg:px-20">Continue with Google</p>
            </button>
            <button
                onClick={() => signInWithGithub()}
                className="md:w-2/3 mx-auto mt-2 py-1 flex items-center drop-shadow-xl border-[1px] rounded-full"
            >
                <img className="ml-1" style={{ height: '32px' }} src={githubLogo} alt="" />
                <p className="text-center px-5 lg:px-20">Continue with GitHub</p>
            </button>
        </div>
    )
}

export default SocialLogin
