"use client";
import React, { useState, useEffect, useCallback } from "react";

// Create a secure random number generator that works in both client and server environments
const getSecureRandom = () => {
  if (typeof window !== 'undefined' && window.crypto) {
    try {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      return array[0] / (0xffffffff + 1);
    } catch (e) {
      return Math.random();
    }
  } else {
    return Math.random();
  }
};

// Hook for quiz functionality
export function useQuiz(quizQuestions) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Initialize answers array when questions load
  useEffect(() => {
    setUserAnswers(Array(quizQuestions.length).fill(""));
  }, [quizQuestions]);

  const calculateScore = useCallback(() => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer.trim() === quizQuestions[index]?.correctAnswer?.trim()) {
        score++;
      }
    });
    return score;
  }, [userAnswers, quizQuestions]);

  useEffect(() => {
    if (showResults && calculateScore() === quizQuestions.length) {
      setShowConfetti(true);
    }
  }, [showResults, calculateScore, quizQuestions.length]);

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

  const checkWrong = useCallback(() => {
    let wrong = [];
    userAnswers.forEach((answer, index) => {
      if (answer.trim() !== quizQuestions[index]?.correctAnswer?.trim()) {
        wrong.push(index + 1);
      }
    });
    return wrong;
  }, [userAnswers, quizQuestions]);

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

  // Confetti component
  const confettiKeyframes = `
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
  `;

  const renderConfetti = () => {
    if (!showConfetti) return null;
    
    const confettiPieces = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080'];
    
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

  const score = calculateScore();
  const wrong = checkWrong();

  return {
    userAnswers,
    currentQuestion,
    showResults,
    showConfetti,
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
  };
}