// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {list} = props
  const {thumbnailUrl, videoUrl} = list
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="trigger-button-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose className="colse-button" data-testid="closeButton" />
            </button>

            <ReactPlayer url={videoUrl} controls className="video-style" />
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
