import React from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import signin from '../../../Assets/signin.jpg'
import { auth } from '../../../Firebase/firebase.init'
import useToken from '../../../hooks/useToken'
import Spinner from '../../Shared/Spinner/Spinner'
import SocialLogin from '../SocialLogin/SocialLogin'

const SignIn = () => {
    const [signInWithEmailAndPassword, eUser, loading, singInErr] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
    const [token] = useToken(eUser?.user)
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    let error = ''
    const from = location.state?.from?.pathname || '/'

    if (loading) {
        return (
            <div className="h-screen flex items-center">
                <Spinner />
            </div>
        )
    }

    if (token) {
        navigate(from, { replace: true })
    }

    if (singInErr) {
        if (singInErr.code === 'auth/wrong-password') {
            error = 'Wrong password!'
            toast.error('Wrong password!', { toastId: 'wrongPass' })
        }
    }

    const onSubmit = async formData => {
        const { email, pass } = formData
        await signInWithEmailAndPassword(email, pass)
    }

    const forgotPasswordHandle = async () => {
        const email = window.prompt('Enter email')
        if (!email) {
            toast.error('Please enter your email', { toastId: 'emailNull' })
        } else {
            await sendPasswordResetEmail(email)
            toast.success(`Password reset email has been sent!`, { toastId: 'passResetSuccess' })
        }
    }

    return (
        <div className="pt-28 px-4 lg:px-20">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                <form
                    className="border-[1px] px-4 pb-10 md:pb-0 md:px-8 lg:px-10 order-2 md:order-1"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p className="text-2xl text-gray-900 font-[600] mt-10">Sign in</p>
                    <p className="text-gray-900">with your credentials</p>
                    <input
                        type="text"
                        className="w-full mt-2 py-2 border-b-2 outline-none"
                        placeholder="Enter email"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p className="text-red-600">Email is required.</p>}
                    <input
                        type="password"
                        className="w-full py-2 border-b-2 outline-none"
                        placeholder="Enter password"
                        {...register('pass', { required: true })}
                    />
                    {errors.pass && <p className="text-red-600">Password is required.</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    <input
                        className="w-full mt-5 py-3 outline-none bg-red-600 text-white rounded-md"
                        type="submit"
                        value="Sign in"
                    />

                    <div className="flex justify-between mt-2">
                        <Link to="/register">
                            <p className="text-gray-900">
                                New user? <span className="text-blue-600 cursor-pointer">Register now</span>
                            </p>
                        </Link>

                        <p onClick={forgotPasswordHandle} className="text-red-600 underline cursor-pointer">
                            Forgot password?
                        </p>
                    </div>
                </form>
                <img src={signin} style={{ height: '420px', margin: '0 auto' }} className="order-1 md:order-2" alt="" />
            </div>

            <SocialLogin />
        </div>
    )
}

export default SignIn
