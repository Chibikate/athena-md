"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navigator from "@/components/hero_page/navigator";
import Image from "next/image";
import Image1 from "@/public/quiz3/Image1.png"; // Update this path to your DICOM quiz image

const quizQuestions = [
  {
    question:
    "1. What feature enables users to quickly search for previously imported datasets?", 
  
    options: [
      "A. Quick access toolbar",
      "B. Navigation panel",
      "C. Search bar",
      "D. Filter panel",
    ],
    image: Image1,
    correctAnswer: "C. Search bar"
  },
];

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(""));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showResults && calculateScore() === quizQuestions.length) {
      setShowConfetti(true);
      // No timeout to clear the confetti - it will run continuously
    }
  }, [showResults, calculateScore]);

  const handleAnswerChange = (event, questionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = event.target.value.trim();
    setUserAnswers(updatedAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer.trim() === quizQuestions[index].correctAnswer.trim()) {
        score++;
      }
    });
    return score;
  };

  const checkWrong = () => {
    let wrong = [];
    userAnswers.forEach((answer, index) => {
      if (answer.trim() !== quizQuestions[index].correctAnswer.trim()) {
        wrong.push(index + 1);
      }
    });
    return wrong;
  };

  const retakeQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(""));
    setCurrentQuestion(0);
    setShowResults(false);
    setShowConfetti(false);
  };

  const isCurrentQuestionAnswered = () => {
    return userAnswers[currentQuestion] !== "";
  };

  const areAllQuestionsAnswered = () => {
    return userAnswers.every((answer) => answer !== "");
  };

  const calculateProgress = () => {
    return ((currentQuestion + 1) / quizQuestions.length) * 100;
  };

  const score = calculateScore();
  const wrong = checkWrong();

  // Continuous CSS Confetti Animation
  const renderConfetti = () => {
    if (!showConfetti) return null;
    
    const confettiPieces = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080'];
    
    for (let i = 0; i < 100; i++) {
      const left = `${Math.random() * 100}%`;
      const animationDelay = `${Math.random() * 5}s`;
      const animationDuration = `${Math.random() * 2 + 2}s`; // Between 2-4 seconds
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = `${Math.random() * 0.5 + 0.5}rem`; // Random size between 0.5rem and 1rem
      
      confettiPieces.push(
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left,
            top: '-20px',
            width: size,
            height: size,
            backgroundColor: color,
            animation: 'confetti-fall-continuous infinite linear',
            animationDelay,
            animationDuration
          }}
        />
      );
    }
    
    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <style jsx>{`
          @keyframes confetti-fall-continuous {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>
        {confettiPieces}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6 md:px-6">
      {/* CSS Confetti */}
      {renderConfetti()}

      {/* Header with logo and navigation */}
      <div className="w-full max-w-screen-l mx-auto shadow-md">
        <Navigator />
      </div>
      
      {/* Quiz title */}
      <h1 className="text-xl md:text-2xl font-bold text-center my-4 md:mb-6">DICOM Quiz</h1>
      
      {/* Quiz container */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 w-full max-w-4xl mt-6">
        {!showResults ? (
          <div>
            <div className="mb-4 md:mb-8">
              <p className="text-base md:text-lg font-medium mb-4 md:mb-6">{quizQuestions[currentQuestion].question}</p>
              
              {quizQuestions[currentQuestion].image && (
                <div className="flex justify-center mb-6">
                  <div className="relative w-full max-w-md md:max-w-lg">
                    <Image 
                      src={quizQuestions[currentQuestion].image} 
                      alt="Question illustration" 
                      className="border border-gray-200 rounded"
                      width={550}
                      height={300}
                      layout="responsive"
                      priority
                    />
                  </div>
                </div> 
              )}
              
              <div className="space-y-2 md:space-y-3">
                {quizQuestions[currentQuestion].options.map(
                  (option, optionIndex) => {
                    const isSelected = userAnswers[currentQuestion] === option.trim();
                    return (
                      <div 
                        key={optionIndex} 
                        className={`border rounded-md p-2 md:p-3 cursor-pointer transition-colors ${
                          isSelected ? 'bg-green-100 border-green-500' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => {
                          const event = { target: { value: option } };
                          handleAnswerChange(event, currentQuestion);
                        }}
                      >
                        <label className="flex items-start cursor-pointer w-full text-sm md:text-base">
                          <input
                            type="radio"
                            name={`question-${currentQuestion}`}
                            value={option}
                            onChange={(e) => handleAnswerChange(e, currentQuestion)}
                            checked={isSelected}
                            className="mt-1 mr-2 md:mr-3 flex-shrink-0"
                          />
                          <span className="flex-1">{option}</span>
                        </label>
                      </div>
                    );
                  }
                )}
              </div>
              
              <div className="flex justify-between mt-6 md:mt-8">
                <div></div> {/* Empty div to maintain layout since there's only one question */}
                
                <button
                  onClick={() => setShowResults(areAllQuestionsAnswered())}
                  className={`px-4 md:px-6 py-2 rounded text-sm md:text-base ${
                    areAllQuestionsAnswered() 
                      ? 'bg-blue-900 text-white hover:bg-blue-800' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!areAllQuestionsAnswered()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-lg md:text-xl mb-3 md:mb-4">
              Your Score: {score} out of {quizQuestions.length}
            </p>
            
            {wrong.length > 0 && (
              <p className="text-red-600 mb-4 md:mb-6 text-sm md:text-base">
                You got a wrong answer on question{wrong.length > 1 ? 's' : ''} #{wrong.join(', #')}
              </p>
            )}
            
            {score === quizQuestions.length ? (
              <div>
                <p className="text-green-600 font-bold text-lg md:text-xl mb-4">
                  Perfect! Congratulations on completing the quiz.
                </p>
                <Link href="/fillup/adddicom">
                  <button className="bg-blue-900 text-white px-5 md:px-6 py-2 md:py-3 rounded text-sm md:text-base hover:bg-blue-800">
                    Get Your Certificate
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-red-600 font-medium text-sm md:text-base">
                  Sorry, you didn&apos;t pass. You can retake the quiz to improve your score.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link href="/course/3D%20slicer%20-%20Adding%20DICOM%20datasets/data?content=3D%20slicer%20Part%202" className="w-full sm:w-auto">
                    <button className="w-full px-4 md:px-6 py-2 border border-blue-900 text-blue-900 rounded text-sm md:text-base hover:bg-blue-50">
                      Retake the Lesson
                    </button>
                  </Link>
                  <button
                    onClick={retakeQuiz}
                    className="w-full sm:w-auto bg-blue-900 text-white px-4 md:px-6 py-2 rounded text-sm md:text-base hover:bg-blue-800"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}