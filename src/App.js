import './App.css';
import React from "react";

function App() {
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
                    <div className="question-text">
                        세계 최초로 안락사를 합법화한 나라는?
                    </div>
                </div>
                <div className="answer-section">
                    <button onClick={handleClick} value="영국">영국</button>
                    <button onClick={handleClick} value="네덜란드">네덜란드</button>
                    <button onClick={handleClick} value="미국">미국</button>
                    <button onClick={handleClick} value="스위스">스위스</button>
                </div>
            </div>
        </div>
    );
}

export default App;
