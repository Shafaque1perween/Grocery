import CategoryPage from "../CategoryPage/CategoryPage"
import BgFruits from "../../assets/fruits-banner.jpg"


const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} Categories={['Fruits']}/>
    </div>
  )
}

export default Fruits
