import Banner from "../Banner/Banner"
import Cards from "../Cards/Cards"

import ProductList from "../ProductList/ProductList"

const CategoryPage = ({title,bgImage, Categories=[]}) => {

     let filterItems = Categories.includes('All') ? ProductList : ProductList.filter(item=> Categories.includes(item.category))

    const renderProducts = filterItems.map(product=>{
        return(
            <Cards image={product.image} name={product.name} price={product.price}/>
        )

    }
)
  return (
    <div>
      <Banner title={title} bgImage={bgImage}/>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-9 p-20 max-w-300 mx-auto px-10">
        {renderProducts}
      </div>
    </div>
  )
}

export default CategoryPage
