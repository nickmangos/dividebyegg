import { createSlice } from '@reduxjs/toolkit'

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    likes: 64,
    ingredients: ['milk', 'eggs']
  },
  reducers: {
    like: state => {
      state.likes += 2
    },
    dislike: state => {
      state.likes -= 1
    }
    // addIngredient: (state, action) => {
    //   // state.ingredients += action.payload
    // },
    // removeIngredient: (state, action) => {
    //   // state.ingredients += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { like, dislike, addIngredient, removeIngredient } = recipeSlice.actions

export default recipeSlice.reducer