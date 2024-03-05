"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/public/quiz7/Image1.png";
import Image2 from "@/public/quiz7/Image2.png";
import Image3 from "@/public/quiz7/Image3.png";
import Image4 from "@/public/quiz7/Image4.png";
import Image5 from "@/public/quiz7/Image5.png";
const quizQuestions = [
  {
    question: `1. Which tool allows the user to "paint" or select any area of the 3D object?`,

    options: [
      "A. Rotate tool",
      "B. Scale tool",
      "C. Paint tool",
      "D. Brush tool",
    ],
    image: Image1,
    correctAnswer: "D. Brush tool",
  },
  {
    question: "2. What function is used to remove the tumor side of the mandible?",

    options: [
      "A. Plane cut function",
      "B. Rotate function",
      "C. Mirror function",
      "D. Scale function",
    ],
    image: Image2,
    correctAnswer: "A. Plane cut function",
  },
  {
    question: "3. After cutting the diseased side, what function is used to reconstruct the missing half of the mandible?",

    options: [
      "A. Rotate function",
      "B. Scale function",
      "C. Mirror function",
      "D. Plane cut function",
    ],
    image: Image3,
    correctAnswer: "C. Mirror function",
  },
  {
    question: "4. What function is applied to convert the object (mandible) into a solid form suitable for 3D printing?",

    options: [
      "A. Apply",
      "B. Edit",
      "C. Mirror",
      "D. Make Solid",
    ],
    image: Image4,
    correctAnswer: "D. Make Solid",
  },
  {
    question: `5.What does clicking the "eye" icon do?`,

    options: [
      "A. Adjust transparency",
      "B. Show/hide an item in all views",
      "C. Scroll through slices",
      "D. Install extensions",
    ],
    image: Image5,
    correctAnswer: "B. By drawing seeds in different regions of the image",
  },
];

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState(
    Array(quizQuestions.length).fill("")
  );
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
          Mexhmixer Quiz
        </h1>
        {!showResults ? (
          <div>
            <div className="question" items-center style={questionStyle}>
              <p>{quizQuestions[currentQuestion].question}</p>
              {quizQuestions[currentQuestion].image && (
                <div className="flex justify-center items-center">
                  <Image
                    src={quizQuestions[currentQuestion].image}
                    alt=""
                    width="100%"
                    height="auto"
                  />
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
              <Link href="/mandiweb/mesh-mixer/frame">
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
                <Link href="http://localhost:3000/course/MeshMixer%20-%20Virtual-Surgery">
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
