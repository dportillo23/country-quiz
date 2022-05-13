import React, { useState, useEffect } from "react";
import xCircle from '../images/x-xircle.svg'
import check from '../images/check.svg'

export default function CardButton(props) {

    const [buttonColor, setButtonColor] = useState();
    
    useEffect(() => {
        if(props.clicked) {
        if(props.choice === props.answer) {
            setButtonColor('right')
        }
        else if (props.selected === props.choice && props.answer !== props.choice) {
            setButtonColor('wrong')
        }} else {
            setButtonColor();
        }
      }, [props.clicked])
    

    const handleClick = e => {
        e.stopPropagation();
        props.setSelected(props.choice)
        props.setClicked(true)
        console.log(props.clicked);
        console.log(buttonColor);
    }

    return (
        <div className={props.selected ? `card__button disabled ${buttonColor}` : `card__button active ${buttonColor}`} onClick={!props.clicked ? handleClick : null} id={props.letter}>
            <span className="letter">{props.letter}</span>
            <p className="choice">{props.choice}</p>
            {buttonColor === 'right' ? <img className="icon" src={check} alt="" /> : null}
            {buttonColor === 'wrong' ? <img className="icon" src={xCircle} alt="" /> : null}
        </div>
    )
};