
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat ' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex flex-col md:flex-row max-w-300 max-auto py-10 px-10'>
            <span className='md:text-9xl text-6xl  font-bold text-orange-600 transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='max-w-175'>
                <h3 className='md:text-7xl text-5xl text-zinc-800 font-bold'>First Order Discount</h3>
                <p className='text-zinc-600 my-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eveniet consectetur velit, ea ratione eos dolore odit quos dolores nobis laborum cumque eaque numquam a</p>
                <Button content="Get a Discount"/>
            </div>


        </div>
         
    </section>
  )
}

export default Discount
