import { useState } from 'react'
import articles from './data/articols';

export default function App() {

  return (
    <>
      <div className="container">
        {articles.map((article, index) => (
          <div key={index}>{article.title}</div>
        ))}
      </div>
    </>
  )
}