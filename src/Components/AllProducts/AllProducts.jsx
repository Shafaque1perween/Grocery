import CategoryPage from "../CategoryPage/CategoryPage"
import BgAll from '../../assets/all-banner.jpg'

function AllProducts() {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={BgAll} Categories={['All']}/>
    </div>
  )
}

export default AllProducts



