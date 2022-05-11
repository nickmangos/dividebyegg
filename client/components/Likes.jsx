import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { like, dislike } from '../features/recipeSlice'

export function Likes() {
  const likes = useSelector(state => state.recipe.likes)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(like())}
        >
          Increment
        </button>
        <br />
        <span>{likes}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(dislike())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
