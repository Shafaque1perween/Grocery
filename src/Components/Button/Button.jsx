

const Button = (props) => {
  return (
    <button className='bg-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:bg-orange-300 transition-all duration-300 cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button
