import { IoIosArrowForward } from "react-icons/io"


const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
    <div className="md:flex-row flex flex-col  flex-wrap gap-y-17 max-w-350 mx-auto px-10">
            <div className="flex-1 md:basis-75 ">
                 <a href='#' className="text-3xl font-semibold">
                      Gr<span className="text-orange-500">O</span>cery
                  </a>
                  <p className=" text-zinc-600 mt-6 max-w-87.5">
                    Bred for a high content of beneficial substances.Our products are all fresh and healthy
                  </p>
                  <p className="text-zinc-600 mt-6">
                    2025 &copy; All Rights Reserved
                  </p>
            

        </div>

        

        <ul className="flex-1 ">
            <li className="text-zinc-800 text-2xl">
                <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>

            </li>
            <li className='mt-6'>
                <a href="#" className='text-zinc-800 hover:text-orange-500 '>About</a>
            </li>
             <li className='mt-6'>
                <a href="#"className='text-zinc-800 hover:text-orange-500'>FAQ'S</a>
            </li>
             
        </ul>


        <ul className="flex-1  w-60">
            <li className="text-zinc-800 text-2xl">
                <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>

            </li>
            <li className='mt-6'>
                <a href="#" className='text-zinc-800 hover:text-orange-500 '>Support Center</a>
            </li>
             <li className='mt-6'>
                <a href="#"className='text-zinc-800 hover:text-orange-500'>Feedback</a>
            </li>
             <li className='mt-6'>
                <a href="#"className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
            </li>
             
        </ul>
       



        <div className=" w-fit">
        <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>

        <p className='mt-6 text-zinc-600'>
            Questions or Feedbacks?<br/>
            We'd love to hear from you.
          
        </p>
        <div className='bg-white flex p-1 rounded-lg mt-6'>
            <input type="email" value="" id="" autoComplete="off" placeholder="Email Address" className=" h-[5vh] pl-4  focus:outline-none "/>
            <button className="bg-orange-600 justify-end p-2 rounded-lg text-white text-2xl hover:bg-orange-700 cursor-pointer">
                <IoIosArrowForward/>
            </button>

        </div>

        </div>

        </div>

    </footer>
  )
}

export default Footer
