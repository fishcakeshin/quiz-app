import './App.css';
import React from "react";

function App() {
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
                    <button>미국</button>
                    <button>영국</button>
                    <button>네덜란드</button>
                    <button>스위스</button>
                </div>
            </div>
        </div>
    );
}

export default App;
