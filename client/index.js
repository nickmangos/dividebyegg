import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './features/recipeSlice'
import { Provider } from 'react-redux'

// import reducers from './reducers'
import App from './components/App'

const store = configureStore({ 
  reducer: {
    recipe: recipeReducer
  }
})

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
)

