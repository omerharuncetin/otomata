import React, {useState, useEffect} from "react"
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
    const [tapeValue, setTapeValue] = useState("");
    const [currentLocation, setCurrentLocation] = useState(0);
    const [time, settime] = useState(500);
    const [allowToRun, setAllowToRun] = useState(true)

    const onChange = (val) => {
      setValue(val)
    };

    const delayLoop = (fn) => {
           return (x, i) => {
               if(allowToRun)
               {
                   setTimeout(() => {
                       x.tapeString = x.tapeString[0] === " " && x.tapeString[1] === " " ? x.tapeString.replaceAll(' ', '!') : x.tapeString
                       fn(x);
                   }, i * time);
               }
           };

    };

    const display = (x) => {
        setTapeValue(x.tapeString);
        setCurrentLocation(x.location)
    };

    const Run = () => {
        setAllowToRun(true)
        const tape = new Tape(value);
        const head = new Head();
        const machine = new Machine(Transitions, tape, head);

        const tlist = [];
        machine.run((tapeString, location, isContinuing) => {
            if(isContinuing)
                tlist.push({tapeString, location});
            else{
                setTimeout(() => {
                    tlist.forEach(delayLoop(display, time));
                }, 500)

            }
        })
    };

    const timeUp = () =>
    {
        settime(2*time)
        console.log(time)
    }

    const timeDown = () =>
    {
        settime(time/2)
        console.log(time)
    }

    const Sifirla = () =>
    {
        setAllowToRun(false);
    }

  return (
    <div>
        <div className="info">
            <InfoComponent />
            <NumericInput style={{marginTop : '1%'}} value={value} onChange={onChange} />
            <div>
                <Button onClick = {() => timeDown()} style={{margin : "1%"}} type="">Hızlandır</Button>
                <Button onClick = {() => timeUp()} style={{margin : "1%"}} type="">Yavaşlat</Button>
                <p style={{marginLeft: '1.5%'}}>Gecikme Zamanı: {time}</p>
                </div>
            <div style={{
                display : "flex",
                flex : 1,
                justifyContent : "flex-end"
            }}>
                <Button onClick={() => Sifirla()} style={{margin : "1%"}} type="danger">Sıfırla</Button>
                <Button onClick={() => Run()} style={{margin : "1%"}} type="primary">Çalıştır</Button>
            </div>
            <div className="ortala">
                {value.split('').map((x,index) =>
                    <TapeComponent isCurrent = {index === 0 } value = {x}/>
                )}
            </div>
            <div className="ortala">
                {tapeValue.split('').map((item,index)=>
                       <TapeComponent isCurrent = {currentLocation === index} value = {item}/>
               )}
            </div>

        </div>
    </div>
  )
}

export default IndexPage
