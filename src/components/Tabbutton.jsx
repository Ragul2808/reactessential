import React from "react";
export default function Tabbutton({ children, onSelect, isSelected }) {
    console.log(' Tabbutton APP COMPONENT EXECUTING')
  
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}
 