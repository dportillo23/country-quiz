import React, { useState, useRef } from "react";
import questions from "../data/questions";
import questionLogo from '../images/undraw_adventure_4hum 1.svg'
import CardButton from "../elements/CardButton";
import NextButton from "../elements/NextButton";
import CountryQuiz from "../tools/CountryQuiz";

export default function QuestionCard(props) {

    //  Constant and states
    const [selected, setSelected] = useState();
    const [clicked, setClicked] = useState(false);
    const quiz = useRef(new CountryQuiz(props.data));

    // Choices
    const CHOICES = ['A', 'B', 'C', 'D']

    const [question, setQuestion] = useState(quiz.current.question);

    const [choices, setChoices] = useState(quiz.current.choices);
    const shuffleChoices = quiz.current.shuffleChoices;

    // Add variables to questions strings
    const formatedQuestion = questions[question.qType].replace(/{\w+}/g, placeholder =>
        question.right[placeholder.substring(1, placeholder.length - 1)] || placeholder
    );

    // Handle next clicks
    const handleClick = () => {
        const answer = question.qType === 'country' ? question.right.capital : question.right.name;

        if (CountryQuiz.checkAnswer(selected, answer)) {
            const newScore = props.score + 1;
            props.setScore(newScore);
            setClicked(false);
            quiz.current.getNextQuestion();
            setQuestion(quiz.current.question);
            setChoices([...quiz.current.question.wrongs, quiz.current.question.right])
            shuffleChoices.current = choices.sort(() => 0.5 - Math.random())
            setSelected();
            console.log('question: ', question);
            console.log('choices: ', choices);
            console.log('shuffleChoices: ', shuffleChoices);
        } else {
            props.setPhase(2);
        }
    }

    return (
        <div className="card card--question">
            <img className="questionLogo" src={questionLogo} alt="question logo" />
            {question.qType === 'flags'
                ? <img className="flag" src={question.right.flags.svg} alt={`${question.right.name} flag`} />
                : null}
            <h1 className="question">{formatedQuestion}</h1>
            <div className="button__container">

                {CHOICES.map((letter, i) => {
                    return (<CardButton
                        key={letter}
                        letter={letter}
                        choice={question.qType === 'country' ? shuffleChoices[i].capital : shuffleChoices[i].name}
                        setSelected={setSelected}
                        selected={selected}
                        answer={question.qType === 'country' ? question.right.capital : question.right.name}
                        clicked={clicked}
                        setClicked={setClicked}

                    />)
                })}
            </div>

            {/* Next button */}
            {selected ? <NextButton handleClick={handleClick} /> : null}

        </div>
    )
};
