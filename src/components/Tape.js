import React from 'react'
import CaretDownOutlined from "@ant-design/icons/lib/icons/CaretDownOutlined";

export const Tape = ({value, isCurrent}) => {

    return (
       <span key={value + "0"} style={{
           display : "inline-block",
           width : "5%"
       }}>
            <span key={value + "1"} style={{
                display : "flex",
                flex : 1,
                flexDirection : "column",
                padding : "1%"
            }}>
            {isCurrent ? <span><CaretDownOutlined /></span> : <span> </span>}
            <span key={value + "2"} style={{backgroundColor: isCurrent ? "#d7aeae" : ""}} className="boxType">
               <span key={value + "3"}>
                   {value === " " ? "_" : value}
               </span>
            </span>
        </span>
       </span>
    )
};

export default Tape