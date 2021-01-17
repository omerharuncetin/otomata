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
import { Input } from 'antd';

const { TextArea } = Input;
const Transitions = require('../../formatted.json').transitions;

const IndexPage = () => {
    const [value,setValue] = useState("54312");
    const [tapeValue, setTapeValue] = useState("");
    const [currentLocation, setCurrentLocation] = useState(0);
    const [time, setTime] = useState(500);
    const [allowToRun, setAllowToRun] = useState(true);
    const [textAreaValue, setTextAreaValue] = useState("");

    const onChange = (val) => {
      setValue(val)
    };

    const display = (x) => {
        setTapeValue(x.tapeString);
        setCurrentLocation(x.location);
    };

    const makeSet = (steps, array) => {
        array.map((item,index) =>{
            if(index === 0 ||index % 3 === 0)
                steps.push(item);
        });
    };

    const displayTape = (tList) => {
        tList.forEach((transition, index) => {
            if(allowToRun)
            {
                setTimeout(() => {
                    transition.tapeString = transition.tapeString[0] === " " && transition.tapeString[1] === " "
                        ? transition.tapeString.replaceAll(' ', '!') : transition.tapeString;
                    display(transition);
                }, index * time);
            }
        });
    };

    const writeTransitions = (steps) => {
        steps.forEach((item,index) => {
            setTimeout(() => {
                if(index ===  steps.length - 1){
                    setTextAreaValue(currentVal => {
                        currentVal += currentVal.indexOf("Sıralama") > -1 ? "" :
                            steps[steps.length - 1 ] + "\nSıralama işlemi tamamlanmış olur.";
                        return currentVal
                    })
                }
                else{
                    item && setTextAreaValue(currentVal => {
                        currentVal += item + "\n";
                        return currentVal
                    });
                }
            }, index * time)
        })
    };

    const Run = () => {
        setAllowToRun(true);
        setTextAreaValue("");
        const tape = new Tape(value);
        const head = new Head();
        const machine = new Machine(Transitions, tape, head);

        const tList = [];
        machine.run((tapeString, location, isContinuing, machineSteps) => {
            if(isContinuing)
                tList.push({tapeString, location});
            else{
                const steps = [];
                makeSet(steps,machineSteps);
                setTimeout(() => {
                    displayTape(tList);
                    writeTransitions(steps)
                }, 500)
            }
        })
    };

    const timeUp = () =>
    {
        setTime(2*time);
    };

    const timeDown = () =>
    {
        setTime(time/2)
    };

  return (
    <div>
        <div className="info">
            <InfoComponent />
            <NumericInput style={{marginTop : '1%'}} value={value} onChange={onChange} />
            <div>
                <Button onClick = {() => timeDown()} style={{margin : "1%"}} type="">Hızlandır</Button>
                <Button onClick = {() => timeUp()} style={{margin : "1%"}} type="">Yavaşlat</Button>
                <p style={{marginLeft: '1.5%'}}>Gecikme Zamanı: {time / 1000} saniye</p>
                </div>
            <div style={{
                display : "flex",
                flex : 1,
                justifyContent : "flex-end"
            }}>
                <Button size={'large'} onClick={() => Run()} style={{margin : "1%"}} type="primary">Çalıştır</Button>
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
            <br/><br/>
            <div className="ortala">
                <h3>Geçişler</h3>
                <TextArea readOnly value={textAreaValue} rows={17} />
            </div>
        </div>
    </div>
  )
}

export default IndexPage
