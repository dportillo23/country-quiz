import React from "react";
import CountryQuiz from "../tools/CountryQuiz";
import { useCookies } from 'react-cookie';

export default function WelcomeCard(props) {
    const [cookies] = useCookies(['max-score'])


    const handleClick = async () => {
        const data = await CountryQuiz.getAPIData();
        props.setData(data);
        props.setPhase(1);
    }

    return (
        <div className="card card--welcome">
            {cookies['max-score'] ? <h3>Welcome back to the Quiz Country Game. Your max score is: {cookies['max-score']}</h3> : <h3>Welcome to the Country Quiz Game, let's have some fun</h3>}

            <div onClick={handleClick} className="button button--play">
                Let's play
            </div>
        </div>
    )
};
