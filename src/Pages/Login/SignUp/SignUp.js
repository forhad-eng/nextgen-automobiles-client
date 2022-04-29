import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import signup from '../../../Assets/signup.jpg'

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className="grid lg:grid-cols-2 gap-10 pt-28 px-20">
            <form className="border-[1px] px-10" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-2xl font-[600] mt-10">Sign up</p>
                <p>with your information</p>
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
                    className="w-full py-2 border-b-2 outline-none"
                    placeholder="Enter password"
                    {...register('pass', { required: true })}
                />
                {errors.pass && <p className="text-red-600">Password is required.</p>}
                <input
                    className="w-full py-2 border-b-2 outline-none"
                    placeholder="Confirm password"
                    {...register('conPass', { required: true })}
                />
                {errors.conPass && <p className="text-red-600">Confirm password is required.</p>}
                <input
                    className="w-full mt-5 py-3 outline-none bg-red-600 text-white rounded-md"
                    type="submit"
                    value="Sign up"
                />

                <Link to="/login">
                    <p className="mt-2">
                        Already have an account? <span className="text-blue-600 cursor-pointer">Sign in</span>
                    </p>
                </Link>
            </form>
            <img src={signup} style={{ height: '420px', margin: '0 auto' }} alt="" />
        </div>
    )
}

export default SignUp
