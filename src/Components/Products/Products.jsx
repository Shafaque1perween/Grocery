

import { useState } from "react"
import Heading from "../Heading/Heading"
import ProductList from "../ProductList/ProductList"
import Cards from "../Cards/Cards"
import { Link } from 'react-router-dom'


const Products = () => {

    const Categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']

    const [activeTab, setactiveTab] = useState('All');


    let filteredItems = activeTab === 'All' 
    ? ProductList : ProductList.filter(item => item.category === activeTab);


    







    const renderCards = filteredItems.slice(0,8).map(product => {
        return (

            < Cards image={product.image} name={product.name} price={product.price} />
        )


    })


    return (
        <section>
            <div className='max-w-300 py-20 mx-auto px-10'>
                <Heading highlight="Our" heading="Products" />

                {/*Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mt-10">
                    {Categories.map(catergory => {
                        return (
                            <button key={catergory} className={` px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === catergory ? 'bg-orange-500 text-white' : 'bg-zinc-100'}`} onClick={() => setactiveTab(catergory)}>
                                {catergory}
                            </button>
                        )
                    })}
                </div>

                {/* product listing */}
                <div className='grid grid-1 md:grid-cols-4  gap-9 mt-20'>
                    {renderCards}
                </div>

                <div className="mt-15  mx-auto w-fit">
                    <Link to="/AllProducts" onClick={() =>window.scrollTo(0,0)}  className='bg-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:bg-orange-300 transition-all duration-300 cursor-pointer' >View All</Link>
                </div>





            </div>
        </section>
    )
}

export default Products



