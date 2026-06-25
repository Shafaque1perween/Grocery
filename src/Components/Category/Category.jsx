
import Heading from "../Heading/Heading"
import FruitsCat from "../../assets/fruits-and-veggies.png"
import SeaFoodCat from "../../assets/meat-and-seafood.png"
import DairyCat from "../../assets/dairy-and-eggs.png"
import { Link } from 'react-router-dom'





const Category = () => {
  

const renderCards = category.map(card => {
    return(
        //Cards
        <div className="flex-1 basis-75" key={card.id}>
            {/*Cards Img */}
            <div className="w-full min-h-[30vh] relative -mb-10 mt-6 md:mt-1">
                <img src={card.img} className="absolute bottom-0" />
            </div>
            {/*Cards content*/}
            <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
                <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
                <p className="text-zinc-600 mt-3 mb-9">{ card.description}</p>
                <Link to={card.path} onClick={() =>window.scrollTo(0,0)}  className='bg-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:bg-orange-300 transition-all duration-300 cursor-pointer' >See All</Link>
            </div>
        </div>
    )
})




  return (
    <div>
      <section>
         <div className=" max-w-300 mx-auto px-10 ">
           <Heading highlight="Shop" heading="by Category" />
           {/*Category Cards */}
           <div className="flex gap-8 md:mt-15 flex-wrap  mt-10">
                 {renderCards}
           </div>
         </div>
      </section>
    </div>
  )
}

export default Category


const category = [
   {
    id: 1,
    title: "fruits and Veggies",
    description: "Delicious fruits and veggies with fresh toppings and authentic flavors.",
    img: FruitsCat,
     path:'/fruits',
  },
  {
    id: 2,
    title: "Meat and Sea Food",
    description: "Juicy sea food made with premium ingredients and served fresh.",
    img:SeaFoodCat ,
   path:'/SeaFood',
  },
  {
    id: 3,
    title: "Dairy &  Eggs",
    description: "Creamy and flavorful Dairy and eggs dishes prepared with traditional recipes.",
    img: DairyCat,
    path:'/Dairy',
  },
 
];

