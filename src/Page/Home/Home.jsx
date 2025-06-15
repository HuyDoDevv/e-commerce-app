import Features from '../../Components/Features/Features'
import Banner from '../../Components/Banner/Banner'
import Brand from '../../Components/Brand/Brand'
import Delivery from '../../Components/Delivery/Delivery'

const Home = () => {
  return (
    <div>
      {/* banner component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-3lx">
        <Banner />
      </div>

      {/* delivery component */}
      <div className="delivery_component w-full min-h-[#150px]">
        <Delivery />
      </div>

      {/* brand component */}
      <div className="brand flex items-center justify-center w-full mt-8 mb-8 h-[171px]">
        <Brand />
      </div>

      {/* feature component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features />
      </div>
    </div>
  )
}

export default Home
