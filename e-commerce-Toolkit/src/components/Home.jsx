import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {add} from '../Store/CartSlice'
import { getProducts } from '../Store/ProductSlice'
import StatusCode from '../Utills/StatusCode';

const Home = () => {
  //const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const {data, status} = useSelector(state => state.products)


  // const fetchData = async () => {
  //   const res = await fetch('https://fakestoreapi.com/products');
  //   const products = await res.json();
  //   setData(products);
  //   console.log(products);
  // };

  const addToCart = (product)=>{
      //dispatch an add action
      dispatch(add(product));
  }

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if(status == StatusCode.LOADING){
    return(
      <h1 className='font-bold text-center text-4xl mt-72'>Loading...</h1>
    )
  }

  if(status == StatusCode.ERROR){
    return(
      <h1 className='font-bold text-center text-4xl mt-72'>Some error occured...</h1>
    )
  }

  return (
    <div className="px-8 py-6">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        🛍️ Product Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
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
            onClick={()=> addToCart(item)}
            className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;