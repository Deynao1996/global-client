import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive'

import victory from '../../resources/img/work-victory.jpg'
import alexNowak from '../../resources/img/work-alex-nowak.jpg'
import metiew from '../../resources/img/work-metiew-smith.jpg'

import './_mainSlider.scss'

const slidesData = [
  {
    img: victory,
    title: 'AI Art',
    content:
      'Creating stunning and original images with artificial intelligence'
  },
  {
    img: metiew,
    title: 'Graphic Design',
    content: 'Crafting visual content that communicates a message or a brand'
  },
  {
    img: alexNowak,
    title: 'Web Design',
    content:
      'Designing and developing websites that are attractive and functional'
  },
  {
    img: victory,
    title: 'AI Art',
    content:
      'Creating stunning and original images with artificial intelligence'
  },
  {
    img: metiew,
    title: 'Graphic Design',
    content: 'Crafting visual content that communicates a message or a brand'
  },
  {
    img: alexNowak,
    title: 'Web Design',
    content:
      'Designing and developing websites that are attractive and functional'
  }
]

const NextArrow = ({ onClick }) => {
  return (
    <button className="slider__btn slider__btn-left" onClick={onClick}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 150 118"
      >
        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
          <path
            d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
            c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
            c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"
          ></path>
        </g>
      </svg>
    </button>
  )
}

const PrevArrow = ({ onClick }) => {
  return (
    <button className="slider__btn slider__btn-right" onClick={onClick}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 150 118"
      >
        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
          <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"></path>
        </g>
      </svg>
    </button>
  )
}

const MainSlider = ({ imageIndex, setImageIndex }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
  const settings = {
    className: 'slider',
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: isMobile ? 1 : 3,
    speed: 500,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    swipe: false,
    beforeChange: (current, next) => setImageIndex(next)
  }

  return (
    <Slider {...settings}>
      {slidesData.map(({ img, title, content }, i) => {
        return (
          <div
            className={
              imageIndex === i
                ? `slider__item slider__item_active`
                : 'slider__item'
            }
            key={i}
          >
            <div className="slider__item-img">
              <img src={img} alt="work" />
            </div>
            <h4 className="slider__item-title">{title}</h4>
            <span>{imageIndex === i ? content : ''}</span>
          </div>
        )
      })}
    </Slider>
  )
}

export default MainSlider
