import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/CartSlice'

const Cart = () => {
  const cardProducts = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const deleteProduct = (id)=>{
     //Do dispatch action
     dispatch(remove(id));
  }

  const Products = cardProducts.map((item, index) => {
    return (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg p-4 flex flex-col items-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-32 object-contain mb-4"
        />
        <p className="text-base font-medium text-gray-700 text-center mb-2">
          {item.title}
        </p>
        <p className="text-sm text-gray-500 text-center mb-2">
          ₹{item.price}
        </p>
        <button
          onClick={()=> deleteProduct(item.id)}
          className="mt-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Remove from Cart
        </button>
      </div>
    )
  })
  return (
    <div className='p-20 grid grid-cols-4 gap-12' >
      {Products}
    </div>
  )
}

export default Cart
