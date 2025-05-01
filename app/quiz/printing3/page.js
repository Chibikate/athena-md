"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navigator from "@/components/hero_page/navigator";

const quizQuestions = [
  {
    question: "1. How can users stop support structures from being built in specific areas of a model?",
    options: [
      "A. By activating the support blocker",
      "B. By adjusting the size of the model",
      "C. By moving the model in Cartesian coordinates",
    ],
    correctAnswer: "A. By activating the support blocker",
  },
  {
    question: "2. Which functions does the Print/Extruder selection option provide?",
    options: [
      "A. It enables the selection of the filament color for your print",
      "B. It enables you to determine which printer will be employed for the task",
      "C. It delineates the type of material that will be employed for printing",
      "D. If your printer has multiple extruder heads, it determines which one will be used to produce the model",
    ],
    correctAnswer:
      "D. If your printer has multiple extruder heads, it determines which one will be used to produce the model",
  },
];

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(""));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const calculateScore = useCallback(() => {
    return userAnswers.filter((answer, index) => answer === quizQuestions[index].correctAnswer).length;
  }, [userAnswers]);

  useEffect(() => {
    if (showResults && calculateScore() === quizQuestions.length) {
      setShowConfetti(true);
    }
  }, [showResults, calculateScore]);

  const handleAnswerChange = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleKeyDown = (event, option) => {
    // Handle Enter or Space key presses
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleAnswerChange(option);
    }
  };

  const goToNextQuestion = () => setCurrentQuestion((prev) => prev + 1);
  const goToPreviousQuestion = () => setCurrentQuestion((prev) => prev - 1);
  const retakeQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(""));
    setCurrentQuestion(0);
    setShowResults(false);
    setShowConfetti(false);
  };

  // Get the score
  const score = calculateScore();

  // Get the wrong answers
  const checkWrong = useCallback(() => {
    let wrong = [];
    userAnswers.forEach((answer, index) => {
      if (answer.trim() !== quizQuestions[index].correctAnswer.trim()) {
        wrong.push(index + 1);
      }
    });
    return wrong;
  }, [userAnswers]);

  const wrong = checkWrong();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6">
      {showConfetti && <div className="fixed inset-0 bg-transparent animate-confetti"></div>}
      <Navigator />
      <h1 className="text-2xl font-bold text-center my-4">Optimizing 3D Printer Slicing Quiz</h1>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
        {!showResults ? (
          <>
            <p className="text-lg font-medium mb-4">{quizQuestions[currentQuestion].question}</p>
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, idx) => {
                const optionId = `question-${currentQuestion}-option-${idx}`;
                const isSelected = userAnswers[currentQuestion] === option;
                
                return (
                  <div 
                    key={idx}
                    className={`w-full text-left border p-3 rounded-md cursor-pointer transition-all ${isSelected ? 'bg-green-100 border-green-500' : 'hover:bg-gray-50'}`}
                    onClick={() => handleAnswerChange(option)}
                    onKeyDown={(e) => handleKeyDown(e, option)}
                    tabIndex="0"
                  >
                    <label htmlFor={optionId} className="flex items-start cursor-pointer w-full">
                      <input
                        id={optionId}
                        type="radio"
                        name={`question-${currentQuestion}`}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswerChange(option)}
                        className="mt-1 mr-2 flex-shrink-0"
                      />
                      <span className="flex-1">{option}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-6">
              {currentQuestion > 0 && (
                <button onClick={goToPreviousQuestion} className="px-4 py-2 border rounded">Previous</button>
              )}
              {currentQuestion < quizQuestions.length - 1 ? (
                <button
                  onClick={goToNextQuestion}
                  className={`px-4 py-2 rounded ${userAnswers[currentQuestion] ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  disabled={!userAnswers[currentQuestion]}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => setShowResults(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </>
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
                <Link href="/fillup/printing3">
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
                  <Link href="/ultimaker/3D%20Printing%20for%20a%20Mandible-3/data?content=3D%20printing%20%20Part%203" className="w-full sm:w-auto">
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
