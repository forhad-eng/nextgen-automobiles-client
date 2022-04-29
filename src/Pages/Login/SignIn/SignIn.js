import React from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import signin from '../../../Assets/signin.jpg'
import { auth } from '../../../Firebase/firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin'

const SignIn = () => {
    const [signInWithEmailAndPassword, user, , singInErr] = useSignInWithEmailAndPassword(auth)
    const location = useLocation()
    const navigate = useNavigate()
    let error = ''

    const from = location.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }

    if (singInErr) {
        if (singInErr.code === 'auth/wrong-password') {
            error = 'Wrong password!'
            toast.error('Wrong password!', { toastId: 'wrongPass' })
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = data => {
        const { email, pass } = data
        signInWithEmailAndPassword(email, pass)
    }

    return (
        <div className="pt-28 px-20">
            <div className="grid lg:grid-cols-2 gap-10">
                <form className="border-[1px] px-10" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-2xl text-gray-900 font-[600] mt-10">Sign in</p>
                    <p className="text-gray-900">with your credentials</p>
                    <input
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

                        <p className="text-red-600 underline cursor-pointer">Forgot password?</p>
                    </div>
                </form>
                <img src={signin} style={{ height: '420px', margin: '0 auto' }} alt="" />
            </div>

            <SocialLogin />
        </div>
    )
}

export default SignIn
