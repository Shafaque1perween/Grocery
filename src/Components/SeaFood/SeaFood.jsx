import BgSeafood from '../../assets/seafood-banner.jpg'
import CategoryPage from "../CategoryPage/CategoryPage"


const SeaFood = () => {
  return (
    <div>
   <CategoryPage title="SeaFood" bgImage={BgSeafood} Categories={['SeaFood']}/>
    </div>
  )
}

export default SeaFood
