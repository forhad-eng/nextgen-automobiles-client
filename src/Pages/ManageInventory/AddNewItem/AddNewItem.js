import React from 'react'
import { useForm } from 'react-hook-form'
import '../../../Styles/AddNewItem.css'

const AddNewItem = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = (data, e) => {
        e.target.reset()
    }

    return (
        <form className="addNew" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    className="border-b-[1px]"
                    placeholder="Item name"
                    {...register('name', { required: true, maxLength: 40 })}
                />
                {errors.name && <p className="text-red-500">Item name is required</p>}
                <input className="border-b-[1px]" placeholder="Price" {...register('price', { required: true })} />
                {errors.price && <p className="text-red-500">Price is required</p>}
                <input
                    className="border-b-[1px]"
                    placeholder="Quantity"
                    type="number"
                    {...register('quantity', { required: true })}
                />
                {errors.quantity && <p className="text-red-500">Quantity is required</p>}
                <input
                    className="border-b-[1px]"
                    placeholder="Description"
                    {...register('description', { required: true })}
                />
                {errors.description && <p className="text-red-500">Description is required</p>}
                <input
                    className="border-b-[1px]"
                    placeholder="Supplier name"
                    {...register('supplier', { required: true })}
                />
                {errors.supplier && <p className="text-red-500">Supplier name is required</p>}
                <input className="border-b-[1px]" placeholder="Image url" {...register('image', { required: true })} />
                {errors.image && <p className="text-red-500">Image url is required</p>}
                <input type="submit" value="Add Item" className="bg-red-600 text-white rounded px-2 py-1" />
            </div>
        </form>
    )
}

export default AddNewItem
