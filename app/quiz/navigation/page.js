"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navigator from "@/components/hero_page/navigator";
import Image from "next/image";
import Image1 from "@/public/quiz3/Image1.png";
import Image2 from "@/public/quiz3/Image2.png";
import Image3 from "@/public/quiz3/Image3.png";
import Image4 from "@/public/quiz3/Image4.png";
import Image5 from "@/public/quiz3/Image5.png";

const quizQuestions = [
  {
    question:
      "1. Which basic control can be used for all windows in the DICOM display to maximize the selected window and also return it to its original size?",
    options: [
      "A. Single-clicking on the window",
      "B. Right-clicking on the window",
      "C. Holding down the left mouse button",
      "D. Quickly tapping the left mouse button twice (double click)",
    ],
    image: Image1,
    correctAnswer:
      "D. Quickly tapping the left mouse button twice (double click)",
  },
  {
    question:
      "2. How can users move the 3D object around on the 3D panel (blue)?",
    options: [
      "A. Holding the left mouse button while dragging",
      "B. Holding down the left mouse button with the cursor on the slider button and dragging",
      "C. Holding down the right mouse button while dragging",
    ],
    image: [Image2, Image3],
    correctAnswer: "A. Holding the left mouse button while dragging",
  },
  {
    question:
      "3. In addition to using the middle mouse button to pan the 3D image, what other basic controls can users use to zoom in and out on the model?",
    options: [
      "A. Holding the left mouse button while dragging",
      "B. Holding down the left mouse button with the cursor on the slider button and dragging",
      "C. Holding down the right mouse button while dragging",
    ],
    image: [Image4, Image5],
    correctAnswer: "C. Holding down the right mouse button while dragging",
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
  }, [showResults]);

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

  // Helper function to render images (single or multiple)
  const renderQuestionImages = () => {
    const currentImage = quizQuestions[currentQuestion].image;
    
    // Check if image is an array
    if (Array.isArray(currentImage)) {
      return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          {currentImage.map((img, index) => (
            <div key={index} className="relative w-full max-w-md md:max-w-lg">
              <Image
                src={img}
                alt={`Question illustration ${index + 1}`}
                className="border border-gray-200 rounded"
                width={550}
                height={300}
                layout="responsive"
                priority
              />
            </div>
          ))}
        </div>
      );
    } else if (currentImage) {
      // Single image case
      return (
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image
              src={currentImage}
              alt="Question illustration"
              className="border border-gray-200 rounded"
              width={550}
              height={300}
              layout="responsive"
              priority
            />
          </div>
        </div>
      );
    }
    
    return null;
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
      <h1 className="text-xl md:text-2xl font-bold text-center my-4 md:mb-6">Navigating DICOM Quiz</h1>
      
      {/* Quiz container */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 w-full max-w-4xl mt-6">
        {!showResults ? (
          <div>
            <div className="mb-4 md:mb-8">
              <p className="text-base md:text-lg font-medium mb-4 md:mb-6">{quizQuestions[currentQuestion].question}</p>
              
              {/* Render images using the helper function */}
              {renderQuestionImages()}
              
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
                <Link href="/fillup/navigating">
                  <button className="bg-blue-900 text-white px-5 md:px-6 py-2 md:py-3 rounded text-sm md:text-base hover:bg-blue-800">
                    Get Your Certificate
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-red-600 font-medium text-sm md:text-base">
                  Sorry, you didn't pass. You can retake the quiz to improve your score.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link href="/course/3D%20slicer%20-%20Navigating%20DICOM%20display" className="w-full sm:w-auto">
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