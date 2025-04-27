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

  const goToNextQuestion = () => setCurrentQuestion((prev) => prev + 1);
  const goToPreviousQuestion = () => setCurrentQuestion((prev) => prev - 1);
  const retakeQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(""));
    setCurrentQuestion(0);
    setShowResults(false);
    setShowConfetti(false);
  };

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
              {quizQuestions[currentQuestion].options.map((option, idx) => (
                <div
                  key={idx}
                  className={`border p-3 rounded-md cursor-pointer transition-all ${
                    userAnswers[currentQuestion] === option ? 'bg-green-100 border-green-500' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnswerChange(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              {currentQuestion > 0 && (
                <button onClick={goToPreviousQuestion} className="px-4 py-2 border rounded">Previous</button>
              )}
              {currentQuestion < quizQuestions.length - 1 ? (
                <button
                  onClick={goToNextQuestion}
                  className={`px-4 py-2 rounded ${
                    userAnswers[currentQuestion] ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
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
          <div className="text-center">
            <p className="text-lg mb-3">Your Score: {calculateScore()} / {quizQuestions.length}</p>
            {calculateScore() === quizQuestions.length ? (
              <>
                <p className="text-green-600 font-bold">Perfect! Congratulations!</p>
                <Link href="/fillup/printing3">
                  <button className="bg-blue-600 text-white px-5 py-2 rounded mt-4">Get Your Certificate</button>
                </Link>
              </>
            ) : (
              <>
                <p className="text-red-600">Try again to improve your score.</p>
                <button onClick={retakeQuiz} className="bg-blue-600 text-white px-5 py-2 rounded mt-4">Retake Quiz</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}