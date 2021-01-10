import React, {useState} from "react"
import "../styles/index.css"
import 'antd/dist/antd.css';
import {InfoComponent} from "../components/infoComponent";
import NumericInput from "../components/numberInput";
import {Button} from "antd";
import TapeComponent from "../components/Tape";
import Tape from "../TuringMachine/Tape"
import Head from "../TuringMachine/Head"
import Machine from "../TuringMachine/Machine";
const Transitions = require('../../formatted.json').transitions;

const IndexPage = () => {
    const [value,setValue] = useState("54312");
    const [tapeValue, setTapeValue] = useState("")
    const [currentLocation, setCurrentLocation] = useState(0);
    const onChange = (val) => {
      setValue(val)
    };

    const Run = () => {
        const tape = new Tape(value);
        const head = new Head();
        const machine = new Machine(Transitions, tape, head);
        machine.run((tapeString, location) => {
            console.log("run")
            setCurrentLocation(location);
            setTapeValue(tapeString)
        })

    };

    function test(string, integer){

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
                <Button style={{margin : "1%"}} type="danger">Sıfırla</Button>
                <Button onClick={() => Run()} style={{margin : "1%"}} type="primary">Çalıştır</Button>
            </div>
            <div className="ortala">
                {value.split('').map((x,index) =>
                    "blank".indexOf(x) === -1 &&
                    <TapeComponent isCurrent = {currentLocation === index} value = {x}/>
                )}
            </div>
            <div className="ortala">
                {tapeValue.split('').map((x,index) =>
                    "blank".indexOf(x) === -1 &&
                    <TapeComponent isCurrent = {currentLocation === index} value = {x}/>
                )}
            </div>

        </div>
    </div>
  )
}

export default IndexPage
