import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import signup from '../../../Assets/signup.jpg'
import { auth } from '../../../Firebase/firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin'

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const [createUserWithEmailAndPassword, user, , regError] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    })
    const navigate = useNavigate()
    let error = ''

    if (user) {
        navigate('/')
    }

    if (regError) {
        if (regError.code === 'auth/email-already-in-use') {
            error = 'User already exists with this email'
            toast.error('User already exists with this email', { toastId: 'userExist' })
        } else if (regError.code === 'auth/weak-password') {
            error = 'Password require minimum characters'
            toast.error('Password require minimum characters', { toastId: 'passLengthErr' })
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data, e) => {
        const { email, pass, conPass } = data

        if (pass !== conPass) {
            e.target.reset()
            return toast.error("Password doesn't match", { toastId: 'passNotMatch' })
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            e.target.reset()
            return toast.error('Invalid Email')
        }
        createUserWithEmailAndPassword(email, pass)
        e.target.reset()
    }

    return (
        <div className="pt-28 px-20">
            <div className="grid lg:grid-cols-2 gap-10">
                <form className="border-[1px] px-10" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-2xl text-gray-900 font-[600] mt-10">Sign up</p>
                    <p className="text-gray-900">with your information</p>
                    <input
                        className="w-full mt-2 py-2 border-b-2 outline-none"
                        placeholder="Enter name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p className="text-red-600">Name is required.</p>}
                    <input
                        className="w-full py-2 border-b-2 outline-none"
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
                    <input
                        type="password"
                        className="w-full py-2 border-b-2 outline-none"
                        placeholder="Confirm password"
                        {...register('conPass', { required: true })}
                    />
                    {errors.conPass && <p className="text-red-600">Confirm password is required.</p>}
                    {error && <p className="text-red-600">{error}</p>}

                    <input onClick={() => setAgree(!agree)} className="mt-2" type="checkbox" id="terms" />
                    <label className={`ml-2 mt-2 ${agree ? 'text-gray-800' : 'text-red-600'}`} htmlFor="terms">
                        Agree Terms &amp; Conditions
                    </label>

                    <input
                        disabled={!agree}
                        className={`w-full mt-3 py-3 outline-none text-white rounded-md ${
                            agree ? 'bg-red-600' : 'bg-red-400'
                        }`}
                        type="submit"
                        value="Sign up"
                    />

                    <Link to="/login">
                        <p className="mt-2 text-gray-900">
                            Already have an account? <span className="text-blue-600 cursor-pointer">Sign in</span>
                        </p>
                    </Link>
                </form>
                <img src={signup} style={{ height: '420px', margin: '0 auto' }} alt="" />
            </div>

            <SocialLogin />
        </div>
    )
}

export default SignUp
