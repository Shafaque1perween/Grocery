import BgDairy from '../../assets/dairy-banner.jpg'

import CategoryPage from '../CategoryPage/CategoryPage'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy & Eggs" bgImage={BgDairy} Categories={['Dairy']}/>
    </div>
  )
}

export default Dairy

