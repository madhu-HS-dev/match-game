import './index.css'

const MatchGameItem = props => {
  const {imageListDetails, onClickGameItem} = props
  const {id, thumbnailUrl} = imageListDetails

  const onClickThumbnail = () => {
    onClickGameItem(id)
  }

  return (
    <li>
      <button type="button" className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default MatchGameItem
