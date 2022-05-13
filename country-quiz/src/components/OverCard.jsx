import React, { useEffect } from "react";
import resultLogo from '../images/undraw_winners_ao2o 2.svg'
import { useCookies } from "react-cookie";

export default function OverCard(props) {

  const [cookies, setCookies] = useCookies(['max-score']);

  useEffect(() => {
    const cookiesScore = cookies["max-score"] ? cookies['max-score'] : null;
    if (props.score > cookiesScore) { setCookies('max-score', props.score); }
    
    return () => {
      props.setScore(0)
    }
  }, [])

  const handleClick = () => {
    props.setPhase(0);
  }


  return (
    <div className="card card--over">
      <img className="resultLogo" src={resultLogo} alt="question logo" />

      <h1 className="result">Result</h1>
      <p>You got <span className="score">{props.score}</span> correct answers</p>

      <div onClick={handleClick} className="button--tryagain">Try Again</div>
    </div>
  )
};
