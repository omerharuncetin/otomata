import React from 'react'
import CaretDownOutlined from "@ant-design/icons/lib/icons/CaretDownOutlined";

export const Tape = ({value, isCurrent}) => {

    return (
       <span style={{
           display : "inline-block",
           width : "5%"
       }}>
            <span style={{
                display : "flex",
                flex : 1,
                flexDirection : "column",
                padding : "1%"
            }}>
            {isCurrent ? <span><CaretDownOutlined /></span> : <span> </span>}
            <span style={{backgroundColor: isCurrent ? "#d7aeae" : ""}} className="boxType">
               <span>
                   {value === " " ? "_" : value}
               </span>
            </span>
        </span>
       </span>
    )
};

export default Tape