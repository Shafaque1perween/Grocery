
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa6";
import { FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValues = value.slice(0,2).map( item => {

        return (
            <div key={item.id} className='flex md:flex-row-reverse gap-6 items-center'>
                <div>
                    <span className='flex justify-center items-center text-3xl  bg-orange-500 w-12 h-12 rounded-full text-white '>{item.icon}</span>
                </div>

                <div className='md:text-right '>
                   <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                   <p className='text-zinc-600 mt-3'>{item.para}</p>
                </div>
            </div>
        )
         
    })
     const rightValues = value.slice(2).map( item => {

        return (
            <div key={item.id} className='flex flex-row items-center gap-6 '>
                <div> 
                    <span className='flex justify-center items-center text-3xl  bg-orange-500 w-12 h-12 rounded-full text-white '>{item.icon}</span>
                </div>

                <div className='md:text-right gap-8 '>
                   <h3 className='text-zinc-800  text-3xl font-bold '>{item.title}</h3>
                   <p className='text-zinc-600 mt-3'>{item.para}</p>
                </div>
            </div>
        )
         
    })


    return(
        <section>
            <div className='max-w-300 mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Value" />

                <div className=' flex md:flex-row flex-col gap-15  md:gap-6 mt-15  '>
                    {/*left values */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between '>
                        {leftValues}
                    </div>
                    <div className=' hidden md:flex w-1/2'>
                        <img src={Basket} />
                    </div>
                    {/*Right values */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {rightValues}
                    </div>

                </div>


            </div>
        </section>
    )

}

export default Values


const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'it is along established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />

    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'it is along established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />

    },
    {
        id: 3,
        title: 'Food Saftey',
        para: 'it is along established fact that a reader will be distracted by the readable.',
        icon: <FaShieldAlt />

    },
    {
        id: 4,
        title: '100% Organic',
        para: 'it is along established fact that a reader will be distracted by the readable.',
        icon: <FaSeedling />

    }

];
