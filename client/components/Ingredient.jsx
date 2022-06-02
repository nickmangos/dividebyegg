import React from 'react'

export function Ingredient(props) {
  return (
    <div className="ingredient">
      <div className="ingredient__name">
        <h3>{props.name}</h3>
      </div>
      <div className="ingredient__quantity">
        <h3 className="ingredient__amount">{props.quantity}</h3>
        <h3 className="ingredient__unit">{props.measurement}</h3>
      </div>
    </div>
  )
}

