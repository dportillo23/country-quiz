import React, { useState } from 'react';
import '../styles/style.css';
import QuestionCard from './QuestionCard';
import WelcomeCard from './WelcomeCard';
import OverCard from './OverCard';

function App() {

  //  Constatnts to manage data, score and app phase
  const [data, setData] = useState();
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState(0);

  return (
    <>
      <div className='App' style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: "cover" }}>
        <div className="card__div">
          <h1 className='title'>Country Quiz</h1>

          {/* Game phases - Welcome */}
          {phase === 0 ? <WelcomeCard 
          setPhase={setPhase} 
          setData={setData} 
          /> : null}

          {/* Game phases - Quiz */}
          {phase === 1 ? <QuestionCard
            data={data}
            score={score}
            setScore={setScore}
            setPhase={setPhase}
          /> : null}

          {/* Game phases - Game Over */}
          {phase === 2 ? <OverCard score={score} setScore={setScore} setPhase={setPhase} /> : null}

        </div>
        <footer>
          <p>created by <a href="https://devchallenges.io/portfolio/dportillo23">dportillo23</a> - devChallenges.io</p>
        </footer>
      </div>
    </>
  );
}


export default App;
