import React from 'react'
import { Origin } from './Origin'
import { Ingredients } from './Ingredients'

export function Recipe() {

  return (
    <div className="Recipe">
      <Origin />
      <h1>Perfect Chocolate Chip Cookies</h1>
      <div>
        <img src="" />
      </div>
      <div className="InfoPane">
        <div><p>12</p><p className='InfoPane__Label'>Serves</p></div>
        <div><p>1223</p><p className='InfoPane__Label'>Cals</p></div>
        <div><p>12 <span className='time-unit'>mins</span></p><p className='InfoPane__Label'>Prep Time</p></div>
      </div>
      <Ingredients />
      <div className="Directions">
        <p>Using a wooden spoon, or (even better) a food mixer, beat together the <b>butter</b> and <b>sugars</b> until just combined. Add the <b>vanilla extract</b>, then the <b>egg</b>, and beat in well.</p>
        <p>Sift together the <b>flour</b> and <b>bicarbonate of soda</b>, then use a spoon to add to the mixture, stirring until it just comes together into a dough. Fold in the <b>chocolate pieces</b>, then chill overnight, or for up to 72 hours.</p>
        <p>Preheat the oven to 180C. Line two baking trays with greaseproof paper, and divide the mixture into golf-ball sized rounds, spacing them well apart. Bake for about 15 minutes, until golden, but not browned.</p>
        <p>Sprinkle lightly with <b>sea salt</b> if using, and allow to cool on the tray for a couple of minutes, before moving to a wire rack to cool completely – or scoffing immediately.</p>
      </div>
      <div className='Footer'></div>
    </div>
  )
}
