import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const cartProducts = useSelector(state=> state.cart);
    return (
        <div className='w-full h-16 flex justify-around items-center bg-white border border-b-2'>
            <NavLink to="/"

                className='px-4 py-2 text-2xl'><span className='font-serif text-2xl text-red-300'>Redux</span> Toolkit</NavLink>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? 'hidden sm:inline-block font-serif font-medium text-xl text-gray-700 border-b-2 border-red-500'
                        : 'hidden sm:inline-block font-serif font-medium text-xl text-gray-700'
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/cart"
                className={({ isActive }) =>
                    isActive
                        ? 'text-xl font-medium rounded-lg p-2 border-2 border-gray-700 bg-red-400 text-white'
                        : 'text-xl font-medium text-gray-700 rounded-lg p-2 border-2 border-gray-700'
                }
            >
                My Bag {cartProducts.length}
            </NavLink>

        </div>
    )
}

export default Header
