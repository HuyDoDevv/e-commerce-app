import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { ShoppingCart, User } from 'lucide-react'
import Slider from 'react-slick'

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description:
        'I was genuinely surprised by how comfortable this chair is. The cushioning is just right — not too soft, not too firm — and the ergonomic support has made a huge difference in how my back feels after long working hours. It’s become my go-to chair for both work and relaxation.',
      name: 'Anna Thompson',
      position: 'Graphic Designer',
    },
    {
      id: 2,
      description:
        'This chair is not only functional but also a beautiful addition to my living space. The sleek, modern design gets compliments from everyone who visits, and the quality of the materials used makes it feel very premium. It definitely elevates the overall look of my room.',
      name: 'Michael Lee',
      position: 'Software Engineer',
    },
    {
      id: 3,
      description:
        'I’ve tried several chairs before, but this one stands out for its build quality and thoughtful design. It feels very sturdy, doesn’t wobble at all, and the seat height and angle are just perfect. You can tell that real attention to detail went into making it.You can tell that real attention to detail went into making it.',
      name: 'Sophia Nguyen',
      position: 'Marketing Manager',
    },
    {
      id: 4,
      description:
        'One of the things I appreciate most is how supportive the backrest is. I often struggle with back pain, but after switching to this chair, I’ve noticed a significant improvement. I can now sit for extended periods without discomfort — highly recommended for anyone who works at a desk all day.',
      name: 'David Kim',
      position: 'Content Creator',
    },
    {
      id: 5,
      description:
        'From the moment I unpacked it, I knew this chair was a good choice. It was easy to assemble with clear instructions, and once set up, it looked exactly like what I saw online. It’s stylish, comfortable, and very practical — a perfect balance of form and function.',
      name: 'Emily Chen',
      position: 'Interior Designer',
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <div className="lg:container mx-auto">
      <SectionTitle title={'What is client says about us'} mb="mb-11"></SectionTitle>
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {clientSays?.map((client, index) => (
            <div key={index} className="p-7 border-[1px] border-[#e1e1e3] rounded-lg min-h-[300px]">
              <p className="text-2xl mb-4 text-[#636270] font-inter font-normal client_say_description">
                {client?.description}
              </p>
              <div className="flex items-center">
                <h4>
                  <User size="4rem" />
                </h4>
                <div>
                  <h4 className="text-2xl text-[#272343] font-inter font-medium capitalize mb-1.5">{client?.name}</h4>
                  <p className="text-base text-[#9a9caa] font-inter capitalize font-normal">{client?.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Client
