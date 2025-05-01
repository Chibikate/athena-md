"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigator from "@/components/hero_page/navigator";
import Picture3 from "@/public/basic3D/quizc2/Picture3.png";
import Picture6 from "@/public/basic3D/quizc2/Picture6.png";
import Picture11 from "@/public/basic3D/quizc2/Picture11.png";
import { useQuiz } from "@/utils/quizUtils";

const quizQuestions = [
  {
    question:
    "1. What feature enables adding datasets to the program?", 
  
    options: [
      "A. DICOM data interface",
      "B. Import DICOM file",
      "C. Display Panel",
      "D. Add DICOM data",
    ],
    image: Picture3,
    correctAnswer: "D. Add DICOM data"
  },
  {
    question:
    "2. Where will the details on the available datasets be displayed?", 
  
    options: [
      "A. Module Interface",
      "B. Taskbar",
      "C. DICOM data interface",
      "D. Navigation Panel",
    ],
    image: Picture6,
    correctAnswer: "C. DICOM data interface"
  },
  {
    question:
    "3.What do you call the component in which the DICOM images are loaded for viewing?", 
  
    options: [
      "A. DICOM data interface",
      "B. Module interface",
      "C. DICOM display window",
      "D. 3D Panel",
    ],
    image: Picture11,
    correctAnswer: "C. DICOM display window"
  },
];

export default function QuizApp() {
  const {
    userAnswers,
    currentQuestion,
    showResults,
    score,
    wrong,
    handleAnswerChange,
    goToNextQuestion,
    goToPreviousQuestion,
    setShowResults,
    retakeQuiz,
    isCurrentQuestionAnswered,
    areAllQuestionsAnswered,
    renderConfetti
  } = useQuiz(quizQuestions);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6 md:px-6">
      {/* CSS Confetti */}
      {renderConfetti()}

      {/* Header with logo and navigation */}
      <div className="w-full max-w-screen-l mx-auto shadow-md">
        <Navigator />
      </div>
      
      {/* Quiz title */}
      <h1 className="text-xl md:text-2xl font-bold text-center my-4 md:mb-6">Adding DICOM Quiz</h1>
      
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
                      priority
                    />
                  </div>
                </div> 
              )}
              
              <div className="space-y-2 md:space-y-3" role="radiogroup" aria-labelledby={`question-${currentQuestion}-label`}>
                <div id={`question-${currentQuestion}-label`} className="sr-only">{quizQuestions[currentQuestion].question}</div>
                {quizQuestions[currentQuestion].options.map(
                  (option, optionIndex) => {
                    const isSelected = userAnswers[currentQuestion] === option.trim();
                    const optionId = `question-${currentQuestion}-option-${optionIndex}`;
                    
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
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            const event = { target: { value: option } };
                            handleAnswerChange(event, currentQuestion);
                          }
                        }}
                        tabIndex="0"
                      >
                        <label htmlFor={optionId} className="flex items-start cursor-pointer w-full text-sm md:text-base">
                          <input
                            id={optionId}
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
                <Link 
                  href="/fillup/pelvis_addDicom"
                  className="bg-blue-900 text-white px-5 md:px-6 py-2 md:py-3 rounded text-sm md:text-base hover:bg-blue-800 inline-block"
                  aria-label="Get your certificate"
                >
                  Get Your Certificate
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-red-600 font-medium text-sm md:text-base">
                  Sorry, you didn&apos;t pass. You can retake the quiz to improve your score.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/pelvis/3D%20slicer%20Pelvis%20-%20AddDICOM"
                    className="w-full sm:w-auto px-4 md:px-6 py-2 border border-blue-900 text-blue-900 rounded text-sm md:text-base hover:bg-blue-50 inline-block text-center"
                    aria-label="Retake the lesson"
                  >
                    Retake the Lesson
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