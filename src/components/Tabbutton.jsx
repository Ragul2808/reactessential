import React from "react";
export default function Tabbutton({ children, onSelect }) {
    console.log(' Tabbutton APP COMPONENT EXECUTING')
  
    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}
 