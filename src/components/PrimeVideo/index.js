// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const action = moviesList.filter(each => {
    if (each.categoryId === 'ACTION') {
      return {
        id: each.id,
        thumbnailUrl: each.thumbnailUrl,
        videoUrl: each.videoUrl,
        categoryId: each.categoryId,
      }
    }
  })
  const comedy = moviesList.filter(each => {
    if (each.categoryId === 'COMEDY') {
      return each
    }
  })
  console.log(comedy)
  return (
    <div className="background-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image-prime-logo"
      />
      <div className="slider-container">
        <MoviesSlider
          moviesList={action}
          moviesList1={comedy}
          key={moviesList.id}
        />
      </div>
    </div>
  )
}
export default PrimeVideo
