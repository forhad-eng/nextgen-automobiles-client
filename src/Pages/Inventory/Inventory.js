import React from 'react'
import { useParams } from 'react-router-dom'

const Inventory = () => {
    const { id } = useParams()
    return (
        <div>
            <p>HI {id}</p>
        </div>
    )
}

export default Inventory
