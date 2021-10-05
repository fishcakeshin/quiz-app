import './App.css';
import React from "react";

function App() {
    const quiz = {
        question: "세계 최초로 안락사를 합법화한 나라는?",
        answers: [
            { text: "영국", isCorrect: false},
            { text: "네덜란드", isCorrect: true },
            { text: "미국", isCorrect: false },
            { text: "스위스", isCorrect: false },
        ],
    };

    const handleClick = (e) => {
        const answer = e.target.value;
        if (answer === "네덜란드") {
            alert("정답 👏👏👏");
        } else {
            alert("오답 😣");
        }
    };

    return (
        <div className="container">
            <div className="app">
                <div className="question-section">
                    <h1 className="question-header">
                        <span>1</span>/4
                    </h1>
                    <div className="question-text">{quiz.question}</div>
                </div>
                <div className="answer-section">
                    {quiz.answers.map((answer) => (
                        <button value={answer.text} onClick={handleClick}>
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
