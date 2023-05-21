import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    account: "@adarshB",
    image:
      "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202302/blob070223123742.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamSoni123",
    account: "@shubhamS",
    image:
      "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s1100-c50.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Usain",
    lastName: "Bolt",
    username: "usainbolt",
    password: "usainbolt123",
    account: "@UBolt",
    image:
      "https://cdn.britannica.com/10/224310-050-C338430A/Usain-Bolt-gold-medal-4-x-100-meter-relay-Rio-de-Janeiro-Olympics-2016.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cristiano",
    lastName: "Ronaldo",
    username: "cr7ronaldo",
    password: "cristianoronaldo123",
    account: "@cr7",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1673305564.jpg?lm=1",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
