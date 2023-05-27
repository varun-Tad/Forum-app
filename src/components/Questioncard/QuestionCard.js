import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({ questionsData }) => {
  return (
    <div className="question-card">
      <div className="usernames">
        <img src={questionsData.userImage} alt="pic" className="profile-pic" />

        <div className="card-header">
          <div className="username">
            <p>{questionsData.username}</p>
            <small>{questionsData.userAccout}</small>
          </div>
          <small className="status">{questionsData.status}</small>
        </div>
      </div>

      <div className="hash-tags">
        {questionsData.tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>

      <div className="Question">
        <h2>Q. {questionsData.questionTitle}</h2>
        <p>{questionsData.questionText}</p>
      </div>

      <div className="card-buttons">
        <div className="up-down-btn">
          <div className="up-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"
              />
            </svg>
            <p>{questionsData.votes.upvotedBy.length}</p>
          </div>
          <div className="down-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"
              />
            </svg>
            <p>{questionsData.votes.downvotedBy.length}</p>
          </div>
        </div>
        <div className="answer-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
            />
          </svg>
          <p>Answer</p>
        </div>

        <div className="bookmark-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3l7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
            />
          </svg>
          <p>Bookmark</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
