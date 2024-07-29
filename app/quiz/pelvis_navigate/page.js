"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Picture18 from "@/public/basic3D/quizc3/Picture18.png";

const quizQuestions = [
  {
    question:
      "1. Which mouse button does the user use to move the 3D object around on the 3D panel (blue)?",
    options: [
      "A. Holding the left mouse button while dragging",
	    "B. Holding down the middle mouse button and dragging",
	    "C. Quickly tapping the left mouse button twice",

    ],
    image: Picture18,
    correctAnswer:
      "A. Holding the left mouse button while dragging",
  },
  {
    question:
      "2. What mouse button allows the users to pan the 3D images displayed on the 3D panel?",
    options: [
      "A. Holding the left mouse button while dragging",
	    "B. Holding down the middle mouse button and dragging",
	    "C. Quickly tapping the left mouse button twice",
    ],
    image: Picture18,
    correctAnswer: "B. Holding down the middle mouse button and dragging",
  },
];

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(""));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

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
  };

  const isCurrentQuestionAnswered = () => {
    return userAnswers[currentQuestion] !== "";
  };

  const areAllQuestionsAnswered = () => {
    return userAnswers.every((answer) => answer !== "");
  };

  const score = calculateScore();
  const wrong = checkWrong();

  return (
    <div className="min-h-screen items-center p-6 ">
      <div className="quiz-container" style={quizContainerStyle}>
        <h1 className="text-primary py-4 text-center text-lg font-bold">Navigation Dicom Quiz</h1>
        {!showResults ? (
          <div>
            <div className="question" items-center style={questionStyle}>
              <p>{quizQuestions[currentQuestion].question}</p>
              {quizQuestions[currentQuestion].image && (
  <div className="flex justify-center items-center">
    {Array.isArray(quizQuestions[currentQuestion].image) ? (
      quizQuestions[currentQuestion].image.map((image, index) => (
        <div key={index} className="w-full md:w-1/2 mx-auto">
          <Image src={image} alt="" />
        </div>
      ))
    ) : (
      <div className="w-full md:w-1/2 mx-auto">
        <Image src={quizQuestions[currentQuestion].image} alt="" />
      </div>
    )}
  </div>
)}

              <ul className="pl-4">
                {quizQuestions[currentQuestion].options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${currentQuestion}`}
                        value={option}
                        onChange={(e) => handleAnswerChange(e, currentQuestion)}
                        checked={userAnswers[currentQuestion] === option.trim()}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <div className="button-container space-y-2 p-2 font-bold text-primary">
                {currentQuestion > 0 && (
                  <button onClick={goToPreviousQuestion} style={prevButtonStyle}>Previous</button>
                )}
                {currentQuestion < quizQuestions.length - 1 && (
                  <button onClick={goToNextQuestion} style={nextButtonStyle} disabled={!isCurrentQuestionAnswered()}>Next</button>
                )}
                {currentQuestion === quizQuestions.length - 1 && (
                  <button onClick={() => setShowResults(areAllQuestionsAnswered())} style={submitButtonStyle} disabled={!areAllQuestionsAnswered()}>Submit</button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="font-semibold">
            <p>Your Score: {score} out of {quizQuestions.length} <br />
              {wrong.length > 0 && `You got a wrong answer on number ${wrong}`}
            </p>
            {score === quizQuestions.length ? (
              <Link href="/fillup/navigating">
                <p className="text-green-900 font-bold">Perfect! Now, Click here to get your <span className="underline font-bold">Certificate</span></p>
              </Link>
            ) : (
              <div className="text-red font-semibold">
                <p className="text-red-600 text-center pt-4 pb-2">Sorry, you didn&#39;t pass. You can retake the quiz to improve your score.</p>
                <button onClick={retakeQuiz} style={retakeButtonStyle} className="text-right">Retake Quiz</button>
                <Link href="/course/3D%20slicer%20-%20Navigating%20DICOM%20display">
                  <button>Retake the Lesson</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const quizContainerStyle = {
  width: "70%",
  margin: "0 auto",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#fff",
};

const questionStyle = {
  marginBottom: "20px",
};

const submitButtonStyle = {
  marginTop: "20px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const retakeButtonStyle = {
  marginTop: "",
  display: "block",
  float: "right",
};

const prevButtonStyle = {
  marginTop: "20px",
  display: "block",
  float: "left",
};

const nextButtonStyle = {
  marginTop: "20px",
  display: "block",
  float: "right",
};
