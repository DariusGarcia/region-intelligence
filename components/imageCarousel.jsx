import Image from 'next/image'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

export default function ImageCarousel() {
  const prevArrow = <LeftOutlined style={{ color: 'red' }} />
  const nextArrow = <RightOutlined style={{ color: 'blue' }} />

  return (
    <Carousel
      prevArrow={prevArrow}
      nextArrow={nextArrow}
      dotPosition={'bottom'}
      className='text-black bg-gray-100 p-4'
      autoplay>
      {images.map((image, index) => (
        <div key={index} className='py-6'>
          <Image
            width={800}
            height={400}
            src={image.src}
            alt={image.alt}
            className='rounded-md'
          />
          <p className='text-xl mt-4 font-semibold'>{image.caption}</p>
        </div>
      ))}
    </Carousel>
  )
}

const images = [
  {
    src: '/landingHeader/home.jpg',
    alt: 'Image 1',
    caption: "Sekisui House Sets its Eyes on SoCal's Developer Market",
  },
  {
    src: '/landingHeader/home.jpg',
    alt: 'Image 2',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    src: '/landingHeader/home.jpg',
    alt: 'Image 3',
    caption: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
  },
  {
    src: '/landingHeader/home.jpg',
    alt: 'Image 4',
    caption:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]
