import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import { QUESTIONS_API, USERS_API } from "../../constants";
import { useHome } from "../../Context/HomeContext";
import QuestionCard from "../../components/Questioncard/QuestionCard";

const HomePage = () => {
  const { questions, setQuestions } = useHome();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resp = await axios.get(QUESTIONS_API);
      setQuestions(resp.data.questions);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(USERS_API);
      //   console.log(data.users);
      setUsers(data.users);
    })();
  }, []);

  return (
    <section className="homePage-Container">
      <aside className="leftSide-Home">
        <div className="left-side">
          <div className="post-options-container">
            <input type="text" placeholder="Write something awesome..." />
            <div className="post-options">
              <div className="post">
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
                <p>Post</p>
              </div>
              <div className="ask">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z"
                  />
                </svg>
                <p>Ask</p>
              </div>

              <div className="answer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15 4v7H5.17l-.59.59l-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"
                  />
                </svg>
                <p>Answer</p>
              </div>
            </div>
          </div>

          <div className="filter-options">
            <div className="trending-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#aa4203 "
                  d="M16.2 8.65c-.64.42-1.4.65-2.18.65c-2.06 0-3.77-1.55-3.99-3.55C8.13 7.35 6 9.84 6 13c0 1.79.79 3.4 2.04 4.5c-.04-.34-.23-1.88 1.13-3.22L12 11.5l2.83 2.78c1.35 1.33 1.17 2.86 1.13 3.21v.01A5.982 5.982 0 0 0 18 13c0-1.65-.66-3.22-1.8-4.35z"
                  opacity=".3"
                />
                <path
                  fill="currentColor"
                  d="m12 14.31l-1.42 1.4c-.38.36-.58.84-.58 1.35c0 1.07.9 1.94 2 1.94s2-.87 2-1.94c0-.51-.2-.99-.57-1.36L12 14.31z"
                  opacity=".3"
                />
                <path
                  fill="currentColor"
                  d="m16 6l-.44.55c-.42.52-.98.75-1.54.75C13 7.3 12 6.52 12 5.3V2S4 6 4 13c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.96-1.61-5.62-4-7zm-4 13c-1.1 0-2-.87-2-1.94c0-.51.2-.99.58-1.36L12 14.3l1.43 1.4c.37.37.57.85.57 1.36c0 1.07-.9 1.94-2 1.94zm3.96-1.5c.04-.36.22-1.89-1.13-3.22L12 11.5l-2.83 2.78C7.81 15.62 8 17.16 8.04 17.5A5.982 5.982 0 0 1 6 13c0-3.16 2.13-5.65 4.03-7.25a4.024 4.024 0 0 0 3.99 3.55c.78 0 1.54-.23 2.18-.66A6.175 6.175 0 0 1 18 13c0 1.79-.79 3.4-2.04 4.5z"
                />
              </svg>
              <p>Trending</p>
            </div>
            <div className="FilterBy-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"
                />
              </svg>
              <p>
                Filter By <span>↓</span>
              </p>
            </div>
            <div className="SortBy-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18l1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"
                />
              </svg>
              <p>
                Sort By <span>↓</span>
              </p>
            </div>
          </div>

          <div className="cards">
            {loading ||
              questions.map((question) => (
                <QuestionCard questionsData={question} />
              ))}
          </div>
        </div>
      </aside>

      <aside className="rightSide-Home">
        <div className="right-side">
          <div className="Follow-options">
            <div className="follow-heading">
              <h3>Who to follow </h3>
            </div>
            <div className="users">
              {users.map((user) => (
                <div
                  className="each-user"
                  key={user.id}
                  onClick={(e) => console.log(e.target, user.firstName)}
                >
                  <img
                    className="profile-pic"
                    src={user.image}
                    alt="profile-pic"
                  />
                  <div className="names">
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    <small>{user.account}</small>
                  </div>
                  <button className="follow-btn">Follow</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default HomePage;
