import React from 'react'
import { useSelector} from 'react-redux'
import { RestartButton } from './Button'
import { Footer } from 'components/Footer'


const Summary = () => {
    const userAnswer = useSelector((state) => state.quiz.answers);
  
    const correctAnswers = userAnswer.filter(item => item.isCorrect)

      return (
        <>
      <div className='summary'>
        <h2>This is your summary</h2>
        {userAnswer.map((answer) => (
          <>
            <div className='summary-text'>
              <p>
              {' '}
              {answer.questionId}: Correct answer: {' '}
              {answer.question.options[answer.question.correctAnswerIndex]}
              </p>
              <p>
               Your answer: {' '}
              {answer.answer}
              </p>
            </div>
          </>
        ))}
         <RestartButton />
        <p>Your score {correctAnswers.length}/{userAnswer.length}</p>
      </div>
      <Footer/>
      
      </>
    );
  };
  
  export default Summary;
  

