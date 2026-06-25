

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Heading from '../Heading/Heading'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import { FaStar } from "react-icons/fa";



const Testimonials = () => {



  return (
    <section>
      <div className='max-w-300 px-10 py-20 mx-auto '>
        <Heading highlight="Customers" heading="Saying" />
        {/* buttons */}
        <div className='flex justify-end p-5 gap-3 mt-5'>
          <button className='custom-prev flex justify-center items-center text-zinc-800 text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-orange-600 hover:text-white hover:cursor-pointer'>
            <IoIosArrowBack />

          </button>
          <button className='custom-next flex justify-center items-center text-zinc-800 text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-orange-600 hover:text-white hover:cursor-pointer'>
            <IoIosArrowForward />
          </button>

        </div>

        <Swiper navigation={
          {
            nextEl: ".custom-next",
            prevEl:".custom-prev"
          }
        }
        loop={true}
        breakpoints={{
          640:{slidesPerView:1 , spaceBetween:20},
          768:{slidesPerView:2, spaceBetween:20},
          1024:{slidesPerView:3, spaceBetween:20},
        }}
        
        
        modules={[Navigation]} className="mySwiper">
          {review.map(item => {
            return (
              <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
                <div className='flex items-center gap-5'>
                  <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                    <img className='h-full w-full' src={item.image} />
                  </div>
                  <div>
                    <h5 className='text-xl font-bold'>{item.name}</h5>
                    <p className='text-zinc-500'>{item.Profession}</p>
                    <span className='flex text-yellow-400 text-xl mt-2 gap-1'>
                   
                      {Array.from({length: item.rating}, (_, index ) =>(
                        <FaStar />

                      ))}
                    </span>
                  </div>

                </div>
                <div className='mt-10 min-h-[15vh]'>
                  <p>{item.para}</p>
                </div>
              </SwiperSlide>

            )
          })}
        </Swiper>



       
      </div>
    </section>
  )
}

export default Testimonials


const review = [
  {
    id: 1,
    name: 'Emily joshan',
    Profession: 'Food Bloger',
    rating: '3',
    para: 'Lorem ipsum dolor sit amet, conses impedit accusamus!Lorem ipsum dolor sit amet, conses impedit accusamus!',
    image: Customer1,

  },
  {
    id: 2,
    name: 'Roshan singh',
    Profession: 'Chef',
    rating: '4',
    para: 'Lorem ipsum dolor sit amet, conses impedit accusamus!Lorem ipsum dolor sit amet, conses impedit accusamus!',
    image: Customer2,

  },
  {
    id: 3,
    name: 'Naila Hasan',
    Profession: 'Nutritionist',
    rating: '5',
    para: 'Lorem ipsum dolor sit amet, conses impedit accusamus!Lorem ipsum dolor sit amet, conses impedit accusamus!',
    image: Customer3,

  },
  {
    id: 4,
    name: 'Eyla Zahra',
    Profession: 'Model',
    rating: '3',
    para: 'Lorem ipsum dolor sit amet, conses impedit accusamus!Lorem ipsum dolor sit amet, conses impedit accusamus!',
    image: Customer4,

  },
  {
    id: 5,
    name: 'Carlos Mender',
    Profession: 'Fitness Coach',
    rating: '5',
    para: 'Lorem ipsum dolor sit amet, conses impedit accusamus!Lorem ipsum dolor sit amet, conses impedit accusamus!',
    image: Customer5,

  },
]
