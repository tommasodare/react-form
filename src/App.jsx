import { useState } from 'react'
import articles from './data/articols';

export default function App() {

  return (
    <>
      <div className="container text-center">
        <h1>Posts</h1>
        {articles.map((article, index) => (
          <div key={index}>{article.title}</div>
        ))}
      </div>


      <form className='m-4 text-center'>

        <div className="mb-3">
          <label htmlFor="" className="form-label">New Titol</label>
          <input
            type="text"
            className="form-control"
            placeholder="Insert new Title Here"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

      </form>


    </>
  )
}