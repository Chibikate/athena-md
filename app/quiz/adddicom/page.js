"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navigator from "@/components/hero_page/navigator";
import Image from "next/image";
import Image1 from "@/public/quiz3/Image1.png";
import Footer from "@/components/hero_page/footer";

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

  const calculateScore = useCallback(() => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer.trim() === quizQuestions[index].correctAnswer.trim()) {
        score++;
      }
    });
    return score;
  }, [userAnswers]);

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

  const checkWrong = useCallback(() => {
    let wrong = [];
    userAnswers.forEach((answer, index) => {
      if (answer.trim() !== quizQuestions[index].correctAnswer.trim()) {
        wrong.push(index + 1);
      }
    });
    return wrong;
  }, [userAnswers]);

  const retakeQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(""));
    setCurrentQuestion(0);
    setShowResults(false);
    setShowConfetti(false);
  };

  const areAllQuestionsAnswered = () => {
    return userAnswers.every((answer) => answer !== "");
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
          className="absolute rounded-full animate-confetti-fall"
          style={{
            left,
            top: '-20px',
            width: size,
            height: size,
            backgroundColor: color,
            animationDelay,
            animationDuration
          }}
        />
      );
    }
    
    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {confettiPieces}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FEFCFA] flex flex-col">
      {/* Add the keyframes animation using a style tag without jsx prop */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes confetti-fall {
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
          .animate-confetti-fall {
            animation: confetti-fall infinite linear;
          }
        `
      }} />

      {/* CSS Confetti */}
      {renderConfetti()}

      {/* Header with navigation - not fixed position */}
      <Navigator />
      
      {/* Main content - with proper spacing */}
      <main className="flex-1 flex flex-col items-center px-4 py-6 md:px-6">
        {/* Quiz title - now with proper spacing */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#043873] mt-6 mb-8">
          Adding DICOM Quiz
        </h1>
        
        {/* Quiz container */}
        <div className="bg-white rounded-xl shadow-lg border border-[#FDCC6D]/20 p-6 md:p-8 w-full max-w-4xl mb-10">
          {!showResults ? (
            <div>
              <div className="mb-6 md:mb-8">
                <p className="text-base md:text-lg font-medium mb-5 md:mb-7 text-[#043873]">
                  {quizQuestions[currentQuestion].question}
                </p>
                
                {quizQuestions[currentQuestion].image && (
                  <div className="flex justify-center mb-7">
                    <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src={quizQuestions[currentQuestion].image} 
                        alt="Question illustration" 
                        className="w-full"
                        width={550}
                        height={300}
                        priority
                      />
                    </div>
                  </div> 
                )}
                
                <div className="space-y-3 md:space-y-4" role="radiogroup" aria-labelledby={`question-${currentQuestion}-label`}>
                  <div id={`question-${currentQuestion}-label`} className="sr-only">
                    {quizQuestions[currentQuestion].question}
                  </div>
                  {quizQuestions[currentQuestion].options.map(
                    (option, optionIndex) => {
                      const isSelected = userAnswers[currentQuestion] === option.trim();
                      const optionId = `question-${currentQuestion}-option-${optionIndex}`;
                      return (
                        <div 
                          key={optionIndex} 
                          className={`border rounded-lg p-3 md:p-4 cursor-pointer transition-all ${
                            isSelected 
                              ? 'bg-[#F0F7FF] border-[#4F9CF9] shadow-sm' 
                              : 'hover:bg-gray-50 border-gray-200'
                          }`}
                          onClick={() => {
                            const event = { target: { value: option } };
                            handleAnswerChange(event, currentQuestion);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              const event = { target: { value: option } };
                              handleAnswerChange(event, currentQuestion);
                            }
                          }}
                          tabIndex="0"
                        >
                          <label 
                            htmlFor={optionId} 
                            className="flex items-start cursor-pointer w-full text-sm md:text-base"
                          >
                            <input
                              id={optionId}
                              type="radio"
                              name={`question-${currentQuestion}`}
                              value={option}
                              onChange={(e) => handleAnswerChange(e, currentQuestion)}
                              checked={isSelected}
                              className="mt-1 mr-3 md:mr-4 flex-shrink-0"
                            />
                            <span className="flex-1 text-[#333]">{option}</span>
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
                
                <div className="flex justify-end mt-8 md:mt-10">
                  <button
                    onClick={() => setShowResults(areAllQuestionsAnswered())}
                    className={`px-5 md:px-7 py-2.5 rounded-lg text-sm md:text-base ${
                      areAllQuestionsAnswered() 
                        ? 'bg-[#043873] text-white hover:bg-[#032d5c] shadow-md' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!areAllQuestionsAnswered()}
                  >
                    Submit Quiz
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              {score === quizQuestions.length ? (
                <div className="bg-[#F0FFF4] border border-green-200 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Perfect Score!</h2>
                  <p className="text-lg md:text-xl mb-5 text-green-800">
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  <p className="text-green-700 font-medium text-lg mb-6">
                    Congratulations on successfully completing the quiz!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/fillup/adddicom"
                      className="inline-flex items-center justify-center bg-[#043873] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#032d5c] transition-colors shadow-md"
                    >
                      Get Your Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/course/3D%20slicer%20-%20Navigating%20DICOM%20display"
                      className="inline-flex items-center justify-center border-2 border-[#043873] text-[#043873] px-6 py-3 rounded-lg text-base font-medium hover:bg-[#043873]/5 transition-colors"
                    >
                      Next Lesson
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-[#FFF5F5] border border-red-200 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-red-700 mb-2">Almost There!</h2>
                  <p className="text-lg md:text-xl mb-4 text-red-800">
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  
                  {wrong.length > 0 && (
                    <p className="text-red-600 mb-5 text-sm md:text-base font-medium">
                      You got {wrong.length > 1 ? 'questions' : 'question'} #{wrong.join(', #')} wrong
                    </p>
                  )}
                  
                  <p className="text-red-700 font-medium mb-6">
                    You can review the material and try again to improve your score.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link 
                      href="/course/3D%20slicer%20-%20Adding%20DICOM%20datasets/data?content=3D%20slicer%20Part%202" 
                      className="w-full sm:w-auto px-5 py-3 border-2 border-[#043873] text-[#043873] rounded-lg text-base font-medium hover:bg-[#043873]/5 transition-colors flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Retake the Lesson
                    </Link>
                    <button
                      onClick={retakeQuiz}
                      className="w-full sm:w-auto bg-[#043873] text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-[#032d5c] transition-colors shadow-md flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Retake Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Quiz progress indicator */}
          {!showResults && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span className="text-sm text-gray-500">
                  {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-[#043873] h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}