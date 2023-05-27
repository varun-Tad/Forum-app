import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * Questions can be added here.
 * You can add default Questions of your wish with different attributes
 * */

export const questions = [
  {
    _id: uuid(),
    username: "Adarsh B",
    status: "Works at microsoft",
    userImage:
      "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202302/blob070223123742.png",
    userAccout: "@adashB",
    tags: ["#coding", "#development"],
    questionTitle: "What is the best site to learn how to code?",
    questionText:
      "Coding tells a machine which actions to perform and how to complete tasks. Programming languages provide the rules for building websites, apps, and other computer-based technologies.",
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        commentText: "Interesting",
      },
      {
        _id: uuid(),
        username: "sohamshah",
        commentText: "Wow!",
      },
    ],
    answers: [
      {
        _id: uuid(),
        username: "sohamshah",
        answerText:
          "If you're interested in learning how to code, you're in luck. There are numerous online resources available that can help you get started, no matter your skill level or experience. However, with so many options to choose from, it can be overwhelming to decide which site to use",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "shubhamsoni",
            commentText: "Thanks for the answer!",
          },
        ],
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    username: "Shubham S",
    status: "Works at tech | Tecn guy",
    userImage:
      "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s1100-c50.jpg",
    userAccout: "@shubhamS",
    tags: ["#coding", "#development"],
    questionTitle: "What advice can you give to new programmers?",
    questionText: "I am Detailed Description about the Question.",
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        commentText: "Interesting",
      },
      {
        _id: uuid(),
        username: "sohamshah",
        commentText: "Wow!",
      },
    ],
    answers: [
      {
        _id: uuid(),
        username: "sohamshah",
        answerText:
          "You can be a very talented engineer with a lot of potential and even some degree of skill, but that doesn’t mean your interviewer will be able to recognize that. But if you’re personable and charming, and competent enough to come across like you can learn, a lot of people will want to hire you whether they’re competent or not.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "shubhamsoni",
            commentText: "Thanks for the answer!",
          },
        ],
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    username: "Usain Bolt",
    status: "Works at tech | Runner",
    userImage:
      "https://cdn.britannica.com/10/224310-050-C338430A/Usain-Bolt-gold-medal-4-x-100-meter-relay-Rio-de-Janeiro-Olympics-2016.jpg",
    userAccout: "@UBolt",
    tags: ["#coding", "#development"],
    questionTitle: "Do you need to know math for programming?",
    questionText:
      "I am new to programming i just want to know how to get started and some guidance.",
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        commentText: "Interesting",
      },
      {
        _id: uuid(),
        username: "sohamshah",
        commentText: "Wow!",
      },
    ],
    answers: [
      {
        _id: uuid(),
        username: "sohamshah",
        answerText:
          "It Depends on what domain you are working.Let's say you are a Frontend Developer. In that case you just need to know the very basic maths like addition, multiplication type things which basically known to everyone one",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "shubhamsoni",
            commentText: "Thanks for the answer!",
          },
        ],
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    username: "Cristiano R",
    status: "Works at tech | Love football",
    userImage:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1673305564.jpg?lm=1",
    userAccout: "@cr7",
    tags: ["#freelancing", "#development"],
    questionTitle:
      "What are some of the best ways to get started with freelancing",
    questionText:
      "freelance jobs offer exceptional flexibility, independence, and income opportunities. You can earn hefty annual compensation, provided you have the right skills, qualifications, and experience.",
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        commentText: "Interesting",
      },
      {
        _id: uuid(),
        username: "sohamshah",
        commentText: "Wow!",
      },
    ],
    answers: [
      {
        _id: uuid(),
        username: "sohamshah",
        answerText:
          "Getting started with freelancing can be an exciting and rewarding journey.Create a portfolio that showcases your work and highlights your skills. If you don't have any previous clients, you can create sample projects or offer your services to friends or family to gather some work samples.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "shubhamsoni",
            commentText: "Thanks for the answer!",
          },
        ],
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
