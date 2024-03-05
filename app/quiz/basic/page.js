"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/public/quiz4/Image1.png";
import Image2 from "@/public/quiz4/Image2.png";
import Image3 from "@/public/quiz4/Image3.png";
const quizQuestions = [
  {
    question:
    "1. What feature enables users to quickly search for previously imported datasets?", 
  
    options: [
      "True",
      "False"
      
    ],
    image: Image1,
    correctAnswer: "False"
  },
  {
    question:
    "2. What function enables the user to isolate structures based on the threshold intensity range?", 
  
    options: [
      "A. Intensity function",
      "B. Selection function",
      "C. Threshold function",
      "D. Filter function",
    ],
    image: Image2,
    correctAnswer: "C. Threshold function"
  },
  {
    question:
    "3.What function allows users to remove unwanted artifacts from the 3D image?", 
  
    options: [
      "A. Islands function",
      "B. Edge detection function",
      "C. Blur function",
      "D. Noise reduction function",
    ],
    image: Image3,
    correctAnswer: "A. Islands function"
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
        <h1 className="text-primary py-4 text-center text-lg font-bold">
          Basic Segmentation Quiz
        </h1>
        {!showResults ? (
          <div>
            <div className="question" items-center style={questionStyle}>
              <p>{quizQuestions[currentQuestion].question}</p>
              {quizQuestions[currentQuestion].image && (
                <div className="flex justify-center items-center">
                  <Image src={quizQuestions[currentQuestion].image} alt="" width="100%" height="auto" />
                </div> 
              )}
              <ul className="pl-4">
                {quizQuestions[currentQuestion].options.map(
                  (option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={option}
                          onChange={(e) =>
                            handleAnswerChange(e, currentQuestion)
                          }
                          checked={
                            userAnswers[currentQuestion] === option.trim()
                          }
                        />
                        {option}
                      </label>
                    </li>
                  )
                )}
              </ul>
              <div className="button-container space-y-2 p-2  font-bold text-primary">
                {currentQuestion > 0 && (
                  <button
                    onClick={goToPreviousQuestion}
                    style={prevButtonStyle}
                  >
                    Previous
                  </button>
                )}
                {currentQuestion < quizQuestions.length - 1 && (
                  <button
                    onClick={goToNextQuestion}
                    style={nextButtonStyle}
                    disabled={!isCurrentQuestionAnswered()} // Disable if not answered
                  >
                    Next
                  </button>
                )}
                {currentQuestion === quizQuestions.length - 1 && (
                  <button
                    onClick={() => setShowResults(areAllQuestionsAnswered())}
                    style={submitButtonStyle}
                    disabled={!areAllQuestionsAnswered()} // Disable if not all questions are answered
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="font-semibold">
            <p>
              Your Score: {score} out of {quizQuestions.length} <br />
              {wrong.length > 0 && `You got a wrong answer on number ${wrong}`}
            </p>
            {score === quizQuestions.length ? (
              <Link href="http://localhost:3000/fillup/basic">
                {" "}
                <p className="text-green-900 font-bold">
                  Perfect! Now, Click here to get your{" "}
                  <span className="underline font-bold">Certificate</span>
                </p>
              </Link>
            ) : (
              <div className="text-red font-semibold">
                <p className="text-red-600 text-center pt-4 pb-2">
                  Sorry, you didn&apos;t pass. You can retake the quiz to
                  improve your score.
                </p>
                <button
                  onClick={retakeQuiz}
                  style={retakeButtonStyle}
                  className="text-right"
                >
                  Retake Quiz
                </button>
                <Link href="http://localhost:3000/course/3D%20slicer%20-%20Basic-Segmentation">
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
