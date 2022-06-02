import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Ingredient } from './Ingredient'
// import { fetchIngredients } from '../apis/recipes'

export function Ingredients() {

  const [ingredients, setIngredients] = useState([])
  // const { id } = useParams() // Need for recipe ID?

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/recipes/ingredients/3')
      .then(res => res.json())
      .then(result => {
        setIngredients(result)
        console.log(result)
        return null
      })
      .catch(((error) => console.log(error)))
  }, [])

  return (
    <div>
      {ingredients.map(result =>
        <Ingredient 
          key={result?.list_order}
          name={result?.name || result?.user_defined}
          quantity={result?.quantity}
          measurement={result?.measurement || result?.default_measurement}
        />
      )}
    </div>
  )
}
