"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigator from "@/components/hero_page/navigator";
import Image1 from "@/public/quiz5/Image1.png";
import Image2 from "@/public/quiz5/Image2.png";
import PropTypes from 'prop-types';

const quizQuestions = [
  {
    question:
    "1. Changing the colors of each segment into contrasting colors will help improve visualization of the different areas of segmentation.", 
  
    options: [
      "True",
      "False",
    ],
    image: "",
    correctAnswer: "True"
  },
  {
    question:
    `2. Which option under the threshold function automatically activates the "paint" function, allowing the user to paint any area using the previously selected threshold intensity?`, 
  
    options: [
      "A. Masking",
      "B. Apply",
      "C. Threshold Range",
      "D. Use for masking",
    ],
    image: Image1,
    correctAnswer: "D. Use for masking"
  },
  {
    question:
    `3. How does the "Grow from seed" function primarily work?`, 
  
    options: [
      "A. By planting physical seeds in the image",
      "B. By drawing seeds in different regions of the image",
      "C. By initializing segmentation based on predefined seeds",
      "D. By computing previews of full segmentation",
    ],
    image: Image2,
    correctAnswer: "B. By drawing seeds in different regions of the image"
  },
];

// Improved OptionItem component to eliminate duplication
const OptionItem = ({ option, isSelected, onSelect }) => {
  return (
    <div
      className={`border rounded-md p-2 md:p-3 cursor-pointer transition-colors ${
        isSelected ? 'bg-green-100 border-green-500' : 'hover:bg-gray-50'
      }`}
      onClick={() => onSelect(option)}
    >
      <label className="flex items-start cursor-pointer w-full text-sm md:text-base">
        <input
          type="radio"
          value={option}
          checked={isSelected}
          onChange={() => {}} // Empty onChange to avoid React warning for controlled component
          className="mt-1 mr-2 md:mr-3 flex-shrink-0"
        />
        <span className="flex-1">{option}</span>
      </label>
    </div>
  );
};

OptionItem.propTypes = {
  option: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

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
    }
  }, [showResults, calculateScore]);

  // Simplified handler that directly updates the state
  const handleAnswerSelect = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption.trim();
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

  const isCurrentQuestionAnswered = () => {
    return userAnswers[currentQuestion] !== "";
  };

  const areAllQuestionsAnswered = () => {
    return userAnswers.every((answer) => answer !== "");
  };

  const score = calculateScore();
  const wrong = checkWrong();

  const confettiKeyframes = `
    @keyframes confetti-fall-continuous {
      0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
  `;

  const renderConfetti = () => {
    if (!showConfetti) return null;
    
    const confettiPieces = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080'];
    
    // Create a safe random generator that works in both browser and server environments
    const getSecureRandom = () => {
      // Check if running in a browser and if crypto API is available
      if (typeof window !== 'undefined' && window.crypto) {
        try {
          const array = new Uint32Array(1);
          window.crypto.getRandomValues(array);
          return array[0] / (0xffffffff + 1);
        } catch (e) {
          // Fallback to Math.random if crypto fails
          console.warn('Crypto API failed, falling back to Math.random');
          return Math.random();
        }
      } else {
        // Fallback for server-side rendering or older browsers
        return Math.random();
      }
    };
    
    for (let i = 0; i < 100; i++) {
      const left = `${getSecureRandom() * 100}%`;
      const animationDelay = `${getSecureRandom() * 5}s`;
      const animationDuration = `${getSecureRandom() * 2 + 2}s`; // Between 2-4 seconds
      const color = colors[Math.floor(getSecureRandom() * colors.length)];
      const size = `${getSecureRandom() * 0.5 + 0.5}rem`; // Random size between 0.5rem and 1rem
      
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
        <style dangerouslySetInnerHTML={{ __html: confettiKeyframes }} />
        {confettiPieces}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6 md:px-6">
      {renderConfetti()}
      <div className="w-full shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-screen-xl mx-auto">
          <Navigator />
        </div>
      </div>

      <h1 className="text-xl md:text-2xl font-bold text-center my-4 md:mb-6">Advanced Segmentation Quiz</h1>

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
                      priority
                    />
                  </div>
                </div> 
              )}

              <div className="space-y-2 md:space-y-3">
                {quizQuestions[currentQuestion].options.map((option, optionIndex) => (
                  <OptionItem
                    key={optionIndex}
                    option={option}
                    isSelected={userAnswers[currentQuestion] === option.trim()}
                    onSelect={handleAnswerSelect}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-6 md:mt-8">
                {currentQuestion > 0 ? (
                  <button
                    onClick={goToPreviousQuestion}
                    className="px-4 md:px-6 py-2 border border-gray-300 rounded text-sm md:text-base text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </button>
                ) : <div></div>}

                {currentQuestion < quizQuestions.length - 1 ? (
                  <button
                    onClick={goToNextQuestion}
                    className={`px-4 md:px-6 py-2 rounded text-sm md:text-base ${
                      isCurrentQuestionAnswered() 
                        ? 'bg-blue-900 text-white hover:bg-blue-800' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!isCurrentQuestionAnswered()}
                  >
                    Next
                  </button>
                ) : (
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
                )}
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
                <Link href="/fillup/advanced">
                  <button className="bg-blue-900 text-white px-5 md:px-6 py-2 md:py-3 rounded text-sm md:text-base hover:bg-blue-800">
                    Get Your Certificate
                  </button>
                </Link>
                <div>
                <Link href="/course/MeshMixer%20-%20Virtual-Surgery">
                  <button className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block">
                  Proceed to the Next Lesson
                 </button>
                </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-red-600 font-medium text-sm md:text-base">
                  Sorry, you didn&apos;t pass. You can retake the quiz to improve your score.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link href="/course/3D%20slicer%20-%20Advanced%20Segmentation-1" className="w-full sm:w-auto">
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