import { useState } from 'react'

export default function App() {

  const articles = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      content: "JavaScript is a versatile programming language used for web development.",
      date: "2025-03-26"
    },
    {
      id: 2,
      title: "Guide to Express.js",
      content: "Express.js is a framework for Node.js that simplifies the creation of APIs and web applications.",
      date: "2025-03-25"
    },
    {
      id: 3,
      title: "How to Use Postman",
      content: "Postman is a useful tool for testing APIs and sending HTTP requests.",
      date: "2025-03-24"
    },
    {
      id: 4,
      title: "DOM Manipulation with JavaScript",
      content: "The DOM allows dynamically modifying elements on a web page.",
      date: "2025-03-23"
    },
    {
      id: 5,
      title: "Introduction to Node.js",
      content: "Node.js allows executing JavaScript on the server side, improving application scalability.",
      date: "2025-03-22"
    }
  ];

  console.log(articles);

  return (
    <>

    </>
  )
}