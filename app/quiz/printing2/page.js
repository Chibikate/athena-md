"use client";
import React from "react";
import Link from "next/link";
import Navigator from "@/components/hero_page/navigator";
import Image from "next/image";
import Footer from "@/components/hero_page/footer";
import { useQuiz } from "@/utils/quizUtils";

const quizQuestions = [
  {
    question:
    "1. Where can users see the file name and the dimensions of the loaded model within the project?", 
  
    options: [
      "A. Object List",
      "B. Model Settings",
      "C. Configuration Panel",
    ],
    image: "",
    correctAnswer: "A. Object List"
  },
  {
    question:
    "2. Ultimaker 3D printer settings vary by material; what measures should users take to achieve the desired print quality?", 
  
    options: [
        "A. Select any printer brand included in the software",
        "B. Select Ultimaker material and adjust the material accordingly",
        "C. Click 1 or 2 to set up the machine's material and print core",
        
    ],
    image: "",
    correctAnswer: "B. Select Ultimaker material and adjust the material accordingly"
  },
  {
    question:
    "3. What is the default print core in printing 3D models?", 
    options: [
        "A. AA 0.25",
        "B. AA 0.4",
        "C. CC 0.4",
        
    ],
    image: "",
    correctAnswer: "B. AA 0.4"
  },
  {
    question:
    "4. What are the advantages of having a PC and 3D printer machine connected to the same network?", 
    options: [
        "A. Enhanced print quality",
        "B. Advanced troubleshooting",
        "C. Direct printer communication",
        
    ],
    image: "",
    correctAnswer: "C. Direct printer communication"
  },
  {
    question:
    "5. Ultimaker Cura cannot print offline on a non-networked printer.", 
    options: [
        "True",
        "False",
        
        
    ],
    image: "",
    correctAnswer: "False"
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

  // Helper function to render images (single or multiple)
  const renderQuestionImages = () => {
    const currentImage = quizQuestions[currentQuestion].image;
    
    // Check if image is an array
    if (Array.isArray(currentImage)) {
      return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-7">
          {currentImage.map((img, index) => (
            <div key={index} className="relative w-full max-w-md rounded-lg overflow-hidden shadow-md">
              <Image
                src={img}
                alt={`Question illustration ${index + 1}`}
                className="w-full"
                width={550}
                height={300}
                priority
              />
            </div>
          ))}
        </div>
      );
    } else if (currentImage && currentImage !== "") {
      // Single image case
      return (
        <div className="flex justify-center mb-7">
          <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-md">
            <Image
              src={currentImage}
              alt="Question illustration"
              className="w-full"
              width={550}
              height={300}
              priority
            />
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-[#FEFCFA] flex flex-col">
      {/* CSS Confetti */}
      {renderConfetti()}

      {/* Header with navigation - not fixed position */}
      <Navigator />
      
      {/* Main content - with proper spacing */}
      <main className="flex-1 flex flex-col items-center px-4 py-6 md:px-6">
        {/* Quiz title - now with proper spacing */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#043873] mt-6 mb-8">
          Optimizing 3D Printer Slicing Quiz
        </h1>
        
        {/* Quiz container */}
        <div className="bg-white rounded-xl shadow-lg border border-[#FDCC6D]/20 p-6 md:p-8 w-full max-w-4xl mb-10">
          {!showResults ? (
            <div>
              <div className="mb-6 md:mb-8">
                <p className="text-base md:text-lg font-medium mb-5 md:mb-7 text-[#043873]">
                  {quizQuestions[currentQuestion].question}
                </p>
                
                {/* Render images using the helper function */}
                {renderQuestionImages()}
                
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
                
                <div className="flex justify-between mt-8 md:mt-10">
                  {currentQuestion > 0 ? (
                    <button
                      onClick={goToPreviousQuestion}
                      className="px-5 md:px-7 py-2.5 border border-[#043873]/30 rounded-lg text-sm md:text-base text-[#043873] hover:bg-[#043873]/5 transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>
                  ) : <div></div>}
                  
                  {currentQuestion < quizQuestions.length - 1 ? (
                    <button
                      onClick={goToNextQuestion}
                      className={`px-5 md:px-7 py-2.5 rounded-lg text-sm md:text-base flex items-center ${
                        isCurrentQuestionAnswered() 
                          ? 'bg-[#043873] text-white hover:bg-[#032d5c] shadow-md' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!isCurrentQuestionAnswered()}
                    >
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
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
                  )}
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
                      href="/fillup/printing2"
                      className="inline-flex items-center justify-center bg-[#043873] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#032d5c] transition-colors shadow-md"
                    >
                      Get Your Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/ultimaker/3D%20Printing%20for%20a%20Mandible-3"
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
                      href="/ultimaker/3D%20Printing%20for%20a%20Mandible-2/data?content=3D%20printing%20%20Part%202" 
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