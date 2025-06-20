import React, { useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { ShoppingCart } from 'lucide-react'

const Product = () => {
  const [active, setActive] = useState({
    id: 0,
    product: 'all',
  })

  const productTitle = [
    {
      id: 0,
      title: 'all',
      product: 'all',
    },
    {
      id: 1,
      title: 'newest',
      product: 'newest',
    },
    {
      id: 2,
      title: 'trending',
      product: 'trending',
    },
    {
      id: 3,
      title: 'best seller',
      product: 'best seller',
    },
  ]

  const products = [
    {
      title: 'library stool',
      status: 'New',
      price: '$250',
      image: '/src/assets/features/product_1.jpg',
      currentPrice: '$200',
      product: 'newest',
    },
    {
      title: 'library stool Chair',
      status: 'Sales',
      price: '$250',
      image: '/src/assets/features/product_2.webp',
      product: 'newest',
    },
    {
      title: 'library stool',
      price: '$250',
      image: '/src/assets/features/product_3.jpeg',
      product: 'best seller',
    },
    {
      title: 'library stool',
      status: 'New',
      price: '$250',
      image: '/src/assets/features/product_4.webp',
      currentPrice: '$200',
      product: 'best seller',
    },
    {
      title: 'library stool',
      status: 'New',
      price: '$250',
      image: '/src/assets/features/product_5.jpg',
      currentPrice: '$200',
      product: 'trending',
    },
    {
      title: 'library stool',
      status: 'New',
      price: '$250',
      image: '/src/assets/features/product_6.jpeg',
      currentPrice: '$200',
      product: 'trending',
    },
    {
      title: 'library stool',
      status: 'New',
      price: '$250',
      image: '/src/assets/features/product_5.jpg',
      currentPrice: '$200',
      product: 'all',
    },
    {
      title: 'library stool',
      status: 'New',
      price: '$250',
      image: '/src/assets/features/product_6.jpeg',
      currentPrice: '$200',
      product: 'all',
    },
  ]

  const productFilter =
    active?.product === 'all' ? products : products.filter((product) => product.product === active.product)

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-self-center">
        <SectionTitle title={'our product'} textAlign={'center'} mb={'mb-5'}></SectionTitle>
        <div className="flex items-center justify-center gap-6 mb-11">
          {productTitle?.map((title, index) => (
            <button
              key={title?.id}
              onClick={() =>
                setActive({
                  id: title?.id,
                  product: title?.product,
                })
              }
              className={`text-sm font-black uppercase font-inter cursor-pointer ${
                active?.id === index ? 'text-[#272343]' : 'text-[#9a9caa]'
              }`}
            >
              {title?.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 items-center gap-6">
        {productFilter?.map((product, index) => (
          <div
            key={index}
            className="p-4 transition transform duration-300 hover:-translate-y-1 hover:opacity-50 cursor-pointer shadow rounded-lg"
          >
            <div className="feature_image mb-4 relative">
              <img className="w-full max-h-[312px] object-cover rounded-lg" src={product?.image} alt={product?.title} />
              {product?.status && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                  <button className="text-sm font-inter font-normal">{product?.status}</button>
                </div>
              )}
            </div>
            <div className="feature_content">
              <div className="flex items-center justify-between">
                <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{product?.title}</h4>
                <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                  <ShoppingCart size="1.5rem" color="#fff" />
                </span>
              </div>
              <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                {product?.price}
                {product?.currentPrice && (
                  <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
