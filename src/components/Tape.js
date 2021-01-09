import React from 'react'


export const Tape = ({value, isCurrent}) => {

    return (
        <span style={{backgroundColor: isCurrent ? "#d7aeae" : ""}} className="boxType">
           <span >
               {value}
           </span>
        </span>
    )
}

export default Tape