// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList, moviesList1} = props
  console.log(moviesList)
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const color = {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: '32px',
    fontWeight: '600',
  }

  return (
    <>
      <div>
        <h1 style={color}>Action Movies</h1>
        <Slider {...settings}>
          {moviesList.map(each => (
            <MovieItem list={each} key={each.id} />
          ))}
        </Slider>
      </div>
      <div>
        <h1 style={color}>Comedy Movies</h1>
        <Slider {...settings}>
          {moviesList1.map(each => (
            <MovieItem list={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}
export default MoviesSlider
