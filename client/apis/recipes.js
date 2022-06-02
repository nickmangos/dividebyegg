import request from 'superagent'

export function fetchIngredients (id) {
  return request.get('/api/v1/recipes/ingredients/' + id)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}