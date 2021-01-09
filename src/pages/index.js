import React, {useState} from "react"
import "../styles/index.css"
import 'antd/dist/antd.css';
import {InfoComponent} from "../components/infoComponent";
import NumericInput from "../components/numberInput";
import {Button} from "antd";

const IndexPage = () => {
    const [value,setValue] = useState("54312");
  const onChange = (val) => {
      setValue(val)
  }
  return (
    <div>
        <div className="info">
            <InfoComponent />
            <NumericInput style={{marginTop : '1%'}} value={value} onChange={onChange} />
            <div style={{
                display : "flex",
                flex : 1,
                justifyContent : "flex-end"
            }}>
                <Button style={{margin : "1%"}} type="primary">Çalıştır</Button>
                <span>a</span>
            </div>
        </div>
    </div>
  )
}

export default IndexPage
