
import { FaHeart } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import Button from '../Button/Button'

const Cards = ({image,name,price}) => {
  return (
    <div className='bg-zinc-100 p-5'>

         {/* card-icons */}
        <div className='flex justify-between'>
            <span className='text-3xl text-zinc-300'>
                <FaHeart/>
            </span>
            <button className='bg-orange-500 text-white px-4 py-3 rounded-lg  cursor-pointer'>
                <FaPlus/>
            </button>
        </div>
{/* Card image */}
        <div className='w-full h-50'>
            <img src={image} className='h-full mx-auto w-full object-contain'/> 
        </div>

        {/* card-content */}

        <div className='text-center'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p className='text-2xl font-bold mt-4 mb-3'>${price.toFixed(2)}</p>
            <Button content="Shop Now" />
           
        </div>
    </div>
  )
}

export default Cards
