import React, { useState } from 'react';

export function Ingredients() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleDivClick = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className={isExpanded ? 'IngredientsExpanded' : 'Ingredients'} onClick={handleDivClick}>
      <ul>
        <li>Salted Butter<span>120 g</span></li>
        <li>Light Brown Sugar<span>75 g</span></li>
        <li>Granuated Sugar<span>75 g</span></li>
        <li>Vanilla Extract<span>1/2 tsp</span></li>
        <li>Egg<span></span>1</li>
        <li>Plain Flour<span>240 g</span></li>
        <li>Bicarbonate of Soda<span>1/2 tsp</span></li>
        <li>Dark Chocolate<span>170 g</span></li>
        <li>Sea Salt Flakes<span>-</span></li>
      </ul>
    </div>
  )
}
