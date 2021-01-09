import React from 'react'
const Transitions = require('../../formatted.json')

const InfoComponent = () => {
    
    const GoRight = () =>
    {
        //move right in tape
    }

    const GoLeft = () =>
    {
        //move left in tape
    }

    const StayStill = () =>
    {
        //stay still
    }

    const WriteOnTape = () =>
    {

    }

    const Move = (currentState, currentValue) =>
    {
        const currentTransition = Transitions.transitions.find(i => i.currentState === currentState && i.currentValue === currentValue)
        currentTransition.direction === 'R' && GoRight()
        currentTransition.direction === 'L' && GoLeft()
        currentTransition.direction === 'S' && StayStill()

    }
    const Head = ''
    return (
        <div>
        </div>
    )
}

export default InfoComponent