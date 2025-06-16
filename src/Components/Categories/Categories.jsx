import { ShoppingCart } from 'lucide-react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Slider from 'react-slick'

const Categories = () => {
  const categories = [
    {
      title: 'Wing Chair',
      products: '3,584 Products',
      image: '/src/assets/features/product_1.jpg',
    },
    {
      title: 'Wooden Chair',
      products: '157 Products',
      image: '/src/assets/features/product_1.jpg',
    },
    {
      title: 'Desk Chair',
      products: '524 Products',
      image: '/src/assets/features/product_1.jpg',
    },
  ]
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    speed: 500,
    slidesToShow: 3,
  }
  return (
    <div className="w-full flex items-center justify-start">
      <div className="lg:container mx-auto">
        <SectionTitle title="Top Categories" mb="mb-11"></SectionTitle>
        <div className="slider-container features_silider w-full h-full">
          <Slider {...settings}>
            {categories?.map((category, index) => (
              <div key={index} className="p-4 h-[448px]">
                <div className="category_image mb-4 relative">
                  <img className="w-full h-full object-cover rounded-lg" src={category?.image} alt={category?.title} />
                  <div className="absolute bottom-0 left-0 w-full h-[85px] bg-[#000000] bg-opacity-50 flex flex-col justify-center p-4">
                    <h4 className="text-xl text-white font-semibold font-inter  mb-2 capitalize">{category?.title}</h4>
                    <p className="text-sm text-white capitalize font-normal font-inter">{category?.products}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Categories
