// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, isDeletedComment} = props
  const {id, nameInput, commentInput, isLiked, date, initialClassName} =
    commentDetails
  const initial = nameInput ? nameInput[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeText = isLiked ? 'active' : ''
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickIsLiked = () => {
    toggleIsLiked(id)
  }

  const onClickDelete = () => {
    isDeletedComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="time-container">
            <p className="username">{nameInput}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{commentInput}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={`button ${likeText}`}
            type="button"
            onClick={onClickIsLiked}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
