import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import signin from '../../../Assets/signin.jpg'

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className="grid lg:grid-cols-2 gap-10 pt-28 px-20">
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
                    className="w-full py-2 border-b-2 outline-none"
                    placeholder="Enter password"
                    {...register('pass', { required: true })}
                />
                {errors.pass && <p className="text-red-600">Password is required.</p>}
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
    )
}

export default SignIn
